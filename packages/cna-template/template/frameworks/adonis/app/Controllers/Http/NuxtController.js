'use strict'

class NuxtController {
  constructor () {
    this.nuxt = use('Service/Nuxt')
  }

  async render ({ request: { request: req }, response: { response: res } }) {
    await new Promise((resolve, reject) => {
      this.nuxt.render(req, res, (promise) => {
        promise.then(resolve).catch(reject)
      })
    })
  }
}

module.exports = new NuxtController()
