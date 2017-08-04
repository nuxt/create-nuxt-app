#!/usr/bin/env node
const path = require('path')
const cac = require('cac')
const sao = require('sao')
const update = require('update-notifier')

const cli = cac()

cli
  .command('*', 'Generate a new project', (input, flags) => {
    const folderName = input[0] || '.'
    const targetPath = path.resolve(folderName)
    console.log(`> Generating project in ${targetPath}`)

    return sao({
      template: 'nuxt',
      targetPath,
      install: flags.update
    })
  })
  .option('update', {
    desc: 'Update template before generating',
    type: 'boolean'
  })

cli.parse()

try {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const templatePkg = require('template-nuxt/package')

  update({
    pkg: templatePkg
  }).notify()
} catch (err) {
  /* omit errors */
}
