module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
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
    '^.+\\.ts$': 'ts-jest',
    <%_ } _%>
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  testEnvironment: 'jsdom'
}
