<template>
  <div class="parent">

    <!-- <div class="wrapper" ref="wrapper">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div> -->
    <accord :listData="listData"></accord>
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
          title:'组件',
					icon:'&#xe602;',
          showCell:true,
					cell:[
            {title:'Accordion',link:'components/accordion.html'},
						{title:'Swiper',link:'picker.html'},
						{title:'Lightbox',link:'picker.html'},
						{title:'Pagination',link:'picker.html'},
						{title:'Tabbar',link:'tab.html'},
						{title:'Navbar',link:'picker.html'},
						{title:'Off canvas',link:'picker.html'},
						{title:'Pull to refresh',link:'picker.html'}

					]
        },
        {
          title:'通讯',
					icon:'&#xe602;',
          showCell:false,
					cell:[
            {title:'Accordion',link:'components/accordion.html'},
						{title:'Swiper',link:'picker.html'},
						{title:'Lightbox',link:'picker.html'},
						{title:'Pagination',link:'picker.html'}
					]
        },
        {
          title:'通讯',
					icon:'&#xe602;',
          showCell:false,
					cell:[
            {title:'Accordion',link:'components/accordion.html'},
						{title:'Swiper',link:'picker.html'},
						{title:'Lightbox',link:'picker.html'},
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
      console.log(to.path.split('/').length);
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style scoped>


</style>
