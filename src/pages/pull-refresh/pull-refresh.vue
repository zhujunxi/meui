<template>
  <div class="view-page">
    <p class="tips">下拉刷新和上啦加载可以单独配置</p>
    <me-scroll
      class="scroll-model"
      ref="scroll"
      :data="items"
      :options="scrollOptions"
      @pulldown="refreshData"
      @pullup="loadData"
      >
        <div class="item" v-for="(item, index) in items" :key="index">{{item}}</div>
    </me-scroll>
  </div>
</template>
<script>
let pageData = {
  page: 1,
  pageCount: 5,
}
export default {
  data() {
    return {
      items:['第1行','第2行','第3行','第4行','第5行','第6行','第7行','第8行','第9行','第10行'],
      itemIndex: 10,
      // 配置项
      scrollOptions:{
        pullDownRefresh:{
          threshold:90,
          stop: 40,
          txt:'刷新成功',
        },
        pullUpLoad:{
          threshold:0,
          moreTxt: '加载更多',
          noMoreTxt :'没有更多数据',
        },
        scrollbar:{
          fade: true,
        },
        mouseWheel: {
          speed: 20,
          invert: false
        }
      },
      openPullDown:true,
      openPullUp:true
    }
  },
  methods: {
    refreshData() {
      // 模拟更新数据
      setTimeout(() => {
         this.items.unshift(`模拟更新数据: ${+new Date()}`)
         // 如果没有新数据
         // this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    loadData() {
      if(pageData.page <= pageData.pageCount){
        setTimeout(() => {
          let newPage = [
            `第${++this.itemIndex}行`,
            `第${++this.itemIndex}行`,
            `第${++this.itemIndex}行`,
            `第${++this.itemIndex}行`,
            `第${++this.itemIndex}行`
          ]
          this.items = this.items.concat(newPage)
          pageData.page++
        }, 1000)

      }else{
        this.$refs.scroll.forceUpdate()
      }
    }
  },
}
</script>
<style lang="stylus" >
.tips
  padding 20px
  color #666
  font-size 14px

.scroll-model
  width 84%
  height 340px !important
  margin 20px auto
  border 2px solid rgba(0,0,0,0.9)
  .item
    width 100%
    text-align center
    font-size 16px
    padding 16px 12px
    box-sizing border-box
    background #FFF
    position relative
    &:after
      content ''
      width 100%
      height 1px
      background-color #F8F8F8
      position absolute
      left 10px
      bottom 0px
</style>
