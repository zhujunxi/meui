<template>
  <div class="view-page">
    <me-cell-group title="数量选择器">
        <me-cell-item>
            <span slot="left">正常</span>
            <me-input-number slot="right" v-model="number"></me-input-number>
        </me-cell-item>
        <me-cell-item>
            <span slot="left">不能大于6</span>
            <me-input-number slot="right" v-model="maxNumber" :max="6"></me-input-number>
        </me-cell-item>
        <me-cell-item>
            <span slot="left">不能小于3</span>
            <me-input-number slot="right" v-model="minNumber" :min="3"></me-input-number>
        </me-cell-item>
        <me-cell-item>
            <span slot="left">在4-8之间</span>
            <me-input-number slot="right" v-model="rangeNumber" :min="4" :max= 8></me-input-number>
        </me-cell-item>
    </me-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 1,
      maxNumber: 3,
      minNumber: 5,
      rangeNumber:6
    };
  }
}
</script>

<style lang='stylus' scoped>

</style>
