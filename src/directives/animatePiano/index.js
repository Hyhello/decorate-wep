/**
 * 作者：yeshengqiang
 * 时间：2018-0520
 * 描述：index.js
 */

 import animatePiano from './animatePiano.js';

 const install = function (Vue) {
    Vue.directive(animatePiano.name, animatePiano);
};

export default install;
