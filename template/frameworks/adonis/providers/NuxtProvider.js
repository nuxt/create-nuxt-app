const { ServiceProvider } = require('@adonisjs/fold')
const { Nuxt, Builder } = require('nuxt<% if (edge) { %>-edge<% } %>')

class NuxtProvider extends ServiceProvider {
  register() {
    this.app.singleton('Service/Nuxt', () => {
      const config = this.app.use('Config').get('nuxt')
      return new Nuxt(config)
    })
  }

  async boot() {
    const nuxt = this.app.use('Service/Nuxt')
    if (nuxt.options.dev) {
      await new Builder(nuxt).build()
    } else {
      await nuxt.ready()
    }
  }
}

module.exports = NuxtProvider
