/** 
 * Firebase cloud function to re-render nuxt app
 * each time on http request.
 * 
 * Credit: https://github.com/davidroyer/nuxt-ssr-firebase
*/
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = {
  dev: false,
  build: {
    publicPath: '/'
  }
}

const nuxt = new Nuxt(config)

function handleRequest (req, res) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise
        .then(resolve)
        .catch(reject)
    })
  })
}

app.use(handleRequest)

exports.nuxtapp = functions.https.onRequest(app)
