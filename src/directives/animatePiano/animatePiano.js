/**
 * 作者：yeshengqiang
 * 时间：2018-05-20
 * 描述：animatePiano.js
 */

import Velocity from 'velocity-animate';
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

// 切分tag
const _splitToTag = (el, value) => {
    const textArr = value.split('');
    let strTpl = '';
    textArr.forEach(item => {
        strTpl += `<span>${item}</span>`;
    });
    el.innerHTML = strTpl;
};

// _toPosfix
const _toPosfix = (el) => {
    el._originalPosArr = [];
    const childs = el._childs_ = toArray(el.children);
    childs.forEach((item, index) => {
        el._originalPosArr[index] = {
            left: item.offsetLeft,
            top: item.offsetTop
        };
    });
    childs.forEach((item, index) => {
        setStyle(item, {
            position: 'absolute',
            left: `${el._originalPosArr[index].left}px`,
            top: `${el._originalPosArr[index].top}px`
        });
    });
};

// 设置config
const setConfig = (el, context) => {
    let result = {};
    let duration = el.getAttribute('animate-piano-duration');
    let recline = el.getAttribute('animate-piano-recline');
    let offset = el.getAttribute('animate-piano-offset');
    (duration = (context && context[duration]) || duration) && (result.duration = duration);
    (recline = (context && context[recline]) || recline) && (result.spinner = recline);
    (offset = (context && context[offset]) || offset) && (result.offset = offset);
    return Object.assign({}, _default, result);
};

// 绑定事件
const bindFire = (el) => {
    let offsetPos;
    // 鼠标移入
    el.__outSideEnter__ = (ev) => {
        const rect = el.getBoundingClientRect();
        offsetPos = {
            xPos: ev.pageX - rect.left,
            yPos: ev.pageY - rect.top
        };
    };
    // 鼠标移动
    el.__outSideMove__ = (ev) => {
        const rect = el.getBoundingClientRect();
        const offsetX = ev.pageX - rect.left;
        const offsetY = ev.pageY - rect.top - offsetPos.yPos;
        // 偏移量大于this.offset;
        if (Math.abs(offsetY) > el._config_.offset) return;
        // 方向
        let placement = offsetY > 0;                   // 移动方向

        el._childs_.forEach((item, index) => {
            const originalPos = el._originalPosArr[index];
            let reclineNum = Math.abs(offsetX - originalPos.left) * el._config_.recline;
            reclineNum *= placement ? 1 : -1;
            let resY = originalPos.top + offsetY - reclineNum;

            if (placement && resY < originalPos.top) {
                resY = originalPos.top;
            } else if (!placement && resY > originalPos.top) {
                resY = originalPos.top;
            }
            setStyle(item, {
                top: `${resY}px`
            });
        });
    };
    // 鼠标移出
    el.__outSideLeave__ = () => {
        el._childs_.forEach((item, index) => {
            Velocity(item, 'stop');
            Velocity(item, {
                top: el._originalPosArr[index].top
            }, {
                easing: 'spring',
                progress: easeOutElastic,
                duration: el._config_.duration
            });
        });
    };
    el.addEventListener('mouseenter', el.__outSideEnter__, false);
    el.addEventListener('mousemove', el.__outSideMove__, false);
    el.addEventListener('mouseleave', el.__outSideLeave__, false);
};

export default {
    name: 'animatePiano',
    bind (el, { value }, { context }) {
        if (!value) return;
        setStyle(el, {
            position: 'relative'
        });
        // 读取配置
        el._config_ = setConfig(el, context);
        // 拆分
        _splitToTag(el, value);
        // 获取初始化定位
        context.$nextTick(() => {
            _toPosfix(el);
        });
        // 绑定事件
        bindFire(el);
    },
    update (el, {value, oldValue}, { context }) {
        if (value === oldValue || !value) return;
        // 读取配置
        el._config_ = setConfig(el, context);
        // 拆分
        _splitToTag(el, value);
        // 获取初始化定位
        context.$nextTick(() => {
            _toPosfix(el);
        });
    },
    unbind (el) {
        el.removeEventListener('mouseenter', el.__outSideEnter__, false);
        el.removeEventListener('mousemove', el.__outSideMove__, false);
        el.removeEventListener('mouseleave', el.__outSideLeave__, false);
        el.__outSideEnter__ = null;
        el.__outSideMove__ = null;
        el.__outSideLeave__ = null;
        el._originalPosArr = null;
        el._childs_ = null;
    }
};
