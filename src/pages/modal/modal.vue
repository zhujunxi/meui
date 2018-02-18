<template>
  <div class="view-page">
      <me-cell-group title="Modal - 对话框">
          <me-input title="标题" v-model="title"></me-input>
          <me-input title="内容" v-model="content"></me-input>
          <me-input title="确定文字" v-model="confirmText"></me-input>
          <me-input title="取消文字" v-model="cancelText" v-if="showCancel"></me-input>
          <me-cell-item type="label">
              <span slot="left">显示取消</span>
              <me-switch slot="right" v-model="showCancel"></me-switch>
          </me-cell-item>
      </me-cell-group>
      <p style="padding:0 20px">
        <me-button size="large" @click.native="confirm">确定</me-button>
      </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        showHeader: false,
        title:'提示', 
        content:'我看见天是蓝的，水是清的，你是美的',
        confirmText:'确认',
        cancelText:'取消',
        showCancel: true,
    };
  },
  methods: {
    confirm() {
      me.showModal({
        title:this.title,
        content:this.content,
        confirmText: this.confirmText,
        cancelText: this.cancelText,
        showCancel: this.showCancel,
        success:() => {
            me.showToast(`您点了 ${this.confirmText}`)
        },
        cancel:() => {
           me.showToast(`您点了 ${this.cancelText}`)
        }
      })
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>
