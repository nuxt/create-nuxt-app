const micro = require('micro')
const consola = require('consola')
const serviceConfig = require('./micro.config.js')

const server = micro(serviceConfig)

const host = serviceConfig.host
const port = serviceConfig.port

// Listen the server
server.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})
