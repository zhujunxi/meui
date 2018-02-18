import Vue from 'vue';
import {pageScroll} from '../../../../utils/assist';
const ModalConstructor = Vue.extend(require('./modal.vue').default);
const instance = new ModalConstructor({
    el: document.createElement('div')
});

ModalConstructor.prototype.closeModal = function (type) {
    this.visible = false;
    
    pageScroll.unlock();
    setTimeout(() => {
        const el = instance.$el;
        el.parentNode && el.parentNode.removeChild(el);
        switch(type) {
          case 'success':
            typeof this.success === 'function' && this.success();
            break;
          case 'cancel':
            typeof this.cancel === 'function' && this.cancel();
            break;
        }
        
    }, 300)
    
};

const Modal = (options = {}) => {
    instance.title = options.title;
    instance.content = options.content;
    instance.confirmText = options.confirmText;
    instance.cancelText = options.cancelText;
    instance.showCancel = options.showCancel;

    instance.success = options.success;
    instance.cancel = options.cancel;
    instance.visible = true;

    document.body.appendChild(instance.$el);

    pageScroll.lock();
};

export default Modal;
