<template>
  <div class="page">
    <me-cell-group title="API">
        <me-cell-item arrow type="link" href="/Api/Axios">
            <span slot="left">axios封装</span>
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
