<template>
  <footer class="me-tabbar">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'me-tabbar',
  props:{

  }
}
</script>

<style lang="stylus">
  .me-tabbar
    display flex
    justify-content space-around
    background #FFF
    border-top 2px solid rgba(0,0,0,0.08)
    .me-tabbar-item
      display flex
      flex-direction column
      text-align center
      flex 1
      align-items center
      justify-content center
      color #999
      padding 4px 0
      .me-tabbar-icon
        i
          font-size 28px
      .me-tabbar-title
        font-size 12px
        margin-top -2px
      &.me-tabbar-active
        color rgba(9, 187, 7,1)

</style>


