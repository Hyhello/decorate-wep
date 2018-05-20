/**
 * 作者：yeshengqiang
 * 时间：2018-05-12
 * 描述：utils.js
 */

 const _toString = ({}).toString;
 const _hasOwn = ({}).hasOwnProperty;

 // type
 export const _typeOf = (target) => {
    return _toString.call(target).replace(/^\[object (\w+)\]$/i, '$1').toLowerCase();
 };

 // 判断是否是一个number
 export const ensureNumber = (n) => {
     return (typeof n === 'number' && !isNaN(n));
 };

 // 供初始化函数使用
 export const noop = () => {};

 // css3
 export const addStyle = (el, attr, attrValue) => {
    const vendors = ['Webkit', 'Moz', 'Ms', 'O'];
    vendors.forEach(item => {
        el.style[`${item}${attr.charAt(0).toUpperCase()}${attr.substr(1)}`] = attrValue;
    });
 };

 // 防抖
 export const debounce = (idea, action) => {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            // args > 3  apply 速度快一些， 小于3 call速度快一些
            if (args.length > 3) {
                action && action.apply(this, args);
            } else {
                action && action.call(this, ...args);
            }
        }, idea);
    };
 };

 // 绑定事件
 export const addEvent = function (target, type, fn) {
    if (target.attachEvent) {
        target.attachEvent(['on' + type], fn);
    } else if (target.addEventListener) {
        target.addEventListener(type, fn, false);
    } else {
        target['on' + type] = fn;
    }
 };

 export const removeEvent = function (target, type, fn) {
    if (target.detachEvent) {
        target.detachEvent(['on' + type], fn);
    } else if (target.removeEventListener) {
        target.removeEventListener(type, fn, false);
    } else {
        target['on' + type] = null;
    }
 };

 export const addOnce = function (target, type, fn) {
    var listener = function (e) {
        fn && fn.call(this, e);
        removeEvent(target, type, listener);
    };
    addEvent(target, type, listener);
 };

 export const getDom = (type) => {
    return document.documentElement[type] || document.body[type];
 };

 export function scrollTop (el, from = 0, to, duration = 500) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll (start, end, step) {
        if (start === end) return;

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

// hasOwn
export const hasOwn = (target, attr) => {
    return _hasOwn.call(target, attr);
};

// addClass
export const addClass = (el, classes) => {
    const reg = new RegExp('\\b' + classes + '\\b', 'i');
    if (reg.test(el.className)) return;
    el.className = `${el.className} ${classes}`.match(/\S+/gi).join(' ');
};
