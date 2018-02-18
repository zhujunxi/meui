<template>
  <button 
    :class="['me-button',`me-button-${type}`,`me-button-${size}`]"
    :disabled="disabled"
  >
      <slot></slot>
  </button>
</template>

<script>
export default {
  name:'me-button',
  props:{
    disabled: Boolean, 
    type:{
      validator(value) {
        return ['default','danger','primary','hollow'].indexOf(value) > -1;
      },
      default:'default'
    },
    size:{
      validator(value) {
        return ['small','normal','large'].indexOf(value) > -1;
      },
      default:'normal'
    }
  },
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang='stylus' scoped>
  .me-button
    appearance: none;
    text-align: center;
    position: relative;
    border: none;
    pointer-events: auto;
    border-radius: 3px;
    height: 30px;
    font-size: 14px;
    display: inline-block;
    padding: 0 8px;
    white-space: nowrap;
    vertical-align: baseline;
  &.me-button-default
    background-color: #04be02;
    color: #fff;
    &:active
      background-color: #04ab02;
  &.me-button-danger
    background-color: #ef4f4f;
    color: #fff;
    &:active
      background-color: #d74747;
  &.me-button-primary
    background-color: #ffb400;
    color: #fff;
    &:active
      background-color: #e6a200;
  &.me-button-hollow
    background-color: #fff;
    color: #454545;
    border: 1px solid #eaeaea;
    &:active
      background-color: #f7f7f7;
  &.me-button-large
    width: 100%;
    display: block;
    font-size: 16px;
    height: 50px;
    margin-top: 15px;
  &.me-button-small
    height: 24px;
    font-size: 12px;
    padding: 0 6px;
  &:disabled
    background-color: #ccc;
    color: #f0f0f0;
    pointer-events: none;
</style>