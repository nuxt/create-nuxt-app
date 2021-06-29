module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  <%_ if (!typescript) { _%>
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  <%_ } _%>
  extends: [
    <%_ if (typescript) { _%>
    '@nuxtjs/eslint-config-typescript',
    <%_ } else {_%>
    '@nuxtjs',
    <%_ } _%>
    <%_ if (test === 'webdriverio') { _%>
    'plugin:wdio/recommended',
    <%_ } _%>
    'plugin:nuxt/recommended',
    <%_ if (prettier) { _%>
    'prettier'
    <%_ } _%>
  ],
  plugins: [
    <%_ if (test === 'webdriverio') { _%>
    'wdio'
    <%_ } _%>
  ],
  // add your custom rules here
  rules: {}
}
