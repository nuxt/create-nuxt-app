<% if (server === 'adonis') { %>const pkg = require('../package')
const resolve = require('path').resolve
<% } else { %>const pkg = require('./package')
<% } %>
<% if (ui === 'vuetify') { %>
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
<% } %>
module.exports = {
  mode: '<%= mode %>',
<% if (server === 'adonis') { %>
  srcDir: resolve(__dirname, '..', 'resources'),
<% } %>
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }<% if (ui === 'vuetify') { %>,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }<% } %>
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [<% if (ui === 'element-ui') { %>
    'element-ui/lib/theme-chalk/index.css'<% } else if (ui === 'tailwind') { %>
    '~/assets/css/tailwind.css'<% } else if (ui === 'vuetify') { %>
    '~/assets/style/app.styl'<% } else if (ui === 'iview') { %>
    'iview/dist/styles/iview.css'<% } else if (ui === 'ant-design-vue') { %>
    'ant-design-vue/dist/antd.css'<% } %>
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [<% if (ui === 'element-ui') { %>
    '@/plugins/element-ui'<% } else if (ui === 'vuetify') { %>
    '@/plugins/vuetify'<% } else if (ui === 'iview') { %>
    '@/plugins/iview'<% } else if (ui === 'ant-design-vue') { %>
    '@/plugins/antd-ui'<% } %>
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [<% if (axios === 'yes') { %>
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'<% } %><% if (ui === 'bootstrap') { %>,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'<% } %><% if (ui === 'bulma') { %>,
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'<% } %><% if (ui === 'buefy') { %>,
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'<% } %><% if (pwa === 'yes') { %>,
    '@nuxtjs/pwa'<% } %>
  ],<% if (axios === 'yes') { %>
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },<% } %>

  /*
  ** Build configuration
  */
  build: {<% if (ui === 'bulma') { %>
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },<% } %><% if (ui === 'vuetify') { %>
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    <% } %>
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      <% if (eslint === 'yes') { %>// Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }<% } %>
    }
  }
}
