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
    'plugin:vue/recommended'<% if (prettier === 'yes'){ %>,
    'plugin:prettier/recommended'<% } %>
  ],
  // required to lint *.vue files
  plugins: [
    'vue'<% if (prettier === 'yes'){ %>,
    'prettier'<% } %>
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
