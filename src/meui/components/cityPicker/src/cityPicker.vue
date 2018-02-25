<template>
  <div class="me-view">
    <picker
      :data="cityData"
      :selected-index="tempIndex"
      @select="handleSelect(arguments)"
      @change="handleChange"
      ref="picker"
      ></picker>
  </div>
</template>

<script>
import Picker from './picker'
import { provinceList, cityList, areaList } from './areaData'
  export default {
    name:'me-citypicker',
    props: {
    },
    data() {
      return {
        tempIndex: [0, 0, 0],
      }
    },
    computed: {
      cityData() {
        const provinces = provinceList
        const cities = cityList[provinces[this.tempIndex[0]].value]
        const areas = areaList[cities[this.tempIndex[1]].value]
        return [provinces, cities, areas]
      }
    },
    methods: {
      show() {
        this.$refs.picker.setData(this.cityData)
        this.$refs.picker.show()
      },
      handleSelect(args) {
        this.$emit('select', ...args)
      },
      handleChange(i, newIndex) {
        if (newIndex !== this.tempIndex[i]) {
          for (let j = 2; j > i; j--) {
            this.tempIndex.splice(j, 1, 0)
            this.$refs.picker.scrollTo(j, 0)
          }
          this.tempIndex.splice(i, 1, newIndex)
        }
      }
    },
    components:{
      Picker
    }
  }
</script>

<style lang="stylus">

</style>


