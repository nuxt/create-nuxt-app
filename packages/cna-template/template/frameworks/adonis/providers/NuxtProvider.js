const { ServiceProvider } = require('@adonisjs/fold')
const { Nuxt, Builder } = require('nuxt<%= edge %>')

class NuxtProvider extends ServiceProvider {
  register () {
    this.app.singleton('Service/Nuxt', () => {
      const config = this.app.use('Config').get('nuxt')
      return new Nuxt(config)
    })
  }

  async boot () {
    const Helpers = this.app.use('Helpers')
    if (!Helpers.isAceCommand()) {
      const nuxt = this.app.use('Service/Nuxt')
      await nuxt.ready()
      if (nuxt.options.dev) {
        await new Builder(nuxt).build()
      }
    }
  }
}

module.exports = NuxtProvider
