# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.0.0](https://github.com/nuxt/create-nuxt-app/compare/v4.0.0...v5.0.0) (2022-10-02)


### Bug Fixes

* **ava:** vue-template-compiler version conflict on require-extension-hooks-vue ([6757cb8](https://github.com/nuxt/create-nuxt-app/commit/6757cb8844a1fd50b3fd7d6efc9711363758f6e5))


### chore

* drop support for Node.js 12 ([9f8b21c](https://github.com/nuxt/create-nuxt-app/commit/9f8b21ccfc9050e57ad8ac4b3c2251fcd27cbce1))


### Features

* **template:** support pug template ([#960](https://github.com/nuxt/create-nuxt-app/issues/960)) ([49c7a80](https://github.com/nuxt/create-nuxt-app/commit/49c7a80070c5357b308ddea3fcb24aebd2c1bed9))


### BREAKING CHANGES

* minimum Node.js version is 14





# [4.0.0](https://github.com/nuxt/create-nuxt-app/compare/v3.7.1...v4.0.0) (2021-12-12)


### Bug Fixes

* **axios:** avoid hard-coded base URL localhost:3000, fixes [#641](https://github.com/nuxt/create-nuxt-app/issues/641) ([#830](https://github.com/nuxt/create-nuxt-app/issues/830)) ([93297e5](https://github.com/nuxt/create-nuxt-app/commit/93297e55a142cebb61c09ac1f7f7f3ca68c5a2da))
* **husky:** revert stdin tty workaround of [#766](https://github.com/nuxt/create-nuxt-app/issues/766) for npm ([#825](https://github.com/nuxt/create-nuxt-app/issues/825)) ([1520453](https://github.com/nuxt/create-nuxt-app/commit/152045398e95dc08e5a38f35d4c8ea7ec1cff266))
* **primevue:** fix primevue nuxt module name ([c12c1ee](https://github.com/nuxt/create-nuxt-app/commit/c12c1eed9f4b5201bc5e785813ae7f1bbada5e3f))
* **stylelint:** unknown word on scss file ([9461143](https://github.com/nuxt/create-nuxt-app/commit/94611434d63fc334260592c2e25b06a1169695f4))


### chore

* remove node 10 support ([#905](https://github.com/nuxt/create-nuxt-app/issues/905)) ([a12df38](https://github.com/nuxt/create-nuxt-app/commit/a12df38fccd45103cdc64f770b5a7dca3bab88a8))


### Features

* add lintfix and prettier scripts ([#829](https://github.com/nuxt/create-nuxt-app/issues/829)) ([f3e61cd](https://github.com/nuxt/create-nuxt-app/commit/f3e61cdad360e8837c66555b763bf4e29076c8a2)), closes [#827](https://github.com/nuxt/create-nuxt-app/issues/827)
* add primevue ui framework ([#859](https://github.com/nuxt/create-nuxt-app/issues/859)) ([0fa8a67](https://github.com/nuxt/create-nuxt-app/commit/0fa8a67317491e0543799b07fdee58c70eef1545))
* **cli:** add user-friendly exit for unknown options ([#854](https://github.com/nuxt/create-nuxt-app/issues/854)) ([b734105](https://github.com/nuxt/create-nuxt-app/commit/b73410519234c3ce3b97e5032d78d5e235b6b8f9))
* **frameworks:** remove framevuerk ([#904](https://github.com/nuxt/create-nuxt-app/issues/904)) ([c54809d](https://github.com/nuxt/create-nuxt-app/commit/c54809d1b0553bc0b942f9393714284df4b911f9))


### BREAKING CHANGES

* minimum node version is 12





## [3.7.1](https://github.com/nuxt/create-nuxt-app/compare/v3.7.0...v3.7.1) (2021-06-29)

**Note:** Version bump only for package create-nuxt-app





# [3.7.0](https://github.com/nuxt/create-nuxt-app/compare/v3.6.0...v3.7.0) (2021-06-27)


### Bug Fixes

* **cli:** rephrase not empty directory error message ([#778](https://github.com/nuxt/create-nuxt-app/issues/778)) ([8186168](https://github.com/nuxt/create-nuxt-app/commit/81861685b08cdb3887fcf30f3708b387b0e1f017))
* **husky:** stdin is not a tty in git bash ([#766](https://github.com/nuxt/create-nuxt-app/issues/766)) ([807546d](https://github.com/nuxt/create-nuxt-app/commit/807546d65f107378c15503c5f1585b9131a7e469))
* **template:** nodemismatch error in ios safari ([#770](https://github.com/nuxt/create-nuxt-app/issues/770)) ([41463d1](https://github.com/nuxt/create-nuxt-app/commit/41463d16912e0026ac533cb0b8441cb7a9e5c8b8))
* **templates:** remove not being maintained vuesax ([#795](https://github.com/nuxt/create-nuxt-app/issues/795)) ([e7211b3](https://github.com/nuxt/create-nuxt-app/commit/e7211b3c1d2a683c2376cfa8f2437555ccf526c7))
* **templates:** remove not recommended eslint-plugin-prettier ([#797](https://github.com/nuxt/create-nuxt-app/issues/797)) ([5d8c498](https://github.com/nuxt/create-nuxt-app/commit/5d8c49878c98cc2842b65fa8edaa201d9d3bc0aa))
* add vuetify to dependencies ([#787](https://github.com/nuxt/create-nuxt-app/issues/787)) ([3610d12](https://github.com/nuxt/create-nuxt-app/commit/3610d123fb9f2725bf7fd9c15137568159240c6d))


### Features

* **create-nuxt-app:** add --overwrite-dir flag ([#799](https://github.com/nuxt/create-nuxt-app/issues/799)) ([e45bdbb](https://github.com/nuxt/create-nuxt-app/commit/e45bdbb433fbb8d242630f8062dc5d76c65f8f2f))
* update design ([#792](https://github.com/nuxt/create-nuxt-app/issues/792)) ([b7d2db9](https://github.com/nuxt/create-nuxt-app/commit/b7d2db9f10ff2bb1fedbe65800f1ac43cb84fad1))
* **template:** update to husky v6 ([#715](https://github.com/nuxt/create-nuxt-app/issues/715)) ([5ee3feb](https://github.com/nuxt/create-nuxt-app/commit/5ee3feb3dd9ae776f335d835c93ad9f609344a8b))


### Performance Improvements

* use npm ci instead of npm i in GH Action Workflow ([#762](https://github.com/nuxt/create-nuxt-app/issues/762)) ([8c9b77d](https://github.com/nuxt/create-nuxt-app/commit/8c9b77deb7ef64f5a4b7a484c4a9e3ef4d0a3208))





# [3.6.0](https://github.com/nuxt/create-nuxt-app/compare/v3.5.2...v3.6.0) (2021-03-19)


### Bug Fixes

* **prompts:** change JAMstack to Jamstack ([#742](https://github.com/nuxt/create-nuxt-app/issues/742)) ([904a26f](https://github.com/nuxt/create-nuxt-app/commit/904a26fad2a584fc722cda62ecc04dafe3a4ead4))
* **ts:** remove @nuxt/typescript-runtime ([#721](https://github.com/nuxt/create-nuxt-app/issues/721)) ([cbd58dc](https://github.com/nuxt/create-nuxt-app/commit/cbd58dc3242c90668f771d9d68bc5e48606a4274))
* **vuesax:** add boxicons ([#722](https://github.com/nuxt/create-nuxt-app/issues/722)) ([d121169](https://github.com/nuxt/create-nuxt-app/commit/d12116967a7bed3d96d4543bdd56561c4126e72c))
* update sao link ([#707](https://github.com/nuxt/create-nuxt-app/issues/707)) ([3f548e5](https://github.com/nuxt/create-nuxt-app/commit/3f548e5de4a6fec4be2b987795b1a5bf29da4b4e))


### Features

* Add CircleCI and Travis CI ([#737](https://github.com/nuxt/create-nuxt-app/issues/737)) ([1cfe0d4](https://github.com/nuxt/create-nuxt-app/commit/1cfe0d4b161593db986995bb2e677700ac83f457))
* Add nuxt windicss. ([#753](https://github.com/nuxt/create-nuxt-app/issues/753)) ([a0da946](https://github.com/nuxt/create-nuxt-app/commit/a0da9468f0f95b4577e1dbbc7bb303396d99c1b8))
* add vant ui framework ([#710](https://github.com/nuxt/create-nuxt-app/issues/710)) ([37bfea3](https://github.com/nuxt/create-nuxt-app/commit/37bfea3a7f16e2e92941053b8bff40e5ed414abf))
* update @nuxtjs/tailwindcss to v4 ([#751](https://github.com/nuxt/create-nuxt-app/issues/751)) ([691bd8a](https://github.com/nuxt/create-nuxt-app/commit/691bd8a1d2cbcc3807c7b2acb19f7369216bd579))
* update iview to viewui ([#714](https://github.com/nuxt/create-nuxt-app/issues/714)) ([43da555](https://github.com/nuxt/create-nuxt-app/commit/43da55582dc87bb1a1f80747b70181bc6f5fb174))
* upgrade @oruga-ui/oruga to version 0.3.3 ([#717](https://github.com/nuxt/create-nuxt-app/issues/717)) ([77f948c](https://github.com/nuxt/create-nuxt-app/commit/77f948cca6e3eab3c16e7ed8ed8b1539a726fb27))





## [3.5.2](https://github.com/nuxt/create-nuxt-app/compare/v3.5.1...v3.5.2) (2021-01-28)

**Note:** Version bump only for package create-nuxt-app





## [3.5.1](https://github.com/nuxt/create-nuxt-app/compare/v3.5.0...v3.5.1) (2021-01-28)


### Bug Fixes

* **ui:** remove @nuxtjs/bulma ([#695](https://github.com/nuxt/create-nuxt-app/issues/695)) ([371bb59](https://github.com/nuxt/create-nuxt-app/commit/371bb5999acaf68bf29acc994ded130bd6c0c9ce))





# [3.5.0](https://github.com/nuxt/create-nuxt-app/compare/v3.4.0...v3.5.0) (2021-01-17)


### Bug Fixes

* **link:** add eslint-plugin-vue to devDependency ([7cef146](https://github.com/nuxt/create-nuxt-app/commit/7cef1461933464294857ebad31ea0574d2f23e29))
* **lint:** use double quotes for glob syntax ([#684](https://github.com/nuxt/create-nuxt-app/issues/684)) ([2e1aff8](https://github.com/nuxt/create-nuxt-app/commit/2e1aff819eac10e7a18588917b06ec5bc611e968))


### Features

* add BalmUI to UI framework ([#636](https://github.com/nuxt/create-nuxt-app/issues/636)) ([d57c992](https://github.com/nuxt/create-nuxt-app/commit/d57c992b966f2ff0c70cfbfb2eac95c5a4ed65d9))
* **pwa:** add default language to nuxt.config ([#653](https://github.com/nuxt/create-nuxt-app/issues/653)) ([31dd1a3](https://github.com/nuxt/create-nuxt-app/commit/31dd1a39bb134738a04de93961e6dea16807ef8f))
* add Nightwatch.js as test framework option ([#572](https://github.com/nuxt/create-nuxt-app/issues/572)) ([75985e4](https://github.com/nuxt/create-nuxt-app/commit/75985e47a841fe8898f6f17b265fe6566984db8e))
* add Oruga as UI framework option ([#635](https://github.com/nuxt/create-nuxt-app/issues/635)) ([b6facaf](https://github.com/nuxt/create-nuxt-app/commit/b6facaf6383c30699879f7b5e4e2433bf22adfa7))
* add route page and content fetch ([#632](https://github.com/nuxt/create-nuxt-app/issues/632)) ([d045b20](https://github.com/nuxt/create-nuxt-app/commit/d045b200e69983b56a5ebc679fd35f7c00ea07da))





# [3.4.0](https://github.com/nuxt/create-nuxt-app/compare/v3.3.0...v3.4.0) (2020-10-06)


### Bug Fixes

* **vuetify:** updated layout to be on par with vuetify 2.x ([#619](https://github.com/nuxt/create-nuxt-app/issues/619)) ([4ceb4c1](https://github.com/nuxt/create-nuxt-app/commit/4ceb4c176d9a829d67485e1a099001f7b743ea60))


### Features

* add GitHub Action out-of-the-box ([#621](https://github.com/nuxt/create-nuxt-app/issues/621)) ([ad67d2f](https://github.com/nuxt/create-nuxt-app/commit/ad67d2f4dbd01a08be7d01056e626d26c03e0951))





# [3.3.0](https://github.com/nuxt/create-nuxt-app/compare/v3.2.0...v3.3.0) (2020-09-17)


### Bug Fixes

* **template:** bump typescript packages versions ([#599](https://github.com/nuxt/create-nuxt-app/issues/599)) ([b00e836](https://github.com/nuxt/create-nuxt-app/commit/b00e836b43cd8f0d7cb459be59c227efc3503cd3))


### Features

* add commitlint as linting tools option ([#592](https://github.com/nuxt/create-nuxt-app/issues/592)) ([33817a8](https://github.com/nuxt/create-nuxt-app/commit/33817a8bfcc4162e32030de4232defd1f99b0c33))
* add support for dependabot ([#604](https://github.com/nuxt/create-nuxt-app/issues/604)) ([80e04e9](https://github.com/nuxt/create-nuxt-app/commit/80e04e9644ea26b2b7243d3cdb5ee968bb57c511))
* prompt for git ([#596](https://github.com/nuxt/create-nuxt-app/issues/596)) ([ec431e8](https://github.com/nuxt/create-nuxt-app/commit/ec431e8291044c537e3bd0a321b5e516c2ec5a0c))
* use `core-js@3` by default ([#594](https://github.com/nuxt/create-nuxt-app/issues/594)) ([146a312](https://github.com/nuxt/create-nuxt-app/commit/146a3122a20dd235608a1f513ec3e83ecae1aa40))





# [3.2.0](https://github.com/nuxt/create-nuxt-app/compare/v3.1.0...v3.2.0) (2020-07-27)


### Bug Fixes

* **template:** fix package.json dev script for typescript ([#568](https://github.com/nuxt/create-nuxt-app/issues/568)) ([1f64e5a](https://github.com/nuxt/create-nuxt-app/commit/1f64e5afbb973422a34c7a64252cea9a3411664c))
* show up an appropriate warning if the target path exists and is non-empty ([#570](https://github.com/nuxt/create-nuxt-app/issues/570)) ([21d6729](https://github.com/nuxt/create-nuxt-app/commit/21d6729c64e608bf53d87868b372d2e0d1041587))


### Features

* **template:** update typescript ([#567](https://github.com/nuxt/create-nuxt-app/issues/567)) ([251c50d](https://github.com/nuxt/create-nuxt-app/commit/251c50d7589dd2568252ebedefebda9779eca33f))
* add chakra-ui-vue ([#573](https://github.com/nuxt/create-nuxt-app/issues/573)) ([c9ede63](https://github.com/nuxt/create-nuxt-app/commit/c9ede63abdad60462fd3280fbd211a857e8fe1e8))





# [3.1.0](https://github.com/nuxt-community/create-nuxt-app/compare/v3.0.0...v3.1.0) (2020-06-22)


### Features

* prepare for Nuxt 2.13 ([#529](https://github.com/nuxt-community/create-nuxt-app/issues/529)) ([47aa7c1](https://github.com/nuxt-community/create-nuxt-app/commit/47aa7c1eaf743118bb0b0d8fca78ed58bfe30b05)), closes [#509](https://github.com/nuxt-community/create-nuxt-app/issues/509) [#513](https://github.com/nuxt-community/create-nuxt-app/issues/513) [#544](https://github.com/nuxt-community/create-nuxt-app/issues/544) [#547](https://github.com/nuxt-community/create-nuxt-app/issues/547) [#540](https://github.com/nuxt-community/create-nuxt-app/issues/540) [#541](https://github.com/nuxt-community/create-nuxt-app/issues/541)





# [3.0.0](https://github.com/nuxt/create-nuxt-app/compare/v2.16.0...v3.0.0) (2020-06-18)


### Bug Fixes

* **jest:** downgrate vue-jest to v3 ([8a75b51](https://github.com/nuxt/create-nuxt-app/commit/8a75b51986ff7aa5dd4fb4135b5991b723594f89))
* **prettier:** add stylelint-config-prettier ([50aa285](https://github.com/nuxt/create-nuxt-app/commit/50aa2851f80fc177add7185d485758dceca29d7d))


### Features

* **template:** remove dotenv module ([#544](https://github.com/nuxt/create-nuxt-app/issues/544)) ([ba93891](https://github.com/nuxt/create-nuxt-app/commit/ba938913bab21a96f29678c91897a6294003f32d))
* add content module ([#540](https://github.com/nuxt/create-nuxt-app/issues/540)) ([9aba2f6](https://github.com/nuxt/create-nuxt-app/commit/9aba2f692e716e7e0e027cca447fa2c260df2a40))





# [2.16.0](https://github.com/nuxt-community/create-nuxt-app/compare/v2.15.0...v2.16.0) (2020-05-18)


### Bug Fixes

* update snapshots ([b5fd723](https://github.com/nuxt-community/create-nuxt-app/commit/b5fd723f40c27489838984aba45ed15b58a100c8))
* update snapshots ([2b26088](https://github.com/nuxt-community/create-nuxt-app/commit/2b26088546a4de0de4adae177ebf5749a2825cc7))
* **ava:** e2e test hangs until timeout ([8393524](https://github.com/nuxt-community/create-nuxt-app/commit/8393524cd99db4847c339fac5e594419cba7f6bb))
* update prompts to add static in universal ([#462](https://github.com/nuxt-community/create-nuxt-app/issues/462)) ([71d84b1](https://github.com/nuxt-community/create-nuxt-app/commit/71d84b16a57147f159ce0c858a0b7bfa757d7a4b))


### Features

* add WebdriverIO as test framework option ([#528](https://github.com/nuxt-community/create-nuxt-app/issues/528)) ([9a1497f](https://github.com/nuxt-community/create-nuxt-app/commit/9a1497f04e446a3b91b3eed1fef6273ad717b2f0))
* **deps:** update eslint to v7 ([916f288](https://github.com/nuxt-community/create-nuxt-app/commit/916f2887052d97272ed25c5f339a21286520e95b))
* **lint:** add stylelint-config-standard and separate lint scripts ([#493](https://github.com/nuxt-community/create-nuxt-app/issues/493)) ([8034d68](https://github.com/nuxt-community/create-nuxt-app/commit/8034d68109231b62e134f1fa06eb1ae72f9fd8ed))
* **template:** remove author and description from prompt ([#466](https://github.com/nuxt-community/create-nuxt-app/issues/466)) ([1d7d0c4](https://github.com/nuxt-community/create-nuxt-app/commit/1d7d0c4cdfdf8d2a04fd7afb12937bb3fcf61472))
* **templates:** deprecate server templates ([#501](https://github.com/nuxt-community/create-nuxt-app/issues/501)) ([c60f39e](https://github.com/nuxt-community/create-nuxt-app/commit/c60f39e9fee49bcd4306217ec732b45d9d706c27))
* migrate to monorepo ([#458](https://github.com/nuxt-community/create-nuxt-app/issues/458)) ([64991bb](https://github.com/nuxt-community/create-nuxt-app/commit/64991bba05b208e5078c8101c5adac55f2100ff2))
* minimum required nodejs version is 10.20.0 ([33fbf49](https://github.com/nuxt-community/create-nuxt-app/commit/33fbf49aabd27fae7b4ee4e23e2e3a14357b137c))
* **template:** support package.json and handler ([#467](https://github.com/nuxt-community/create-nuxt-app/issues/467)) ([ff37dc8](https://github.com/nuxt-community/create-nuxt-app/commit/ff37dc85672f55b2441ef6612b5917ca0b32b4f5))





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.15.0](https://github.com/nuxt/create-nuxt-app/compare/v2.14.0...v2.15.0) (2020-03-17)


### Bug Fixes

* **ava:** no tests found in test/ava.setup.js ([#426](https://github.com/nuxt/create-nuxt-app/issues/426)) ([c1afad4](https://github.com/nuxt/create-nuxt-app/commit/c1afad4))


### Features

* add typescript support using typescript-build ([#328](https://github.com/nuxt/create-nuxt-app/issues/328)) ([e4b9cd8](https://github.com/nuxt/create-nuxt-app/commit/e4b9cd8))

## [2.14.0](https://github.com/nuxt/create-nuxt-app/compare/v2.13.0...v2.14.0) (2020-02-09)


### Features

* **eslint:** upgrade @nuxtjs/eslint-config to v2 ([85b368b](https://github.com/nuxt/create-nuxt-app/commit/85b368b6cfbe768f8de4cbe3d4820bf5a787f68b))


### Bug Fixes

* upgrade lint-staged packages ([e10fe52](https://github.com/nuxt/create-nuxt-app/commit/e10fe520c79a98467c4de976e1d46ea106099f19))
* upgrade prettier packages ([79075b0](https://github.com/nuxt/create-nuxt-app/commit/79075b0fd304c0a5dd5d9e5ce3a09bf193e6f986))

## [2.13.0](https://github.com/nuxt/create-nuxt-app/compare/v2.12.0...v2.13.0) (2020-02-09)


### Features

* **ava:** add support for ava v3 ([#414](https://github.com/nuxt/create-nuxt-app/issues/414)) ([0e14a6f](https://github.com/nuxt/create-nuxt-app/commit/0e14a6fb94e0cd40dcb06ba3dd4116b95f60b851))
* add semantic pull request support ([#405](https://github.com/nuxt/create-nuxt-app/issues/405)) ([35728ee](https://github.com/nuxt/create-nuxt-app/commit/35728ee328265239d4818cf3ff9c21b3e04b83b4))
* add stylelint to lint-staged ([33051e4](https://github.com/nuxt/create-nuxt-app/commit/33051e461e5c5c4984d87f0734cf2e22e09fda4d))
* add Vuesax framework ui ([#424](https://github.com/nuxt/create-nuxt-app/issues/424)) ([952dc47](https://github.com/nuxt/create-nuxt-app/commit/952dc4786428e00a675167f42a527cba56e28be0))


### Bug Fixes

* **template:** Stylelint config ([#387](https://github.com/nuxt/create-nuxt-app/issues/387)) ([28abd48](https://github.com/nuxt/create-nuxt-app/commit/28abd48e46dc5ca77ce880d4779428c8b2c9a01e))
* nuxt.ready is not called in dev mode ([441bb5b](https://github.com/nuxt/create-nuxt-app/commit/441bb5bd8b1cc6566202c59fb4e2f8dcb37290da))
* stylelint config rules is object ([6a6415e](https://github.com/nuxt/create-nuxt-app/commit/6a6415ebc0f94404d442134bf762a7728417fca5))
* **templates:** Vuetify copyright year ([#415](https://github.com/nuxt/create-nuxt-app/issues/415)) ([1f6d68f](https://github.com/nuxt/create-nuxt-app/commit/1f6d68fe045127acfdff326c8009dc681b57a01c))

## [2.12.0](https://github.com/nuxt/create-nuxt-app/compare/v2.11.1...v2.12.0) (2019-11-24)


### Features

* add dotenv module ([#358](https://github.com/nuxt/create-nuxt-app/issues/358)) ([40dd947](https://github.com/nuxt/create-nuxt-app/commit/40dd947dc2342dd3358adf92c4a912a4cf293a48))
* add stylelint module ([#278](https://github.com/nuxt/create-nuxt-app/issues/278)) ([18740f8](https://github.com/nuxt/create-nuxt-app/commit/18740f86eb2afd3226d277b42000e6ab21e94deb))
* update logo component with the new nuxt logo ([#363](https://github.com/nuxt/create-nuxt-app/issues/363)) ([b5a4417](https://github.com/nuxt/create-nuxt-app/commit/b5a4417bcc56aa7e7fec571b3baf4161db63f634))

### [2.11.1](https://github.com/nuxt/create-nuxt-app/compare/v2.11.0...v2.11.1) (2019-09-30)


### Bug Fixes

* add prompts.js into npm package ([#352](https://github.com/nuxt/create-nuxt-app/issues/352)) ([fef1a2e](https://github.com/nuxt/create-nuxt-app/commit/fef1a2e))

## [2.11.0](https://github.com/nuxt/create-nuxt-app/compare/v2.10.1...v2.11.0) (2019-09-30)


### Bug Fixes

* **tests:** update babel config for ava ([#342](https://github.com/nuxt/create-nuxt-app/issues/342)) ([a257561](https://github.com/nuxt/create-nuxt-app/commit/a257561))
* update snapshots ([10ad76f](https://github.com/nuxt/create-nuxt-app/commit/10ad76f))


### Features

* Add e2e testing support using Ava ([#303](https://github.com/nuxt/create-nuxt-app/issues/303)) ([4d8fe95](https://github.com/nuxt/create-nuxt-app/commit/4d8fe95))
* add support for semantic-pull-requests ([#322](https://github.com/nuxt/create-nuxt-app/issues/322)) ([5af63c0](https://github.com/nuxt/create-nuxt-app/commit/5af63c0))
* answers option ([#347](https://github.com/nuxt/create-nuxt-app/issues/347)) ([75db75e](https://github.com/nuxt/create-nuxt-app/commit/75db75e))
* bump `bootstrap-vue` to v2.0.0 stable ([#334](https://github.com/nuxt/create-nuxt-app/issues/334)) ([38af656](https://github.com/nuxt/create-nuxt-app/commit/38af656))

### [2.10.1](https://github.com/nuxt/create-nuxt-app/compare/v2.10.0...v2.10.1) (2019-08-31)


### Bug Fixes

* use framevuerk-nuxt.min.css in framevuerk ([1b5713b](https://github.com/nuxt/create-nuxt-app/commit/1b5713b))

# [2.10.0](https://github.com/nuxt/create-nuxt-app/compare/v2.9.2...v2.10.0) (2019-08-21)


### Bug Fixes

* comment vuetify/variables.scss with doc link ([#318](https://github.com/nuxt/create-nuxt-app/issues/318)) ([e4f1d64](https://github.com/nuxt/create-nuxt-app/commit/e4f1d64))
* rename devModules to buildModules ([9d9c962](https://github.com/nuxt/create-nuxt-app/commit/9d9c962))


### Features

* add alias (@/~) support in ava tests ([#304](https://github.com/nuxt/create-nuxt-app/issues/304)) ([499e852](https://github.com/nuxt/create-nuxt-app/commit/499e852))
* add jsconfig.json file for VS Code users ([#277](https://github.com/nuxt/create-nuxt-app/issues/277)) ([3fee8e1](https://github.com/nuxt/create-nuxt-app/commit/3fee8e1))



## [2.9.2](https://github.com/nuxt/create-nuxt-app/compare/v2.9.1...v2.9.2) (2019-08-05)


### Bug Fixes

* lint-staged should only check staged files ([b516d23](https://github.com/nuxt/create-nuxt-app/commit/b516d23))
* updgrade @nuxtjs/pwa to v3 ([#216](https://github.com/nuxt/create-nuxt-app/issues/216)) ([de66e4e](https://github.com/nuxt/create-nuxt-app/commit/de66e4e))



## [2.9.1](https://github.com/nuxt/create-nuxt-app/compare/v2.9.0...v2.9.1) (2019-08-04)


### Bug Fixes

* cannot find module babel-core ([#310](https://github.com/nuxt/create-nuxt-app/issues/310)) ([cf1dbde](https://github.com/nuxt/create-nuxt-app/commit/cf1dbde))
* framevuerk error ([250c6e1](https://github.com/nuxt/create-nuxt-app/commit/250c6e1))
* ignore vim swap files ([#263](https://github.com/nuxt/create-nuxt-app/issues/263)) ([2ff7b11](https://github.com/nuxt/create-nuxt-app/commit/2ff7b11))
* remove unnecessary nodemon in devDependencies ([#309](https://github.com/nuxt/create-nuxt-app/issues/309)) ([cddccd6](https://github.com/nuxt/create-nuxt-app/commit/cddccd6))


### Features

* upgrade eslint-module ([#300](https://github.com/nuxt/create-nuxt-app/issues/300)) ([b61e88e](https://github.com/nuxt/create-nuxt-app/commit/b61e88e))



# [2.9.0](https://github.com/nuxt/create-nuxt-app/compare/v2.8.0...v2.9.0) (2019-07-26)


### Bug Fixes

* Adonis commands always running nuxt build ([#268](https://github.com/nuxt/create-nuxt-app/issues/268)) ([d38aa96](https://github.com/nuxt/create-nuxt-app/commit/d38aa96))
* Duplicate key 'devModules' ([#273](https://github.com/nuxt/create-nuxt-app/issues/273)) ([e7ef3a9](https://github.com/nuxt/create-nuxt-app/commit/e7ef3a9))
* prettier error in vuetify ([#281](https://github.com/nuxt/create-nuxt-app/issues/281)) ([b7756a2](https://github.com/nuxt/create-nuxt-app/commit/b7756a2))


### Features

* add --verbose cli flag ([0d964e2](https://github.com/nuxt/create-nuxt-app/commit/0d964e2))
* add alias for --edge and --info ([7d0522d](https://github.com/nuxt/create-nuxt-app/commit/7d0522d))
* add UI framework Framevuerk ([#291](https://github.com/nuxt/create-nuxt-app/issues/291)) ([db8441e](https://github.com/nuxt/create-nuxt-app/commit/db8441e))
* lint git staged files ([#269](https://github.com/nuxt/create-nuxt-app/issues/269)) ([1760f6a](https://github.com/nuxt/create-nuxt-app/commit/1760f6a))
* replace tailwind with @nuxtjs/tailwindcss ([#254](https://github.com/nuxt/create-nuxt-app/issues/254)) ([5d0c6ff](https://github.com/nuxt/create-nuxt-app/commit/5d0c6ff))
* upgrade Ava ([#284](https://github.com/nuxt/create-nuxt-app/issues/284)) ([54c29ff](https://github.com/nuxt/create-nuxt-app/commit/54c29ff))
* upgrade vuetify to 2.x ([#297](https://github.com/nuxt/create-nuxt-app/issues/297)) ([f735b63](https://github.com/nuxt/create-nuxt-app/commit/f735b63))
* **chore:** included a dedicated option to show up envinfo ([#272](https://github.com/nuxt/create-nuxt-app/issues/272)) ([d2917a9](https://github.com/nuxt/create-nuxt-app/commit/d2917a9))
* **cli:** use cac for cli ([#264](https://github.com/nuxt/create-nuxt-app/issues/264)) ([b80fa2d](https://github.com/nuxt/create-nuxt-app/commit/b80fa2d))



# [2.8.0](https://github.com/nuxt/create-nuxt-app/compare/v2.7.1...v2.8.0) (2019-06-24)


### Bug Fixes

* iview UI package version match ([#265](https://github.com/nuxt/create-nuxt-app/issues/265)) ([e547353](https://github.com/nuxt/create-nuxt-app/commit/e547353))


### Features

* move linting tool to separete prompt ([a6a4ac9](https://github.com/nuxt/create-nuxt-app/commit/a6a4ac9))



## [2.7.1](https://github.com/nuxt/create-nuxt-app/compare/v2.7.0...v2.7.1) (2019-06-06)


### Bug Fixes

* undefined colors vuetify errors in nuxt.config.js ([650fe6c](https://github.com/nuxt/create-nuxt-app/commit/650fe6c))



# [2.7.0](https://github.com/nuxt/create-nuxt-app/compare/v2.6.0...v2.7.0) (2019-06-06)


### Bug Fixes

* **antd-ui:** register plugin only once ([#233](https://github.com/nuxt/create-nuxt-app/issues/233)) ([afe1c6c](https://github.com/nuxt/create-nuxt-app/commit/afe1c6c))
* **element:** register element UI only once ([#232](https://github.com/nuxt/create-nuxt-app/issues/232)) ([7e533dd](https://github.com/nuxt/create-nuxt-app/commit/7e533dd))
* **iview:** register plugin only once ([#234](https://github.com/nuxt/create-nuxt-app/issues/234)) ([7ab985d](https://github.com/nuxt/create-nuxt-app/commit/7ab985d))


### Features

* **hapi:** upgrade to hapi 18 ([#231](https://github.com/nuxt/create-nuxt-app/issues/231)) ([3112b75](https://github.com/nuxt/create-nuxt-app/commit/3112b75))
* **vuetify:** use vuetify module ([#225](https://github.com/nuxt/create-nuxt-app/issues/225)) ([1c8d944](https://github.com/nuxt/create-nuxt-app/commit/1c8d944))
* upgrade tailwindcss to v1 ([#237](https://github.com/nuxt/create-nuxt-app/issues/237)) ([b429533](https://github.com/nuxt/create-nuxt-app/commit/b429533))



# [2.6.0](https://github.com/nuxt/create-nuxt-app/compare/v2.5.1...v2.6.0) (2019-03-13)


### Bug Fixes

* disable no cjs rule ([#203](https://github.com/nuxt/create-nuxt-app/issues/203)) ([9e29192](https://github.com/nuxt/create-nuxt-app/commit/9e29192))


### Features

* use ESM syntax for Nuxt config ([#195](https://github.com/nuxt/create-nuxt-app/issues/195)) ([4f9706f](https://github.com/nuxt/create-nuxt-app/commit/4f9706f))



## [2.5.1](https://github.com/nuxt/create-nuxt-app/compare/v2.5.0...v2.5.1) (2019-03-06)



# [2.5.0](https://github.com/nuxt/create-nuxt-app/compare/v2.4.3...v2.5.0) (2019-03-06)


### Bug Fixes

* add coverage config to jest setup ([#198](https://github.com/nuxt/create-nuxt-app/issues/198)) ([85a29ec](https://github.com/nuxt/create-nuxt-app/commit/85a29ec))
* initial value of Express host and port ([#202](https://github.com/nuxt/create-nuxt-app/issues/202)) ([84110e2](https://github.com/nuxt/create-nuxt-app/commit/84110e2))


### Features

* add eslint nuxt plugin ([#199](https://github.com/nuxt/create-nuxt-app/issues/199)) ([730e6a0](https://github.com/nuxt/create-nuxt-app/commit/730e6a0))
