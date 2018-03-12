<template>
  <div class="view-page">
    <me-swiper class="demo" :imgList="imgList" :showdot="showDot"></me-swiper>
    <me-cell-group title="Swiper配置">
      <me-cell-item type="label">
          <span slot="left">指示点</span>
          <me-switch slot="right" v-model="showDot"></me-switch>
      </me-cell-item>
      <me-cell-item type="label">
          <span slot="left">自动播放</span>
          <me-switch slot="right" v-model="autoPlay"></me-switch>
      </me-cell-item>
    </me-cell-group>
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
      ],
      showDot: true,
      autoPlay: true,
    }
  }
}
</script>

<style lang="stylus" scoped>
  .demo{
    height : 200px;
  }
</style>

