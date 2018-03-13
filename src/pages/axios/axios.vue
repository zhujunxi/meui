<template>
  <div class="view-page">
    <p style="padding:15px 0">
      <me-button type="default" size="small">default</me-button>
      <me-button type="danger" size="small">danger</me-button>
      <me-button type="primary" size="small">primary</me-button>
      <me-button type="hollow" size="small">hollow</me-button>
    </p>

      <me-button type="default">default</me-button>
      <me-button type="danger">danger</me-button>
      <me-button type="primary">primary</me-button>
      <me-button type="hollow">hollow</me-button>

      <me-button type="default" size="large">default</me-button>
      <me-button type="danger" size="large">danger</me-button>
      <me-button type="primary" size="large">primary</me-button>
      <me-button type="hollow" size="large">hollow</me-button>
      <me-button type="hollow" size="large" disabled>disabled</me-button>
  </div>
</template>

<script src="./rainbow-custom.min.js"></script>
<script>

export default {
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>

<style lang='stylus' scoped>
  .view-page
    padding 20px
    box-sizing border-box
</style>
