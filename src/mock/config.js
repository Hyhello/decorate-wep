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
        result._prev = index - 1 < 0 ? null : arr[index - 1];
        result._next = index + 1 > alen - 1 ? null : arr[index + 1];
    }
    return result;
}
