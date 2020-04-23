const { dirname, join, relative } = require('path')
const glob = require('glob')
const spawn = require('cross-spawn')
const validate = require('validate-npm-package-name')
const pkg = require('./package')

const cnaTemplateDir = join(dirname(require.resolve('cna-template/package.json')))
const templateDir = join(cnaTemplateDir, 'template')
const frameworksDir = join(templateDir, 'frameworks')

module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const typescript = this.answers.language.includes('ts')
    const tsRuntime = this.answers.runtime && this.answers.runtime.includes('ts-runtime')
    const pwa = this.answers.features.includes('pwa')
    const eslint = this.answers.linter.includes('eslint')
    const prettier = this.answers.linter.includes('prettier')
    const lintStaged = eslint && this.answers.linter.includes('lintStaged')
    const stylelint = this.answers.linter.includes('stylelint')
    const axios = this.answers.features.includes('axios')
    const dotenv = this.answers.features.includes('dotenv')
    const esm = this.answers.server === 'none'
    const pm = this.answers.pm === 'yarn' ? 'yarn' : 'npm'
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

    const { cliOptions = {} } = this.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''

    const ifTrue = (condition, content, elseContent) => condition ? content : elseContent || ''
    const generateComponent = (imports, componentOptions) => {
      return `
<script ${ifTrue(typescript, 'lang="ts"')}>
${ifTrue(typescript, 'import Vue from \'vue\'')}
${ifTrue(!!imports, imports, '\r\n')}
export default ${ifTrue(typescript, 'Vue.extend(' + componentOptions + ')', componentOptions)}
</script>`
    }

    return {
      generateComponent,
      typescript,
      tsRuntime,
      pwa,
      eslint,
      prettier,
      lintStaged,
      stylelint,
      axios,
      esm,
      edge,
      pm,
      pmRun,
      dotenv
    }
  },
  actions () {
    const validation = validate(this.answers.name)
    validation.warnings &&
      validation.warnings.forEach((warn) => {
        console.warn('Warning:', warn)
      })
    validation.errors &&
      validation.errors.forEach((err) => {
        console.error('Error:', err)
      })
    validation.errors && validation.errors.length && process.exit(1)

    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir: join(templateDir, 'nuxt'),
        filters: {
          'static/icon.png': 'features.includes("pwa")',
          'nuxt.config.ts': 'runtime && runtime.includes("ts-runtime")',
          'nuxt.config.js': '!runtime || !runtime.includes("ts-runtime")'
        }
      }
    ]

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

    if (this.answers.server !== 'none') {
      if (this.answers.server === 'adonis') {
        const files = {}
        for (const action of actions) {
          const options = { cwd: action.templateDir, dot: true }
          for (const file of glob.sync('*', options)) {
            files[file] = `resources/${file}`
          }
        }
        delete files['package.js']
        delete files['package.json']
        files['nuxt.config.js'] = 'config/nuxt.js'

        actions.push({
          type: 'move',
          patterns: files
        })
      }

      actions.push({
        type: 'add',
        files: '**',
        templateDir: join(frameworksDir, this.answers.server)
      })
    }

    actions.push({
      type: 'add',
      files: '*',
      filters: {
        '_.eslintrc.js': 'linter.includes("eslint")',
        '_.prettierrc': 'linter.includes("prettier")',
        '_jsconfig.json': 'devTools.includes("jsconfig.json")',
        'tsconfig.json': 'language.includes("ts")',
        'vue-shims.d.ts': 'language.includes("ts")',
        'semantic.yml': 'devTools.includes("semantic-pull-requests")',
        '.env': 'features.includes("dotenv")',
        '_stylelint.config.js': 'linter.includes("stylelint")'
      },
      templateDir
    })

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
        '_.prettierrc': '.prettierrc',
        '_.eslintrc.js': '.eslintrc.js',
        '_jsconfig.json': 'jsconfig.json',
        '_stylelint.config.js': 'stylelint.config.js',
        'semantic.yml': '.github/semantic.yml'
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
    this.gitInit()

    await this.npmInstall({ npmClient: this.answers.pm })

    if (this.answers.linter.includes('eslint')) {
      const options = ['run', 'lint', '--', '--fix']
      if (this.answers.pm === 'yarn') {
        options.splice(2, 1)
      }
      spawn.sync(this.answers.pm, options, {
        cwd: this.outDir,
        stdio: 'inherit'
      })
    }

    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

    console.log(
      chalk`\n🎉  {bold Successfully created project} {cyan ${this.answers.name}}\n`
    )

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
      console.log(
        chalk`\n  {bold For TypeScript users.} \n\n  See : https://typescript.nuxtjs.org/cookbook/components/`
      )
    }
  }
}
