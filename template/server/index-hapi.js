const Hapi = require('hapi')
const HapiNuxt = require('hapi-nuxt')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const server = new Hapi.Server()

server.connection({ port, host })

server.register(HapiNuxt, (err) => {
  if (err) {
    throw err
  }
  server.start((err) => {
    if (err) {
      throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
  })
})
