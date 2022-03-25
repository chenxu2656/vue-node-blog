const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: "3010"
  },
  css: {
    loaderOptions: {
      scss: {
        // scss 引入全局变量
        additionalData: `@import "~@/stylesheet/define.scss";`
      }
    }
  }
})
