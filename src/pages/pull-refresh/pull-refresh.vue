<template>
  <div class="view-page">
      <me-scroll>
        <div class="item" v-for="(item, index) in arr" :key="index">{{item}}</div>

      </me-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:[0,1,2]
    }
  },
  created() {
    let brr = [];
    for(let i =0;i<1000;i++) {
      brr.push(i)
    }
    this.arr = brr
  }
}
</script>
<style lang="stylus" >
  .item
    width 100%
    text-align center
    font-size 20px
    padding 10px 0
    background #cccccc
    margin 5px 0
</style>
