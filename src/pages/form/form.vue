<template>
  <div class="view-page">
      <me-cell-group :title="inputText">
          <me-input title="客户名称" v-model="inputText"></me-input>
          <me-input title="联系电话" type="number" :max="11" v-model="phone"></me-input>
          <me-input title="性别" type="text" disabled v-model="garder"></me-input>
          <me-textarea placeholder="请输入备注" :max="50" v-model="value"></me-textarea>
      </me-cell-group>
      <p style="padding:0 20px">
        <me-button size="large">确定</me-button>
      </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        showHeader: false,
        inputText: '表单组件',
        phone: 18682088658,
        garder: '男(不可更改)',
        value:''
    };
  },
  methods: {

  },
}
</script>

<style lang='stylus' scoped>

</style>
