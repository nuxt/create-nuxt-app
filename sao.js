const superb = require('superb')
const glob = require('glob')
const { join } = require('path')
const spawn = require('cross-spawn')

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
    modules: {
      message: 'Choose modules to install',
      type: 'checkbox',
      choices: [
        {
          name: 'TypeScript',
          value: "typescript"
        },
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
        // TODO
        // {
        //   name: 'Unit Testing',
        //   value: 'test:unit'
        // },
        // {
        //   name: 'E2E Testing',
        //   value: 'test:e2e'
        // },
      ],
      default: [],
      when: (answers) => answers.server !== 'adonis'
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
    mode: {
      message: 'Choose rendering mode',
      type: 'list',
      choices: [
        { name: 'Universal', value: 'universal' },
        { name: 'Single Page App', value: 'spa' }
      ],
      default: 'universal'
    },
    axios: {
      message: 'Use axios module',
      type: 'list',
      choices: ['no', 'yes'],
      default: 'no'
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
    const typescript = answers.modules.includes('typescript')
    const linter = answers.modules.includes('linter')
    return {
      typescript,
      pwa: answers.modules.includes('pwa'),
      eslint: !typescript && linter,
      tslint: typescript && linter,
      prettier: answers.modules.includes('prettier'),
      edge: process.argv.includes('--edge')
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
    '_.eslintrc.js': 'eslint',
    '_tslint.json': 'tslint',
    '.prettierrc': 'prettier',
    'modules/typescript.js': 'typescript',
    '_tsconfig.json': 'typescript',
    'vue-shims.d.ts': 'typescript',
    'nuxt/static/icon.png': 'pwa'
  },
  move(answers) {
    const moveable = {
      gitignore: '.gitignore',
      '_package.json': 'package.json',
      '_.eslintrc.js': '.eslintrc.js',
      '_tslint.json': 'tslint.json',
      '_tsconfig.json': 'tsconfig.json',
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
    console.log()
  }
}
