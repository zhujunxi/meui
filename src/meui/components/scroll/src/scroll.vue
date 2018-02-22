<template>
  <div class="scroll">
    <div class="bubble-wrap" v-if="!isPullingDown" :style="`height:${bubbleY}px`">
      <span class="bubble-text" >{{bubbleY > 100?'松手刷新':'继续下拉'}}</span>
      <bubble :y="bubbleY - 50"></bubble>
    </div>
    <div class="loading-wrap" v-if="isPullingDown">
      <loading></loading>
      <span class="refresh-text">正在刷新{{bubbleY}}</span>
    </div>
    <div class="tips" v-if="isPullingUp">刷新成功</div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Bubble from "./bubble.vue";
import Loading from "./loading.vue";
import Toast from "../../dialog/src/toast"
export default {
  name: "me-scroll",
  props: {
    /** 
     * 1 滚动的时候会派发scroll事件，会截流。 
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件 
     */ 
    probeType: {
      type: Number,
      default: 2
    },
    /** 
     * 点击列表是否派发click事件 
     */ 
    click: { 
     type: Boolean, 
     default: true 
    },
    /**
     * 是否开启横向滚动 
     */ 
    scrollX: { 
      type: Boolean, 
      default: false 
    },
    /**
     * 是否派发滚动事件 
     */ 
    listenScroll: { 
      type: Boolean, 
      default: true 
    },
    /**
     * 列表的数据 
     */ 
    data: { 
      type: Array, 
      default: null 
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载 
     */ 
    pullup: {
      type: Boolean,
      default: false
    },
    /** 
     * 是否派发顶部下拉的事件，用于下拉刷新 
     */ 
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件 
     */ 
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。 
     */ 
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      bubbleY:0,
      isPullingDown: false,
      isPullingUp:false,
      
    }
  },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll 
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() { 
      if (!this.$refs.wrapper) { return } 
      // better-scroll的初始化 
      this.scroll = new BScroll(this.$refs.wrapper, { 
        probeType: this.probeType, 
        click: this.click, 
        scrollX: this.scrollX,
        pullDownRefresh: {
          threshold: 100,
          stop: 46
        },
        pullUpLoad: {
          threshold: -50
        },
      }) 
      // 是否派发滚动事件 
      if (this.listenScroll) { 
        let me = this 
        this.scroll.on('scroll', (pos) => { 
          this.bubbleY = pos.y
          //me.$emit('scroll', pos) 
        }) 
      } 
      // 是否派发滚动到底部事件，用于上拉加载 
      if (this.pullup) { 
        // this.scroll.on('pullingUp', () => {
        //   this.isPullingUp = true
        //   this.$emit('pullup')
        // })
        this.scroll.on('scrollEnd', (pos) => { 
          // 滚动到底部 
          // console.log('scrollEnd')
          // console.log(pos)
          // console.log(this.scroll.maxScrollY)
          // if (this.scroll.y <= (this.scroll.maxScrollY + 102)) {
          //   this.isPullingUp = true
          //   this.$emit('pullup') 
          // } 
        }) 
      } 
      // 是否派发顶部下拉事件，用于下拉刷新 
      if (this.pulldown) {
        this.scroll.on('touchEnd', (pos) => { 
          console.log(pos.y)
          // 下拉动作          
          if (pos.y > 100) {
             this.$emit('pulldown') 
             this.isPullingDown = true
             this.bubbleY = 46
          } else if(pos.y <= (this.scroll.maxScrollY + 100)){
             this.isPullingUp = true
             this.$emit('pullup') 
          }
        }) 
      } 
      // 是否派发列表滚动开始的事件 
      if (this.beforeScroll) {
         this.scroll.on('beforeScrollStart', () => { 
           this.$emit('beforeScroll') 
         })  
      }
    },
    disable() { 
      // 代理better-scroll的disable方法 
      this.scroll && this.scroll.disable() 
    }, 
    enable() { 
      // 代理better-scroll的enable方法 
      this.scroll && this.scroll.enable() 
    }, 
    refresh() { 
      // 代理better-scroll的refresh方法 
      this.scroll && this.scroll.refresh() 
    }, 
    scrollTo() { 
      // 代理better-scroll的scrollTo方法 
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments) 
    }, 
    scrollToElement() { 
      // 代理better-scroll的scrollToElement方法 
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments) 
    },
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常 
    data() { 
      setTimeout(() => { 
        if(this.isPullingDown){
          this.refresh() 
          this.bubbleY = 0
          this.isPullingDown = false
          Toast('更新成功',{
            type:'success'
          })
        }else if(this.isPullingUp){
          this.refresh()
          this.isPullingUp = false
          console.log('上拉加载成功！')
        }
      }, this.refreshDelay) 
    }
  },
  components: {
    Bubble, Loading, Toast
  }
};
</script>

<style lang='stylus' scoped>
@import '../../../stylus/mixin.styl';
.scroll
  height 100%
  background #CCC
.wrapper {
  height: 100%;
}

.bubble-wrap
  position fixed
  top 0px
  left 0px
  width 100%
  height 0px
  min-height 46px
  display flex
  justify-content center
  align-items center
  background #F00
  display flex
  flex-direction column
  .bubble-text
    height 26px
    line-height 26px
    color #CCC
    font-size 12px
    .refresh-text
      display flex
bubble{
  background green
}
</style>
