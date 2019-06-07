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
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    <%_ if (prettier) { _%>
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    <%_ } _%>
    '@nuxtjs',
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
