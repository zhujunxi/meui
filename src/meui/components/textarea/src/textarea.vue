<template>
  <div class="me-cell-item">
    <div class="me-textarea">
      <textarea
      :placeholder="placeholder"
      :maxlength="max"
      v-model="currentValue"
      >
      </textarea>
      <div class="textarea-counter">{{wordLength}}/{{max}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'me-textarea',
  props:{
    value:String,
    placeholder:String,
    max:Number
  },
  data () {
    return {
      currentValue:this.value
    };
  },
  computed: {
    wordLength(){
      return this.value.length
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    }
  }
}
</script>

<style lang='stylus' scoped>
.me-textarea
  padding 8px 16px
  width 100%
  background #FFF
  box-sizing border-box
  textarea
    border: none
    width: 100%
    display: block
    height: 75px
    font-size: 16px
    outline: 0;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    overflow: auto;
    resize: none;
  .textarea-counter
    font-size: 14px;
    color: #b2b2b2;
    text-align: right;
</style>
