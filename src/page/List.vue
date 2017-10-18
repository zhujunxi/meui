<template lang="html">
  <div class="list" >
    <div class="wrapper2" ref="wrapper2">
      <h2>List</h2>
      <ul>
        <router-link
          to="/Index/Detail"
          v-for="(item, index) in listData"
          :key="item"
          tag="li"
          >{{item}}
        </router-link>
      </ul>
      <ul>
        <router-link to="/Index/Toast" tag="li">Toast</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
//import Bscroll from 'better-scroll'
export default {
  data() {
    return{
      listData:['详情演示'],
      toast:{
        show:false,
        text:'一条长提示一条长提示一条长提示一条长提示'
      },
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.scroll = new Bscroll(this.$refs.wrapper, {})
    // })
  }
}
</script>

<style lang="css" scoped>
  .list{
    width: 100%;
  }
  ul{
    width: 100%;
  }
  li{
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    background-color: #FFF;
    border-bottom: 1px solid #f8f8f8;
  }
  li:active{
    background-color: #F8F8F8;
  }
</style>
