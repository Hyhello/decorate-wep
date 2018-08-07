/**
 * 作者：yeshengqiang
 * 时间：2018-06-30
 * 描述：product.js
 */

import axios from '@/libs/https';

// 获取吸音板列表
const getSoundBoardListApi = '/api/product/soundBoard/list';

 // 获取吸音板列表
 export const getSoundBoardList = (opt) => axios.get(getSoundBoardListApi, {params: opt});
