/**
 * 作者：yeshengqiang
 * 时间：2018-05-20
 * 描述：animateLine.js
 */

import { hasOwn, addClass } from '@/libs/utils';
import './animateLine.scss';

// 创建元素
const createElement = (tag, attr) => {
    let oTag = document.createElement(tag);
    for (let i in attr) {
        if (hasOwn(attr, i)) {
            switch (i.toLowerCase()) {
                case 'class':
                    attr[i].forEach(item => {
                        addClass(oTag, item);
                    });
                    break;
            }
        }
    }
    return oTag;
};

export default {
    name: 'animateLine',
    bind (el) {
        el.style.position = 'relative';
        el.__animateLine__ = createElement('div', {
            'class': ['v-animate-line']
        });
        el.appendChild(el.__animateLine__);
        el.__outSideHover__ = () => {
            el.__animateLine__.style.left = '0';
            el.__animateLine__.style.width = '100%';
        };
        el.__outSideLeave__ = () => {
            el.__animateLine__.style.left = '50%';
            el.__animateLine__.style.width = 0;
        };
        el.addEventListener('mouseenter', el.__outSideHover__, false);
        el.addEventListener('mouseleave', el.__outSideLeave__, false);
    },
    unbind (el) {
        el.removeEventListener('mouseenter', el.__outSideHover__, false);
        el.removeEventListener('mouseleave', el.__outSideLeave__, false);
        el.removeChild(el.__animateLine__);
        el.__outSideHover__ = null;
        el.__animateLine__ = null;
    }
};
