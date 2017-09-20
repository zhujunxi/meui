<template lang="html">
  <div class="list">
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
</template>

<script>
export default {
  data() {
    return{
      listData:['详情演示'],
      toast:{
        show:false,
        text:'一条长提示一条长提示一条长提示一条长提示'
      },
    }
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
