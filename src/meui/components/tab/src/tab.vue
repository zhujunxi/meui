<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'me-tab',
  mounted() {
    for(let i = 0; i < this.$children.length; i++) {
      this.$children[i].currentIndex = i
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab
    display flex
    background #FFF
    border-bottom 1px solid #F1F1F1
    .tab-item
      flex 1
      text-align center
      padding 20px 0
      &:active
        background #F8F8F8

</style>

