const micro = require('micro')
const consola = require('consola')
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

const server = micro(async (req, res) => {
  await dispatch()
    .dispatch('*', ['GET'], (req, res) => nuxt.render(req, res))(req, res)
})

const {
  host = process.env.HOST || '127.0.0.1',
  port = process.env.PORT || 3000
} = nuxt.options.server

// Listen the server
server.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})
