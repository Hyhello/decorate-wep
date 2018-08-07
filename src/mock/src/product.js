/**
 * 作者：yeshengqiang
 * 时间：2018-06-22
 * 描述：product.js
 */

import { mockApi, findDetail } from '../config.js';
import * as soundBoard from '../data/soundBoard.json';
// import * as evaluation from '../data/evaluation.json';
// import * as industry from '../data/industry.json';
// import * as enterprise from '../data/enterprise.json';
console.log(findDetail);
mockApi.onGet('/api/product/soundBoard/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: soundBoard,
               message: 'ok'
           }]);
       }, 1000);
    });
});
