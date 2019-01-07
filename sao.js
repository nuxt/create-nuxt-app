const superb = require('superb')
const glob = require('glob')
const { join } = require('path')
const spawn = require('cross-spawn')
const validate = require("validate-npm-package-name")

const rootDir = __dirname

const move = (from, to = '') => {
  const result = {}
  const options = { cwd: join(rootDir, 'template'), nodir: true, dot: true }
  for (const file of glob.sync(`${from}/**`, options)) {
    result[file] = (to ? to + '/' : '') + file.replace(`${from}/`, '')
  }
  return result
}

const moveFramework = (answer, to = '') => {
  return answer !== 'none' && move(`frameworks/${answer}`, to);
}

module.exports = {
  prompts: {
    name: {
      message: 'Project name',
      default: ':folderName:'
    },
    description: {
      message: 'Project description',
      default: `My ${superb()} Nuxt.js project`
    },
    server: {
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
    features: {
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
    ui: {
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
    test: {
      message: 'Use a custom test framework',
      type: 'list',
      choices: [
        'none',
        'jest',
        'ava'
      ],
      default: 'none'
    },
    mode: {
      message: 'Choose rendering mode',
      type: 'list',
      choices: [
        { name: 'Universal', value: 'universal' },
        { name: 'Single Page App', value: 'spa' }
      ],
      default: 'universal'
    },
    author: {
      type: 'string',
      message: 'Author name',
      default: ':gitUser:',
      store: true
    },
    pm: {
      message: 'Choose a package manager',
      choices: ['npm', 'yarn'],
      type: 'list',
      default: 'npm'
    }
  },
  data(answers) {
    const edge = process.argv.includes('--edge');
    const pwa = answers.features.includes("pwa");
    const linter = answers.features.includes("linter");
    const prettier = answers.features.includes("prettier");
    const axios = answers.features.includes("axios");

    return {
      edge,
      pwa: pwa ? 'yes' : 'no',
      eslint: linter ? 'yes' : 'no',
      prettier: prettier ? 'yes' : 'no',
      axios: axios ? 'yes' : 'no'
    }
  },
  filters: {
    'server/index-express.js': 'server === "express"',
    'server/index-koa.js': 'server === "koa"',
    'server/index-adonis.js': 'server === "adonis"',
    'server/index-hapi.js': 'server === "hapi"',
    'server/index-feathers.js': 'server === "feathers"',
    'server/index-micro.js': 'server === "micro"',
    'frameworks/adonis/**': 'server === "adonis"',
    'frameworks/feathers/**': 'server === "feathers"',
    'frameworks/vuetify/**': 'ui === "vuetify"',
    'frameworks/element-ui/**': 'ui === "element-ui"',
    'frameworks/ant-design-vue/**': 'ui === "ant-design-vue"',
    'frameworks/tailwind/**': 'ui === "tailwind"',
    'frameworks/buefy/**': 'ui === "buefy"',
    'frameworks/iview/**': 'ui === "iview"',
    'frameworks/jest/**': 'test === "jest"',
    'frameworks/ava/**': 'test === "ava"',
    '_.eslintrc.js': 'eslint === "yes"',
    '.prettierrc': 'prettier === "yes"',
    'nuxt/static/icon.png': 'pwa === "yes"'
  },
  move(answers) {
    const validation = validate(answers.name)
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
      '_.eslintrc.js': '.eslintrc.js',
      'server/index-*.js': 'server/index.js'
    }
    let nuxtDir
    if (answers.server === 'adonis') {
      nuxtDir = 'resources'
    }
    return Object.assign(
      moveable,
      move('nuxt', nuxtDir),
      moveFramework(answers.server),
      moveFramework(answers.ui, nuxtDir),
      moveFramework(answers.test, nuxtDir),
      answers.server === 'adonis'
        ? {
            'server/index-*.js': 'server.js',
            'nuxt/nuxt.config.js': 'config/nuxt.js'
          }
        : null
    )
  },
  post(
    { npmInstall, yarnInstall, gitInit, chalk, isNewFolder, folderName, folderPath },
    { meta }
  ) {
    gitInit()

    // using yarn or npm
    meta.answers.pm === 'yarn' ? yarnInstall() : npmInstall()

    const cd = () => {
      if (isNewFolder) {
        console.log(`\t${chalk.cyan('cd')} ${folderName}`)
      }
    }
    if (meta.answers.eslint === 'yes') {
      spawn.sync(meta.answers.pm, ['run','lint', '--', '--fix'], {
        cwd: folderPath,
        stdio: 'inherit'
      })
    }

    console.log()
    console.log(chalk.bold(`\tTo get started:\n`))
    cd()
    console.log(`\t ${meta.answers.pm} run dev\n`)
    console.log(chalk.bold(`  To build & start for production:\n`))
    cd()
    console.log(`\t ${meta.answers.pm} run build`)
    console.log(`\t ${meta.answers.pm} start`)

    if (meta.answers.test !== 'none') {
      console.log(chalk.bold(`\n  To test:\n`))
      cd()
      console.log(`\t ${meta.answers.pm} run test`)
    }
    console.log()
  }
}
