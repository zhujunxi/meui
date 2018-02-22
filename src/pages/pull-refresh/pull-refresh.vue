<template>
  <div class="view-page">
    <me-scroll
      :data="arr"
      :pulldown="true"
      :pullup="true"
      @pulldown="refreshData"
      @pullup="loadData"
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
      arr:['1','2','3','4','5'],
      scrollY:20,
    }
  },
  created() {
    //this.loadData()
  },
  methods: {
    refreshData() {
      function randomSort(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
      }
      let arr = this.arr;
      setTimeout(() => {
        this.arr = arr.sort(randomSort)
      }, 2000)
      
    },
    loadData() {
      // alert('refresh')
      let arr = this.arr;
      let brr = [];
      
      for(let i = Number(arr[arr.length - 1]) + 1;i <= Number(arr[arr.length - 1]) + 10; i++) {
        brr.push(i)
      }
      setTimeout(() => {
        this.arr = arr.concat(brr)
      }, 2000)
    }
  },
}
</script>
<style lang="stylus" >
.content
  min-height 100.1%
  .item
    width 100%
    text-align center
    font-size 20px
    padding 10px 0
    background rgba(255,255,0,.6)
    margin-bottom 10px
</style>
