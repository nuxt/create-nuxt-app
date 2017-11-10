const superb = require('superb')
const glob = require('glob')

const rootDir = __dirname

const globMoveable = answer => {
  const result = {}
  const options = { cwd: rootDir + '/template', nodir: true }
  const prefix = `frameworks/${answer}`
  if (answer !== 'none') {
    for (const file of glob.sync(`${prefix}/**`, options)) {
      result[file] = file.replace(`${prefix}/`, '')
    }
  }
  return result
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
        // 'adonis',
        'hapi',
        'feathers',
        'micro'
      ],
      default: 'none'
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
        'element-ui'
      ],
      default: 'none'
    },
    axios: {
      message: 'Use axios module',
      type: 'list',
      choices: ['no', 'yes'],
      default: 'no'
    },
    eslint: {
      message: 'Use eslint',
      type: 'list',
      choices: ['no', 'yes'],
      default: 'no'
    },
    author: {
      type: 'string',
      message: 'Author name',
      default: ':gitUser:',
      store: true
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
    'frameworks/micro/**': 'server === "micro"',
    'frameworks/vuetify/**': 'ui === "vuetify"',
    'frameworks/element-ui/**': 'ui === "element-ui"',
    'frameworks/tailwind/**': 'ui === "tailwind"',
    '.eslintrc.js': 'eslint === "yes"'
  },
  move(answers) {
    const moveable = {
      'gitignore': '.gitignore',
      '_package.json': 'package.json',
      'server/index-*.js': 'server/index.js'
    }
    return Object.assign(
      moveable,
      globMoveable(answers.server),
      globMoveable(answers.ui)
    )
  },
  post({ npmInstall, gitInit, chalk, isNewFolder, folderName }) {
    gitInit()

    npmInstall()

    const cd = () => {
      if (isNewFolder) {
        console.log(`    ${chalk.cyan('cd')} ${folderName}`)
      }
    }

    console.log()
    console.log(chalk.bold(`  To get started:\n`))
    cd()
    console.log(`    npm run dev\n`)
    console.log(chalk.bold(`  To build & start for production:\n`))
    cd()
    console.log(`    npm run build`)
    console.log(`    npm start`)
    console.log()
  }
}
