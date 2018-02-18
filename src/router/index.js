import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index/index';
  import Layout from '@/pages/layout/layout';
  import Cell from '@/pages/cell/cell';
  import Form from '@/pages/form/form';
  import Button from '@/pages/button/button';
  import Modal from '@/pages/modal/modal';
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
    ]},
    {path: '/Api',component: Api,meta:{title:'Api'}},
  ]
})

router.beforeEach((to, from, next) => { 
  //修改页面title
  document.title = 'MEUI - ' + to.meta.title;
  next();
})

export default router
