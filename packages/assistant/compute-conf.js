const replaceJSONProperty = require('replace-json-property');
const fs = require('fs');

const buildAssetManifest = require('./build/asset-manifest.json');

const destConfFile = './dist/launcher/conf.json';
fs.copyFileSync('./launcher/conf.json', destConfFile);

replaceJSONProperty.replace(destConfFile, 'reactScript', `/../../build${buildAssetManifest.files["main.js"]}`);
replaceJSONProperty.replace(destConfFile, 'cssFile', `/../../build${buildAssetManifest.files["main.css"]}`);
