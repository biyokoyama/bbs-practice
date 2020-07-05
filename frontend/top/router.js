import Vue from 'vue';
import VueRouter from 'vue-router';

import indexPage from './pages/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: indexPage }
  ]
});

export default router;
