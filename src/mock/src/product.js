/**
 * 作者：yeshengqiang
 * 时间：2018-06-22
 * 描述：product.js
 */

import { mockApi, findDetail } from '../config.js';
import * as soundBoard from '../data/soundBoard.json';
import * as soundAbsorption from '../data/soundAbsorption.json';
import * as soundBlanket from '../data/soundBlanket.json';
import * as softPackage from '../data/softPackage.json';
import * as hardPackage from '../data/hardPackage.json';
import * as flockBoard from '../data/flockBoard.json';
import * as hotPlate from '../data/hotPlate.json';
import * as door from '../data/door.json';

// 分页
const findPage = (opt, arr) => {
    let result = {
        currentNo: opt.pageNo,
        dataList: [],
        total: arr.length
    };
    const start = (opt.pageNo - 1) * opt.pageSize;
    const end = start + opt.pageSize;
    result.dataList = arr.slice(start, end);
    return result;
};

mockApi.onGet('/api/product/soundBoard/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, soundBoard),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundBoard/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, soundBoard),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundAbsorption/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, soundAbsorption),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundAbsorption/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, soundAbsorption),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundBlanket/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, soundBlanket),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundBlanket/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, soundBlanket),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/softPackage/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, softPackage),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/softPackage/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, softPackage),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/hardPackage/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, hardPackage),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/hardPackage/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, hardPackage),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/flockBoard/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, flockBoard),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/flockBoard/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, flockBoard),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/hotPlate/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, hotPlate),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/hotPlate/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, hotPlate),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/door/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, door),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/door/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, door),
               message: 'ok'
           }]);
       }, 1000);
    });
});
