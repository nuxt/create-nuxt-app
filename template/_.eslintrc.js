module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },<% if (server === 'adonis') { %>
  globals: {
    use: true
  },<% } %>
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'<% if (prettier === 'yes'){ %>,
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'<% } %>
  ],<% if (prettier === 'yes'){ %>
  plugins: [
    'prettier'
  ],<% } %>
  // add your custom rules here
  rules: {
<% if (!esm){ -%>
    'nuxt/no-cjs-in-config': 'off'
<% } -%>
  }
}
