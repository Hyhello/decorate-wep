/**
 * 作者：yeshengqiang
 * 时间：2018-05-21
 * 描述：piano.js
 */

import { toArray } from '@/libs/utils';

export default class Piano {
    'use strict';
    constructor (el, options) {
        this._el = el;
        this.options = Object.assign({}, Piano._default, options);
        el.style.position = 'relative';
        this._splitToTag();
        this._toPosfix();
    };
    // 拆分数据到对应的tag
    _splitToTag () {
        let el = this._el;
        const innerText = el.innerText || el.textContent;
        const textArr = innerText.split('');
        let strTpl = '';
        textArr.forEach(item => {
            strTpl += `<${this.options.tag}>${item}</${this.options.tag}>`;
        });
        el.innerHTML = strTpl;
    };
    // toPosfix
    _toPosfix () {
        let el = this._el;
        this._originalPosArr = [];
        const childs = toArray(el.children);
        childs.forEach(item => {
            console.log(item.offsetLeft);
            console.log(item.offsetTop);
        });
    };
    static _default = {
        tag: 'span',            // 默认tag为span
        offset: 22,             // 最大偏移量
        duration: 500,          // 晃动时间
        recline: 0.1            // 每像素偏移量
    };
};
