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
    <% if (typescript === 'yes' && prettier === 'yes') { %>
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: { "legacyDecorators": true }
    <% } else { %>
    parser: 'babel-eslint'<% } %>
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'<% if (prettier === 'yes'){ %>,
    'plugin:prettier/recommended',
    'prettier/vue'<% } else if (prettier === 'yes' && typescript === 'no'){ %>
    'prettier',    
     <% } else if (prettier === 'yes' && typescript === 'yes'){ %>
    'prettier/@typescript-eslint'
     <% } -%>
  ],<% if (prettier === 'yes'){ %>
  plugins: [
    'prettier'<% if (typescript === 'yes') { %>,
    '@typescript-eslint'
    <% } %>
  ],<% } %>
  // add your custom rules here
  rules: {
<% if (!esm){ -%>
    'nuxt/no-cjs-in-config': 'off'
<% } -%><% if (typescript === 'yes') { %>
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  <% } %>
  }
}
