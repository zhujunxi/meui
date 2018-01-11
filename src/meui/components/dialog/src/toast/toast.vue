<template>
  <div class="me-toast">
    <div class="me-toast__hd">
      <i class="iconfont">&#xe651;</i>
    </div>
    <div class="me-toast__bd">
      {{mes}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mes: String,
    icon: String,
    timeout: Number,
    callback: Function
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
  .me-toast
    position: fixed;
    z-index: 5000;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 5px;
    color: #FFFFFF;
    display flex
    flex-direction column
    align-items center
    justify-content center
    .me-toast__hd
      padding 15px 0
      i
        font-size 34px
    .me-toast__bd
      text-align center
      padding 0 0 20px
 </style>
