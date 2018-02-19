import Vue from 'vue';
import {pageScroll} from '../../utils/assist';

const ActionSheetConstructor = Vue.extend(require('./src/actionsheet.vue').default);

const instance = new ActionSheetConstructor({
    el: document.createElement('div')
})

ActionSheetConstructor.prototype.open = (options = {}) => {
    instance.itemList = options.itemList;
    instance.success = options.success;
    instance.fail = options.fail;
    instance.visible = true;

    document.body.appendChild(instance.$el);
    pageScroll.lock();
    window.addEventListener("hashchange", ()=>{
        instance.close() 
    });
}
ActionSheetConstructor.prototype.close = () => {
    instance.visible = false;
    
    const closeTimer = setTimeout(() => {
        clearTimeout(closeTimer);
        const el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
        
        pageScroll.unlock();
    }, 300)
}
export default{
    open: instance.open,
    close: instance.close,
};