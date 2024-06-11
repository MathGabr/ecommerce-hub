const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// vue.config.js
module.exports = {
  devServer: {
    https: true,
  },
};
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ecommerce-hub/' : '/',
};

