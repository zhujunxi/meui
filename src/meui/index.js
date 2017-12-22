
import {Layout} from './components/layout';

const install = function (Vue) {
  Vue.component(Layout.name, Layout);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
