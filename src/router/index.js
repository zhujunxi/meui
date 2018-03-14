import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index/index';
  import Layout from '@/pages/layout/layout';
  import Cell from '@/pages/cell/cell';
  import Form from '@/pages/form/form';
  import Button from '@/pages/button/button';
  import Modal from '@/pages/modal/modal';
  import Toast from '@/pages/toast/toast';
  import Loading from '@/pages/loading/loading';
  import ActionSheet from '@/pages/actionsheet/actionsheet';
  import PullRefresh from '@/pages/pull-refresh/pull-refresh';
  import Flex from '@/pages/flex/flex';

  import CityPicker from '@/pages/cityPicker/cityPicker';

  import Popup from '@/pages/popup/popup';
  import Swiper from '@/pages/swiper/swiper';
  import PreviewImage from '@/pages/previewImage/previewImage';

  import Axios from '@/pages/axios/axios';
import Api from '@/pages/api/api';


Vue.use(Router)

var router = new Router({
  routes: [
    {path: '/',redirect: '/Index'},
    {path: '/Index',component: Index,meta:{title:'Vue Mobile UI'},children:[
      {path: 'Layout',component: Layout,meta:{title:'Layout'}},
      {path: 'Cell',component: Cell,meta:{title:'Cell'}},
      {path: 'Form',component: Form,meta:{title:'Form'}},
      {path: 'Button',component: Button,meta:{title:'Button'}},
      {path: 'Modal',component: Modal,meta:{title:'Modal'}},
      {path: 'Toast',component: Toast,meta:{title:'Toast'}},
      {path: 'Loading',component: Loading,meta:{title:'Loading'}},
      {path: 'ActionSheet',component: ActionSheet,meta:{title:'ActionSheet'}},
      {path: 'PullRefresh',component: PullRefresh,meta:{title:'PullRefresh'}},
      {path: 'CityPicker',component: CityPicker,meta:{title:'CityPicker'}},
      {path: 'Flex',component: Flex,meta:{title:'Flex'}},
      {path: 'Popup',component: Popup,meta:{title:'Popup'}},
      {path: 'Swiper',component: Swiper,meta:{title:'Swiper'}},
      {path: 'PreviewImage',component: PreviewImage,meta:{title:'PreviewImage'}},
    ]},
    {path: '/Api',component: Api,meta:{title:'Api'},children:[
      {path: 'Axios',component: Axios,meta:{title:'Axios'}},
    ]},
  ]
})

router.beforeEach((to, from, next) => {
  //修改页面title
  document.title = 'MEUI - ' + to.meta.title;
  next();
})

export default router
