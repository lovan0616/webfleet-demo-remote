module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/variables.scss";
        @import "~@/assets/mixin.scss";
        `
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/webfleet-demo-remote/'
    : '/'
}