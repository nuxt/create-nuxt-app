module.exports = {
  extends: [
    'stylelint-config-standard',
    <%_ if (prettier) { _%>
    'stylelint-config-prettier'
    <%_ } _%>
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {}
}
