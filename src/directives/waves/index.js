/**
 * 作者：yeshengqiang
 * 时间：2018-05-23
 * 描述：index.js
 */

 import waves from './waves.js';

 const install = (Vue) => {
    Vue.directive(waves.name, waves);
 };

 export default install;
