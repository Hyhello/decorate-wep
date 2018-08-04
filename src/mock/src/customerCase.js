/**
 * 作者：yeshengqiang
 * 时间：2018-06-22
 * 描述：customerCase.js
 */

import { mockApi } from '../config.js';
import * as customerCase from '../data/customerCase.json';

mockApi.onGet('/api/customerCase/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: customerCase,
               message: 'ok'
           }]);
       }, 1000);
    });
});
