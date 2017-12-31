<template>
  <div class="view-page">
      <h1>layout</h1>
      <me-switch v-model="showTab"></me-switch>
      <me-switch v-model="showHeader"></me-switch>
      <div class="phone">
        <me-layout :show-navbar="showHeader">
          <div>
            container
          </div>
          <me-tabbar slot="tabbar" v-if="showTab">
            <me-tabbar-item title="组件" link="/Index" :active="activeTab == 0">
              <i class="iconfont" slot="icon">&#xe658;</i>
            </me-tabbar-item>
            <me-tabbar-item title="接口" link="/Api" :active="activeTab == 1">
              <i class="iconfont" slot="icon">&#xe669;</i>
            </me-tabbar-item>
          </me-tabbar>
        </me-layout>
      </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      switch1: false,
      activeTab: 0, 
      showHeader :true,
      showTab: true
    };
  },
  methods: {

  }
}
</script>

<style lang='stylus' scoped>
  .phone
    width 84%
    height 300px
    margin 0 auto
    border 2px solid rgba(0,0,0,0.9)
</style>