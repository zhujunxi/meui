import Vue from 'vue'
import Router from 'vue-router'

import Index from 'page/Index'
import Order from 'page/Order'
import Error from 'components/404'

import Accordion from 'page/accordion/accordion'
import Uploader from 'page/uploader/uploader'
import Toast from 'page/toast/toast'

Vue.use(Router)

var router =  new Router({
  routes: [
    {path:'',redirect:'/Index'},
    {path:'*',component:Error},
    {path: '/Index',component: Index,meta:{title:'MEUI4'},
      children:[
        {path:'Accordion',component:Accordion,meta:{title:'Accordion'}},
        {path:'Uploader',component:Uploader,meta:{title:'Uploader'}},
      ]
    },
    {path: '/Order',component: Order ,meta:{title:'接口'}}
  ]
})
router.afterEach(routes => {
  typeof routes.meta.title !== undefined && (document.title = routes.meta.title)
})
export default router
