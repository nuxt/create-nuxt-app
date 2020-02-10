module.exports = () => {
  return {
    require: ['./test/helpers/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    babel: true,
    tap: true,
    verbose: true,
    color: true
  }
}
