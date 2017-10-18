<template lang="html">
  <div class="bar" v-if="showTab">
    <router-link class="bar-cell" to="/Index" tag="div">
      <span class="iconfont">&#xe658;</span>
      <i>组件</i>
    </router-link>
    <router-link class="bar-cell" to="/Order" tag="div">
      <span class="iconfont">&#xe669;</span>
      <i>接口</i>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    showTab:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
@import "../../assets/font/font.css";

.bar{
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #FFF;
  display: flex;
  z-index: 100;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.bar-cell{
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: #999;
}
.bar-cell:active{
  background-color: rgba(0, 0, 0, 0.05);
}
.bar-cell span{
  display: block;
  font-size: 1.8rem;
  margin-top: 0.2rem;
}
.bar-cell i{
  display: block;
  font-style: normal;
  font-size: .6rem;
  margin-top: -0.3rem;
}
.router-link-active{
  color: rgba(9, 187, 7,1)
}
</style>
