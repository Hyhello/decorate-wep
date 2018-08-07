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

// 获取隔音毡列表
const getSoundBlanketListApi = '/api/product/soundBlanket/list';

// 获取隔音毡详情
const getSoundBlanketDetailApi = '/api/product/soundBlanket/detail';

// 获取软包列表
const getSoftPackageListApi = '/api/product/softPackage/list';

// 获取软包详情
const getSoftPackageDetailApi = '/api/product/softPackage/detail';

// 获取硬包列表
const getHardPackageListApi = '/api/product/hardPackage/list';

// 获取硬包详情
const getHardPackageDetailApi = '/api/product/hardPackage/detail';

// 获取纤维列表
const getFlockBoardListApi = '/api/product/flockBoard/list';

// 获取纤维详情
const getFlockBoardDetailApi = '/api/product/flockBoard/detail';

// 获取纤维列表
const getHotPlateListApi = '/api/product/hotPlate/list';

// 获取纤维详情
const getHotPlateDetailApi = '/api/product/hotPlate/detail';

// 获取纤维列表
const getDoorListApi = '/api/product/door/list';

// 获取纤维详情
const getDoorDetailApi = '/api/product/door/detail';

 // 获取吸音板列表
 export const getSoundBoardList = (opt) => axios.get(getSoundBoardListApi, {params: opt});

 // 获取吸音板详情
 export const getSoundBoardDetail = (opt) => axios.get(getSoundBoardDetailApi, {params: opt});

 // 获取吸音棉列表
 export const getSoundAbsorptionList = (opt) => axios.get(getSoundAbsorptionListApi, {params: opt});

 // 获取吸音棉详情
 export const getSoundAbsorptionDetail = (opt) => axios.get(getSoundAbsorptionDetailApi, {params: opt});

 // 获取隔音毡列表
 export const getSoundBlanketList = (opt) => axios.get(getSoundBlanketListApi, {params: opt});

 // 获取隔音毡详情
 export const getSoundBlanketDetail = (opt) => axios.get(getSoundBlanketDetailApi, {params: opt});

  // 获取软包列表
  export const getSoftPackageList = (opt) => axios.get(getSoftPackageListApi, {params: opt});

  // 获取软包详情
  export const getSoftPackageDetail = (opt) => axios.get(getSoftPackageDetailApi, {params: opt});

  // 获取硬包列表
  export const getHardPackageList = (opt) => axios.get(getHardPackageListApi, {params: opt});

  // 获取硬包详情
  export const getHardPackageDetail = (opt) => axios.get(getHardPackageDetailApi, {params: opt});

  // 获取纤维列表
  export const getFlockBoardList = (opt) => axios.get(getFlockBoardListApi, {params: opt});

  // 获取纤维详情
  export const getFlockBoardDetail = (opt) => axios.get(getFlockBoardDetailApi, {params: opt});

  // 获取纤维列表
  export const getHotPlateList = (opt) => axios.get(getHotPlateListApi, {params: opt});

  // 获取纤维详情
  export const getHotPlateDetail = (opt) => axios.get(getHotPlateDetailApi, {params: opt});

  // 获取纤维列表
  export const getDoorList = (opt) => axios.get(getDoorListApi, {params: opt});

  // 获取纤维详情
  export const getDoorDetail = (opt) => axios.get(getDoorDetailApi, {params: opt});
