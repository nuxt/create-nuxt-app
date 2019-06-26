const { join, relative } = require('path')
const superb = require('superb')
const glob = require('glob')
const spawn = require('cross-spawn')
const validate = require('validate-npm-package-name')

const rootDir = __dirname

module.exports = {
  prompts: [
    {
      name: 'name',
      message: 'Project name',
      default: '{outFolder}'
    },
    {
      name: 'description',
      message: 'Project description',
      default: `My ${superb()} Nuxt.js project`
    },
    {
      name: 'author',
      type: 'string',
      message: 'Author name',
      default: '{gitUser.name}',
      store: true
    },
    {
      name: 'pm',
      message: 'Choose the package manager',
      choices: [
        { name: 'Yarn', value: 'yarn' },
        { name: 'Npm', value: 'npm' }
      ],
      type: 'list',
      default: 'yarn'
    },
    {
      name: 'ui',
      message: 'Choose UI framework',
      type: 'list',
      pageSize: 10,
      choices: [
        { name: 'None', value: 'none' },
        { name: 'Ant Design Vue', value: 'ant-design-vue' },
        { name: 'Bootstrap Vue', value: 'bootstrap' },
        { name: 'Buefy', value: 'buefy' },
        { name: 'Bulma', value: 'bulma' },
        { name: 'Element', value: 'element-ui' },
        { name: 'iView', value: 'iview' },
        { name: 'Tachyons', value: 'tachyons' },
        { name: 'Tailwind CSS', value: 'tailwind' },
        { name: 'Vuetify.js', value: 'vuetify' }
      ],
      default: 'none'
    },
    {
      name: 'server',
      message: 'Choose custom server framework',
      type: 'list',
      pageSize: 10,
      choices: [
        { name: 'None (Recommended)', value: 'none' },
        { name: 'AdonisJs', value: 'adonis' },
        { name: 'Express', value: 'express' },
        { name: 'Fastify', value: 'fastify' },
        { name: 'Feathers', value: 'feathers' },
        { name: 'hapi', value: 'hapi' },
        { name: 'Koa', value: 'koa' },
        { name: 'Micro', value: 'micro' }
      ],
      default: 'none'
    },
    {
      name: 'features',
      message: 'Choose Nuxt.js modules',
      type: 'checkbox',
      pageSize: 10,
      choices: [
        { name: 'Axios', value: 'axios' },
        { name: 'Progressive Web App (PWA) Support', value: 'pwa' }
      ],
      default: []
    },
    {
      name: 'linter',
      message: 'Choose linting tools',
      type: 'checkbox',
      pageSize: 10,
      choices: [
        { name: 'ESLint', value: 'eslint' },
        { name: 'Prettier', value: 'prettier' },
        { name: 'Lint staged files', value: 'lintStaged' }
      ],
      default: []
    },
    {
      name: 'test',
      message: 'Choose test framework',
      type: 'list',
      choices: [
        { name: 'None', value: 'none' },
        { name: 'Jest', value: 'jest' },
        { name: 'AVA', value: 'ava' }
      ],
      default: 'none'
    },
    {
      name: 'mode',
      message: 'Choose rendering mode',
      type: 'list',
      choices: [
        { name: 'Universal (SSR)', value: 'universal' },
        { name: 'Single Page App', value: 'spa' }
      ],
      default: 'universal'
    }
  ],
  templateData() {
    const pwa = this.answers.features.includes('pwa')
    const eslint = this.answers.linter.includes('eslint')
    const prettier = this.answers.linter.includes('prettier')
    const lintStaged = eslint && this.answers.linter.includes('lintStaged')
    const axios = this.answers.features.includes('axios')
    const esm = this.answers.server === 'none'
    const edge = process.argv.includes('--edge') ? '-edge' : ''
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

    return {
      pwa,
      eslint,
      prettier,
      lintStaged,
      axios,
      esm,
      edge,
      pmRun
    }
  },
  actions() {
    const validation = validate(this.answers.name)
    validation.warnings && validation.warnings.forEach((warn) => {
      console.warn('Warning:', warn)
    })
    validation.errors && validation.errors.forEach((err) => {
      console.error('Error:', err)
    })
    validation.errors && validation.errors.length && process.exit(1)

    const actions = [{
      type: 'add',
      files: '**',
      templateDir: 'template/nuxt',
      filters: {
        'static/icon.png': 'features.includes("pwa")'
      }
    }]

    if (this.answers.ui !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `template/frameworks/${this.answers.ui}`
      })
    }

    if (this.answers.test !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `template/frameworks/${this.answers.test}`
      })
    }

    if (this.answers.server !== 'none') {
      if (this.answers.server === 'adonis') {
        const files = {}
        for (const action of actions) {
          const options = { cwd: join(rootDir, action.templateDir), dot: true }
          for (const file of glob.sync(`*`, options)) {
            files[file] = `resources/${file}`
          }
        }
        files['nuxt.config.js'] = 'config/nuxt.js'

        actions.push({
          type: 'move',
          patterns: files
        })
      }
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `template/frameworks/${this.answers.server}`
      })
    }

    actions.push({
      type: 'add',
      files: '*',
      filters: {
        '_.eslintrc.js': 'linter.includes("eslint")',
        '.prettierrc': 'linter.includes("prettier")'
      }
    })

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
        '_.eslintrc.js': '.eslintrc.js'
      }
    })

    return actions
  },
  async completed() {
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
  }
}
