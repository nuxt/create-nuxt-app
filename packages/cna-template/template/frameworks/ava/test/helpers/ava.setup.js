if (process.env.TEST === 'unit') {
  require('jsdom-global')()
  // https://github.com/nuxt/create-nuxt-app/issues/180#issuecomment-463069941
  window.Date = global.Date = Date
}

const Vue = require('vue')
Vue.config.productionTip = false

const hooks = require('require-extension-hooks')
hooks('vue').plugin('vue').push()
hooks(['vue', 'js'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel')
  .push()
