import Vue from 'vue';
import router from './router.js';

new Vue({
  el: '#entry-top',
  router: router,
  render(h) {
    return h('router-view')
  }
});
