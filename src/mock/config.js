/**
 * 作者：yeshengqiang
 * 时间：2018-03-23
 * 描述：mock 配置文件
 */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
export const mockApi = new MockAdapter(axios);

export function findDetail (id, arr) {
    const alen = arr.length;
    let index = -1;
    let result = {};
    for (let i = 0; i < alen; i++) {
        if (arr[i].id === id) {
            result = arr[i];
            index = i;
            break;
        }
    }
    if (~index) {
        console.log(index);
        const _prev = index - 1 < 0 ? null : arr[index - 1];
        const _next = index + 1 > alen - 1 ? null : arr[index + 1];
        result._prevId = _prev && _prev.id;
        result._prevTitle = _prev ? _prev.title : '没有了';
        result._nextId = _next && _next.id;
        result._nextTitle = _next ? _next.title : '没有了';
    }
    return result;
}
