module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'<% if (prettier === 'yes'){ %>,
    'plugin:prettier/recommended'<% } %>
  ],<% if (prettier === 'yes'){ %>
  plugins: [
    'prettier'
  ],<% } %>
  // add your custom rules here
  rules: {}
}
