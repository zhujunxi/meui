<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div class="scroll-content">
      <div ref="listWrapper" class="scroll-list-wrapper">
        <slot></slot>
        <slot name="pullup">
          <div class="pullup-wrapper" v-if="options.pullUpLoad">
            <div class="before-trigger" v-if="!isPullingUp">
              <span>{{ pullUpTxt }}</span>
            </div>
            <div class="after-trigger" v-else>
              <loading></loading>
            </div>
          </div>
        </slot>
      </div>
    </div>
    <slot name="pulldown">
      <div class="pulldown-wrapper" :style="pullDownStyle" v-if="options.pullDownRefresh">
        <div class="before-trigger" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown" class="loading">
            <loading></loading>
          </div>
          <div v-else class="refresh-text"><span>{{ refreshTxt }}</span></div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Bubble from "./bubble.vue";
import Loading from "./loading.vue";
import Toast from "../../dialog/src/toast"
import {getRect} from "../../../utils/assist"

const DEFAULT_REFRESH_TXT = '刷新成功'

const DEFAULT_OPTIONS = {
  observeDOM: true,
  click: true,
  probeType: 1,
  scrollbar: false,
  pullDownRefresh: false,
  pullUpLoad: false
}

export default {
  name: "me-scroll",
  props: {
    data: { 
      type: Array, 
      default() {
        return []
      } 
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      beforePullDown: true,
      isPullingDown: false,
      isPullingUp:false,
      pullUpDirty: true,
      bubbleY: 0,
      pullDownStyle: ''
    }
  },
  computed: {
    refreshTxt () {
      const pullDownRefresh = this.options.pullDownRefresh
      return pullDownRefresh && pullDownRefresh.txt || DEFAULT_REFRESH_TXT
    },
    pullUpTxt () {
      const pullUpLoad = this.options.pullUpLoad
      const moreTxt = pullUpLoad.moreTxt || ''
      const noMoreTxt = pullUpLoad.noMoreTxt || ''
      return this.pullUpDirty ? moreTxt : noMoreTxt
    }
  },
  created() {
    this.pullDownInitTop = -50
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() { 
      if (!this.$refs.wrapper) { 
        return 
      } 
      this._calculateMinHeight()

      // better-scroll的初始化 
      let options = Object.assign({}, DEFAULT_OPTIONS, this.options)
      this.scroll = new BScroll(this.$refs.wrapper, options)
      
      //是否派发下拉刷新
      if(this.options.pullDownRefresh) {
        this.scroll.on('pullingDown',() => {
          this.beforePullDown = false
          this.isPullingDown = true
          this.$emit('pulldown')
        })

        this.scroll.on('scroll', (pos) => {
          if(this.beforePullDown){
            this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
            this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
          }else {
            this.bubbleY = 0
            this.pullDownStyle = `top:${Math.min(pos.y - 30, 10)}px`
          }
        })
      }

      //是否派发上拉加载
      console.log(this.options.pullUpLoad)
      if(this.options.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.isPullingUp = true
          this.$emit('pullup')
        })
      }
    },
    refresh() {
      this._calculateMinHeight()
      this.scroll && this.scroll.refresh()
    },
    forceUpdate(dirty) {
      if(this.options.pullDownRefresh && this.isPullingDown){
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown(dirty)
        })
      } else if (this.options.pullUpLoad && this.isPullingUp) {
          this.isPullingUp = false
          this.scroll.finishPullUp()
          this.pullUpDirty = dirty
          dirty && this.refresh()
        } else {
          dirty && this.refresh()
        }
    },
    _calculateMinHeight() {
      if (this.$refs.listWrapper && (this.options.pullDownRefresh || this.options.pullUpLoad)) {
        this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
      }
    },
    _reboundPullDown() {
      const {stopTime = 600} = this.options.pullDownRefresh
      return new Promise((resolve) => {
        setTimeout(() => {
          this.scroll.finishPullDown()
          this.isPullingDown = false
          resolve()
        }, stopTime)
      })
    },
    _afterPullDown(dirty) {
      setTimeout(() => {
        this.pullDownStyle = `top:${this.pullDownInitTop}px`
        this.beforePullDown = true
        dirty && this.refresh()
      }, this.scroll.options.bounceTime)
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常 
    data() { 
      setTimeout(() => { 
        this.forceUpdate(true)
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
.scroll-wrapper
  position relative
  height 100%
  overflow hidden
  background #F8F8F8
  .scroll-content 
    position relative
    z-index 1
  .pullup-wrapper
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    .before-trigger
      padding: 22px 0
      min-height: 1em
    .after-trigger
      padding: 19px 0
      
.pulldown-wrapper
  position: absolute
  width: 100%
  left: 0
  display: flex
  justify-content: center
  align-items: center
  transition: all
  .after-trigger
    margin-top: 5px
    width 100%
    text-align center
    .refresh-text
      font-size 14px
</style>
