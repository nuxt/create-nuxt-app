const consola = require('consola')
const Hapi = require('@hapi/hapi')
const HapiNuxt = require('@nuxtjs/hapi')

async function start () {
  const server = new Hapi.Server({
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3000
  })

  await server.register({
    plugin: HapiNuxt,
    options: {}
  })

  await server.start()

  consola.ready({
    message: `Server running at: ${server.info.uri}`,
    badge: true
  })
}

process.on('unhandledRejection', error => consola.error(error))

start()
