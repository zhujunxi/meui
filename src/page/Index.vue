<template>
  <div class="parent">
    <accord :listData="listData"></accord>
    <transition name="slide">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Accord from 'components/accordion/accordion'

export default {
  name: 'hello',
  data () {
    return {
      transitionName:'slide-left',
      listData:[
        {
          title:'布局',
					icon:'&#xe672;',
          showCell:true,
					cell:[
            {title:'Grid',link:'Index/Accordion'},
            {title:'Sticky',link:'Index/Accordion'},
            {title:'Header',link:'Index/Accordion'},
            {title:'BScroll',link:'Index/Accordion'},
					]
        },
        {
          title:'表单',
					icon:'&#xe656;',
          showCell:false,
					cell:[
            {title:'Input',link:'Index/Accordion'},
            {title:'Button',link:'Index/Accordion'},
            {title:'Radio',link:'Index/Accordion'},
            {title:'Checkbox',link:'Index/Accordion'},
            {title:'Switch',link:'Index/Accordion'},
            {title:'textarea',link:'Index/Accordion'},
            {title:'Range',link:'Index/Accordion'},
            {title:'Rater',link:'Index/Accordion'},
            {title:'Uploader',link:'Index/Accordion'},
					]
        },
        {
          title:'操作反馈',
					icon:'&#xe64b;',
          showCell:false,
					cell:[
            {title:'ActionSheet',link:'Index/Accordion'},
            {title:'Alert',link:'Index/Accordion'},
            {title:'Confirm',link:'Index/Accordion'},
            {title:'Popup',link:'Index/Accordion'},
            {title:'Toast',link:'Index/Accordion'},
            {title:'Loading',link:'Index/Accordion'},
					]
        },
        {
          title:'基础组件',
					icon:'&#xe605;',
          showCell:false,
					cell:[
            {title:'Swipe',link:'Index/Accordion'},
            {title:'Picker',link:'Index/Accordion'},
            {title:'Datetime',link:'Index/Accordion'},
            {title:'Calender',link:'Index/Accordion'},
            {title:'ImagePreview',link:'Index/Accordion'},
            {title:'CellSwipe',link:'Index/Accordion'},
					]
        }
      ]
    }
  },
  mounted() {
    // this.$nextTick(function () {
    //   this.scroll = new BScroll(this.$refs.wrapper, {})
    // })
  },
  components:{
    Accord
  },
  watch:{
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style scoped>
  .parent{
    padding-bottom: 50px;
  }

</style>
