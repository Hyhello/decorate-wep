/**
 * 作者：yeshengqiang
 * 时间：2017-11-13
 * 描述：loading
 */
import Loading from './loading.vue';

// 获取样式
function getStyle (target, property) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(target, null)[property];
    } else {
        return target.currentStyle[property];
    }
}

const install = (Vue) => {
    const Transfr = Vue.extend(Loading);

    // 设置config
    function setConfig (el, context) {
        let result = {};
        let text = el.getAttribute('loading-text');
        (text = (context && context[text]) || text) && (result.text = text);
        return result;
    }

    Vue.directive('loading', {
        bind (el, { value, modifiers }, { context }) {
            let config = setConfig(el, context);
            config.fullscreen = !!modifiers.fullscreen;
            let instance = new Transfr({
                data: config
            }).$mount();
            el.instance = instance;
            el.mask = instance.$el;
            context.$nextTick(() => {
                let originPosition = getStyle(el, 'position');
                if (!originPosition || originPosition === 'static') {
                    el.style.position = 'relative';
                }
                if (config.fullscreen) {
                    document.body.appendChild(el.mask);
                } else {
                    el.appendChild(el.mask);
                }
                el.instance.visible = value;
            });
        },
        update (el, { value, oldValue }, { context }) {
            if (value === oldValue) return;
            let text = el.getAttribute('loading-text');
            text = (context && context[text]) || text;
            text && (el.instance.text = text);
            el.instance.visible = value;
        },
        unbind (el) {
            let parent;
            el.mask && (parent = el.mask.parentNode) && parent.removeChild(el.mask);
            el.instance = null;
            el.mask = null;
        }
    });
};

 export default install;
