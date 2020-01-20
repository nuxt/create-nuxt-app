export default {
  require: ['./test/ava.setup.js'],
  ignoredByWatcher: ['!**/*.{js,vue}'],
  babel: true,
  tap: true,
  verbose: true,
  color: true,
  files: ['test/e2e/**/*']
}
