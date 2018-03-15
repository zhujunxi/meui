<template>
  <div class="tab">
    <slot></slot>
    <div class="tab-bar" :style="tabbarStyles"></div>
  </div>
</template>

<script>
export default {
  name:'me-tab',
  props:{
    color:{
      type:String,
      default:'#09bb07'
    }
  },
  data(){
    return {
      childCount:null,
      tabIndex:0
    }
  },
  computed: {
    tabbarStyles() {
      let style = {}
      style['background'] = this.color
      style['width'] = `${(1 / this.childCount)/0.01}%`
      style['transform'] = `translateX(${this.tabIndex/0.01}%)`
      style['transitionDuration'] = `300ms`
      return style
    }
  },
  mounted() {
    this.childCount = this.$children.length
    for(let i = 0; i < this.$children.length; i++) {
      this.$children[i].currentIndex = i
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab
    display flex
    background #FFF
    border-bottom 1px solid #F1F1F1
    position relative
    .tab-item
      flex 1
      text-align center
      padding 16px 0
      &:active
        background #F8F8F8
    .tab-bar
      position absolute
      bottom 0
      left 0
      height 2px
      width auto

</style>

