export default {
  require: ['./test/ava.setup.js'],
  sources: ['**/*.{js,vue}'],
  files: ['test/specs/**/*'],
  babel: {
    testOptions: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '@': '.',
              '~': '.'
            }
          }
        ]
      ]
    }
  },
  tap: true,
  verbose: true
}
