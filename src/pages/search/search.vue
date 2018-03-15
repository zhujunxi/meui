<template>
  <div class="view-page">
    <div class="search-bar">
      <input type="search" class="search-input" placeholder="请输入关键字">
      <button class="search-btn">搜索</button>
    </div>
    <div style="height:20px;"></div>
    <div class="search-bar">
      <input type="search" @focus="focusHandler" @blur="blurHandler" class="search-input" placeholder="请输入关键字">
      <button class="search-btn" v-if="showBtn">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBtn: false
    };
  },
  methods: {
    focusHandler() {
      this.showBtn = true
    },
    blurHandler() {
      this.showBtn = false
    }
  }
}
</script>

<style lang='stylus' scoped>
.view-page
  padding-top 60px
  .search-bar
    position: relative
    padding: 8px 10px
    display: -webkit-box
    display: -webkit-flex
    display: flex
    box-sizing: border-box
    background-color: #EFEFF4
    overflow hidden
    .search-input
      padding: 6px 4px
      width: 100%
      height: 1.42857143em
      border: 0
      font-size: 14px
      line-height: 1.42857143em
      box-sizing: content-box
      background: #FFF
      outline none
      border-radius 3px
    .search-btn
      padding-left 10px
      background transparent
      border none
      outline none
      width: 20%
      font-size 14px

</style>
