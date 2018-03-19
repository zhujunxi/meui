<template>
  <div class="page">
    <me-cell-group title="封装函数">
        <me-cell-item arrow type="link" href="/Api/Axios">
            <span slot="left">图片上传</span>
            <span slot="right"></span>
        </me-cell-item>
        <me-cell-item arrow type="link" href="/Api/Axios">
            <span slot="left">Axios封装</span>
            <span slot="right"></span>
        </me-cell-item>
        <me-cell-item arrow type="link" href="/Api/Axios">
            <span slot="left">登录状态校验拦截</span>
            <span slot="right"></span>
        </me-cell-item>
        <me-cell-item arrow type="link" href="/Api/Axios">
            <span slot="left">国际化(多语言切换)</span>
            <span slot="right"></span>
        </me-cell-item>
        <me-cell-item arrow type="link" href="/Api/Axios">
            <span slot="left">过渡动画</span>
            <span slot="right"></span>
        </me-cell-item>
        <me-cell-item arrow type="link" href="/Api/Axios">
            <span slot="left">rem方案</span>
            <span slot="right"></span>
        </me-cell-item>
    </me-cell-group>
    <transition name="slide-left">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang='stylus' scoped>
  .page
    position relative
</style>
