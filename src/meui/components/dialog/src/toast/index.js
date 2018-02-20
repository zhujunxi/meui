import Vue from 'vue';
import {pageScroll} from '../../../../utils/assist';
const ToastConstructor = Vue.extend(require('./toast.vue').default);
const instance = new ToastConstructor({
    el: document.createElement('div')
});

ToastConstructor.prototype.closeToast = function () {
    this.visible = false;
    
    pageScroll.unlock();
    const closeToastTimer = setTimeout(() => {
        clearTimeout(closeToastTimer);
        const el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
    
        typeof this.callback === 'function' && this.callback();
    }, 300)
    
};

const Toast = (msg, options = {}) => {
    instance.mes = msg;
    instance.type = options.type;
    instance.timeout = ~~options.timeout || 2000;
    instance.callback = options.callback;
    instance.visible = true;

    document.body.appendChild(instance.$el);

    pageScroll.lock();
    window.addEventListener("hashchange", ()=>{
        instance.closeToast() 
    });

    const toastTimer = setTimeout(() => {
        clearTimeout(toastTimer);
        instance.closeToast();
    }, instance.timeout + 100);
};

export default Toast;
