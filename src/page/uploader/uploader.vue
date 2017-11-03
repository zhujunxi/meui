<template lang="html">
  <div class="box-cell">
    Uploader234
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData:[
        {
          title:'布局',
					icon:'&#xe672;',
          showCell:false,
					cell:[
            {title:'Grid',link:'Index/Accordion'},
            {title:'Sticky',link:'Index/Uploader'},
            {title:'Header',link:'Index/Accordion'},
            {title:'BScroll',link:'Index/Accordion'},
					]
        }
      ]
    }
  },
  components:{

  }
}
</script>

<style lang="css">
</style>
