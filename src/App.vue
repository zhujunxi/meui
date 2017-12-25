<template>
  <me-layout :show-navbar="true" :show-tabbar="false">
    <router-view/>
    <me-tabbar slot="tabbar">
      <me-tabbar-item title="首页" link="/Index" active>
        <i class="iconfont" slot="icon">&#xe658;</i>
      </me-tabbar-item>
      <me-tabbar-item title="接口" link="/Index">
        <i class="iconfont" slot="icon">&#xe669;</i>
      </me-tabbar-item>
    </me-tabbar>
  </me-layout>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app
  height 100%


</style>
