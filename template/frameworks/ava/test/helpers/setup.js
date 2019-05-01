require('browser-env')()
const hooks = require('require-extension-hooks')
const Vue = require('vue')

Vue.config.productionTip = false

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue')
  .plugin('vue')
  .push();
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel')
  .push();
