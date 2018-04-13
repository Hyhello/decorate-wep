/**
 * 作者：yeshengqiang
 * 时间：2018-02-27
 * 描述：index.js
 */

import { svgIcon } from '@/components/common';

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);

const install = (Vue) => {
    Vue.component('svgIcon', svgIcon);
};

export default install;
