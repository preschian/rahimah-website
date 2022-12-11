module.exports = {
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  axios: {
    // proxyHeaders: false
  },
  css: ['@/assets/css/style.scss'],
  env: {
    api:
      process.env.API_ENDPOINT,
  },
  pwa: {
    manifest: {
      name: 'Rahimah Muslihah',
      short_name: '@imawrr',
      lang: 'id',
    },
  },
};
