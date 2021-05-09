const registerRouter = require('./backend/router');
const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  devServer: {
    before(app) {
      registerRouter(app);
    },
    port: '8080',
  },
  configureWebpack: (config) => {
    if (process.env.npm_config_report) {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('components', path.join(__dirname, 'src/components'))
      .set('mixins', path.join(__dirname, 'src/mixins'))
      .set('store', path.join(__dirname, 'src/store'));
  },
};
