<template>
  <div class="view-page">
    <me-cell-group title="Popup位置">
      <me-cell-item type="label">
          <span slot="left">默认</span>
          <me-switch slot="right" v-model="showPopup"></me-switch>
      </me-cell-item>
      <me-cell-item type="label">
          <span slot="left">右侧</span>
          <me-switch slot="right" v-model="showRight"></me-switch>
      </me-cell-item>
      <me-cell-item type="label">
          <span slot="left">左侧</span>
          <me-switch slot="right" v-model="showLeft"></me-switch>
      </me-cell-item>
      <me-cell-item type="label">
          <span slot="left">上面</span>
          <me-switch slot="right" v-model="showTop"></me-switch>
      </me-cell-item>
    </me-cell-group>

    <me-popup v-model="showPopup"> <p class="popup-demo">底部</p> </me-popup>

    <me-popup v-model="showRight" position="right" width="60%">
      <p style="padding:0 20px">
        <me-button size="large" @click.native="showRight = false">手动关闭</me-button>
      </p>
    </me-popup>
    <me-popup v-model="showLeft" position="left" width="60%">
      <p class="popup-demo">左侧</p>
    </me-popup>

    <me-popup v-model="showTop" position="top" height="60%">
      <p class="popup-demo">上面</p>
    </me-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showPopup: false,
        showTop: false,
        showLeft: false,
        showRight: false,
        items:['第1行','第2行','第3行','第4行','第5行'],
      }
    },
    methods: {

    },
  }
</script>
<style lang="stylus" >
  .popup-demo
    display flex
    justify-content center
    align-items center
    min-height 300px
</style>
