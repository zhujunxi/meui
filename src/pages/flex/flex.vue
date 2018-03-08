<template>
  <div class="view-page">
    <div class="demo-tips">横向</div>
    <div class="me-flexbox">
      <div class="me-flexbox-item">flexbox-item</div>
    </div>
    <div class="me-flexbox">
      <div class="me-flexbox-item">flexbox-item</div>
      <div class="me-flexbox-item">flexbox-item</div>
    </div>
    <div class="me-flexbox">
      <div class="me-flexbox-item">flexbox-item</div>
      <div class="me-flexbox-item">flexbox-item</div>
      <div class="me-flexbox-item">flexbox-item</div>
    </div>
    <div class="me-flexbox">
      <div class="me-demo-item">demo-item</div>
      <div class="me-flexbox-item">flexbox-item</div>
    </div>
    <div class="me-flexbox">
      <div class="me-flexbox-item">flexbox-item</div>
      <div class="me-demo-item">demo-item</div>
    </div>
    <div class="demo-tips">竖向</div>
    <div class="me-flexbox me-flexbox-vertical">
      <div class="me-flexbox-item">flexbox-item</div>
      <div class="me-flexbox-item">flexbox-item</div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.view-page{
  padding 0 10px
  box-sizing border-box
}
.demo-tips{
  padding-top 10px
  text-align center
}
.me-flexbox{
  margin 10px auto
}
.me-flexbox-item , .me-demo-item{
  background #DCDCDC
  color #666
  display flex
  justify-content center
  align-items center
  line-height 40px
  border 1px solid #F8F8F8
  padding 0 4px
}
</style>

