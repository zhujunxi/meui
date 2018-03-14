<template>
  <div class="view-page">
    preview-image
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
.img-list-wrap
  display flex
  justify-content flex-start
  align-items flex-end
  .img-list
    width 100px
    height auto

</style>


