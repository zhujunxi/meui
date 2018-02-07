<template>
  <transition name="slide-fade">
  <div class="me-toast" v-show="visible">
    <div class="me-toast__hd">
      <span class="iconfont" v-if="type == 'success'">&#xe60c;</span>
    </div>
    <div class="me-toast__bd">
      {{mes}}
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  props: {
    mes: String,
    icon: String,
    type: {
      validator(value) {
        return [
          'noicon',
          'success',
          'error',
          'loading',
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
  .me-toast
    position: fixed
    z-index: 2000
    top: 180px
    background: rgba(17, 17, 17, 0.7)
    text-align: center
    border-radius: 5px
    color: #FFFFFF
    max-width 80%
    .me-toast__hd
      span
        font-size 34px
    .me-toast__bd
      text-align center
      padding 10px 20px

.slide-fade-enter-active, .slide-fade-leave-active
    transition: all 0.3s ease

.slide-fade-enter, .slide-fade-leave-to
  transform: scale(1.3)
  // transform: translateY(-10px)
  opacity: 0
 </style>
