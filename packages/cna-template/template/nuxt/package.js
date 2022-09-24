module.exports = {
  apply (pkg, generator) {
    // edge
    const { cliOptions = {} } = generator.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''
    if (edge) {
      delete pkg.dependencies.nuxt
      pkg.dependencies['nuxt-edge'] = 'latest'
    }

    const { features, language = [], linter = [] } = generator.answers

    // Linter
    const eslint = linter.includes('eslint')
    const lintStaged = linter.includes('lintStaged')
    const stylelint = linter.includes('stylelint')
    const prettier = linter.includes('prettier')
    const commitlint = linter.includes('commitlint')
    const lintScripts = {
      eslint: '<%= pmRun %> lint:js',
      stylelint: '<%= pmRun %> lint:style',
      prettier: '<%= pmRun %> lint:prettier'
    }
    const lintfixScripts = {
      // prettier before eslint to avoid conflicting rules like no-return-assign
      // without having to use prettier via eslint (plugin:prettier/recommended)
      prettier: 'prettier --write --list-different .',
      eslint: "<%= pmRun %> lint:js <%= pm === 'npm' ? '-- ' : '' %>--fix",
      stylelint: "<%= pmRun %> lint:style <%= pm === 'npm' ? '-- ' : '' %>--fix"
    }

    if (!eslint) {
      lintStaged && delete pkg['lint-staged']["*.{js,<%= typescript ? 'ts,' : '' %>vue}"]
      delete lintScripts.eslint
      delete lintfixScripts.eslint
      delete pkg.scripts['lint:js']
      delete pkg.devDependencies['@nuxtjs/eslint-config']
      delete pkg.devDependencies['@nuxtjs/eslint-module']
      delete pkg.devDependencies['@babel/eslint-parser']
      delete pkg.devDependencies.eslint
      delete pkg.devDependencies['eslint-plugin-nuxt']
      delete pkg.devDependencies['eslint-plugin-vue']
    }
    if (!lintStaged) {
      delete pkg['lint-staged']
      delete pkg.devDependencies['lint-staged']
    }
    if (!stylelint) {
      lintStaged && delete pkg['lint-staged']['*.{css,scss,sass,html,vue}']
      delete lintScripts.stylelint
      delete lintfixScripts.stylelint
      delete pkg.scripts['lint:style']
      delete pkg.devDependencies['@nuxtjs/stylelint-module']
      delete pkg.devDependencies['postcss-html']
      delete pkg.devDependencies.stylelint
      delete pkg.devDependencies['stylelint-config-standard']
      delete pkg.devDependencies['stylelint-config-prettier']
      delete pkg.devDependencies['stylelint-config-recommended-vue']
    }
    if (!prettier) {
      lintStaged && delete pkg['lint-staged']['*.**']
      delete pkg.scripts['lint:prettier']
      delete lintScripts.prettier
      delete lintfixScripts.prettier
      delete pkg.devDependencies['eslint-config-prettier']
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
    const lintfixScript = Object.values(lintfixScripts).join(' && ')
    if (lintfixScript) {
      pkg.scripts.lintfix = lintfixScript
    }

    if (!lintStaged && !commitlint) {
      delete pkg.devDependencies.husky
      delete pkg.scripts.prepare
    } else {
      // Move prepare to make it the last script
      const prepare = pkg.scripts.prepare
      delete pkg.scripts.prepare
      pkg.scripts.prepare = prepare
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
