<template>
  <me-layout :show-navbar="false">
    <router-view/>
    <me-tabbar slot="tabbar" v-if="showTab">
      <me-tabbar-item title="组件" link="/Index" :active="activePath == '/Index'">
        <i class="iconfont" slot="icon">&#xe658;</i>
      </me-tabbar-item>
      <me-tabbar-item title="接口" link="/Api" :active="activePath == '/Api'">
        <i class="iconfont" slot="icon">&#xe669;</i>
      </me-tabbar-item>
    </me-tabbar>
  </me-layout>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activePath:'/Index',
      showTab:true,
    }
  },
  watch: {
      '$route' (to, from) {
        //记录活跃路由名称
        this.activePath = to.path;
        // 当前路由包含'Index'则显示tabbar
        //this.showTab = to.path.match('Index')?true:false;
        if(to.path == '/Index' || to.path == '/Api'){
          this.showTab = true;
        }else{
          this.showTab = false;
        }
      }
  },

}
</script>

<style lang="stylus">
#app
  height 100%

</style>
