<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
    <!-- :showTab="showTab" -->
    <tab-bar :class="showTab?'slide-up':'slide-down'" ></tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/tab-bar/tab-bar'
export default {
  data() {
    return {
      showTab:false
    }
  },
  activated(){
    console.log(this.$route);
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
body{
  background-color: rgba(0, 0, 0, 0.05);
  font-size: 16px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
.slide-enter-active, .slide-leave-active{
  transition: all .3s
}
.slide-enter, .slide-leave-to{
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}
.slide-down{
  transform: translate3d(0,100%,0);
  transition: transform .3s
}
.slide-up{
  transform: translate3d(0,0,0);
  transition: transform .3s
}
.box-cell{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F3F3F3;
  z-index: 100;
}
</style>
