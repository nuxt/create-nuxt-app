const superb = require('superb')
const glob = require('glob')
const { join } = require('path')
const spawn = require('cross-spawn')
const validate = require("validate-npm-package-name")

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
        'micro'
      ],
      default: 'none'
    },
    {
      name: 'features',
      message: "Choose features to install",
      type: "checkbox",
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
          name: "Axios",
          value: "axios"
        }
      ],
      default: [],
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
        'iview'
      ],
      default: 'none'
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
      choices: ['npm', 'yarn'],
      type: 'list',
      default: 'npm'
    }
  ],
  templateData() {
    const edge = process.argv.includes('--edge');
    const pwa = this.answers.features.includes("pwa");
    const linter = this.answers.features.includes("linter");
    const prettier = this.answers.features.includes("prettier");
    const axios = this.answers.features.includes("axios");

    return {
      edge,
      pwa: pwa ? 'yes' : 'no',
      eslint: linter ? 'yes' : 'no',
      prettier: prettier ? 'yes' : 'no',
      axios: axios ? 'yes' : 'no'
    }
  },
  actions() {
    const validation = validate(this.answers.name)
    validation.warnings && validation.warnings.forEach(warn => {
      console.warn('Warning:', warn)
    })
    validation.errors && validation.errors.forEach(err => {
      console.error('Error:', err)
    })
    validation.errors && validation.errors.length && process.exit(1)

    const moveable = {
      gitignore: '.gitignore',
      '_package.json': 'package.json',
      '_.eslintrc.js': '.eslintrc.js'
    }

    const hasAdonis = this.answers.server === 'adonis'
    if (hasAdonis) {
      moveable['nuxt'] = 'resources'
      moveable[this.answers.ui] = 'resources'
      moveable[this.answers.test] = 'resources'
      moveable['nuxt.config.js'] = 'config/nuxt.js'
    }

    return [
      {
        type: 'add',
        files: hasAdonis ? 'nuxt/**' : '**',
        templateDir: hasAdonis ? 'template' : 'template/nuxt',
        filters: {
          [`${hasAdonis ? '' : 'nuxt'}static/icon.png`]: 'features.includes("pwa")'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/adonis',
        filters: {
          '**': 'server !== "adonis"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/express',
        filters: {
          '**': 'server !== "express"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/koa',
        filters: {
          '**': 'server !== "koa"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/hapi',
        filters: {
          '**': 'server !== "hapi"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/feathers',
        filters: {
          '**': 'server !== "feathers"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/vuetify',
        filters: {
          '**': 'ui !== "vuetify"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/element-ui',
        filters: {
          '**': 'ui !== "element-ui"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/tailwind',
        filters: {
          '**': 'ui !== "tailwind"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/buefy',
        filters: {
          '**': 'ui !== "buefy"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/iview',
        filters: {
          '**': 'ui !== "iview"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/jest',
        filters: {
          '**': 'test !== "jest"'
        }
      },
      {
        type: 'add',
        files: '**',
        templateDir: 'template/frameworks/ava',
        filters: {
          '**': 'test !== "ava"'
        }
      },
      {
        type: 'add',
        files: '*',
        filters: {
          '_.eslintrc.js': 'features.includes("linter")',
          '.prettierrc': 'features.includes("prettier")'
        }
      },
      {
        type: 'move',
        patterns: moveable
      }
    ]
  },
  async completed() {
    this.gitInit()

    await this.npmInstall({ npmClient: this.answers.pm })

    const isNewFolder = this.outDir !== process.cwd()
    const cd = () => {
      if (isNewFolder) {
        console.log(`\t${this.chalk.cyan('cd')} ${this.outFolder}`)
      }
    }

    if (this.answers.features.includes("linter")) {
      spawn.sync(this.answers.pm, ['run','lint', '--', '--fix'], {
        cwd: this.outDir,
        stdio: 'inherit'
      })
    }

    console.log()
    console.log(this.chalk.bold(`\tTo get started:\n`))
    cd()
    console.log(`\t${this.answers.pm} run dev\n`)
    console.log(this.chalk.bold(`  To build & start for production:\n`))
    cd()
    console.log(`\t${this.answers.pm} run build`)
    console.log(`\t${this.answers.pm} start`)

    if (this.answers.test !== 'none') {
      console.log(this.chalk.bold(`\n  To test:\n`))
      cd()
      console.log(`\t${this.answers.pm} run test`)
    }
    console.log()
  }
}
