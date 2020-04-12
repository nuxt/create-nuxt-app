module.exports = {
  apply (pkg, generator) {
    const { language = [] } = generator.answers
    const typescript = language.includes('ts')
    if (!typescript) {
      delete pkg.devDependencies['ts-jest']
    }
    return pkg
  }
}
