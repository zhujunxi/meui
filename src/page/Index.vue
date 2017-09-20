<template>
  <div class="parent">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      transitionName:'slide-left'
    }
  },
  watch:{
    '$route' (to, from) {
      
      console.log(to.path.split('/').length);
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style scoped>


</style>
