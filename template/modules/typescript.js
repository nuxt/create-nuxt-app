module.exports = function () {
  // Add .ts & .tsx extension to Nuxt
  this.nuxt.options.extensions.push('ts', 'tsx')

  // Extend webpack build
  this.extendBuild(config => {
    // Add TypeScript
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: { appendTsSuffixTo: [/\.vue$/] }
    })

    // Add .ts extension in webpack resolve
    if (! config.resolve.extensions.includes('.ts')) {
      config.resolve.extensions.push('.ts')
    }

    // Add .tsx extension in webpack resolve
    if (! config.resolve.extensions.includes('.tsx')) {
      config.resolve.extensions.push('.tsx')
    }
  })
}
