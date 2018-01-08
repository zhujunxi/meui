<template>
  <div class="view-page">
      <me-cell-group :title="inputText">
          <me-input title="客户名称" v-model="inputText"></me-input>
          <me-input title="联系电话" type="number" :max="11" v-model="phone"></me-input>
          <me-input :title="selectValue" type="text" disabled v-model="garder"></me-input>
          <me-select title="支付方式" v-model="selectValue" :options="selectData" arrow></me-select>
          <me-textarea placeholder="请输入备注" :max="500" v-model="value"></me-textarea>
      </me-cell-group>
      <p style="padding:0 20px">
        <me-button size="large" @click.native="toast">确定</me-button>
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
        garder: '￥10000.00',
        value:'',
        selectValue:'微信',
        selectData:['支付宝','微信','银联']
    };
  },
  methods: {
    toast() {
      toast({
          mes: '提交成功',
          timeout: 14000,
          icon: 'success'
      })
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>
