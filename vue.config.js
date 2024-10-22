const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// // vue.config.js
// const BrowserifyFs = require('browserify-fs');

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       fallback: {
//         fs: BrowserifyFs,
//       },
//     },
//   },
// };
