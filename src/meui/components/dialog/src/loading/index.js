import Vue from 'vue';
import {pageScroll} from '../../../../utils/assist';

const LoadingConstructor = Vue.extend(require('./loading.vue').default);

const instance = new LoadingConstructor({
    el: document.createElement('div')
});

LoadingConstructor.prototype.open = (msg) => {
    instance.msg = msg || '正在加载';
    instance.visible = true;
    document.body.appendChild(instance.$el);
    pageScroll.lock();
    window.addEventListener("hashchange", ()=>{
        instance.close() 
    });
}

LoadingConstructor.prototype.close = () => {
    instance.visible = false;
    pageScroll.unlock();
    const closeTimer = setTimeout(() => {
        clearTimeout(closeTimer);
        const el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
    }, 300)
}


export default {
    open : instance.open,
    close : instance.close,
};
