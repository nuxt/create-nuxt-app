module.exports = () => {
  return {
    require: ['./test/helpers/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    tap: true,
    verbose: true,
    color: true
  }
}
