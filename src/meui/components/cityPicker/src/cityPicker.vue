<template>
  <div class="me-view">
    <me-cell-item arrow @click.native="show">
        <span slot="left">{{title}}</span>
        <span slot="right">{{selectedText}}</span>
    </me-cell-item>
    <picker
      :data="cityData"
      :selected-index="tempIndex"
      :title="title"
      @select="handleSelect(arguments)"
      @change="handleChange"
      ref="picker"
      ></picker>
  </div>
</template>

<script>
import Picker from './picker'
import { provinceList, cityList, areaList } from './areaData'
  export default {
    name:'me-citypicker',
    props: {
      title:{
        type: String,
        default:'选择城市'
      },
      arrow:{
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        tempIndex: [0, 0, 0],
        selectedText: '请选择城市'
      }
    },
    computed: {
      cityData() {
        const provinces = provinceList
        const cities = cityList[provinces[this.tempIndex[0]].value]
        const areas = areaList[cities[this.tempIndex[1]].value]
        return [provinces, cities, areas]
      }
    },
    methods: {
      show() {
        this.$refs.picker.setData(this.cityData)
        this.$refs.picker.show()
      },
      handleSelect(args) {
        this.selectedText = args[1].join('-')
        this.$emit('select', ...args)
      },
      handleChange(i, newIndex) {
        if (newIndex !== this.tempIndex[i]) {
          for (let j = 2; j > i; j--) {
            this.tempIndex.splice(j, 1, 0)
            this.$refs.picker.scrollTo(j, 0)
          }
          this.tempIndex.splice(i, 1, newIndex)
        }
      }
    },
    watch: {
      cityData() {
        this.$refs.picker.refresh()
      }
    },
    components:{
      Picker
    }
  }
</script>

<style lang='stylus' scoped>
@import '../../../stylus/mixin.styl';
.me-cell-item
    display flex
    overflow hidden
    position relative
    background #ffffff
    font-size 16px
    min-height 48px
    padding 0px 16px
    justify-content space-between
    &:not(:last-child)
        border-1px(bottom, rgba(0,0,0,0.12), 16px)
    .me-cell__hd
        display flex
        justify-content center
        align-items center
    .me-cell__bd
        display flex
        justify-content left
        align-items center
        min-width 76px
    .me-cell__ft
        display flex
        justify-content flex-end
        align-items center
        width 100%
        flex 1
        padding 0 10px
.clear
    display: block;
    font-size: 16px;
    color: #999;
    margin-right -16px

  select
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    appearance: none;
    outline: 0;
    -webkit-rtl-ordering: logical;
    cursor: auto;
    letter-spacing: normal;
    word-spacing: normal;
    font-size 16px
    -webkit-writing-mode: horizontal-tb;
    border none
    background #FFF
  .arrow
    display: block;
    font-size: 22px;
    color: #c9c9c9;
    margin-right -12px
</style>


