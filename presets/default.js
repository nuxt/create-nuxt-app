const superb = require('superb')

module.exports = context => ({
  name: context.outFolder.toLowerCase(),
  description: `My ${superb()} Nuxt.js project`,
  author: context.gitUser.name,
  pm: 'yarn',
  ui: 'none',
  server: 'none',
  features: [ 'axios' ],
  linter: [ 'eslint' ],
  test: 'jest'
})
