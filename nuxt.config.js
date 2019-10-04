module.exports = {
  modules: ['@nuxtjs/axios'],
  axios: {
    // proxyHeaders: false
  },
  css: ['@/assets/css/style.scss'],
  env: {
    api:
      'https://public-api.wordpress.com/rest/v1.2/sites/imawrr27.wordpress.com',
  },
};
