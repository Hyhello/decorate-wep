/**
 * 作者：yeshengqiang
 * 时间：2018-05-20
 * 描述：index.js
 */

import animateLine from './animateLine.js';

const install = function (Vue) {
    Vue.directive(animateLine.name, animateLine);
};

export default install;
