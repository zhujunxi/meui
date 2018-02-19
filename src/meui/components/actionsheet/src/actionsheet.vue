<template>
  <div class="me-actionsheet-wrap">
      <transition name="fade">
        <div v-show="visible" class="me-mask" @click="cancel()"></div>
      </transition>
      
      <div :class="['me-actionsheet',visible?'active':'']">
        <a 
          class="me-actionsheet-item" 
          href="javascript:;" 
          v-for="(item, index) in itemList" 
          :key="item"
          @click="tap(index)"
          >{{item}}</a>
        <a class="me-actionsheet-action" href="javascript:;" @click="cancel()">取消</a>
      </div>
  </div>
</template>

<script>
export default {
  name:'me-actionsheet',
  data() {
    return {
      visible: false,
    }
  },
  props:{
    itemList:{
      type: Array,
    }
  },
  methods:{
    tap(index) {
      this.success(index)
      this.close()
    },
    cancel() {
      this.close()
      typeof this.fail === 'function' && this.fail();
    }
  }
}
</script>

<style lang="stylus" scoped>
  .me-mask
    position fixed 
    top 0px
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,.4)
    z-index 1000

  .me-actionsheet
    position fixed 
    bottom 0
    left 0
    z-index 1001
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    background #F8F8F8
    transform: translate(0, 100%);
    transition: transform .3s;
    &.active
      transform: translate(0, 0);
    .me-actionsheet-item
      display block
      width 100%
      text-align center
      background #FFF
      padding 16px
      position relative
      &::after
        content ''
        width 100%
        height 1px
        background #f8f8f8
        position absolute
        top 0
        left 0
        transform scaleY(.5)
      &:active
        background #F8F8F8
      &:first-child
        &::after
          display none
    .me-actionsheet-action
      display block
      width 100%
      text-align center
      background #FFF
      padding 16px
      margin-top 10px
      &:active
        background #F8F8F8


.fade-enter-active, .fade-leave-active
    transition: all 0.3s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>


