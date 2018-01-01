<template>
  <div class="me-cell-item">
      <div class="me-cell__hd">
          <slot name="icon"></slot>
      </div>
      <div class="me-cell__bd">
          <slot name="left"></slot>
      </div>
      <div class="me-cell__ft">
          <slot name="right"></slot>
          <i class= "iconfont arrow" v-if="arrow">&#xea69;</i>
      </div>
  </div>
</template>
<style lang='stylus' scoped>
@import '../../../stylus/mixin.styl';
    .me-cell-item
        display flex
        overflow hidden
        position relative
        background #ffffff
        font-size 14px
        min-height 48px
        padding 0px 16px
        justify-content space-between
        tap-active()
        &:not(:last-child)
            border-1px(bottom, rgba(0,0,0,0.12), 20px)
        .me-cell__hd
            display flex
            justify-content center
            align-items center
        .me-cell__bd
            display flex
            justify-content left 
            align-items center
        .me-cell__ft
            display flex
            justify-content flex-end
            align-items center
            width 100%
            flex 1
    .arrow
        display: block;
        font-size: 22px;
        color: #c9c9c9;
        margin-right -12px
</style>
<script>
export default {
  name:'me-cell-item',
  props: {
    type:{
        validator (value){
            return ['link','a','label','div','checkbox','radio'].indexOf(value) > -1;
        },
        default:'div'
    },
    arrow: {
        type: Boolean,
        default: false
    },
    href:  {
        type: [String, Object]
    }
  },
  computed:{
      classes() {
          return this.arrow?'me-cell-arrow':''
      }
  }
}
</script>

