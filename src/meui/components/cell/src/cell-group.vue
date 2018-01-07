<template>
  <div class="me-cell-box">
      <div class="me-cell">
          <div class="me-cell-title"><span>{{title}}</span></div>
          <slot></slot>
      </div>
      <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
    name:'me-cell-group',
    props:{
        title: String
    },
}
</script>

<style lang='stylus' scoped>
@import "../../../stylus/mixin.styl";
  .me-cell-box
    //margin-bottom: .35rem
    .me-cell
        position: relative
        z-index: 5
        border-1px(bottom, rgba(0,0,0,0.12), 0px)
      .me-cell-title
          font-size 14px
          color #999999
          padding 5px 16px
          span 
            height 24px
            line-height 24px
</style>