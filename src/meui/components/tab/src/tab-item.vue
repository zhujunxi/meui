<template>
  <div class="tab-item" @click="onItemClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'me-tab-item',
  methods:{
    onItemClick() {
      this.$emit('on-change', this.currentIndex)
      this.$parent.tabIndex = this.currentIndex
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

