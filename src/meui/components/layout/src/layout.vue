<template>
  <div class="me-view">
    <header class="me-navbar" v-if="showNavbar">
      页头
    </header>
    <section class="me-page">
      <slot></slot>
    </section>
    <slot name="tabbar"></slot>
  </div>
</template>

<script>
  export default {
    name:'me-layout',
    props: {
      showNavbar:{
        type: Boolean,
        default: true
      },
      showTabbar:{
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../../stylus/index";

  .me-navbar
    height 50px
    line-height 50px
    background #ccc
    text-align center

</style>


