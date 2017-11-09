const pkg = require('./package')

module.exports = {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // ...
    }
  },

  /*
  ** Global CSS
  */
  css: [<% if (ui === 'element-ui') { %>
    'element-ui/lib/theme-default/index.css'<% } else if (ui === 'tailwind') { %>
    '~/assets/css/tailwind.css'<% } %>
  ],

  plugins: [<% if (ui === 'element-ui') { %>
    '@/plugins/element-ui'<% } else if (ui === 'vuetify') { %>
    '@/plugins/vuetify'<% } %>
  ],

  modules: [<% if (axios === 'yes') { %>
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'<% } %><% if (ui === 'bootstrap') { %>,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'<% } %>
  ]<% if (axios === 'yes') { %>,

  axios: {
    // proxyHeaders: false
  }<% } %>
}
