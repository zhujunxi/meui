<template>
  <div class="view-page">
      <me-cell-group title="设置Layout">
          <me-cell-item type="label">
              <span slot="left">显示Header</span>
              <me-switch slot="right" v-model="showHeader"></me-switch>
          </me-cell-item>
          <me-cell-item type="label">
              <span slot="left">显示Tabbar</span>
              <me-switch slot="right" v-model="showTab"></me-switch>
          </me-cell-item>
      </me-cell-group>
      <div class="phone">
        <me-layout :show-navbar="showHeader">
          <div class="layout-item" v-if="activeTab === 0">
              标签A
            </div>
            <div class="layout-item" v-if="activeTab === 1">
              标签B
            </div>
            <div class="layout-item" v-if="activeTab === 2">
              标签C
            </div>
          <me-tabbar slot="tabbar" v-if="showTab">
            <me-tabbar-item title="标签A" @click.native="changeTab(0)" :active="activeTab == 0" type="div">
              <i class="iconfont" slot="icon">&#xe658;</i>
            </me-tabbar-item>
            <me-tabbar-item title="标签2" @click.native="changeTab(1)" :active="activeTab == 1" type="div">
              <i class="iconfont" slot="icon">&#xe669;</i>
            </me-tabbar-item>
            <me-tabbar-item title="标签3" @click.native="changeTab(2)" :active="activeTab == 2" type="div">
              <i class="iconfont" slot="icon">&#xe66d;</i>
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
    changeTab(index) {
      this.activeTab = index;
    }
  }
}
</script>

<style lang='stylus' scoped>
  .phone
    width 84%
    height 300px
    margin 20px auto
    border 2px solid rgba(0,0,0,0.9)

  .layout-item
    display flex
    justify-content center
    align-items center
    height 100%
</style>