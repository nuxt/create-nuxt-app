module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    <%_ if (composition) { _%>
    '@nuxtjs/composition-api': '@nuxtjs/composition-api/lib/entrypoint.js',
    // alternatively, depending on your node version
    // '@nuxtjs/composition-api': '@nuxtjs/composition-api/entrypoint',
    <%_ } _%>
  },
  moduleFileExtensions: [
    <%_ if (typescript) { _%>
    'ts',
    <%_ } _%>
    'js',
    'vue',
    'json'
  ],
  transform: {
    <%_ if (typescript) { _%>
    "^.+\\.ts$": "ts-jest",
    <%_ } _%>
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
}
