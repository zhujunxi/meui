<template>
  <div class="view-page">
    <me-citypicker ref="picker" @select="handleSelect(3,arguments)"></me-citypicker>
  </div>
</template>

<script>

export default {
  mounted() {
    let picker = this.$refs.picker
    picker.show()
  },
  methods:{
    handleSelect(index, args) {
      // this.selectedText.splice(index, 1, args[2].join('，'))
    }
  }
}
</script>
