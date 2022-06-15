const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: "3010",
    proxy: {
      '/api/':{
        target: 'http://localhost:3001'
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // scss 引入全局变量
        additionalData: `@import "~@/stylesheet/define.scss";`
      }
    }
  },
  chainWebpack: config =>{
    config
      .plugin("html")
      .tap(args=>{
        args[0].title = "BTFBLOG"
        return args
      })
  
  }
})
