<template>
  <div class="me-toast-wrap">
    <transition name="slide-fade">
      <div :class="['me-toast',type == null?'noicon':type]" v-show="visible">
        <div class="me-toast__hd">
          <span class="iconfont" v-if="type == 'success'">&#xe60c;</span>
          <span class="iconfont" v-if="type == 'error'">&#xe61c;</span>
        </div>
        <div class="me-toast__bd">
          {{mes}}
        </div>
      </div>
    </transition>
    <div class="me-mask"></div>
  </div>
  
</template>

<script>
export default {
  props: {
    mes: String,
    type: {
      validator(value) {
        return [
          'noicon',
          'success',
          'error',
        ].indexOf(value) > -1
      },
      default:'noicon'
    },
    timeout: Number,
    callback: Function
  },
  data () {
    return {
      visible: false
    };
  },
  methods: {

  }
}
</script>

<style lang='stylus' scoped>
  .me-toast-wrap
    position: fixed
    top: 0
    left: 0
    width 100%
    height 100%
    z-index 1000
    display flex
    align-items center
    justify-content center
    .me-toast
      background: rgba(17, 17, 17, 0.7)
      text-align: center
      border-radius: 5px
      width auto
      color: #FFFFFF
      padding 10px 0px
      &.noicon
        padding 0px
        max-width 80%
        .me-toast__bd
          width auto 
      .me-toast__hd
        span
          font-size 38px
          display block
          padding 10px 0 5px
      .me-toast__bd
        text-align center
        width 100px
        padding 10px 10px
        line-height 1.4

.slide-fade-enter-active, .slide-fade-leave-active
    transition: all 0.3s ease

.slide-fade-enter, .slide-fade-leave-to
  transform: scale(1.1)
  transform: translateY(-10px)
  opacity: 0
 </style>
