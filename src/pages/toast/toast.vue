<template>
  <div class="view-page">
      <me-cell-group title="Toast - 吐司提示">
          <me-input title="内容" v-model="content"></me-input>
          <me-input title="时间(毫秒)" v-model="timeout"></me-input>
          <me-select title="图标" v-model="selectValue" :options="selectData" arrow></me-select>
          <me-cell-item type="label">
              <span slot="left">回调函数</span>
              <me-switch slot="right" v-model="showFun"></me-switch>
          </me-cell-item>
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
        content:'吐司提示',
        timeout: 2000,
        selectValue:'成功',
        selectData:['成功','失败','没图标'],
        selectkey:['success','error','noicon'],
        showFun:true
    };
  },
  methods: {
    confirm() {
      let selectValue = this.selectValue;
      let selectData = this.selectData;
      let selectkey = this.selectkey;
      let type;
      for(let i in selectData){
          if(selectData[i] === selectValue){
              type = selectkey[i]
          }
      }
      me.showToast(this.content,{
          type:type,
          timeout:this.timeout,
          callback:() => {
              this.showFun ? me.showToast('执行回调函数') : ''
          }
      })
    }
  },
}
</script>

<style lang='stylus' scoped>

</style>
