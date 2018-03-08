<template>
  <div class="page hello">
    <div class="intro">
      <div class="intro-title">
        <img :src="require('./image/meui.png')" width="80" height="80" alt="">
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
          <router-link
            class="list"
            v-for="(list, index) in menu.list"
            :key="index"
            :to="list.path"
            tag="div"
          >
            <div class="list__bd">
              {{ list.title }}
            </div>
          </router-link>
        </div>
        </transition>
      </div>
    </div>
    <transition name="slide-left">
      <router-view/>
    </transition>

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
            {title:'Layout - 布局',path:'/Index/Layout'},
            {title:'Flex - 弹性布局',path:'/Index/Flex'},
            {title:'pull-refreshData - 下拉刷新与滚动加载',path:'/Index/PullRefresh'}
          ]
        },{
          title:'表单组件',
          active:false,
          list:[
            {title:'Button - 按钮',path:'/Index/Button'},
            {title:'Form - 表单',path:'/Index/Form'},
            {title:'Cell - 列表',path:'/Index/Cell'},
            {title:'Radio - 单选',path:'/Index/Cell'},
            {title:'CheckBox - 多选',path:'/Index/Cell'},
            {title:'Uploader - 图片上传',path:'/Index/Cell'},
            {title:'Datepicker - 日期选择',path:'/Index/Cell'},
            {title:'Citypicker - 地区选择',path:'/Index/CityPicker'},
          ]
        },{
          title:'操作反馈',
          active:false,
          list:[
            {title:'Toast - 吐司提示',path:'/Index/Toast'},
            {title:'Modal - 对话框',path:'/Index/Modal'},
            {title:'Actionsheet - 操作表',path:'/Index/ActionSheet'},
            {title:'Loading - 加载',path:'/Index/Loading'},
          ]
        },{
          title:'基础组件',
          active:false,
          list:[
            {title:'Accordion - 折叠菜单',path:'/Index/Cell'},
            {title:'Popup - 弹层',path:'/Index/Cell'},
            {title:'Slider - 轮播',path:'/Index/Cell'},
            {title:'Lightbox - 图片查看',path:'/Index/Cell'},
          ]
        },{
          title:'业务组件',
          active:false,
          list:[
            {title:'Spinner - 数量选择器',path:'/Index/Cell'},
            {title:'Search - 搜索',path:'/Index/Cell'},
            {title:'List - 列表',path:'/Index/Cell'},
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
    padding 25px 20px
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
    margin 10px auto
    .list-slide
      margin 16px 0
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
      border-radius 1px
      background #FFF
      .list-slide__hd
        padding 20px 18px
        tap-active()
        .list-slide-title
          font-size 16px
          &.active
            color #999
      .list-slide__bd
        border-1px(top, rgba(0,0,0,0.12), 0)
        overflow hidden
        .list
          padding 18px 14px
          tap-active()
          &:not(:first-child)
            border-1px(top, rgba(0,0,0,0.12), 12px)

</style>
