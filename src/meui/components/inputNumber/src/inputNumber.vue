<template>
  <div class="input-number">
    <button @click="decrease">-</button>
    <input v-model="currentValue" type="text" readonly>
    <button @click="crease">+</button>
  </div>
</template>

<script>
export default {
  name:'me-input-number',
  props:{
    value:{
      type: [Number, String],
      default:0,
    },
    max: Number,
    min: Number,
    disable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    };
  },
  watch:{
    currentValue(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    crease() {
      if(this.currentValue >= this.max) return
      this.currentValue++
    },
    decrease() {
      if(this.currentValue === 0 ) return
      if(this.currentValue <= this.min) return
      this.currentValue--
    }

  }
}
</script>

<style lang='stylus' scoped>
  .input-number
    height 30px
    border 1px solid #bdbdbd
    display flex
    input
      max-width 36px
      text-align center
      height 30px
      border-left 1px solid #bdbdbd
      border-right 1px solid #bdbdbd
    button
      height 30px
      border none
      background #FFF
      color #bdbdbd
      font-size 14px
      width 30px
</style>
