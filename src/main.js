import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js';
import App from './App'
import router from './router'

import MEUI from './meui';

import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.use(VueHighlightJS);
Vue.use(MEUI);

import 'highlight.js/styles/default.css';
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
