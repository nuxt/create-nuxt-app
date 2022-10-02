module.exports = {
  apply (pkg, generator) {
    const { pm } = generator.answers
    if (pm === 'npm') {
      // Temporary fix for https://github.com/jackmellis/require-extension-hooks-vue/issues/49
      // Remove this when the issue is fixed
      pkg.overrides = {
        'require-extension-hooks-vue': {
          'vue-template-compiler': '$vue-template-compiler'
        }
      }
    }
    return pkg
  }
}
