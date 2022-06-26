const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8010,
      host: '127.0.0.1'
    },
    resolve: {
      alias: {
        '#': path.join(__dirname, 'src/components/')
      }
    }
  }
})
