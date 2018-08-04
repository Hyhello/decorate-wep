/**
 * 作者：yeshengqiang
 * 时间：2018-06-30
 * 描述：customerCase.js
 */

import axios from '@/libs/https';

// 获取客户案例列表
const getCustomerCaseApi = '/api/customerCase/list';

// 获取客户案例列表
export const getCustomerCase = () => axios.get(getCustomerCaseApi);
