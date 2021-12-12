import { resolve } from 'path'
import test, { before, after } from 'ava'
import { Nuxt, Builder } from 'nuxt'
import config from '../../nuxt.config'

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
before(async () => {
  nuxt = new Nuxt({
    ...config,
    dev: false,
    rootDir: resolve(__dirname, '../../')
  })
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, 'localhost')
}, 30000)

// Example of testing only generated html
test('Route / exits and render HTML', async (t) => {
  const { html } = await nuxt.renderRoute('/', {})
  t.true(html.includes('Documentation'))
})

// Close server and ask nuxt to stop listening to file changes
after('Closing server and nuxt.js', () => {
  nuxt.close()
})
