import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './pages/Home';
import Post from './pages/Post';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:slug',
      component: Post,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
