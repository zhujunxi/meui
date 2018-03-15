<template>
  <transition name="fade">
  <div class="preview-image" @click="close()" v-show="visible">
    <div
      class="preview-image-item"
      v-for="(item, index) in imgList"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="style(index)"
      >
      <img :src="item" :alt="index">
    </div>
    <div class="preview-num"><span>{{currentPage+1}}/{{imgList.length}}</span></div>
  </div>
  </transition>

</template>
<script>
export default {
  name:'me-preview-image',
  props:{
    imgList:{
      type: Array,
      default() {
        return []
      }
    },
    currentPage:Number
  },
  data() {
    return {
      visible: false,
      threshold:60,       // 阈值
      tempData: {         // 临时数据
        movePos:{
          x:0,
          y:0
        }
      },
      transitionDuration:300,
      swiperWidth: 0,
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.swiperWidth = window.screen.width
    })
  },
  methods:{
    touchstart(e) {
      // 触摸开始

      let touch = e.targetTouches[0];  //touches数组对象获得屏幕上所有的touch，取第一个touch
      this.tempData.movePos.x = 0
      this.transitionDuration = 0

      this.tempData.startPos = {
        x: touch.pageX,
        y: touch.pageY,
        time: + new Date()
      }
    },
    touchmove(e) {
      // 触摸进行

      let touch = e.targetTouches[0]
      let startPos = this.tempData.startPos

      this.tempData.movePos = {
        x: touch.pageX - startPos.x,
        y: touch.pageY - startPos.y,
      }
    },
    touchend(e) {
      // 触摸释放

      let moveX = this.tempData.movePos.x
      let moveRange = [0, this.imgList.length - 1]
      if(Math.abs(moveX) > this.threshold) { // 滑动超过阈值

        if(moveX < 0 && (this.currentPage < moveRange[1])) {
          // 右滑
          this.currentPage++
        }else if( moveX > 0 && this.currentPage > moveRange[0]){
          // 左滑
          this.currentPage--
        }
      }

      this.tempData.movePos.x = 0
      this.transitionDuration = 300
    },
    style(index) {
      let style = {}
      let moveX = this.tempData.movePos.x
      let moveY = this.tempData.movePos.y
      let currentPage =  this.currentPage
      style['transform'] = `
        translate3D(
          ${moveX + this.swiperWidth*(index - currentPage)}px,
          0,
          0
        )
      `
      style['transitionDuration'] = `${this.transitionDuration}ms`
      return style
    }
  }
}
</script>

<style lang="stylus" >
.preview-image
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  z-index: 1000
  overflow: hidden
  background: rgba(0, 0, 0, .9)
  .preview-image-item
    height: 100%
    width: 100%
    text-align: center
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    & img
      width: 100%
      height: auto
  .preview-num
    position: absolute
    top 10px
    width: 100%
    text-align: center
    color: #FFF
    font-size: 16px
    padding: 12px 0
    z-index: 100
    span
      background rgba(0, 0, 0, .6)
      padding 2px 12px
      border-radius 50px


.fade-enter-active, .fade-leave-active
    transition: all 0.3s ease

.fade-enter, .fade-leave-to
  opacity: 0
</style>
