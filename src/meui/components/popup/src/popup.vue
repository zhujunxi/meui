<template>
  <div class="popup-wrap" >
    <transition name="fade">
      <div v-if="value" class="me-mask-outer" @click="close()"></div>
    </transition>
    <div
      :class="['popup', classes, value?'active':'']"
      :style="styles"
      >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {preventScroll} from '../../../utils/assist'
export default {
  name:'me-popup',
  props:{
    value:Boolean,
    position:{
      validator(value) {
        return ['top','left','bottom','right','center'].indexOf(value) > -1
      },
      default:'bottom'
    },
    height:{
      type:String,
      default: 'auto'
    },
    width:{
      type:String,
      default: 'auto'
    }
  },
  data() {
    return {

    }
  },
  computed:{
    classes() {
      return 'popup-'+this.position
    },
    styles() {
      if(this.position === 'bottom' || this.position === 'top') {
        return {height: this.height};
      }else if(this.position === 'right' || this.position === 'left') {
        return {width: this.width};
      }
    }
  },
  watch: {
    value(val) {
      val ? preventScroll.lock() : preventScroll.unlock();
    }
  },
  methods:{
    close() {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .popup-wrap
    .popup
      background #FFF
      position fixed
      transition .3s ease
      z-index 10000
      &.popup-bottom
        transform translateY(100%)
        bottom 0
        left 0
        width 100%
        &.active
          transform translateY(0)
      &.popup-top
        top 0
        left 0
        transform translateY(-100%)
        width 100%
        &.active
          transform translateY(0)
      &.popup-right
        transform translateX(100%)
        height 100%
        top 0
        right 0
        &.active
          transform translateX(0)
      &.popup-left
        top 0
        left 0
        transform translateX(-100%)
        height 100%
        &.active
          transform translateX(0)

.fade-enter-active, .fade-leave-active
    transition: all 0.3s ease
.fade-enter, .fade-leave-to
  opacity: 0
</style>


