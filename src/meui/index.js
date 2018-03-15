import './stylus/index.styl';

import {Layout} from './components/layout';
import {NavBar} from './components/navbar';
import {TabBar, TabBarItem} from './components/tabbar';
import {CellGroup, CellItem} from './components/cell';

import {Scroll} from './components/scroll';

import {Switch} from './components/switch';
import {Button} from './components/button';
import {Input} from './components/input';
import {Textarea} from './components/textarea';
import {Select} from './components/select';

import {Toast, Modal, Loading} from './components/dialog';
import ActionSheet from './components/actionsheet';

import {CityPicker} from './components/cityPicker';

import {Tab, TabItem} from './components/tab';
import {Popup} from './components/popup';
import {Swiper} from './components/swiper';
import PreviewImage from './components/previewImage';

import {InputNumber} from './components/inputNumber';

const install = function (Vue) {
  Vue.component(Layout.name, Layout);
  Vue.component(NavBar.name, NavBar);
  Vue.component(TabBar.name, TabBar);
  Vue.component(TabBarItem.name, TabBarItem);
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(CellItem.name, CellItem);

  Vue.component(Scroll.name, Scroll);

  Vue.component(Switch.name, Switch);
  Vue.component(Button.name, Button);
  Vue.component(Input.name, Input);
  Vue.component(Textarea.name, Textarea);
  Vue.component(Select.name, Select);

  Vue.component(CityPicker.name, CityPicker);

  Vue.component(Tab.name, Tab);
  Vue.component(TabItem.name, TabItem);
  Vue.component(Popup.name, Popup);
  Vue.component(Swiper.name, Swiper);

  Vue.component(InputNumber.name, InputNumber);

  // Vue.component(ActionSheet.name, ActionSheet);

  // Vue.prototype.$dialog = {
  //   toast: Toast
  // }

  window.me = {
    showToast: Toast,
    showModal: Modal,
    showLoading: Loading.open,
    hideLoading: Loading.close,
    showActionSheet: ActionSheet.open,

    previewImage:PreviewImage.open,
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
