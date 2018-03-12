<template>
  <div class="view-page">
    <div class="main">
      <me-swiper class="demo" :imgList="imgList"></me-swiper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList:[
        'http://temp.im/375x200/4CD964/FFFFFF',
        'http://temp.im/375x200/FF9500/FFFFFF',
        'http://temp.im/375x200/007AFF/FFFFFF',
        'http://temp.im/375x200/FF2D55/FFFFFF'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main{
    display flex
    display: -webkit-flex;
    align-items:flex-start;
    justify-content: center;
    height: 100%;
  }
  .demo{
    height : 200px;
  }
</style>

