<%_ if (ui === 'vuetify') { _%>import colors from 'vuetify/es5/util/colors'

<%_ } _%>export default {
  <%_ if (mode === 'spa') { _%>
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  <%_ } _%><%_ if (target === 'static') { _%>
  // Target: https://go.nuxtjs.dev/config-target
  target: '<%= target %>',

  <%_ } _%>
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    <%_ if (ui === 'vuetify') { _%>
    titleTemplate: '%s - <%= name %>',
    <%_ } _%>
    title: '<%= name %>',
    <%_ if (!pwa) { _%>
    htmlAttrs: {
      lang: 'en'
    },
    <%_ } _%>
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    <%_ if (ui === 'element-ui') { _%>
    'element-ui/lib/theme-chalk/index.css'
    <%_ } else if (ui === 'view-ui') { _%>
    'view-design/dist/styles/iview.css'
    <%_ } else if (ui === 'ant-design-vue') { _%>
    'ant-design-vue/dist/antd.css'
    <%_ } else if (ui === 'balm-ui') { _%>
    'balm-ui/dist/balm-ui.css'
    <%_ } else if (ui === 'tachyons') { _%>
    'tachyons/css/tachyons.css'
    <%_ } else if (ui === 'vant') { _%>
    'vant/lib/index.css'
    <%_ } else if (ui === 'primevue') { _%>
      'primeflex/primeflex.css'
    <%_ } _%>
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    <%_ if (ui === 'element-ui') { _%>
    '@/plugins/element-ui'
    <%_ } else if (ui === 'view-ui') { _%>
    '@/plugins/view-ui'
    <%_ } else if (ui === 'ant-design-vue') { _%>
    '@/plugins/antd-ui'
    <%_ } else if (ui === 'balm-ui') { _%>
    '@/plugins/balm-ui'
    <%_ } else if (ui === 'vant') { _%>
    '@/plugins/vant'
    <%_ } _%>
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    <%_ if (typescript) { _%>
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    <%_ } _%>
    <%_ if (eslint && !typescript) { _%>
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    <%_ } _%>
    <%_ if (stylelint) { _%>
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    <%_ } _%>
    <%_ if (ui === 'windicss') { _%>
    'nuxt-windicss',
    <%_ } _%>
    <%_ if (ui === 'tailwind') { _%>
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    <%_ } else if (ui === 'vuetify') { _%>
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    <%_ } _%>
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    <%_ if (ui === 'bootstrap') { _%>
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    <%_ } else if (ui === 'buefy') { _%>
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    <%_ } else if (ui === 'oruga') { _%>
    // Doc: https://oruga.io/documentation/#nuxt
    '@oruga-ui/oruga/nuxt',
    <%_ } else if (ui === 'chakra-ui') { _%>
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    <%_ } else if (ui === 'primevue') { _%>
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    'primevue/nuxt',
    <%_ } _%>
    <%_ if (axios) { _%>
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    <%_ } _%>
    <%_ if (pwa) { _%>
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    <%_ } _%>
    <%_ if (content) { _%>
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    <%_ } _%>
  ],
  <%_ if (axios) { _%>

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  <%_ } _%>
  <%_ if (pwa) { _%>

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  <%_ } _%>
  <%_ if (content) { _%>

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  <%_ } _%>
  <%_ if (ui === 'vuetify') { _%>

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  <%_ } _%>

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    <%_ if (ui === 'element-ui') { _%>
    transpile: [/^element-ui/],
    <%_ } else if (ui === 'primevue') { _%>
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],
    <%_ } _%>
  }
}
