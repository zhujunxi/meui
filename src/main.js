import Vue from 'vue'
import App from './App'
import router from './router'

import MEUI from './meui';

import FastClick from 'fastclick'
// FastClick.attach(document.body)

Vue.use(MEUI);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
