/**
 * 作者：yeshengqiang
 * 时间：2018-05-12
 * 描述：utils.js
 */

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
        console.log(`${item}${attr.charAt(0).toUpperCase()}${attr.substr(1)}`);
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
