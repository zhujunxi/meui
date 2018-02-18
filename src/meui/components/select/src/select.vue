<template>
  <label class="me-cell-item">
      <div class="me-cell__hd">
          <slot name="icon"></slot>
      </div>
      <div class="me-cell__bd">
          <span>{{title}}</span>
      </div>
      <div class="me-cell__ft">
        <select slot="right" v-model="currentValue">
            <option v-for="(item, index) in options" :key="index">{{item}}</option>
        </select>
        <i class= "iconfont arrow" v-if="arrow">&#xea69;</i>
      </div>
  </label>

</template>

<script>
export default {
  name:'me-select',
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
    .me-cell-item
        display flex
        overflow hidden
        position relative
        background #ffffff
        font-size 16px
        min-height 48px
        padding 0px 16px
        justify-content space-between
        &:not(:last-child)
            border-1px(bottom, rgba(0,0,0,0.12), 16px)
        .me-cell__hd
            display flex
            justify-content center
            align-items center
        .me-cell__bd
            display flex
            justify-content left
            align-items center
            min-width 76px
        .me-cell__ft
            display flex
            justify-content flex-end
            align-items center
            width 100%
            flex 1
            padding 0 10px
    .clear
        display: block;
        font-size: 16px;
        color: #999;
        margin-right -16px

  select
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    appearance: none;
    outline: 0;
    -webkit-rtl-ordering: logical;
    cursor: auto;
    letter-spacing: normal;
    word-spacing: normal;
    font-size 16px
    -webkit-writing-mode: horizontal-tb;
    border none
    background #FFF
  .arrow
    display: block;
    font-size: 22px;
    color: #c9c9c9;
    margin-right -12px
</style>
