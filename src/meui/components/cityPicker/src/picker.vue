<template>
  <transition name="fade">
  <div class="picker" v-show="isShow" @touchmove.prevent @click="hide">
    <transition name="slide-bottom">
    <div class="picker-panel" @click.stop v-show="isShow">
      <div class="picker-tools">
        <span class="cancel" @click="hide">取消</span>
        <span class="confirm" @click="confirm">确定</span>
        <h1 class="picker-title">{{title}}</h1>
      </div>
      <div class="picker-content">
        <div class="mask-top"></div>
        <div class="mask-bottom"></div>
        <div class="wheel-wrapper" ref="wheelWrapper">
          <div class="wheel" v-for="data in pickerData">
            <ul class="wheel-scroll">
              <li v-for="item in data" class="wheel-item">{{item.text}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </transition>
  </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'me-citypicker',
    props: {
      data:{
        type: Array,
        default() {
          return []
        }
      },
      selectedIndex: {
        type: Array,
        default() {
          return []
        }
      },
      title: {
        type:String,
        default:null
      }
    },
    data() {
      return {
        isShow:false,
        pickerData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex,
        pickerSelectedText:[],
        pickerSelectedVal:[]
      }
    },
    methods:{
      confirm() {
        if (!this._canConfirm()) {
          return
        }
        this.hide()
        for(let i = 0; i< this.pickerData.length; i++) {
          let index = this.wheels[i].getSelectedIndex()
          this.pickerSelectedIndex[i] = index
          this.pickerSelectedText[i] = this.pickerData[i][index].text
        }
        this.$emit('select', this.pickerSelectedIndex, this.pickerSelectedText, this.pickerSelectedVal)
      },
      show() {
        this.isShow = true
        if (!this.wheels) {
          this.$nextTick(() => {
            this.wheels = []
            let wheelWrapper = this.$refs.wheelWrapper
            for (let i = 0; i < this.pickerData.length; i++) {
              this._createWheel(wheelWrapper, i)
            }
            this.dirty = false
          })
        }else {
          for (let i = 0; i < this.pickerData.length; i++) {
            this.wheels[i].enable()
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
          }
        }
      },
      hide() {
        this.isShow = false
      },
      setData(data) {
        this.pickerData = data.slice()
        this.dirty = true
      },
      _createWheel(wheelWrapper, i) {
        if (!this.wheels[i]) {
          this.wheels[i] = new BScroll(wheelWrapper.children[i], {
            bounce: true,
            wheel: {
              selectedIndex: this.pickerSelectedIndex[i],
              /** 下面配置均为默认值*/
              selectedIndex: 0,
              rotate: 25,
              adjustTime: 400,
              wheelWrapperClass: 'wheel-scroll',
              wheelItemClass: 'wheel-item'
            },
            probeType: 3
          })
          this.wheels[i].on('scrollEnd', () => {
            this.$emit('change', i, this.wheels[i].getSelectedIndex())
          })
        } else {
          this.wheels[i].refresh()
        }
        return this.wheels[i]
      },
      refresh() {
        this.$nextTick(() => {
          this.wheels.forEach((wheel, index) => {
            wheel.refresh()
          })
        })
      },
      scrollTo(index, dist) {
        const wheel = this.wheels[index]
        this.pickerSelectedIndex[index] = dist
        wheel.wheelTo(dist)
      },
      _canConfirm() {
        return this.wheels.every((wheel) => {
          return !wheel.isInTransition
        })
      }
    },
    watch: {
      data(newData) {
        this.setData(newData)
      }
    }
  }
</script>

<style lang="stylus">
flex-fix()
  -ms-flex: 1 1 0.000000001px
  -webkit-box-flex: 1
  -webkit-flex: 1
  flex: 1
  -webkit-flex-basis: 0.000000001px
  flex-basis: 0.000000001px
  width: 1%

.picker
  position fixed
  left 0
  top 0
  z-index 100
  width 100%
  height 100%
  overflow hidden
  text-align: center
  background rgba(0,0,0,.4)
  .picker-panel
    position absolute
    bottom 0
    left 0
    z-index 600
    width 100%
    // height 237px
    background #FFF
    .picker-tools
      position relative
      height 46px
      line-height 46px
      border-bottom 1px solid #F1F1F1
      .picker-title
        text-align center
      .cancel, .confirm
        position absolute
        padding 0 16px
      .cancel
        left 6px
        color #999
      .confirm
        right 6px
        color green
    .picker-content
      position relative
      padding 18px 0
      .mask-top, .mask-bottom
        z-index 10
        width 100%
        height 68px
        pointer-events none
        transform translateZ(0)
      .mask-top
        position absolute
        top 15px
        background linear-gradient(to top, rgba(255,255,255,.4), rgba(255,255,255,.8))
        border-bottom 1px solid #F1F1F1
      .mask-bottom
        position absolute
        bottom 16px
        background linear-gradient(to bottom, rgba(255,255,255,.4), rgba(255,255,255,.8))
        border-top 1px solid #F1F1F1
      .wheel-wrapper
        display flex
        padding 0 16px
        .wheel
          flex-fix()
          height: 178px
          overflow: hidden
          font-size 16px
          .wheel-scroll
            padding: 0
            margin-top: 68px
            line-height: 42px
            list-style: none
            .wheel-item
              list-style: none
              height: 42px
              overflow: hidden
              white-space: nowrap
              color: #333

.fade-enter, .fade-leave-active
  opacity 0
.fade-enter-active, .fade-leave-active
  transition: all .3s ease-in-out

.slide-bottom-enter, .slide-bottom-leave-active
  transform: translate3d(0, 261px, 0)
.slide-bottom-enter-active, .slide-bottom-leave-active
  transition: all .3s ease-in-out
</style>


