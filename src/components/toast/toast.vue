<template lang="html">
  <div class="toast-wrap">
    <transition :name="currentTransition" v-on:after-leave="afterLeave">
      <div class="toast" :class="toastClass" v-show="showToast">
        <i class="toast__icon" v-show="type !== 'text'"></i>
        <p class="toast__content" v-if="text">{{text}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'toast',
  data(){
    return {
      showToast:false
    }
  },
  props: {
    time: {
      type:Number,
      default:2000
    },
    position:{
      type:String,
      default:'toast-bottom'
    },
    type:{
      type:String,
      default:'text'
    },
    value: Boolean,
    text:String,
  },
  created () {
    if (this.value) {
      this.showToast = true
    }
  },
  methods: {
    afterLeave() {
      //this.text = ''
    }
  },
  computed: {
    currentTransition () {
      if (this.transition) {
        return this.transition
      }
      if (this.position === 'top') {
        return 'slide-top'
      }
      if (this.position === 'bottom') {
        return 'slide-bottom'
      }
      return 'fade'
    },
    toastClass () {
      return {
        'toast-top':this.position === 'top',
        'toast-bottom':this.position === 'bottom',
        'toast-middle':this.position === 'middle'
      }
    }
  },
  watch:{
    showToast (val) {
      if (val) {
        this.$emit('input', true)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.showToast = false
          this.$emit('input', false)
        }, this.time)
      }
    },
    value (val) {
      this.showToast = val
    }
  }
}
</script>

<style lang="css">
.toast{
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  color: #FFF;
  padding: 10px 12px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  font-size: 14px;
}
.toast-top{
  top:10%;
}
.toast-bottom{
  top: auto;
  bottom:10%;
}
.weui-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
}

.weui-mask_transparent{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.slide-top-enter, .slide-top-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%)!important;
}
.slide-bottom-enter, .slide-bottom-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(100%)!important;
}
.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: all 400ms cubic-bezier(.36,.66,.04,1);
}
</style>
