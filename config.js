/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
   //  'sprite-svg',
    // 'sprite-png',
   // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './fslightbox.js',
    './fullpage.js',
    './script.js',
  ],
  'addAssets': {
    'src/fonts/SBSansText-Bold.woff2': 'fonts/',
    'src/fonts/SBSansText-Regular.woff2': 'fonts/',
    'src/fonts/SBSansText-Medium.woff2': 'fonts/',
    'src/fonts/SBSansText-Light.woff2': 'fonts/',
    'src/fonts/SBSansDisplay-Regular.woff2': 'fonts/',
    'src/fonts/SBSansDisplay-Light.woff2': 'fonts/',
    'src/fonts/SBSansDisplay-Bold.woff2': 'fonts/',
    'src/img/*.{png,svg,jpg,jpeg}': 'img/',
    'src/img/docs/*.{png,svg,jpg,jpeg}': 'img/docs/',
    'src/img/authors/*.{png,svg,jpg,jpeg}': 'img/authors/',
    'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
