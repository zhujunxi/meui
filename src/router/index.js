import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import Detail from 'components/Detail'
import foo from 'components/foo'
import Home from 'components/home'

Vue.use(Router)
const Default = { template: '<div class="default">default</div>' }
var router =  new Router({
  routes: [
    {path: '/', component: Home },
    {path: '/Index',component: Index,children:[
      { path: '', component: Default },
      {path:'Detail',component:Detail},
      {path:'foo',component:foo}
    ]}
  ]
})

export default router
