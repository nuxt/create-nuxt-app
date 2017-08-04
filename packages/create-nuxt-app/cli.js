#!/usr/bin/env node
const path = require('path')
const cac = require('cac')
const sao = require('sao')
const update = require('update-notifier')
const templatePkg = require('template-nuxt/package')

const cli = cac()

cli.command('*', 'Generate a new project', input => {
  const folderName = input[0] || '.'
  const targetPath = path.resolve(folderName)
  console.log(`> Generating project in ${targetPath}`)

  const templatePath = path.dirname(require.resolve('template-nuxt/package'))

  return sao({
    template: templatePath,
    targetPath
  })
})

cli.parse()

const notifier = update({
  pkg: templatePkg
})

if (notifier.update) {
  console.log(`
  Update for the template we use is avalable, run npm i -g create-nuxt-app to update it!
  `)
}
