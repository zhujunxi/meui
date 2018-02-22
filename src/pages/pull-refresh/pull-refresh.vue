<template>
  <div class="view-page">
    <me-scroll
      :data="arr"
      :pulldown="pulldown"
      @pulldown="loadData"
      >
      <div class="content">
        <div class="item" v-for="(item, index) in arr" :key="index">{{item}}</div>
      </div>
    </me-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:['a','b','c'],
      pulldown: true,
      scrollY:20,
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      let brr = [];
      for(let i = 0;i < 12; i++) {
        brr.push(i)
      }
      let arr = this.arr;
      this.arr = arr.concat(brr)
    }
  },
}
</script>
<style lang="stylus" >
  .item
    width 100%
    text-align center
    font-size 20px
    padding 10px 0
    background rgba(255,255,0,.6)
    margin-bottom 10px
</style>
