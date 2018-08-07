/**
 * 作者：yeshengqiang
 * 时间：2018-06-30
 * 描述：product.js
 */

import axios from '@/libs/https';

// 获取吸音板列表
const getSoundBoardListApi = '/api/product/soundBoard/list';

// 获取吸音板详情
const getSoundBoardDetailApi = '/api/product/soundBoard/detail';

// 获取吸音棉列表
const getSoundAbsorptionListApi = '/api/product/soundAbsorption/list';

// 获取吸音板详情
const getSoundAbsorptionDetailApi = '/api/product/soundAbsorption/detail';

 // 获取吸音板列表
 export const getSoundBoardList = (opt) => axios.get(getSoundBoardListApi, {params: opt});

 // 获取吸音板详情
 export const getSoundBoardDetail = (opt) => axios.get(getSoundBoardDetailApi, {params: opt});

 // 获取吸音棉列表
 export const getSoundAbsorptionList = (opt) => axios.get(getSoundAbsorptionListApi, {params: opt});

 // 获取吸音棉详情
 export const getSoundAbsorptionDetail = (opt) => axios.get(getSoundAbsorptionDetailApi, {params: opt});
