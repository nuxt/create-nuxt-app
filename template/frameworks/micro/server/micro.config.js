const dispatch = require('micro-route/dispatch')
const { Nuxt, Builder } = require('nuxt')

// Require nuxt config
const config = require('../nuxt.config.js')
// Create a new nuxt instance
const nuxt = new Nuxt(config)
// Enable live build & reloading on dev
if (nuxt.options.dev) {
  new Builder(nuxt).build()
}

module.exports = async (req, res) => {
  await dispatch()
    .dispatch('*', ['GET'], (req, res) => nuxt.render(req, res))(req, res)
}
