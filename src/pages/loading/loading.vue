<template>
  <div class="view-page">
      <me-cell-group title="加载框 - Loading">
          <me-input title="持续时间" v-model="timeout"></me-input>
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
        timeout: 2000,
    };
  },
  methods: {
    confirm() {
      me.showLoading()
      const showLoadingTimer = setTimeout(() => {
          clearTimeout(showLoadingTimer)
          me.hideLoading()
      }, this.timeout)
    }
  },
}
</script>
