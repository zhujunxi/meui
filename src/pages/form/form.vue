<template>
  <div class="view-page">
      <me-cell-group :title="inputText">
          <me-input title="客户名称" v-model="inputText"></me-input>
          <me-input title="联系电话" type="number" :max="11" v-model="phone"></me-input>
          <me-input title="密码" type="password" :max="11" v-model="password"></me-input>
          <me-input :title="selectValue" type="text" disabled v-model="garder"></me-input>
          <me-select title="支付方式" v-model="selectValue" :options="selectData" arrow></me-select>
          <me-cell-item type="label">
              <span slot="left">开关{{showTab}}</span>
              <me-switch slot="right" v-model="showTab"></me-switch>
          </me-cell-item>
          <me-textarea placeholder="多行文本框" :max="500" v-model="value"></me-textarea>
      </me-cell-group>
      <p style="padding:0 20px">
        <me-button size="large" @click.native="confirm">确定</me-button>
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
        password:'wechat',
        garder: '￥10000.00',
        value:'',
        selectValue:'微信',
        selectData:['支付宝','微信','银联'],
        showTab: false,
    };
  },
  methods: {
    confirm() {
      me.showToast('提交成功',{
        type:'success',
      })
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>
