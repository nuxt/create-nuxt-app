<% if (esm) { -%>
<% if (ui === 'vuetify') { -%>
import colors from 'vuetify/es5/util/colors'
<% } -%>
<% } else { -%>
<% if (server === 'adonis') { -%>
const { resolve } = require('path')
<% } -%>
<% if (ui === 'vuetify') { -%>
const colors = require('vuetify/es5/util/colors').default
<% } -%>
<% } -%>

<% if (esm) { -%>
export default {
<% } else { -%>
module.exports = {
<% } -%>
  mode: '<%= mode %>',
<% if (server === 'adonis') { %>
  dev: process.env.NODE_ENV === 'development',
  srcDir: resolve(__dirname, '..', 'resources'),
<% } %>
  /*
  ** Headers of the page
  */
  head: {
    <% if (ui === 'vuetify') { %>
    titleTemplate: '%s - ' + process.env.npm_package_name,
    <% } %>
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
    '~/assets/css/tailwind.css'<% } else if (ui === 'iview') { %>
    'iview/dist/styles/iview.css'<% } else if (ui === 'ant-design-vue') { %>
    'ant-design-vue/dist/antd.css'<% } else if (ui === 'tachyons') { %>
    'tachyons/css/tachyons.css'<% } %>
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [<% if (ui === 'element-ui') { %>
    '@/plugins/element-ui'<% } else if (ui === 'iview') { %>
    '@/plugins/iview'<% } else if (ui === 'ant-design-vue') { %>
    '@/plugins/antd-ui'<% } %>
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [<% if (axios === 'yes') { %>
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',<% } %><% if (ui === 'bootstrap') { %>
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',<% } %><% if (ui === 'bulma') { %>
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',<% } %><% if (ui === 'buefy') { %>
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',<% } %><% if (pwa === 'yes') { %>
    '@nuxtjs/pwa',<% } %><% if (eslint === 'yes') { %>
    '@nuxtjs/eslint-module',<% } %><% if (ui === 'vuetify') { %>
    '@nuxtjs/vuetify',<% } %>
  ],
  <% if (axios === 'yes') { %>
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {

  },<% } %>

  <% if (ui === 'vuetify') { %>
    /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
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
    },<% } %><% if (ui === 'element-ui') { %>
    transpile: [/^element-ui/],
<% } %><% if (ui === 'tailwind') { %>
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    }, <% } %>
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
