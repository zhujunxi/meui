<template>
  <div class="view-page">
      <highlight-code lang="javascript" style="margin:10px;border-radius:10px;overflow:hidden">
			/*
* Created by Junxi on 2017/8/17
*/
import router from '../../router'
import store from '../../store'
import config from './config'
import {setStorage, getStorage, getQueryString} from './util'
import axios from 'axios'
var qs = require('qs');
class Api {
  constructor() {
    Object.assign(this, config);
  }
  //基础的HTTP
  base(method, url, data, params, headers){
    //根据环境不同配置不同的host地址
    let host = process.env.NODE_ENV == "production"  // production
            ? this.host
            : this.hostDev

    // [xLSfsgeUgT24jQ]=>途虎  [kLOetQeSjje4jg]=>车轮
    let origin = getQueryString('f')
        ?'?f='+getQueryString('f')
        :''

    Object.assign({},headers)
    return new Promise ((resolve, reject) =>{
      axios({
        url: url+origin,
        method:method,
        baseURL:host,
        data:qs.stringify(data),
        params: params,
        headers: headers,
      }).then(function (response) {
        const {data, status} = response;
        switch (status) {
          case 200:
            resolve(data)
            break;
          default:
            reject();
        }
      }).catch(function (error) {
        console.log(error);
        const {code, msg} = error.response.data;
        switch (code) {
          case 401:
            router.push('login')
            break;
          default:
            alert(msg)
        }
        //reject(error);
      });
    })
  }

  //登录验证的HTTP
  authPost(url, data){
    data?data:{}
    let secret_key = getStorage("sk")
    if(!secret_key){
      router.push('login')
      store.commit('loading',false);
      return
    }
    const headers = {
      'content-type':'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + secret_key
    }
    return this.base('POST', url, data,'', headers)
  }
  authGet(url, params){
    params?params:{}
    let secret_key = getStorage("sk")
    if(!secret_key){
      router.push('login')
      store.commit('loading',false);
      return
    }
    const headers = {
      'content-type':'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + secret_key
    }
    return this.base('GET', url, '',params, headers)
  }
  //不验证登录信息
  post(url, data){
    data?data:{}
    const headers = {'content-type':'application/x-www-form-urlencoded'}
    return this.base('POST', url, data,'', headers)
  }
  get(url, params){
    params?params:{}
    const headers = {'content-type':'application/x-www-form-urlencoded'}
    return this.base('GET', url, '',params, headers)
  }
  //数据埋点
  dataLog(data){
    let secret_key = getStorage("sk");
    let headers = secret_key ? {
        'content-type':'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + secret_key
      } : {
        'content-type':'application/x-www-form-urlencoded'
      }
    return this.base('POST', '/site/log', data,'', headers)
  }
}

export default new Api();

		</highlight-code>
  </div>
</template>

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
</style>
