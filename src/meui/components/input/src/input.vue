<template>
  <div class="me-cell-item">
      <div class="me-cell__hd">
          <slot name="icon"></slot>
      </div>
      <div class="me-cell__bd">
          <span>{{title}}</span>
      </div>
      <div class="me-cell__ft">
          <input
            class="me-input"
            v-model="currentValue"
            :type="type"
            :placeholder="placeholder"
            :maxlength="max"
            :disabled="disabled"
            @focus="focusHandler"
            @blur="blurHandler"
          />
          <span
            class= "iconfont clear"
            v-show="showClearIcon && showClear && !isEmpty"
            @click="clearInput"
          >&#xe617;</span>
      </div>
  </div>

</template>

<script>
export default {
  name:'me-input',
  props:{
    title:String,
    value:[String, Number],
    placeholder:String,
    disabled:Boolean,
    showClear:{
      type: Boolean,
      default: true
    },
    type: {
      validator (value){
        return [
          'text',
          'password',
          'search',
          'email',
          'number',
          'tel',
          'datetime-local',
          'date',
          'time'
        ].indexOf(value) > -1
      },
      default:'text'
    },
    max:Number,
  },
  data () {
    return {
      currentValue: this.value,
      isEmpty: !this.value,
      showClearIcon: false,
      isMax: !!this.max,
    };
  },
  methods:{
    focusHandler() {
      this.showClearIcon = true;
    },
    blurHandler() {
      this.showClearIcon = false;
    },
    clearInput() {
      this.currentValue = ''
    }
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
        font-size 14px
        min-height 48px
        padding 0px 16px
        justify-content space-between
        &:not(:last-child)
            border-1px(bottom, rgba(0,0,0,0.12), 20px)
        .me-cell__hd
            display flex
            justify-content center
            align-items center
        .me-cell__bd
            display flex
            justify-content left
            align-items center
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

  .me-input
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
    font-size 14px
    -webkit-writing-mode: horizontal-tb;
  &[disabled]
    background #FFF
    color #999
</style>
