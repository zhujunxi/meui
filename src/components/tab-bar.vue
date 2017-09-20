<template lang="html">
  <div class="bar" v-if="showTab">
    <router-link to="/Index" tag="div">index</router-link>
    <router-link to="/Order" tag="div">order</router-link>
  </div>
</template>

<script>
export default {
  props:{
    showTab:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style lang="css">
</style>
