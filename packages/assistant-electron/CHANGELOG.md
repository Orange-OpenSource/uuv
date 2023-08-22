# [1.8.0](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.7.3...assistant-electron-v1.8.0) (2023-08-22)


### Bug Fixes

* prototype pollution in lodash - cve-2019-10744, [#219](https://github.com/Orange-OpenSource/uuv/issues/219) ([4b16741](https://github.com/Orange-OpenSource/uuv/commit/4b16741d53f814958ad0ee6d761e82d92374e5e8))


### Features

* **runner-playwright:** add locationHint for testLocation via teamcity, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([d44dd9a](https://github.com/Orange-OpenSource/uuv/commit/d44dd9ae13e662e623391d43552b28c54ea465f1))
* **runner-playwright:** add targetTestFile to run specific file, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([5d58b1e](https://github.com/Orange-OpenSource/uuv/commit/5d58b1ea7d4bddbc1675ec8e15455a06278957ff))
* **runner-playwright:** add teamcity trace for IntelliJ Plugin, [#195](https://github.com/Orange-OpenSource/uuv/issues/195) ([0d6b775](https://github.com/Orange-OpenSource/uuv/commit/0d6b7752ab26ffc4eaf8fe6a70fa60210ee747e8))

## [1.7.3](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.7.2...assistant-electron-v1.7.3) (2023-08-21)


### Bug Fixes

* **runner-playwright:** use exact match while calling getByLabel, closes [#205](https://github.com/Orange-OpenSource/uuv/issues/205) ([d499b41](https://github.com/Orange-OpenSource/uuv/commit/d499b4138c01d072c251822e42a3d1b16b3cd7bb))

## [1.7.2](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.7.1...assistant-electron-v1.7.2) (2023-08-17)


### Bug Fixes

* accept cucumber Rule keyword when generate json from ndjson for … ([#207](https://github.com/Orange-OpenSource/uuv/issues/207)) ([05bc903](https://github.com/Orange-OpenSource/uuv/commit/05bc90342ea2f7149109b5a12e428b04237bf00b))
* **runner-cypress:** relocate cypress-real-events dependency into project package.json, [#213](https://github.com/Orange-OpenSource/uuv/issues/213) ([ffca8dd](https://github.com/Orange-OpenSource/uuv/commit/ffca8dd21d3858d0020f6bf1974437bbf38fe6c4))

## [1.7.1](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.7.0...assistant-electron-v1.7.1) (2023-08-09)


### Bug Fixes

* **deps:** update dependency cypress to v12.17.3 ([35c812b](https://github.com/Orange-OpenSource/uuv/commit/35c812bdabd1a3a2d27e972d3bb5c9323497c449))

# [1.7.0](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.6.1...assistant-electron-v1.7.0) (2023-07-31)


### Bug Fixes

* correct link markdown not formated, [#164](https://github.com/Orange-OpenSource/uuv/issues/164) ([470e6b6](https://github.com/Orange-OpenSource/uuv/commit/470e6b6b07ef43261d14b0e8986cac304daf29d8))


### Features

* add accessibility sentences, [#164](https://github.com/Orange-OpenSource/uuv/issues/164) ([e55b2c6](https://github.com/Orange-OpenSource/uuv/commit/e55b2c647bec100294794fe34dabe582d2561643))
* add accessibility tab and arrows, [#166](https://github.com/Orange-OpenSource/uuv/issues/166) ([9b926cd](https://github.com/Orange-OpenSource/uuv/commit/9b926cd322049860a5f06810027dbeb7efe6d795))
* use accessibility sentences on playwright, [#164](https://github.com/Orange-OpenSource/uuv/issues/164) ([b273e84](https://github.com/Orange-OpenSource/uuv/commit/b273e842a1a6b82f1a9c707187aa3d176b7fcabc))

## [1.6.1](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.6.0...assistant-electron-v1.6.1) (2023-07-30)


### Bug Fixes

* **deps:** update dependency @cucumber/cucumber to v9.3.0 ([212250b](https://github.com/Orange-OpenSource/uuv/commit/212250be47e040e34de18af33986a1f26f7b00a2))
* **deps:** update dependency @cypress/webpack-preprocessor to v5.17.1 ([9570e56](https://github.com/Orange-OpenSource/uuv/commit/9570e5689387a2c770994576d779a34ff242ca76))
* **deps:** update dependency antd to v5.7.3 ([452fc3c](https://github.com/Orange-OpenSource/uuv/commit/452fc3c3861509e8aba46b3efa248f365bbfb747))
* **deps:** update dependency axe-core to v4.7.2 ([965b9dc](https://github.com/Orange-OpenSource/uuv/commit/965b9dcb1445c369c770ed056ab990e3f966197b))
* **deps:** update dependency cypress to v12.17.2 ([49a3012](https://github.com/Orange-OpenSource/uuv/commit/49a3012f7ebf0e6ecc879d21ff86147938967607))
* **deps:** update dependency nanoid to v3.3.6 ([82fa0c3](https://github.com/Orange-OpenSource/uuv/commit/82fa0c31207a9004a8b365fe0e92fcaac38e1be3))
* **deps:** update docusaurus monorepo to v2.4.1 ([9c0f5fb](https://github.com/Orange-OpenSource/uuv/commit/9c0f5fb6a641f54fc97d0940acfebdfb5106a790))

# [1.6.0](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.5.1...assistant-electron-v1.6.0) (2023-07-18)


### Bug Fixes

* **runner-playwright:** replace encoded space character, fixes [#139](https://github.com/Orange-OpenSource/uuv/issues/139) ([6fbc533](https://github.com/Orange-OpenSource/uuv/commit/6fbc533a19abe7ed2ec6cd720709ce2bc3ee7283))


### Features

* add assistant-desktop to several docs, closes [#144](https://github.com/Orange-OpenSource/uuv/issues/144) ([61dd396](https://github.com/Orange-OpenSource/uuv/commit/61dd3961fb5b8ca40e72762baf7b326686171788))
* improve assistant-electron design, [#138](https://github.com/Orange-OpenSource/uuv/issues/138) ([7cdf9b7](https://github.com/Orange-OpenSource/uuv/commit/7cdf9b775cf58b2f29e37f4762d39bb8d924d2d2))

# [1.6.0](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.5.1...assistant-electron-v1.6.0) (2023-07-17)


### Bug Fixes

* **runner-playwright:** replace encoded space character, fixes [#139](https://github.com/Orange-OpenSource/uuv/issues/139) ([6fbc533](https://github.com/Orange-OpenSource/uuv/commit/6fbc533a19abe7ed2ec6cd720709ce2bc3ee7283))


### Features

* add assistant-desktop to several docs, closes [#144](https://github.com/Orange-OpenSource/uuv/issues/144) ([61dd396](https://github.com/Orange-OpenSource/uuv/commit/61dd3961fb5b8ca40e72762baf7b326686171788))

## [1.5.1](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.5.0...assistant-electron-v1.5.1) (2023-07-03)


### Bug Fixes

* **assistant:** retrieve version from conf.json fixes [#135](https://github.com/Orange-OpenSource/uuv/issues/135) ([6c19608](https://github.com/Orange-OpenSource/uuv/commit/6c19608beb7ac107e969a95e1242f3997da10eb8))

# [1.5.0](https://github.com/Orange-OpenSource/uuv/compare/assistant-electron-v1.4.3...assistant-electron-v1.5.0) (2023-07-02)


### Bug Fixes

* **assistant:** moving test app in component ([5bdc75b](https://github.com/Orange-OpenSource/uuv/commit/5bdc75b9ae4aec75f7a944513af0d57a4107cefd))
* chevron rotation and selection not works, [#132](https://github.com/Orange-OpenSource/uuv/issues/132) ([d429297](https://github.com/Orange-OpenSource/uuv/commit/d429297b6dbc1f36a4d7478856bc7774ac1a812a))


### Features

* **assistant:** setting up electron, fixes [#132](https://github.com/Orange-OpenSource/uuv/issues/132) ([6d6e99c](https://github.com/Orange-OpenSource/uuv/commit/6d6e99cbbdb498e1d5f24a0386e52ae38fa1b161))
* setup assistant-electron package, [#132](https://github.com/Orange-OpenSource/uuv/issues/132) ([76d69c2](https://github.com/Orange-OpenSource/uuv/commit/76d69c2b5d311b40cb42c9511d224d7911133e10))
