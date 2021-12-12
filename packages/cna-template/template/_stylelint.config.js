module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    <%_ if (prettier) { _%>
    'stylelint-config-prettier'
    <%_ } _%>
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {}
}
