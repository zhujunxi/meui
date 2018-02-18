import './stylus/index.styl';

import {Toast, Modal} from './components/dialog';
import {Layout} from './components/layout';
import {NavBar} from './components/navbar';
import {TabBar, TabBarItem} from './components/tabbar';
import {CellGroup, CellItem} from './components/cell';
import {Switch} from './components/switch';
import {Button} from './components/button';
import {Input} from './components/input';
import {Textarea} from './components/textarea';
import {Select} from './components/select';

const install = function (Vue) {
  Vue.component(Layout.name, Layout);
  Vue.component(NavBar.name, NavBar);
  Vue.component(TabBar.name, TabBar);
  Vue.component(TabBarItem.name, TabBarItem);
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(CellItem.name, CellItem);

  Vue.component(Switch.name, Switch);
  Vue.component(Button.name, Button);
  Vue.component(Input.name, Input);
  Vue.component(Textarea.name, Textarea);
  Vue.component(Select.name, Select);

  // Vue.prototype.$dialog = {
  //   toast: Toast
  // }
  window.me = {
    showToast: Toast,
    showModal: Modal,
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
