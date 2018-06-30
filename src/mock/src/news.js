/**
 * 作者：yeshengqiang
 * 时间：2018-06-22
 * 描述：news.js
 */

 import { mockApi } from '../config.js';
 import * as data from '../data/news.json';

 mockApi.onGet('/api/news/knowledge/list').reply(args => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                code: 0,
                data,
                message: 'ok'
            }]);
        }, 1000);
     });
 });
