/**
 * 作者：yeshengqiang
 * 时间：2018-06-30
 * 描述：business.js
 */

import axios from '@/libs/https';

// 获取业务范围列表
const getBusinessListApi = '/api/business/list';

// 获取业务范围详情
const getBusinessDetailApi = '/api/business/detail';

// 获取业务范围列表
export const getBusinessList = () => axios.get(getBusinessListApi);

// 获取业务范围详情
export const getBusinessDetail = (opt) => axios.get(getBusinessDetailApi, { params: opt });
