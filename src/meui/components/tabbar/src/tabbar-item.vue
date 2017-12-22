<template>
  <router-link :to="link" tag="div" class="me-tabbar-item" :class="classes">
    <span class="me-tabbar-icon">
      <slot name="icon"></slot>
    </span>
    <span class="me-tabbar-title">{{title}}</span>
  </router-link>
</template>

<script>
export default {
  name:'me-tabbar-item',
  props:{
    link: [String, Object],
    title: String,
    active: Boolean
  },
  computed:{
    classes() {
      return this.active?'me-tabbar-active':''
    }
  }
}
</script>

