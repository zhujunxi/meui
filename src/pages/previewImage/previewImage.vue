<template>
  <div class="view-page">
    <h3>点击图片预览</h3>
    <div class="img-list-wrap">
      <img
        class="img-list"
        v-for="(item, index) in imgList"
        :src="item"
        :alt="index"
        @click="preImg(index)"
        >
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return{
      imgList:[
        '//wx2.sinaimg.cn/mw690/73c3f5ably1fpc5vhyh37j20fe0lnaak.jpg',
        '//wx2.sinaimg.cn/mw690/73c3f5ably1fpc5vho6tvj20fe0a93yv.jpg',
        '//wx4.sinaimg.cn/mw690/73c3f5ably1fpc5vijymtj20fe0nlmyk.jpg'
      ]
    }
  },
  methods:{
    preImg(index) {
      me.previewImage({
        index: index, // 当前显示图片的索引
        imgList: this.imgList // 需要预览的图片http链接列表
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
h3
  font-size 16px
  padding 20px 12px
.img-list-wrap
  display flex
  justify-content flex-start
  align-items flex-end
  flex-wrap wrap
  .img-list
    width 100px
    height auto

</style>


