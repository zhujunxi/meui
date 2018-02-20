<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>

</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:'me-scroll',
  props:{
    title:String,
    value:[String, Number],
    options: Array,
    arrow: {
        type: Boolean,
        default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    };
  },
  mounted() { 
    this.$nextTick(() => { 
      this.scroll = new BScroll(this.$refs.wrapper, {}) 
    }) 
  },
  watch: {
    currentValue(val) {
      this.isEmpty = !val;
      this.$emit('input', val);
    },
    value(val) {
      let newValue = val;
      if(this.isMax) {
        newValue = val.substring(0, this.max);
      }
      this.currentValue = newValue;
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../../stylus/mixin.styl';
</style>
