## Axios在VUE项目中的封装

---
> Axios是Vuejs官方推荐的Http库,具有如下特征：
- 从浏览器中创建 XMLHttpRequest
- 从 node.js 发出 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防止 CSRF/XSRF

> 对Axios进行Vuejs的插件化处理，便于axios在项目中的应用，

```javascript
// fetch.js
import axios from 'axios'
import qs from 'qs'

class Fetch{
  constructor(options) {
    this.$http = axios.create(Object.assign({
      timeout: 8 * 1000
    }, options))
  }
  setInterceptors() {
    // 请求拦截器
    this.$http.interceptors.request.use( config => {
      // if (store.state.token) {
      //   config.headers.Authorization = `${store.state.token}`;
      // }
      return config;
    }, err => {
      return Promise.reject(err);
    });

    // 响应拦截器
    this.$http.interceptors.response.use( response => {
      return response;
    }, error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            store.commit(types.LOGOUT);
            router.replace({
              path: 'login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          default:
            error.message = `连接错误${error.response.status}`
        }
      } else {
        error.message = "连接到服务器失败"
      }
      return Promise.reject(error)
    });
  }
  setHeaderAuthorization(token){
    this.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // store.commit('setToken',token) ;
  }
  base(_method, _url, _data = {}, _header = {}) {
    return new Promise((resolve, reject) => {
      this.$http({
        method: _method,
        url: _url,
        data: _method == 'POST' ? qs.stringify(_data) : _data,
        header: _header
      }).then((response) => {
        resolve(response.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  get(_url, _data = {}, _header = {}) {
    return this.base('GET', _url, _data = {}, _header = {})
  }
  post(_url, _data = {}, _header = {}) {
    return this.base('POST', _url, _data = {}, _header = {})
  }
}

const install = function (Vue, options) {
  Vue.prototype.$http = new Fetch(options)
}

export default {install}



```
> 在main.js安装插件
```javascript
// main.js
import Vue from 'vue'
import Fetch from './js/fetch'

Vue.use(Fetch)

// 参数配置
// Vue.use(Fetch,{
//   baseURL:'https://cnodejs.org/api/v1',
// })

```

> 实际项目调用实例
```javascript
getData () {
  this.$http.get('/topics')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
    })
}
```
