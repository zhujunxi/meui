<template>
  <div class="hello">
    <div class="intro">
      <div class="intro-title">
        <img :src="require('./image/meui-120.png')" width="80" height="80" alt="">
        <!-- <div class="intro-text">EUI<span class="intro-version">4.0</span></div> -->
      </div>

      <div class="intro-desc">A Front-end web Farmework based on VUE</div>
    </div>

    <div class="list-slide-wrap">
      <div class="list-slide" v-for="(menu, idx) in menuData" :key="idx">
        <div class="list-slide__hd" @click="toggleMenu(idx)">
          <div :class="['list-slide-title', {active:menu.active}]">{{ menu.title }}</div>
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

<script>
export default {
  data () {
    return {
      menuData:[{
          title:'布局',
          active:false,
          list:[
            {title:'Layout - 布局',path:'./index.vue'},
            {title:'Navbar - 顶栏',path:'./index.vue'},
            {title:'Tabbar - 底栏',path:'./index.vue'},
            {title:'Flex - 弹性布局',path:'./index.vue'},
            {title:'pull-refresh - 下拉加载',path:'./index.vue'},
            {title:'infintit - 无限滚动',path:'./index.vue'},
          ]
        },{
          title:'表单组件',
          active:false,
          list:[
            {title:'Button - 按钮',path:'./index.vue'},
            {title:'Form - 表单',path:'./index.vue'},
            {title:'Cell - 列表',path:'./index.vue'},
            {title:'Radio - 单选',path:'./index.vue'},
            {title:'CheckBox - 多选',path:'./index.vue'},
            {title:'Selector - 选择器',path:'./index.vue'},
            {title:'Switch - 开关',path:'./index.vue'},
            {title:'Uploader - 图片上传',path:'./index.vue'},
            {title:'Datepicker - 日期选择',path:'./index.vue'},
            {title:'Citypicker - 地区选择',path:'./index.vue'},
          ]
        },{
          title:'操作反馈',
          active:false,
          list:[
            {title:'Toast - 吐司提示',path:'./index.vue'},
            {title:'Dialog - 对话框',path:'./index.vue'},
            {title:'Actionsheet - 操作表',path:'./index.vue'},
            {title:'Loading - 加载',path:'./index.vue'},
          ]
        },{
          title:'基础组件',
          active:false,
          list:[
            {title:'Accordion - 折叠菜单',path:'./index.vue'},
            {title:'Popup - 弹层',path:'./index.vue'},
            {title:'Slider - 轮播',path:'./index.vue'},
            {title:'Lightbox - 图片查看',path:'./index.vue'},
          ]
        },{
          title:'业务组件',
          active:false,
          list:[
            {title:'Spinner - 数量选择器',path:'./index.vue'},
            {title:'Search - 搜索',path:'./index.vue'},
            {title:'List - 列表',path:'./index.vue'},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~assets/stylus/mixin.styl';

  .intro
    padding 40px 20px
    text-align center
    .intro-title
      font-size 20px
      font-weight 100
      color #09bb07
      position relative
      display flex
      justify-content center
      .intro-text
        height 80px
        line-height 80px
        vertical-align bottom
      .intro-version
        position absolute
        right -28px
        top 0px
        font-size 12px
        color #FFF
        background #09bb07
        padding 1px 4px
        border-radius 3px
    .intro-desc
      font-weight 400
      color #999

  .list-slide-wrap
    width 94%
    margin 20px auto
    .list-slide
      margin 16px 0
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
      border-radius 1px
      background #FFF
      .list-slide__hd
        padding 20px 18px
        .list-slide-title
          font-size 16px
          &.active
            color #999
      .list-slide__bd
        border-1px(top, rgba(0,0,0,0.12), 0) 
        overflow hidden
        .list
          padding 14px
          &:not(:first-child)
            border-1px(top, rgba(0,0,0,0.12), 12px)

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
