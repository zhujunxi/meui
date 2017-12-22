import Vue from 'vue'
import App from './App'
import router from './router'

import MEUI from './meui';
console.log(MEUI);

Vue.use(MEUI);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
