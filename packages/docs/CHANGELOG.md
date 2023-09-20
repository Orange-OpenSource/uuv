# [1.11.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.10.0...docs-v1.11.0) (2023-09-20)


### Bug Fixes

* **deps:** update dependency cypress-real-events to v1.10.3 ([9e3c991](https://github.com/Orange-OpenSource/uuv/commit/9e3c9914420c6d527f7ad8b0017a0f8e26250f86))


### Features

* **runner-playwright:** regenerate .spec when update, add or remove a .feature in open mode, [#236](https://github.com/Orange-OpenSource/uuv/issues/236) ([8a2599a](https://github.com/Orange-OpenSource/uuv/commit/8a2599a3fa4e577b9e626929537f2cc5f8e57bcc))

# [1.10.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.9.2...docs-v1.10.0) (2023-09-11)


### Bug Fixes

* **deps:** update dependency cypress to v12.17.4 ([998b754](https://github.com/Orange-OpenSource/uuv/commit/998b754038941de8b035abbd47800d45b1dac022))
* **deps:** update dependency cypress-real-events to v1.10.1 ([f60978d](https://github.com/Orange-OpenSource/uuv/commit/f60978da4bdd76483bcb2479324ccbbf3b36d87b))


### Features

* add sentences to click on element and reset context, [#250](https://github.com/Orange-OpenSource/uuv/issues/250) ([347e327](https://github.com/Orange-OpenSource/uuv/commit/347e327bdfc5c6befc3a58a2c880bea3b0c8400c))
* **docs:** add autocompletion searchfield to steps definition page, [#255](https://github.com/Orange-OpenSource/uuv/issues/255) ([a0323ee](https://github.com/Orange-OpenSource/uuv/commit/a0323eec01a6351f9b60399398d145cb2bc86779))
* update assistant click event, [#250](https://github.com/Orange-OpenSource/uuv/issues/250) ([2ba4c16](https://github.com/Orange-OpenSource/uuv/commit/2ba4c1629b0ad965af72ffb0dd00f9b50748c2bf))
* update example test files, [#250](https://github.com/Orange-OpenSource/uuv/issues/250) ([ffc15b5](https://github.com/Orange-OpenSource/uuv/commit/ffc15b5a66ee7d3712541722228f53b692c7a1ab))

## [1.9.2](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.9.1...docs-v1.9.2) (2023-08-31)


### Bug Fixes

* **runner-cypress:** call badeball preprecessor befor teamcity logs, [#239](https://github.com/Orange-OpenSource/uuv/issues/239) ([f12ae26](https://github.com/Orange-OpenSource/uuv/commit/f12ae261e71d4662ea0cc7b3a2cbcd32344a19b2))
* **runner-cypress:** return error code when an error occured, [#239](https://github.com/Orange-OpenSource/uuv/issues/239) ([fbc8b97](https://github.com/Orange-OpenSource/uuv/commit/fbc8b97eacef535356e479a7d87fdf2e16df1549))

## [1.9.1](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.9.0...docs-v1.9.1) (2023-08-31)


### Bug Fixes

* **runner-cypress:** check if testsuite is not already started, [#232](https://github.com/Orange-OpenSource/uuv/issues/232) ([a8d373f](https://github.com/Orange-OpenSource/uuv/commit/a8d373f58e81db799cd7e88eaac54fb98c74eba0))
* **runner-playwright:** adapt color of skipped scenario in console, # 215 ([51d30c7](https://github.com/Orange-OpenSource/uuv/commit/51d30c7b827f39dacd7512aad6564d7bfbfefcbc))
* **runner-playwright:** remove skipped steps in counter of scenario skipped, # 215 ([f077f4c](https://github.com/Orange-OpenSource/uuv/commit/f077f4c93c72186f06c882174c9f4afe57b97545))

# [1.9.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.8.0...docs-v1.9.0) (2023-08-25)


### Bug Fixes

* **docs:** clean french description ([41001d4](https://github.com/Orange-OpenSource/uuv/commit/41001d423390a7be324d115e0759d43d8475fbbf))
* **intellij-plugin:** manage result.test null case, closes [#228](https://github.com/Orange-OpenSource/uuv/issues/228) ([996982f](https://github.com/Orange-OpenSource/uuv/commit/996982fbc37016012fdff00bef24aad0ab69c8a0))


### Features

* **docs:** add documentation for [@uuv-playwright](https://github.com/uuv-playwright) custom step_definition, # 216 ([7af74b3](https://github.com/Orange-OpenSource/uuv/commit/7af74b314d27aeac4bcc72951fdf6851ac34f201))

# [1.8.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.7.3...docs-v1.8.0) (2023-08-22)


### Bug Fixes

* prototype pollution in lodash - cve-2019-10744, [#219](https://github.com/Orange-OpenSource/uuv/issues/219) ([4b16741](https://github.com/Orange-OpenSource/uuv/commit/4b16741d53f814958ad0ee6d761e82d92374e5e8))


### Features

* **runner-cypress:** add locationHint for testLocation via teamcity, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([9bb51c6](https://github.com/Orange-OpenSource/uuv/commit/9bb51c6be8984b004d89fac32668ae5cb2e43edb))
* **runner-cypress:** add targetTestFile to run specific file, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([daa2c4c](https://github.com/Orange-OpenSource/uuv/commit/daa2c4c9fe503e345455fcab352cee2f939b0fc9))
* **runner-cypress:** add teamcity trace for IntelliJ Plugin, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([2a134c0](https://github.com/Orange-OpenSource/uuv/commit/2a134c0c67a01fd18ec3a142a2c42738eac86732))
* **runner-playwright:** add locationHint for testLocation via teamcity, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([d44dd9a](https://github.com/Orange-OpenSource/uuv/commit/d44dd9ae13e662e623391d43552b28c54ea465f1))
* **runner-playwright:** add targetTestFile to run specific file, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([5d58b1e](https://github.com/Orange-OpenSource/uuv/commit/5d58b1ea7d4bddbc1675ec8e15455a06278957ff))
* **runner-playwright:** add teamcity trace for IntelliJ Plugin, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([0d6b775](https://github.com/Orange-OpenSource/uuv/commit/0d6b7752ab26ffc4eaf8fe6a70fa60210ee747e8))

## [1.7.3](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.7.2...docs-v1.7.3) (2023-08-21)


### Bug Fixes

* **runner-playwright:** use exact match while calling getByLabel, closes [#205](https://github.com/Orange-OpenSource/uuv/issues/205) ([d499b41](https://github.com/Orange-OpenSource/uuv/commit/d499b4138c01d072c251822e42a3d1b16b3cd7bb))

## [1.7.2](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.7.1...docs-v1.7.2) (2023-08-17)


### Bug Fixes

* accept cucumber Rule keyword when generate json from ndjson for … ([#207](https://github.com/Orange-OpenSource/uuv/issues/207)) ([05bc903](https://github.com/Orange-OpenSource/uuv/commit/05bc90342ea2f7149109b5a12e428b04237bf00b))
* **runner-cypress:** relocate cypress-real-events dependency into project package.json, [#213](https://github.com/Orange-OpenSource/uuv/issues/213) ([ffca8dd](https://github.com/Orange-OpenSource/uuv/commit/ffca8dd21d3858d0020f6bf1974437bbf38fe6c4))

## [1.7.1](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.7.0...docs-v1.7.1) (2023-08-09)


### Bug Fixes

* **deps:** update dependency cypress to v12.17.3 ([35c812b](https://github.com/Orange-OpenSource/uuv/commit/35c812bdabd1a3a2d27e972d3bb5c9323497c449))

# [1.7.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.6.1...docs-v1.7.0) (2023-07-31)


### Bug Fixes

* correct link markdown not formated, [#164](https://github.com/Orange-OpenSource/uuv/issues/164) ([470e6b6](https://github.com/Orange-OpenSource/uuv/commit/470e6b6b07ef43261d14b0e8986cac304daf29d8))


### Features

* add accessibility sentences, [#164](https://github.com/Orange-OpenSource/uuv/issues/164) ([e55b2c6](https://github.com/Orange-OpenSource/uuv/commit/e55b2c647bec100294794fe34dabe582d2561643))
* add accessibility tab and arrows, [#166](https://github.com/Orange-OpenSource/uuv/issues/166) ([9b926cd](https://github.com/Orange-OpenSource/uuv/commit/9b926cd322049860a5f06810027dbeb7efe6d795))
* use accessibility sentences on cypress, [#164](https://github.com/Orange-OpenSource/uuv/issues/164) ([38fefc5](https://github.com/Orange-OpenSource/uuv/commit/38fefc5286cfd16c9693b8f6b0922679c1a9ca05))
* use accessibility sentences on playwright, [#164](https://github.com/Orange-OpenSource/uuv/issues/164) ([b273e84](https://github.com/Orange-OpenSource/uuv/commit/b273e842a1a6b82f1a9c707187aa3d176b7fcabc))

## [1.6.1](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.6.0...docs-v1.6.1) (2023-07-30)


### Bug Fixes

* **deps:** update dependency @cucumber/cucumber to v9.3.0 ([212250b](https://github.com/Orange-OpenSource/uuv/commit/212250be47e040e34de18af33986a1f26f7b00a2))
* **deps:** update dependency @cypress/webpack-preprocessor to v5.17.1 ([9570e56](https://github.com/Orange-OpenSource/uuv/commit/9570e5689387a2c770994576d779a34ff242ca76))
* **deps:** update dependency antd to v5.7.3 ([452fc3c](https://github.com/Orange-OpenSource/uuv/commit/452fc3c3861509e8aba46b3efa248f365bbfb747))
* **deps:** update dependency axe-core to v4.7.2 ([965b9dc](https://github.com/Orange-OpenSource/uuv/commit/965b9dcb1445c369c770ed056ab990e3f966197b))
* **deps:** update dependency cypress to v12.17.2 ([49a3012](https://github.com/Orange-OpenSource/uuv/commit/49a3012f7ebf0e6ecc879d21ff86147938967607))
* **deps:** update dependency nanoid to v3.3.6 ([82fa0c3](https://github.com/Orange-OpenSource/uuv/commit/82fa0c31207a9004a8b365fe0e92fcaac38e1be3))
* **deps:** update docusaurus monorepo to v2.4.1 ([9c0f5fb](https://github.com/Orange-OpenSource/uuv/commit/9c0f5fb6a641f54fc97d0940acfebdfb5106a790))

# [1.6.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.5.1...docs-v1.6.0) (2023-07-18)


### Bug Fixes

* **runner-playwright:** replace encoded space character, fixes [#139](https://github.com/Orange-OpenSource/uuv/issues/139) ([6fbc533](https://github.com/Orange-OpenSource/uuv/commit/6fbc533a19abe7ed2ec6cd720709ce2bc3ee7283))


### Features

* add assistant-desktop to several docs, closes [#144](https://github.com/Orange-OpenSource/uuv/issues/144) ([61dd396](https://github.com/Orange-OpenSource/uuv/commit/61dd3961fb5b8ca40e72762baf7b326686171788))
* improve assistant-electron design, [#138](https://github.com/Orange-OpenSource/uuv/issues/138) ([7cdf9b7](https://github.com/Orange-OpenSource/uuv/commit/7cdf9b775cf58b2f29e37f4762d39bb8d924d2d2))

# [1.6.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.5.1...docs-v1.6.0) (2023-07-17)


### Bug Fixes

* **runner-playwright:** replace encoded space character, fixes [#139](https://github.com/Orange-OpenSource/uuv/issues/139) ([6fbc533](https://github.com/Orange-OpenSource/uuv/commit/6fbc533a19abe7ed2ec6cd720709ce2bc3ee7283))


### Features

* add assistant-desktop to several docs, closes [#144](https://github.com/Orange-OpenSource/uuv/issues/144) ([61dd396](https://github.com/Orange-OpenSource/uuv/commit/61dd3961fb5b8ca40e72762baf7b326686171788))

## [1.5.1](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.5.0...docs-v1.5.1) (2023-07-03)


### Bug Fixes

* **assistant:** retrieve version from conf.json fixes [#135](https://github.com/Orange-OpenSource/uuv/issues/135) ([6c19608](https://github.com/Orange-OpenSource/uuv/commit/6c19608beb7ac107e969a95e1242f3997da10eb8))

# [1.5.0](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.4.3...docs-v1.5.0) (2023-07-02)


### Bug Fixes

* **assistant:** moving test app in component ([5bdc75b](https://github.com/Orange-OpenSource/uuv/commit/5bdc75b9ae4aec75f7a944513af0d57a4107cefd))
* chevron rotation and selection not works, [#132](https://github.com/Orange-OpenSource/uuv/issues/132) ([d429297](https://github.com/Orange-OpenSource/uuv/commit/d429297b6dbc1f36a4d7478856bc7774ac1a812a))


### Features

* **assistant:** setting up electron, fixes [#132](https://github.com/Orange-OpenSource/uuv/issues/132) ([6d6e99c](https://github.com/Orange-OpenSource/uuv/commit/6d6e99cbbdb498e1d5f24a0386e52ae38fa1b161))
* setup assistant-electron package, [#132](https://github.com/Orange-OpenSource/uuv/issues/132) ([76d69c2](https://github.com/Orange-OpenSource/uuv/commit/76d69c2b5d311b40cb42c9511d224d7911133e10))

## [1.4.3](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.4.2...docs-v1.4.3) (2023-05-29)


### Bug Fixes

* **docs:** update concept page to add npmjs.com content, [#122](https://github.com/Orange-OpenSource/uuv/issues/122) ([71194e9](https://github.com/Orange-OpenSource/uuv/commit/71194e90d2fa0a10db872dd937c3771cabd31d45))
* fix playwright build, [#109](https://github.com/Orange-OpenSource/uuv/issues/109) ([c5ef9c9](https://github.com/Orange-OpenSource/uuv/commit/c5ef9c9185f228e35fcaa41363ebae6409a050c7))
* **runner-playwright:** add unsafe step_definitions for autocompletion, [#122](https://github.com/Orange-OpenSource/uuv/issues/122) ([b5dc1d0](https://github.com/Orange-OpenSource/uuv/commit/b5dc1d0063e506cc376f35d4f1fe1fc4c1d5ded0))
* **runner-playwright:** regenerate package-lock.json to fix lint, [#109](https://github.com/Orange-OpenSource/uuv/issues/109) ([70044df](https://github.com/Orange-OpenSource/uuv/commit/70044dfd9efb2c6776a85cadd18966610d2d61f2))

## [1.4.2](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.4.1...docs-v1.4.2) (2023-05-19)


### Bug Fixes

* fix example url in readme, [#100](https://github.com/Orange-OpenSource/uuv/issues/100) ([c0609dc](https://github.com/Orange-OpenSource/uuv/commit/c0609dc6eee36e842e3dc74095a338d48b5248cc))

## [1.4.1](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.4.0...docs-v1.4.1) (2023-05-19)


### Bug Fixes

* **assistant:** fix assistant css problem, [#120](https://github.com/Orange-OpenSource/uuv/issues/120) ([026d66a](https://github.com/Orange-OpenSource/uuv/commit/026d66ad6ad7e9090282f1734335c5a7b1e417c6))
* release 1.4.0 package.json and rchangelog was not updated, [#117](https://github.com/Orange-OpenSource/uuv/issues/117) ([cd7723d](https://github.com/Orange-OpenSource/uuv/commit/cd7723d6d790dd5fd928a5d9d41bfd075159378a))
* remove explicit plugin @semantic-release/git and just set commit message, [#117](https://github.com/Orange-OpenSource/uuv/issues/117) ([ac1f818](https://github.com/Orange-OpenSource/uuv/commit/ac1f8188cccbcb224acb15180cd0bd131aaa6cd1))

# [1.4.0](https://github.com/Orange-OpenSource/uuv/compare/assistant-v1.3.3...assistant-v1.4.0) (2023-05-16)

### Bug Fixes

* **assistant:** add benefit block, fixes [#112](https://github.com/Orange-OpenSource/uuv/issues/112) ([7017ef4](https://github.com/Orange-OpenSource/uuv/commit/7017ef4c4df5cdac6f9b336e21cc2680a4672587))
* **assistant:** restructure documentation, [#112](https://github.com/Orange-OpenSource/uuv/issues/112) ([a4a7496](https://github.com/Orange-OpenSource/uuv/commit/a4a7496411c5c46cbfdc3d59bc41d0d4043ec71d))

### Features

* **runner-playwright:** add error details and screenshot to report, fixes [#110](https://github.com/Orange-OpenSource/uuv/issues/110) ([3c4a3cd](https://github.com/Orange-OpenSource/uuv/commit/3c4a3cd192b90242dd07bbdc4bb3ece780ee0c40))

## [1.3.3](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.3.2...docs-v1.3.3) (2023-05-15)


### Bug Fixes

* **docs:** add seo keyword, fixes [#104](https://github.com/Orange-OpenSource/uuv/issues/104) ([f7ef1ee](https://github.com/Orange-OpenSource/uuv/commit/f7ef1eea4e44856aaa0331fdc7c984b7c74dc383))
* **docs:** fix package conf file, fixes [#105](https://github.com/Orange-OpenSource/uuv/issues/105) ([f544c05](https://github.com/Orange-OpenSource/uuv/commit/f544c0524124166794e9585f3d1cc8cbcf4eccde))
* **runner-playwright:** fix workspace lint during ci, [#108](https://github.com/Orange-OpenSource/uuv/issues/108) ([a3ac0d6](https://github.com/Orange-OpenSource/uuv/commit/a3ac0d68d27c34f36237b6f74b94e160b7cde9b8))

## [1.3.2](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.3.1...docs-v1.3.2) (2023-05-11)


### Bug Fixes

* **assistant:** modify doc for npmjs, fixes [#94](https://github.com/Orange-OpenSource/uuv/issues/94) ([c59f40c](https://github.com/Orange-OpenSource/uuv/commit/c59f40c6e55d060e7186fa45ac1109d42f5c6d58))
* **runner-cypress:** add lint script [#8](https://github.com/Orange-OpenSource/uuv/issues/8) ([78c43d1](https://github.com/Orange-OpenSource/uuv/commit/78c43d1406709953086793298132f8fb85e68ba8))
* **runner-cypress:** modify doc for npmjs [#94](https://github.com/Orange-OpenSource/uuv/issues/94) ([b7ba332](https://github.com/Orange-OpenSource/uuv/commit/b7ba332900081318984e495d563c1477ffacd801))
* **runner-playwright:** add lint script [#8](https://github.com/Orange-OpenSource/uuv/issues/8) ([0cd7451](https://github.com/Orange-OpenSource/uuv/commit/0cd7451a2bb73698e05aefc6c89be01c2ea41c96))
* **runner-playwright:** update @cucumber/cucumber dep version, [#93](https://github.com/Orange-OpenSource/uuv/issues/93) ([a891a70](https://github.com/Orange-OpenSource/uuv/commit/a891a70daad1cb5d7d34f25097a31d89f92b92c6))

## [1.3.1](https://github.com/Orange-OpenSource/uuv/compare/docs-v1.3.0...docs-v1.3.1) (2023-05-09)


### Bug Fixes

* **docs:** update documentation, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([ae93e66](https://github.com/Orange-OpenSource/uuv/commit/ae93e660a48f3330b3b5d2915927bd824fdb12de))
* **runner-commons:** fix npm documentation, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([ba7394c](https://github.com/Orange-OpenSource/uuv/commit/ba7394cd755e350fd5a5964aed26435e5979e77d))
* **runner-commons:** modify keyword for npmjs, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([392c4d0](https://github.com/Orange-OpenSource/uuv/commit/392c4d0337179dae2c2a96c26dc2cc32e0ad87b3))
* **runner-cypress:** fix npm documentation, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([1ccef97](https://github.com/Orange-OpenSource/uuv/commit/1ccef97182614635050defdccbe8838df2603247))
* **runner-cypress:** modify keyword for npmjs, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([080f82d](https://github.com/Orange-OpenSource/uuv/commit/080f82d92c376b0d30ee2fb3473a07d5fc1f0d73))
* **runner-cypress:** move webpack dep from devDeps to deps ([2e96fa7](https://github.com/Orange-OpenSource/uuv/commit/2e96fa77d8b9845d6df899603dee087aad13e8ef))
* **runner-playwright:** add `npx playwright install` into postinstall, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([035f6aa](https://github.com/Orange-OpenSource/uuv/commit/035f6aabb7d654eb45b789e73d63f118b628f9af))
* **runner-playwright:** fix npm documentation, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([716de44](https://github.com/Orange-OpenSource/uuv/commit/716de44456c50dcc4f52c3ed49f8fe48bf2f15b0))
* **runner-playwright:** modify doc for npmjs, [#87](https://github.com/Orange-OpenSource/uuv/issues/87) ([593e4ef](https://github.com/Orange-OpenSource/uuv/commit/593e4ef3d14df27b3770f17bac9ba9ba7f326f4a))
