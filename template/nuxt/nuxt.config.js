<%_ if (esm) { _%>
  <%_ if (ui === 'vuetify') { _%>
import colors from 'vuetify/es5/util/colors'
  <%_ } _%>
<%_ } else { _%>
  <%_ if (server === 'adonis') { _%>
const { resolve } = require('path')
  <%_ } _%>
  <%_ if (ui === 'vuetify') { _%>
const colors = require('vuetify/es5/util/colors').default
  <%_ } _%>
<%_ } _%>

<%_ if (esm) { _%>
export default {
<%_ } else { _%>
module.exports = {
<%_ } _%>
  mode: '<%= mode %>',
  <%_ if (server === 'adonis') { _%>
  dev: process.env.NODE_ENV === 'development',
  srcDir: resolve(__dirname, '..', 'resources'),
  <%_ } _%>
  /*
  ** Headers of the page
  */
  head: {
    <%_ if (ui === 'vuetify') { _%>
    titleTemplate: '%s - ' + process.env.npm_package_name,
    <%_ } _%>
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      <%_ if (ui === 'vuetify') { _%>,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
      <%_ } _%>
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    <%_ if (ui === 'element-ui') { _%>
    'element-ui/lib/theme-chalk/index.css'
    <%_ } else if (ui === 'iview') { _%>
    'iview/dist/styles/iview.css'
    <%_ } else if (ui === 'ant-design-vue') { _%>
    'ant-design-vue/dist/antd.css'
    <%_ } else if (ui === 'tachyons') { _%>
    'tachyons/css/tachyons.css'
    <%_ } _%>
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    <%_ if (ui === 'element-ui') { _%>
    '@/plugins/element-ui'
    <%_ } else if (ui === 'iview') { _%>
    '@/plugins/iview'
    <%_ } else if (ui === 'ant-design-vue') { _%>
    '@/plugins/antd-ui'
    <%_ } _%>
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    <%_ if (eslint) { _%>
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    <%_ } _%>
    <%_ if (ui === 'tailwind') { _%>
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    <%_ } _%>
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    <%_ if (ui === 'bootstrap') { _%>
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    <%_ } else if (ui === 'bulma') { _%>
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    <%_ } else if (ui === 'buefy') { _%>
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    <%_ } else if (ui === 'vuetify') { _%>
    '@nuxtjs/vuetify',
    <%_ } _%>
    <%_ if (axios) { _%>
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    <%_ } _%>
    <%_ if (pwa) { _%>
    '@nuxtjs/pwa',
    <%_ } _%>
  ],
  <%_ if (axios) { _%>
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  <%_ } _%>
  <%_ if (ui === 'vuetify') { _%>
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
  },
  <%_ } _%>
  /*
  ** Build configuration
  */
  build: {
    <%_ if (ui === 'bulma') { _%>
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    <%_ } else if (ui === 'element-ui') { _%>
    transpile: [/^element-ui/],
    <%_ } _%>
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
