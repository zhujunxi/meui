<template>
  <div class="view-page">
    <md-article class="md-article"></md-article>
  </div>
</template>

<script>
import MdArticle from './axios配置.md'
export default {
  components:{
    MdArticle
  }
}
</script>

<style lang='stylus'>
.md-article
  padding:10px
  blockquote
    position: relative
    padding: 12px 16px
    border-left: 4px solid #078aff
    color: #6e6e6e
    background: #fff
    font-size: 14px
    border-radius: 0 2px 2px 0
    margin:10px 0
    line-height:20px
  pre
    background:#282c34
    padding:10px
    overflow-x:scroll
    border-radius:2px
    margin:5px 0
  code
    color :#e06c75
    font-size:14px
    line-height:18px
  h2
    color: #078aff
    font-size: 22px
    line-height: 32px
    margin: 20px 0 30px
  // 注释
  .hljs-comment
    color:#757983
  // 紫色
  .hljs-keyword
    color: #bb73d1
  // 绿色
  .hljs-string
    color:#98c379
  // 黄色
  .hljs-attr, .hljs-built_in
    color:#e6c07b

</style>
