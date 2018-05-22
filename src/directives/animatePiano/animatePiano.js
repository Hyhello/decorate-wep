/**
 * 作者：yeshengqiang
 * 时间：2018-05-20
 * 描述：animatePiano.js
 */

import { setStyle, toArray } from '@/libs/utils';

// 动画函数
const easeOutElastic = (x, t, b, c, d) => {
    var s = 1.70158; var p = 0; var a = c;
    if (t === 0) return b; if ((t /= d) === 1) return b + c; if (!p) p = d * 0.3;
    if (a < Math.abs(c)) { a = c; s = p / 4; } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};

// 默认配置
const _default = {
    offset: 22,             // 最大偏移量
    duration: 500,          // 晃动时间
    recline: 0.1            // 每像素偏移量
};
console.log(_default, easeOutElastic);

// 切分tag
const _splitToTag = (el, value) => {
    const textArr = value.split('');
    let strTpl = '';
    textArr.forEach(item => {
        strTpl += `<${this.options.tag}>${item}</${this.options.tag}>`;
    });
    el.innerHTML = strTpl;
};

// _toPosfix
const _toPosfix = (el) => {
    el._originalPosArr = [];
    const childs = toArray(el.children);
    childs.forEach(item => {
        console.log(item.offsetLeft);
        console.log(item.offsetTop);
    });
};

export default {
    name: 'animatePiano',
    bind (el, { value }, { context }) {
        // 读取配置
        const config = Object.assign({}, _default, value || {});
        const getVal = el.innerHTML;
        console.log(getVal);
        console.log(config);
        // setStyle({
        //     position: 'relative'
        // });
        // _splitToTag(el, value);
        // _toPosfix(el);
        // el.__outSideEnter__ = (ev) => {
        //     let el = ev.target || ev.srcElement;
        //     if (el.tagName === 'SPAN') {
        //         el._originPosY = el.offsetTop;
        //         el.__yPos__ = ev.pageY - el.offsetTop;
        //     }
        // };
        // el.__outSideMove__ = (ev) => {
        //     let el = ev.target || ev.srcElement;
        //     if (el.tagName === 'SPAN') {
        //         let t = ev.pageY - el.__yPos__;
        //         if (Math.abs(t) > _default.offset) {
        //             elReset(el);
        //         } else {
        //             let indx = -1;
        //             let childrens = toArray(el.parentNode.children);
        //             childrens.forEach((item, index) => {
        //                 if (item === el) {
        //                     indx = index;
        //                 }
        //             });
        //             childrens[indx - 1].style.top = t - 1.4 + 'px';
        //             childrens[indx + 1].style.top = t - 1.4 + 'px';
        //             // toArray(el.parentNode.children).forEach();
        //             el.style.top = t + 'px';
        //         }
        //     }
        // };
        // el.__outSideOut__ = (ev) => {
        //     let el = ev.target || ev.srcElement;
        //     if (el.tagName === 'SPAN') {
        //         elReset(el);
        //     }
        // };

        // // 重置
        // const elReset = (el) => {
        //     el.style.top = el._originPosY + 'px';
        //     delete el.__yPos__;
        //     delete el._originPosY;
        // };

        // // 绑定事件
        // el.addEventListener('mouseenter', el.__outSideEnter__, false);
        // el.addEventListener('mousemove', el.__outSideMove__, false);
        // el.addEventListener('mouseleave', el.__outSideOut__, false);

        // context.$nextTick(() => {
        //     const childs = toArray(el.children);
        //     let res = {
        //         posX: [],
        //         posY: []
        //     };
        //     // 获取offset
        //     childs.forEach((item, index) => {
        //         res.posX[index] = item.offsetLeft;
        //         res.posY[index] = item.offsetTop;
        //     });
        //     childs.forEach((item, index) => {
        //         setStyle(item, {
        //             position: 'absolute',
        //             left: `${res.posX[index]}px`,
        //             top: `${res.posY[index]}px`
        //         });
        //     });
        //     res = {
        //         posX: [],
        //         posY: []
        //     };
        // });
    },
    update (el) {
        console.log(el.innerHTML);
    },
    unbind (el) {}
    // update (el, { value }) {

    // }
};
