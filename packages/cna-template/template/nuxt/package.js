module.exports = {
  apply (pkg, generator) {
    // edge
    const { cliOptions = {} } = generator.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''
    if (edge) {
      delete pkg.dependencies.nuxt
      pkg.dependencies['nuxt-edge'] = 'latest'
    }

    const { features, language = [], linter = [], devTools = [] } = generator.answers

    // Linter
    const eslint = linter.includes('eslint')
    const lintStaged = eslint && linter.includes('lintStaged')
    const stylelint = linter.includes('stylelint')
    const prettier = linter.includes('prettier')
    const commitlint = linter.includes('commitlint')
    const lintScripts = {
      eslint: '<%= pmRun %> lint:js',
      stylelint: '<%= pmRun %> lint:style'
    }

    if (!eslint) {
      delete lintScripts.eslint
      delete pkg.scripts['lint:js']
      delete pkg.devDependencies['@nuxtjs/eslint-config']
      delete pkg.devDependencies['@nuxtjs/eslint-module']
      delete pkg.devDependencies['babel-eslint']
      delete pkg.devDependencies.eslint
      delete pkg.devDependencies['eslint-plugin-nuxt']
      delete pkg.devDependencies['eslint-plugin-vue']
    }
    if (!lintStaged) {
      delete pkg['lint-staged']
      delete pkg.devDependencies['lint-staged']
    }
    if (!stylelint) {
      lintStaged && delete pkg['lint-staged']['*.{css,vue}']
      delete lintScripts.stylelint
      delete pkg.scripts['lint:style']
      delete pkg.devDependencies['@nuxtjs/stylelint-module']
      delete pkg.devDependencies.stylelint
      delete pkg.devDependencies['stylelint-config-standard']
      delete pkg.devDependencies['stylelint-config-prettier']
    }
    if (!prettier) {
      delete pkg.devDependencies['eslint-config-prettier']
      delete pkg.devDependencies['eslint-plugin-prettier']
      delete pkg.devDependencies['stylelint-config-prettier']
      delete pkg.devDependencies.prettier
    }
    if (!commitlint) {
      delete pkg.devDependencies['@commitlint/config-conventional']
      delete pkg.devDependencies['@commitlint/cli']
    }

    const lintScript = Object.values(lintScripts).join(' && ')
    if (lintScript) {
      pkg.scripts.lint = lintScript
    }

    // Dev Tools
    const husky = devTools.includes('husky')

    if (!husky) {
      delete pkg.devDependencies.husky
      delete pkg.scripts.prepare
    }

    // Modules
    if (!features.includes('axios')) {
      delete pkg.dependencies['@nuxtjs/axios']
    }
    if (!features.includes('pwa')) {
      delete pkg.dependencies['@nuxtjs/pwa']
    }
    if (!features.includes('content')) {
      delete pkg.dependencies['@nuxt/content']
    }

    // TS
    const typescript = language.includes('ts')

    if (!typescript) {
      delete pkg.devDependencies['@nuxt/types']
      delete pkg.devDependencies['@nuxt/typescript-build']
    }
    if (!typescript || !eslint) {
      delete pkg.devDependencies['@nuxtjs/eslint-config-typescript']
    }
    if (typescript && eslint) {
      delete pkg.devDependencies['@nuxtjs/eslint-config']
    }
    return pkg
  }
}
