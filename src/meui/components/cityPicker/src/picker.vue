<template>
  <div class="picker">
    <div class="picker-panel">
      <div class="picker-content">
        <div class="wheel-wrapper" ref="wheelWrapper">
          <div class="mask-top border-bottom-1px"></div>
          <div class="mask-bottom border-top-1px"></div>
          <div class="wheel" v-for="data in pickerData">
            <ul class="wheel-scroll">
              <li v-for="item in data" class="wheel-item">{{item.text}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
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
      }
    },
    data() {
      return {
        pickerData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex,
      }
    },
    methods:{
      show() {
        this.$nextTick(() => {
          this.wheels = []
          let wheelWrapper = this.$refs.wheelWrapper
          for (let i = 0; i < this.pickerData.length; i++) {
            this._createWheel(wheelWrapper, i)
          }
        })
      },
      setData(data) {
        this.pickerData = data.slice()
      },
      _createWheel(wheelWrapper, i) {
        if (!this.wheels[i]) {
          this.wheels[i] = new BScroll(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this.pickerSelectedIndex[i],
              /** 默认值就是下面配置的两个，为了展示二者的作用，这里再配置一下 */
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
    height 237px
    background #FFF
    .picker-content
      position relative
      top 20px
      .mask-top, .mask-bottom
        z-index 10
        width 100%
        height 68px
        pointer-events none
        transform translateZ(0)
      .mask-top
        position absolute
        top 0
        background linear-gradient(to top, rgba(255,255,255,.4), rgba(255,255,255,.8))
      .mask-bottom
        position absolute
        bottom 1px
        background linear-gradient(to bottom, rgba(255,255,255,.4), rgba(255,255,255,.8))
      .wheel-wrapper
        display flex
        padding 0 16px
        .wheel
          flex-fix()
          height: 173px
          overflow: hidden
          font-size 16px
          .wheel-scroll
            padding: 0
            margin-top: 68px
            line-height: 36px
            list-style: none
            .wheel-item
              list-style: none
              height: 36px
              overflow: hidden
              white-space: nowrap
              color: #333
</style>


