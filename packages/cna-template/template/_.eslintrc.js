module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    <%_ if (test === 'cypress') { _%>
    "cypress/globals": true,
    <%_ } _%>
  },
  <%_ if (!typescript) { _%>
  parserOptions: {
    parser: 'babel-eslint'
  },
  <%_ } _%>
  extends: [
    <%_ if (typescript) { _%>
    '@nuxtjs/eslint-config-typescript',
    <%_ } else {_%>
    '@nuxtjs',
    <%_ } _%>
    <%_ if (prettier) { _%>
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    <%_ } _%>
    <%_ if (test === 'webdriverio') { _%>
    'plugin:wdio/recommended',
    <%_ } _%>
    <%_ if (test === 'cypress') { _%>
    'plugin:cypress/recommended',
    <%_ } _%>
    'plugin:nuxt/recommended'
  ],
  plugins: [
    <%_ if (prettier) {_%>
    'prettier',
    <%_ } _%>
    <%_ if (test === 'cypress') { _%>
    'cypress',
    <%_ } _%>
    <%_ if (test === 'webdriverio') { _%>
    'wdio'
    <%_ } _%>
  ],
  // add your custom rules here
  rules: {},
  <%_ if (test === 'cypress') { _%>
  ignorePatterns: ['test/e2e/specs/**/*.js'],
  <%_ } _%>
}
