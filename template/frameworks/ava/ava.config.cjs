module.exports = () => {
  return {
    require: ['./test/ava.setup.js'],
    ignoredByWatcher: ['!**/*.{js,vue}'],
    babel: true,
    tap: true,
    verbose: true,
    color: true
  }
}
