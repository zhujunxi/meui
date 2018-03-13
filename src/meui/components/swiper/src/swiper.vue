<template>
  <div class="swiper" ref="swiper">
    <div
      class="swiper-item"
      v-for="(item, index) in imgList"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="style(index)"
      >
      <img :src="item" :alt="index">
    </div>
    <div class="swiper-dot" v-if="showdot">
      <div
        :class="['swiper-dot-item', currentPage == index?'active':'']"
        v-for="(item, index) in imgList"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'me-swiper',
  data() {
    return {
      currentPage: 0,     // 活动页面
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
  props:{
    imgList:{
      type: Array,
      default:[]
    },
    showdot: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  watch:{
    autoplay(value) {
      value? this.autoPlay() : this.clearTimer()
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.swiperWidth = this.$refs.swiper.offsetWidth
      this.autoplay ? this.autoPlay() : this.clearTimer()
    })
  },
  methods:{
    autoPlay() {
      this.timer = setInterval(() => {
        if(this.currentPage < this.imgList.length - 1) {
          this.currentPage++
        }else{
          this.currentPage = 0
        }
      }, 2000)
    },
    clearTimer() {
      clearInterval(this.timer)
    },
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
      let movePosX = this.tempData.movePos.x
      let moveRange = [0, this.imgList.length - 1]

      if(Math.abs(movePosX) > this.threshold) { // 滑动超过阈值

        if(movePosX < 0 && (this.currentPage < moveRange[1])) {
          // 右滑
          this.currentPage++
        }else if( movePosX > 0 && this.currentPage > moveRange[0]){
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
      let currentPage =  this.currentPage
      style['transform'] = `translate3D(${moveX + this.swiperWidth*(index - currentPage)}px, 0, 0)`
      style['transitionDuration'] = `${this.transitionDuration}ms`
      return style
    }
  }
}
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #CCC;
}
.swiper-item{
  background: #fff;
  height: 100%;
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #FFF;
}
.swiper-item img{
  width: 100%;
  height: 100%;
}
.swiper-dot{
  position: absolute;
  left: 0;
  bottom: 20px;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
}
.swiper-dot-item{
  height: 8px;
  width: 8px;
  display: block;
  background : rgba(255, 255, 255, .4);
  margin: 0 4px;
  border-radius: 50%;
}
.swiper-dot-item.active{
  background : rgba(255, 255, 255, 1);
}
</style>
