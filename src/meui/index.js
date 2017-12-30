import './stylus/index.styl';

import {Layout} from './components/layout';
import {TabBar, TabBarItem} from './components/tabbar'

const install = function (Vue) {
  Vue.component(Layout.name, Layout);
  Vue.component(TabBar.name, TabBar);
  Vue.component(TabBarItem.name, TabBarItem)
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
