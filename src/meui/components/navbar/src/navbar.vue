<template>
  <div class="me-navbar">
      {{title}}
  </div>
</template>

<script>
export default {
    name:'me-navbar',
    props:{
        title:{
            type:String,
            default:'标题'
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
@import '../../../stylus/mixin.styl';
.me-navbar
  height 50px
  line-height 50px
  background #FFF
  text-align center
  border-1px(bottom,rgba(0,0,0,0.12),0)
</style>