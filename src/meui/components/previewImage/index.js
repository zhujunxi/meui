import Vue from 'vue'
import {pageScroll} from '../../utils/assist'

const PreviewImageConstructor = Vue.extend(require('./src/previewImage.vue').default)

const instance = new PreviewImageConstructor({
    el: document.createElement('div')
})

PreviewImageConstructor.prototype.open = (options = {}) => {

    instance.imgList = options.imgList
    instance.currentPage = options.index
    document.body.appendChild(instance.$el)
    pageScroll.lock()
    window.addEventListener("hashchange", ()=>{
        instance.close()
    })
}
PreviewImageConstructor.prototype.close = () => {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)

  pageScroll.unlock()
}
export default{
    open: instance.open,
    close: instance.close,
}
