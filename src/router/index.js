import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index/index';
import Api from '@/pages/api/api';
import Layout from '@/pages/layout/layout';

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/Index'},
    {path: '/Index',component: Index,children:[
      {path: 'Layout',component: Layout},
    ]},
    {path: '/Api',component: Api},
  ]
})
