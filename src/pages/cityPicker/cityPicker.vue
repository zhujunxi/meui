<template>
  <div class="view-page">
    <me-cell-group title="城市表单">
      <me-citypicker @select="handleSelect(arguments)" ></me-citypicker>
    </me-cell-group>
  </div>
</template>

<script>

export default {
  methods:{
    handleSelect(args) {
      this.selectedText = args[1].join('-')
    }
  }
}
</script>
