const { dirname, join, relative } = require('path')
const fs = require('fs')
const spawn = require('cross-spawn')
const validate = require('validate-npm-package-name')
const pkg = require('./package')

const cnaTemplateDir = join(dirname(require.resolve('cna-template/package.json')))
const templateDir = join(cnaTemplateDir, 'template')
const frameworksDir = join(templateDir, 'frameworks')
const addExecutable = filename => new Promise(
  resolve => fs.chmod(filename, 0o755, resolve)
)

module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const typescript = this.answers.language.includes('ts')
    const pwa = this.answers.features.includes('pwa')
    const eslint = this.answers.linter.includes('eslint')
    const prettier = this.answers.linter.includes('prettier')
    const lintStaged = eslint && this.answers.linter.includes('lintStaged')
    const stylelint = this.answers.linter.includes('stylelint')
    const commitlint = this.answers.linter.includes('commitlint')
    const axios = this.answers.features.includes('axios')
    const content = this.answers.features.includes('content')
    const pm = this.answers.pm === 'yarn' ? 'yarn' : 'npm'
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'
    const { cliOptions = {} } = this.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''

    return {
      typescript,
      pwa,
      eslint,
      prettier,
      lintStaged,
      stylelint,
      commitlint,
      axios,
      edge,
      pm,
      pmRun,
      content
    }
  },
  actions () {
    const validation = validate(this.answers.name)
    validation.warnings && validation.warnings.forEach((warn) => {
      console.warn('Warning:', warn)
    })
    validation.errors && validation.errors.forEach((err) => {
      console.error('Error:', err)
    })
    validation.errors && validation.errors.length && process.exit(1)

    const { linter } = this.answers
    const eslint = linter.includes('eslint')
    const lintStaged = eslint && linter.includes('lintStaged')
    const commitlint = linter.includes('commitlint')
    const husky = lintStaged || commitlint

    const actions = [{
      type: 'add',
      files: '**',
      templateDir: join(templateDir, 'nuxt'),
      filters: {
        'static/icon.png': 'features.includes("pwa")',
        'content/hello.md': 'features.includes("content")',
        'pages/content.vue': 'features.includes("content")',
        '.husky/.gitignore': husky,
        '.husky/commit-msg': commitlint,
        '.husky/pre-commit': lintStaged,
        '.husky/common.sh': husky && this.answers.pm === 'yarn'
      }
    }]

    if (this.answers.ui !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: join(frameworksDir, this.answers.ui)
      })
    }

    if (this.answers.test !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: join(frameworksDir, this.answers.test)
      })
    }

    if (this.answers.ci && this.answers.ci !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: join(frameworksDir, this.answers.ci)
      })
    }

    actions.push({
      type: 'add',
      files: '*',
      filters: {
        '_.eslintrc.js': 'linter.includes("eslint")',
        '_.prettierignore': 'linter.includes("prettier")',
        '_.prettierrc': 'linter.includes("prettier")',
        '_jsconfig.json': 'devTools.includes("jsconfig.json")',
        'tsconfig.json': 'language.includes("ts")',
        'semantic.yml': 'devTools.includes("semantic-pull-requests")',
        '_stylelint.config.js': 'linter.includes("stylelint")',
        '_commitlint.config.js': 'linter.includes("commitlint")',
        'dependabot.yml': 'devTools.includes("dependabot")'
      },
      templateDir
    })

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
        '_.prettierignore': '.prettierignore',
        '_.prettierrc': '.prettierrc',
        '_.eslintrc.js': '.eslintrc.js',
        '_jsconfig.json': 'jsconfig.json',
        '_stylelint.config.js': 'stylelint.config.js',
        '_commitlint.config.js': 'commitlint.config.js',
        'semantic.yml': '.github/semantic.yml',
        'dependabot.yml': '.github/dependabot.yml'
      }
    })

    const generator = this
    actions.push({
      type: 'modify',
      files: 'package.json',
      handler (data) {
        return { ...data, ...pkg.load(generator) }
      }
    })

    // For compiling package.json
    actions.push({
      type: 'add',
      files: 'package.json',
      templateDir: this.outDir
    })

    actions.push({
      type: 'remove',
      files: 'package.js'
    })

    return actions
  },
  async completed () {
    if (this.answers.vcs === 'git') {
      this.gitInit()
    }

    const huskyDir = join(this.outDir, '.husky')
    if (this.answers.linter.includes('lintStaged')) {
      await addExecutable(join(huskyDir, 'pre-commit'))
    }
    if (this.answers.linter.includes('commitlint')) {
      await addExecutable(join(huskyDir, 'commit-msg'))
    }

    await this.npmInstall({ npmClient: this.answers.pm })

    if (['eslint', 'stylelint', 'prettier'].some(linter => this.answers.linter.includes(linter))) {
      spawn.sync(this.answers.pm, ['run', 'lintfix'], {
        cwd: this.outDir,
        stdio: 'inherit'
      })
    }

    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

    console.log(chalk`\n🎉  {bold Successfully created project} {cyan ${this.answers.name}}\n`)

    console.log(chalk`  {bold To get started:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} dev}\n`)

    console.log(chalk`  {bold To build & start for production:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} build}`)
    console.log(chalk`\t{cyan ${pmRun} start}\n`)

    if (this.answers.test !== 'none') {
      console.log(chalk`  {bold To test:}\n`)
      console.log(chalk`${cdMsg}\t{cyan ${pmRun} test}\n`)
    }

    if (this.answers.language.includes('ts')) {
      console.log(chalk`\n  {bold For TypeScript users.} \n\n  See : https://typescript.nuxtjs.org/cookbook/components/`)
    }
  }
}
