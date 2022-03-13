module.exports = {
  ignoredByWatcher: ['!**/*.{js}'],
  files: ['./packages/*/test/*.test.js', '!template'],
  tap: false,
  verbose: true
}
