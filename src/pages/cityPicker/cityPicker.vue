<template>
  <div class="view-page">
    <me-citypicker ref="picker"></me-citypicker>
  </div>
</template>

<script>

export default {
  mounted() {
    let picker = this.$refs.picker
    picker.show()
  }
}
</script>
