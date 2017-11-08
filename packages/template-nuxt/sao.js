const superb = require('superb')

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
      choices: ['none', 'express', 'koa', 'hapi', 'feathers', 'micro'],
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
    'server/feathers/**': 'server === "feathers"',
    'server/index-micro.js': 'server === "micro"',
    'server/micro/**': 'server === "micro"',
    '.eslintrc.js': 'eslint === "yes"'
  },
  move(answers) {
    const list = {
      gitignore: '.gitignore',
      'server/index-*.js': 'server/index.js'
    }
    const serverMapping = require('./config/server.json')[answers.server]
    for (const key in serverMapping) {
      if (Object.prototype.hasOwnProperty.call(serverMapping, key)) {
        list[key] = serverMapping[key]
      }
    }
    return list
  },
  post({ yarnInstall, gitInit, chalk, pm, isNewFolder, folderName }) {
    gitInit()

    yarnInstall()

    const cd = () => {
      if (isNewFolder) {
        console.log(`    ${chalk.cyan('cd')} ${folderName}`)
      }
    }

    console.log()
    console.log(chalk.bold(`  To get started:\n`))
    cd()
    console.log(`    ${chalk.cyan(pm)} run dev\n`)
    console.log(chalk.bold(`  To build for production:\n`))
    cd()
    console.log(`    ${chalk.cyan(pm)} run build`)
    console.log(`    ${chalk.cyan(pm)} start`)
    console.log()
  }
}
