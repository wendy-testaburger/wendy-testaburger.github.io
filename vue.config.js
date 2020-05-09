module.exports = {
    css: {
      loaderOptions: {   
        scss: {
            prependData: ` @import "@/assets/styles/_variables.scss";`
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/wendy-testaburger.github.io/'
    : '/'
  };
