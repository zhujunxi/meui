import Vue from 'vue'
import Router from 'vue-router'

import Index from 'page/Index'
import Order from 'page/Order'
import List from 'page/List'
import Detail from 'page/Detail'
import Cell from 'components/Cell'
import Error from 'components/404'

import Toast from 'page/toast/toast'

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path:'',
      redirect:'/Index'
    },
    {
      path: '/Index',
      component: Index,
      children:[
        {path:'',component:List},
        {path:'Toast',component:Toast},
        {path:'Detail',component:Detail,children:[
          {path:'Cell',component:Cell}
        ]},
      ]
    },
    {
      path: '/Order',
      component: Order
    },
    {
      path:'*',
      component:Error
    }
  ]
})

export default router
