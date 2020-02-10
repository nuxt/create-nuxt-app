module.exports = () => {
  return {
    files: ['./test/**/*.spec.js'],
    require: ['./test/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    babel: true,
    tap: true,
    verbose: true,
    color: true
  }
}
