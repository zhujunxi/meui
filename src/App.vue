<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <tab-bar :showTab="showTab"></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/tab-bar'
export default {
  data() {
    return {
      showTab:true
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path == '/Index' || to.path == '/Order'){
        this.showTab = true
      }else{
        this.showTab = false
      }
    }
  },
  components: {
    TabBar
  }
}

</script>

<style>
#app{

}
h2{
  padding: 10px;
  box-sizing: border-box;
}
*{
  padding: 0;
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(370px, 0);
  transform: translate(370px, 0);
}
.slide-right-enter, .slide-left-leave-active {
  opacity: 0;
  -webkit-transform: translate(-370px, 0);
  transform: translate(-375px, 0);
}
.bar{
  width: 100%;
  height: 48px;
  line-height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ccc;
  display: flex;
  z-index: 1000;
}
.bar div{
  flex: 1;
  text-align: center;
}
.bar div:first-child{
  border-right: 1px solid #eee;
}
.router-link-active{
  color: #FF0000
}
</style>
