#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const sao = require('sao')
const cac = require('cac')
const chalk = require('chalk')
const envinfo = require('envinfo')
const { version } = require('../package.json')

const generator = path.resolve(__dirname, './')

const cli = cac('create-nuxt-app')

const showEnvInfo = async () => {
  console.log(chalk.bold('\nEnvironment Info:'))
  const result = await envinfo
    .run({
      System: ['OS', 'CPU'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
      npmGlobalPackages: ['nuxt', 'create-nuxt-app']
    })
  console.log(result)
  process.exit(1)
}

cli
  .command('[out-dir]', 'Generate in a custom directory or current directory')
  .option('-e, --edge', 'To install `nuxt-edge` instead of `nuxt`')
  .option('-i, --info', 'Print out debugging information relating to the local environment')
  .option('--answers <json>', 'Skip all the prompts and use the provided answers')
  .option('--verbose', 'Show debug logs')
  .action((outDir = '.', cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo()
    }
    const files = fs.existsSync(outDir) ? fs.readdirSync(outDir) : []
    console.log()
    console.log(chalk`{cyan create-nuxt-app v${version}}`)
    if (files.length) {
      return console.log(chalk.red(`Can't create ${outDir} because there's already a non-empty directory ${outDir} existing in path.`))
    }
    console.log(chalk`✨  Generating Nuxt.js project in {cyan ${outDir}}`)

    const { verbose, answers } = cliOptions
    const logLevel = verbose ? 4 : 2
    // See https://saojs.org/api.html#standalone-cli
    sao({ generator, outDir, logLevel, answers, cliOptions })
      .run()
      .catch((err) => {
        console.trace(err)
        process.exit(1)
      })
  })

cli.help()

cli.version(version)

cli.parse()
