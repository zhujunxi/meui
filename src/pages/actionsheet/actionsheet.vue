<template>
  <div class="view-page">
      <me-button type="default" size="large" @click.native = "confirm">显示actionsheet</me-button>
  </div>
</template>

<script>
export default {
  methods: {
    confirm() {
        me.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success: function(index) {
                me.showToast(`您选择了第${index+1}个操作`)
            },
            fail: function() {
                me.showToast('取消操作')
            }
        })
    },
  }
}
</script>

<style lang='stylus' scoped>
  .view-page
    padding 20px
    box-sizing border-box
</style>