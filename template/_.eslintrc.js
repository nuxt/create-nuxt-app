module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  <%_ if (server === 'adonis') { _%>
  globals: {
    use: true
  },
  <%_ } _%>
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
    'plugin:nuxt/recommended'
  ],
  <%_ if (prettier) { _%>
  plugins: [
    'prettier'
  ],
  <%_ } _%>
  // add your custom rules here
  rules: {
    <%_ if (!esm){ _%>
    'nuxt/no-cjs-in-config': 'off'
    <%_ } _%>
  }
}
