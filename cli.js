#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const chalk = require('chalk')
const { version } = require('./package.json')

const generator = path.resolve(__dirname, './')
// In a custom directory or current directory
const outDir = path.resolve(process.argv[2] || '.')

console.log(chalk`{cyan create-nuxt-app v${version}}`)
console.log(chalk`✨  Generating Nuxt.js project in {cyan ${outDir}}`)

// See https://sao.js.org/#/advanced/standalone-cli
sao({ generator, outDir, logLevel: 2 })
  .run()
  .catch((err) => {
    console.trace(err)
    process.exit(1)
  })
