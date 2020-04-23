module.exports = {
  apply (pkg, generator) {
    // edge
    const { cliOptions = {} } = generator.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''
    if (edge) {
      delete pkg.dependencies.nuxt
      pkg.dependencies['nuxt-edge'] = 'latest'
    }

    const { scripts } = pkg
    const { features, language = [], linter = [], runtime = [] } = generator.answers

    // Linter
    const eslint = linter.includes('eslint')
    const lintStaged = eslint && linter.includes('lintStaged')
    const stylelint = linter.includes('stylelint')
    const prettier = linter.includes('prettier')

    if (!eslint) {
      delete pkg.scripts.lint
      delete pkg.devDependencies['@nuxtjs/eslint-config']
      delete pkg.devDependencies['@nuxtjs/eslint-module']
      delete pkg.devDependencies['babel-eslint']
      delete pkg.devDependencies.eslint
      delete pkg.devDependencies['eslint-plugin-nuxt']
    }
    if (!lintStaged) {
      delete pkg.husky
      delete pkg['lint-staged']
      delete pkg.devDependencies.husky
      delete pkg.devDependencies['lint-staged']
    }
    if (!stylelint) {
      lintStaged && delete pkg['lint-staged']['*.{css,vue']
      delete pkg.devDependencies['@nuxtjs/stylelint-module']
      delete pkg.devDependencies.stylelint
    }
    if (!prettier) {
      delete pkg.devDependencies['eslint-config-prettier']
      delete pkg.devDependencies['eslint-plugin-prettier']
      delete pkg.devDependencies.prettier
    }

    // Modules
    if (!features.includes('axios')) {
      delete pkg.dependencies['@nuxtjs/axios']
    }
    if (!features.includes('pwa')) {
      delete pkg.dependencies['@nuxtjs/pwa']
    }
    if (!features.includes('dotenv')) {
      delete pkg.dependencies['@nuxtjs/dotenv']
    }

    // TS
    const typescript = language.includes('ts')
    const tsRuntime = runtime.includes('ts-runtime')

    if (!typescript) {
      delete pkg.devDependencies['@nuxt/typescript-build']

      for (const key of Object.keys(scripts)) {
        scripts[key] = scripts[key].replace(/(,?.ts)|(.ts,?)/, '')
      }
    }

    if (!typescript || !eslint) {
      delete pkg.devDependencies['@nuxtjs/eslint-config-typescript']
    }

    if (pkg['lint-staged']) {
      if (typescript) {
        delete pkg['lint-staged']['*.{js,ts,vue}']
      } else {
        delete pkg['lint-staged']['*.{js,vue}']
      }
    }

    if (tsRuntime) {
      for (const key of Object.keys(scripts)) {
        scripts[key] = scripts[key].replace(/^nuxt /, 'nuxt-ts ')
      }
    } else {
      delete pkg.dependencies['@nuxt/typescript-runtime']
    }
    return pkg
  }
}
