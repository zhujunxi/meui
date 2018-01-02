<template>
  <div class="view-page">
      <me-cell-group title="设置车身颜色">
          <me-cell-item>
              <i class="iconfont" slot="icon">&#xe669;</i>
              <span slot="left">左边内容一</span>
              <span slot="right">左边内容一</span>
          </me-cell-item>
          <me-cell-item arrow>
              <span slot="left">左边内容一</span>
              <span slot="right">左边内容一</span>
          </me-cell-item>
          <me-cell-item>
              <span slot="left">设置此地址默认地址</span>
              <me-switch slot="right" v-model="showHeader"></me-switch>
          </me-cell-item>
      </me-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
        showHeader:false
    };
  },
  methods: {

  }
}
</script>

<style lang='stylus' scoped>

</style>