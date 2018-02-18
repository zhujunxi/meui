<template>
  <div class="me-modal-wrap">
    <transition name="slide-fade">
      <div class="me-modal" v-show="visible">
        <div class="me-modal__hd">
          {{title}}
        </div>
        <div class="me-modal__bd">
          {{content}}
        </div>
        <div class="me-modal__ft">
            <a href="javascript:;" @click.stop="closeModal('cancel')" v-if="showCancel">{{cancelText}}</a>
            <a href="javascript:;" @click.stop="closeModal('success')">{{confirmText}}</a>
        </div>
      </div>
    </transition>
  </div>
  
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    confirmText:String,
    cancelText:String,
    showCancel:{
      type: Boolean,
      default: true,
    },
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
@import '../../../../stylus/variable.styl';
  .me-modal-wrap
    position: fixed
    top: 0
    left: 0
    width 100%
    height 100%
    z-index 1000
    display flex
    align-items center
    justify-content center
    background rgba(0, 0, 0, .4)
    .me-modal
      margin-top -20%
      background: #FFF
      text-align: center
      border-radius: 2px
      width auto
      color: #333
      width 80%
      font-size 16px
      .me-modal__hd
        text-align center
        padding 16px 12px 4px 12px
      .me-modal__bd
        text-align center
        color #888
        padding 18px 12px 16px
        line-height 1.4
        min-height 40px
        display flex
        justify-content center
        align-items center
      .me-modal__ft
        display flex
        position relative
        line-height 40px
        &:after
          content ''
          position absolute
          z-index 0
          top 0px
          left 0px
          width 100%
          border-top: 1px solid #d9d9d9
          transform: scaleY(.5)
          transform-origin: 0 0;
        a 
          flex 1
          border none
          display block
          position relative
          &:last-child
            color $color-theme
          &::after
            content ''
            position absolute
            z-index 0
            top 0px
            left 0px
            height 100%
            border-right: 1px solid #d9d9d9
            transform: scaleX(.5)
            transform-origin: 0 0;

.slide-fade-enter-active, .slide-fade-leave-active
    transition: all 0.3s ease

.slide-fade-enter, .slide-fade-leave-to
  transform: scale(1.1)
  transform: translateY(-10px)
  opacity: 0
 </style>
