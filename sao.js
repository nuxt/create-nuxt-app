const path = require('path')
const yarnInstall = require('yarn-install')
const superb = require('superb')
const glob = require('glob')
const join = require('path').join

const rootDir = __dirname

const moveFramework = (answer, to = '') => {
  if (answer === 'none') return
  return move(`frameworks/${answer}`, to)
}

const move = (from, to = '') => {
  const result = {}
  const options = { cwd: join(rootDir, 'template'), nodir: true, dot: true }
  for (const file of glob.sync(`${from}/**`, options)) {
    result[file] = (to ? to + '/' : '') + file.replace(`${from}/`, '')
  }
  return result
}

const installDependency = (pm, folderPath, folderName = '') => {
  switch (pm) {
    case 'yarn':
      yarnInstall()
      break;
    case 'npm':
      yarnInstall({
        cwd: path.resolve(folderPath, folderName),
        respectNpm5: typeof forceNpm === 'boolean' ? forceNpm : true
      })
  }
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
        'firebase',
        'express',
        'koa',
        'adonis',
        'hapi',
        'feathers',
        'micro'
      ],
      default: 'none'
    },
    firebase: {
      message: 'Enter firebase project id',
      type: 'string',
      default: 'your-id',
      when(answers) {
        return answers.server === 'firebase'
      }
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
        'buefy'
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
    },
    pm: {
      message: 'Choose a package manager',
      choices: ['npm', 'yarn'],
      type: 'list',
      default: 'npm'
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
    'frameworks/firebase/**': 'server === "firebase"',
    'frameworks/vuetify/**': 'ui === "vuetify"',
    'frameworks/element-ui/**': 'ui === "element-ui"',
    'frameworks/tailwind/**': 'ui === "tailwind"',
    'frameworks/buefy/**': 'ui === "buefy"',
    '.eslintrc.js': 'eslint === "yes"'
  },
  move(answers) {
    let moveable = {
      gitignore: '.gitignore',
      'pkg/_package-index.json': 'package.json',
      'server/index-*.js': 'server/index.js'
    }
    if (answers.server === 'firebase') {
      moveable = {
        gitignore: '.gitignore',
        'pkg/_package-index.json': 'src/package.json',
        'pkg/_package-functions.json': 'functions/package.json',
        'pkg/_package-firebase-index.json': 'package.json'
      }
    }

    let nuxtDir
    if (answers.server === 'adonis') {
      nuxtDir = 'resources'
    }
    if (answers.server === 'firebase') {
      nuxtDir = 'src'
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
        : null,
      answers.server === 'firebase'
        ? {
            '.firebaserc' : '.firebaserc',
            'firebase.json' : 'firebase.json'
          }
        : null
    )
  },
  post(
    { gitInit, chalk, isNewFolder, folderName, folderPath },
    { meta }
  ) {
    gitInit()

    console.log()
    console.log(chalk.bold(`Installing module for nuxt project...`))
    installDependency(meta.answers.pm, folderPath, 'src')

    console.log()
    console.log(chalk.bold(`Installing module...`))
    installDependency(meta.answers.pm, folderPath)

    if (meta.answers.server === 'firebase') {
      console.log()
      console.log(chalk.bold(`Installing module for Nuxt...`))
      installDependency(meta.answers.pm, folderPath, 'src')

      console.log()
      console.log(chalk.bold(`Installing module for Firebase Cloud Function...`))
      installDependency(meta.answers.pm, folderPath, 'functions')
    }

    const cd = () => {
      if (isNewFolder) {
        if (meta.answers.server === 'firebase') {
          console.log(`    ${chalk.cyan('cd')} ${folderName}/src`)
        } else {
          console.log(`    ${chalk.cyan('cd')} ${folderName}`)
        }
      }
    }

    console.log()
    console.log(chalk.bold(`  To get started:\n`))
    cd()
    switch (meta.answers.pm) {
      case 'npm':
    console.log(`    npm run dev\n`)
        break;
      case 'yarn':
        console.log(`    yarn dev\n`)
        break;
    }
    console.log(chalk.bold(`  To build & start for production:\n`))
    cd()
    switch (meta.answers.pm) {
      case 'npm':
        if (meta.answers.server === 'firebase') {
          console.log(`    npm run build:firebase`)
          console.log(`    npm run start:firebase`)
          console.log(`    npm run build`)
          console.log(`    npm run copy:dist`)
          console.log(`    npm run serve:firebase`)
        } else {
          console.log(`    npm run build`)
          console.log(`    npm start`)
        }
        break;
      case 'yarn':
        if (meta.answers.server === 'firebase') {
          console.log(`    yarn build:firebase`)
          console.log(`    yarn start:firebase`)
          console.log(`    yarn build`)
          console.log(`    yarn copy:dist`)
          console.log(`    yarn serve:firebase`)
        } else {
          console.log(`    yarn build`)
          console.log(`    yarn start`)
        }
        break;
    }
    console.log()
  }
}