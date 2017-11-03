<template lang="html">
  <div class="accord">
    <div class="accord-list" v-for="(item, index) in listData">
      <div class="accord-title" :class="{'active':item.showCell}" @click="cellShow(index)">
        <p>{{item.title}}</p>
        <span class="iconfont" v-html="item.icon"></span>
      </div>
      <div class="accord-con" >
        <transition-group name="list" >
          <router-link
            :to="cell.link"
            v-show="item.showCell"
            v-for="(cell, idx) in item.cell"
            :key="cell.title"
            tag="p"
          >
            {{cell.title}}
            <span class="iconfont">&#xea69;</span>
          </router-link>
        </transition-group>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showCell:false
    }
  },
  props:{
    listData:{
      type:Array,
      default:[]
    }
  },
  methods:{
    cellShow(index) {
      let listData = this.listData
      for(let i=0;i<listData.length;i++){
        if(i == index){
          listData[i].showCell = !listData[i].showCell
        }else{
          listData[i].showCell = false
        }
      }
      this.listData = listData
      //this.listData[index].showCell = !this.listData[index].showCell
    }
  }
}
</script>

<style scoped>
  .accord{
    padding: 12px;
    box-sizing: border-box;
  }
  .accord-list{
    border-radius: 3px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .accord-title{
    padding: 0px 12px;
    line-height: 4.2em;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
  }
  .accord-title span{
    font-size: 1.6rem;
    font-weight: 100;
  }
  .accord-title.active{
    color: #999;
  }
  .accord-con{
    overflow: hidden;
  }
  .accord-con p{
    background-color: #FFF;
    padding: 14px 12px;
    border-bottom: 1px solid #F3F3F3;
    display: flex;
    justify-content: space-between;
  }
  .accord-con p span{
    font-size: 1.2rem;
    color: #999;
  }
  .list-enter-active {
    transition: all .3s;
  }
  .list-leave-active {
    transition: all 0s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
</style>
