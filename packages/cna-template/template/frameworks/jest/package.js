module.exports = {
  apply (pkg, generator) {
    const { language = [], linter = [] } = generator.answers
    const typescript = language.includes('ts')
    if (!typescript) {
      delete pkg.devDependencies['ts-jest']
    }
    const eslint = linter.includes('eslint')
    if (!eslint) {
      delete pkg.devDependencies['eslint-plugin-jest']
    }
    return pkg
  }
}
