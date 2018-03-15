<template>
  <div class="view-page">
    <me-tab>
      <me-tab-item @on-change="handler">Tab1</me-tab-item>
      <me-tab-item @on-change="handler">Tab2</me-tab-item>
    </me-tab>
    <div class="tab-demo">
      <me-tab color="#f9b61c" v-show="tabIndex == 0">
        <me-tab-item @on-change="handlerChild1">Tab1_1</me-tab-item>
        <me-tab-item @on-change="handlerChild1">Tab1_2</me-tab-item>
        <me-tab-item @on-change="handlerChild1">Tab1_3</me-tab-item>
      </me-tab>
      <me-tab color="#513aff" v-show="tabIndex == 1">
        <me-tab-item @on-change="handlerChild2">Tab2_1</me-tab-item>
        <me-tab-item @on-change="handlerChild2">Tab2_2</me-tab-item>
        <me-tab-item @on-change="handlerChild2">Tab2_3</me-tab-item>
      </me-tab>
    </div>
    <p class="tab-demo-text">{{demoText}}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex:0,
      demoText:''
    }
  },
  methods:{
    handler(value){

      this.tabIndex = value
      this.demoText = `点击的是第${this.tabIndex + 1}个Tab`
    },
    handlerChild1(value) {
      this.demoText = `点击的是第${this.tabIndex + 1}个Tab下的第${value + 1}个`
    },
    handlerChild2(value) {
      this.demoText = `点击的是第${this.tabIndex + 1}个Tab下的第${value + 1}个`
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab-demo
    padding 0 20px
    margin-top 10px
  .tab-demo-text
    text-align center
    line-height 60px
    color #666
</style>


