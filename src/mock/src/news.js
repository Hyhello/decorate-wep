/**
 * 作者：yeshengqiang
 * 时间：2018-06-22
 * 描述：news.js
 */

 import { mockApi, findDetail } from '../config.js';
 import * as soundknowledge from '../data/soundknowledge.json';
 import * as evaluation from '../data/evaluation.json';
 import * as industry from '../data/industry.json';
 import * as enterprise from '../data/enterprise.json';

 mockApi.onGet('/api/news/knowledge/list').reply(args => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                code: 0,
                data: soundknowledge,
                message: 'ok'
            }]);
        }, 1000);
     });
 });

 mockApi.onGet('/api/news/knowledge/detail').reply(args => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([200, {
                code: 0,
                data: findDetail(args.params.id, soundknowledge),
                message: 'ok'
            }]);
        }, 1000);
    });
});

 mockApi.onGet('/api/news/evaluation/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: evaluation,
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/news/industry/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: industry,
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/news/enterprise/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: enterprise,
               message: 'ok'
           }]);
       }, 1000);
    });
});
