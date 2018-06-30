/**
 * 作者：yeshengqiang
 * 时间：2018-03-23
 * 描述：mock.js
 */

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./src', false, /\.js$/);
requireAll(req);