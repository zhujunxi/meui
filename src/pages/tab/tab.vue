<template>
  <div class="view-page">
    <me-tab>
      <me-tab-item @on-change="handler">Tab1</me-tab-item>
      <me-tab-item @on-change="handler">Tab2</me-tab-item>
      <me-tab-item @on-change="handler">Tab3</me-tab-item>
    </me-tab>
  </div>
</template>

<script>
export default {
  methods:{
    handler(value){
      console.log(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  h1
    padding 20px
</style>


