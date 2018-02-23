<template>
  <input type="checkbox"
    class="me-switch"
    :disabled="disabled"
    :style="{color: color}"
    v-model="checked"
  />
</template>

<script>
export default {
  name: "me-switch",
  data() {
    return {
        checked: this.value
    };
  },
  props: {
      value: Boolean,
      disabled:{
          type: Boolean,
          default: false
      },
      color: {
          type: String,
          default: '#09bb07'
      }
  },
  watch: {
    checked(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.checked = val;
    }
  }
};
</script>

<style lang='stylus' scoped>
.me-switch {
    position: relative;
    z-index: 10;
    display: block;
    width: 52px;
    height: 32px;
    left: 0;
    border: 1px solid #dfdfdf;
    border-radius: 16px;
    background-color: #dfdfdf;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
}

.me-switch:after, .me-switch:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    border-radius: 15px;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
}

.me-switch:before {
    width: 50px;
    background-color: #fdfdfd;
}

.me-switch:after {
    width: 30px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.me-switch:checked {
    border-color: currentColor;
    background-color: currentColor;
}

.me-switch:checked:before {
    -webkit-transform: scale(0);
    transform: scale(0);
}

.me-switch:checked:after {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
}

.me-switch[disabled] {
    opacity: 0.5;
}
</style>