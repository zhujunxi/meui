<template lang="html">
  <div class="demo">
    <button @click= "toast.show=true">toast</button>
    <toast v-model="toast.show" :text="toast.text" :time="3200" position="bottom"></toast>
  </div>
</template>

<script>
import Toast from 'components/toast/toast'
export default {
  data () {
    return {
      toast:{
        show:false,
        text:'一个尝试toast'
      }
    }
  },
  components: {
    Toast
  }
}
</script>

<style lang="css">
</style>
