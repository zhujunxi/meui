<template>
  <div class="hello">
    <div class="list-slide-wrap">
      <div class="list-slide" v-for="(menu, idx) in menuData">
        <div class="list-slide__hd" @click="toggleMenu(idx)">
          <div class="list-slide-title">{{ menu.title }}</div>
        </div>
        <transition name="slide-fade">
        <div class="list-slide__bd" v-show="menu.active">
          <div class="list" v-for="(list, index) in menu.list" :key="index">
            <div class="list__bd">
              {{ list.title }}
            </div>
          </div>
        </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .list-slide-wrap
    width 94%
    margin 20px auto
    .list-slide
      margin 16px 0
      .list-slide__hd
        background #FFF
        padding 18px
        .list-slide-title
          font-size 16px
      .list-slide__bd
        background #FFF
        border-top 1px solid rgba(0,0,0,0.06)
        .list
          padding 14px

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>

<script>
export default {
  data () {
    return {
      msg: 'H',
      menuData:[
        {
          title:'基础组件',
          active:false,
          list:[
            {title:'Layout - 布局',path:'./index.vue'},
            {title:'Layout - 徽章',path:'./index.vue'},
            {title:'Layout - 按钮',path:'./index.vue'},
            {title:'Layout - 布局',path:'./index.vue'},
            {title:'Layout - 布局',path:'./index.vue'},
            {title:'Layout - 布局',path:'./index.vue'},
          ]
        },
        {
          title:'基础组件',
          active:false,
          list:[
            {title:'Layout - 布局',path:'./index.vue'},
            {title:'Layout - 徽章',path:'./index.vue'},
            {title:'Layout - 按钮',path:'./index.vue'},
            {title:'Layout - 布局',path:'./index.vue'},
            {title:'Layout - 布局',path:'./index.vue'},
            {title:'Layout - 布局',path:'./index.vue'},
          ]
        }
      ]
    }
  },
  methods:{
    toggleMenu(idx) {
      this.menuData[idx].active = !this.menuData[idx].active
    }
  }
}
</script>


