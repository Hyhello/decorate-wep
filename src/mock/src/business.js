/**
 * 作者：yeshengqiang
 * 时间：2018-06-22
 * 描述：business.js
 */

import { mockApi, findDetail } from '../config.js';
import * as business from '../data/business.json';

mockApi.onGet('/api/business/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: business,
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/business/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, business),
               message: 'ok'
           }]);
       }, 1000);
    });
});
