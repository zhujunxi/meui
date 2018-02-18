<template>
  <div class="view-page">
      <me-cell-group title="普通List">
          <me-cell-item>
              <span slot="left">普通列表</span>
          </me-cell-item>
          <me-cell-item>
              <span slot="left">普通列表</span>
          </me-cell-item>
          <me-cell-item>
              <span slot="left">普通列表</span>
          </me-cell-item>
      </me-cell-group>
      <me-cell-group title="定制List">
          <me-cell-item>
              <i class="iconfont" slot="icon">&#xe669;</i>
              <span slot="left">有图标</span>
          </me-cell-item>
          <me-cell-item arrow>
              <span slot="left">有箭头</span>
              <span slot="right">左边内容一</span>
          </me-cell-item>
          <me-cell-item type="label">
              <span slot="left">Label</span>
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