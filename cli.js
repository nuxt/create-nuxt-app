#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))
const generator = path.resolve(__dirname, './')
// In a custom directory or current directory
const outDir = path.resolve(process.argv[2] || '.')

console.log(`> Generating Nuxt.js project in ${outDir}`)

// See https://sao.js.org/#/advanced/standalone-cli
sao({generator, outDir, logLevel: 5 })
  .run()
  .catch(err => {
    console.trace(err)
    process.exit(1)
  })
