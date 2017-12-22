<template>
  <div id="app">

    <me-layout :show-navbar="false" :show-tabbar="false">
      <router-view/>
      <div class="me-tabbar" slot="tabbar">
        底栏
      </div>
    </me-layout>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app
  height 100%

.me-tabbar
  height 60px
  line-height 50px
  display flex
  background #666
</style>
