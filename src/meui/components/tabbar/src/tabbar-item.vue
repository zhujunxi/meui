<template>
  <div class="me-tabbar-item" :class="classes" v-if="type == 'div'">
    <span class="me-tabbar-icon">
      <slot name="icon"></slot>
    </span>
    <span class="me-tabbar-title">{{title}}</span>
  </div>

  <router-link :to="link" tag="div" class="me-tabbar-item" :class="classes" v-else>
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
    active: Boolean,
    type:{
      type:[String],
      default: 'router'
    }
  },
  computed:{
    classes() {
      return this.active?'me-tabbar-active':''
    }
  }
}
</script>

