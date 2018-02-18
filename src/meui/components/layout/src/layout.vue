<template>
  <div class="me-view">
    <me-navbar v-if="showNavbar" title="页头"></me-navbar>
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
body, html
  height: 100%
  
.me-view
  height: 100%;
  display: flex
  flex-direction: column
  margin: 0 auto
  max-width: 750px
  min-width: 300px

.me-page
  width: 100%
  height: 100%
  flex: 1
  overflow-y: auto
  overflow-x: hidden
  -webkit-overflow-scrolling: touch
  position: relative
  background: #F8F8F8
  
</style>


