# Create Nuxt App

[![NPM version](https://img.shields.io/npm/v/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/create-nuxt-app)
[![NPM downloads](https://img.shields.io/npm/dm/create-nuxt-app.svg?style=flat)](https://npmjs.com/package/create-nuxt-app)
[![GitHub Action](https://github.com/nuxt/create-nuxt-app/workflows/ci/badge.svg?branch=master)](https://github.com/nuxt/create-nuxt-app/actions?query=branch%3Amaster++)

> Create a [Nuxt.js](https://nuxtjs.org) project in seconds

## Usage

Make sure you have [npx](https://www.npmjs.com/package/npx) installed (`npx` is shipped by default since [npm](https://www.npmjs.com/get-npm) `5.2.0`)

```bash
npx create-nuxt-app <my-project>
```

Or starting with npm v6.1 you can do:

```bash
npm init nuxt-app@latest <my-project>
```

Or with [yarn](https://yarnpkg.com/en/):

```bash
yarn create nuxt-app <my-project>
```

## Features :tada:

1. Package manager
    - Yarn
    - Npm
1. Programming language
    - JavaScript
    - TypeScript
1. UI framework:
    - None (feel free to add one later)
    - [Ant Design Vue](https://github.com/vueComponent/ant-design-vue)
    - [BalmUI](https://material.balmjs.com/)
    - [Bootstrap](https://github.com/bootstrap-vue/bootstrap-vue)
    - [Buefy](https://buefy.org)
    - [Chakra UI](https://github.com/chakra-ui/chakra-ui-vue)
    - [Element](https://github.com/ElemeFE/element)
    - [Oruga](https://oruga.io/)
    - [Primevue/](https://www.primefaces.org/primevue/)
    - [Tachyons](https://github.com/tachyons-css/tachyons)
    - [Tailwind CSS](https://github.com/tailwindcss/tailwindcss)
    - [Windi CSS](https://github.com/windicss/windicss)
    - [Vant](https://github.com/youzan/vant)
    - [View UI](https://www.iviewui.com/)
    - [Vuetify](https://github.com/vuetifyjs/vuetify)
1. Template engine
    - HTML
    - Pug
1. Nuxt.js modules:
    - [Axios - Promise based HTTP client](https://github.com/nuxt-community/axios-module)
    - [Progressive Web App (PWA)](https://github.com/nuxt-community/pwa-module)
    - [Content - Git-based headless CMS](https://github.com/nuxt/content)
1. Linting tools:
    - [ESLint](https://github.com/nuxt/eslint-config)
    - [Prettier](https://github.com/prettier/prettier)
    - [Lint staged files](https://github.com/okonet/lint-staged)
    - [StyleLint](https://github.com/stylelint/stylelint)
    - [Commitlint](https://github.com/conventional-changelog/commitlint)
1. Testing framework:
    - None
    - [Jest](https://github.com/facebook/jest)
    - [AVA](https://github.com/avajs/ava)
    - [WebdriverIO](https://webdriver.io)
    - [Nightwatch](https://nightwatchjs.org)
1. Rendering mode
    - [Universal (SSR / Static)](https://nuxtjs.org/docs/features/rendering-modes#server-side-rendered-sites-and-static-sites)
    - [SPA](https://nuxtjs.org/docs/features/rendering-modes#client-side-rendering-only)
1. Deployment target
    - [Server (Node.js hosting)](https://nuxtjs.org/docs/configuration-glossary/configuration-target)
    - [Static (Static/JAMStack hosting)](https://nuxtjs.org/docs/configuration-glossary/configuration-target)
1. Development tools
    - [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig)
    - [Semantic PR](https://probot.github.io/apps/semantic-pull-requests/)
    - [Dependabot (for GitHub only)](https://dependabot.com/)
1. Continuous Integration
    - [GitHub Actions](https://github.com/features/actions)
    - [Travis CI](https://travis-ci.com)
    - [CircleCI](https://circleci.com)

## CLI Options

### `--edge`

Alias: `-e`.

To install [nuxt-edge](https://www.npmjs.com/package/nuxt-edge) instead of [nuxt](https://www.npmjs.com/package/nuxt), add the command line option `--edge`:

```bash
npx create-nuxt-app <my-project> --edge
```

Or

```bash
npm init nuxt-app <my-project> --edge
```

Or

```bash
yarn create nuxt-app <my-project> --edge
```

### `--info`

Alias: `-i`. Print out debugging information relating to the local environment and exit.

### `--help`

Alias: `-h`. Show the help information and exit, include: usage, command and all cli options.

### `--verbose`

Show debug logs

### `--version`

Alias: `-v`. Show version number and exit.

### `--overwrite-dir`

Overwrite the target directory.

## Credits

- [egoist](https://github.com/egoist)
- [clarko](https://github.com/clarkdo)
- All our contributors ([list](https://github.com/nuxt/create-nuxt-app/contributors)).
