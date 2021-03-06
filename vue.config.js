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
  }
}