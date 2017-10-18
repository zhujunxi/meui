import Vue from 'vue'
import Router from 'vue-router'

import Index from 'page/Index'
import Order from 'page/Order'
import List from 'page/List'
import Detail from 'page/Detail'
import Cell from 'components/Cell'
import Error from 'components/404'

import Accordion from 'page/Accordion/Accordion'

import Toast from 'page/toast/toast'

Vue.use(Router)

var router =  new Router({
  routes: [
    {path:'',redirect:'/Index'},
    {path:'*',component:Error},
    {path: '/Index',component: Index,
      meta:{title:'MEUI4'},
      children:[
        {path:'Accordion',component:Accordion,meta:{title:'Accordion'}},
      ]
    },
    {path: '/Order',component: Order ,meta:{title:'接口'}}
  ]
})
router.afterEach(routes => {
  typeof routes.meta.title !== undefined && (document.title = routes.meta.title)
})
export default router
