const { join } = require('path')
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
      message: 'Choose a package manager',
      choices: ['yarn', 'npm'],
      type: 'list',
      default: 'yarn'
    },
    {
      name: 'ui',
      message: 'Use a custom UI framework',
      type: 'list',
      choices: [
        'none',
        'bootstrap',
        'vuetify',
        'bulma',
        'tailwind',
        'element-ui',
        'buefy',
        'ant-design-vue',
        'iview',
        'tachyons'
      ],
      default: 'none'
    },
    {
      name: 'server',
      message: 'Use a custom server framework',
      type: 'list',
      choices: [
        'none',
        'express',
        'koa',
        'adonis',
        'hapi',
        'feathers',
        'micro',
        'fastify'
      ],
      default: 'none'
    },
    {
      name: 'features',
      message: 'Choose features to install',
      type: 'checkbox',
      choices: [
        {
          name: 'Progressive Web App (PWA) Support',
          value: 'pwa'
        },
        {
          name: 'Linter / Formatter',
          value: 'linter'
        },
        {
          name: 'Prettier',
          value: 'prettier'
        },
        {
          name: 'Axios',
          value: 'axios'
        }
      ],
      default: []
    },
    {
      name: 'test',
      message: 'Use a custom test framework',
      type: 'list',
      choices: [
        'none',
        'jest',
        'ava'
      ],
      default: 'none'
    },
    {
      name: 'mode',
      message: 'Choose rendering mode',
      type: 'list',
      choices: [
        { name: 'Universal', value: 'universal' },
        { name: 'Single Page App', value: 'spa' }
      ],
      default: 'universal'
    }
  ],
  templateData() {
    const edge = process.argv.includes('--edge')
    const pwa = this.answers.features.includes('pwa')
    const eslint = this.answers.features.includes('linter')
    const prettier = this.answers.features.includes('prettier')
    const axios = this.answers.features.includes('axios')
    const esm = this.answers.server === 'none'

    return {
      pwa,
      eslint,
      prettier,
      axios,
      esm,
      edge: edge && '-edge'
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
        '_.eslintrc.js': 'features.includes("linter")',
        '.prettierrc': 'features.includes("prettier")'
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

    if (this.answers.features.includes('linter')) {
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
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${this.outFolder}}\n` : ''
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
