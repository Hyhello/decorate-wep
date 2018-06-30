/**
 * 作者：yeshengqiang
 * 时间：20117-07-31
 * 描述：http
 */
import axios from 'axios';

// 拦截 发
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 收
axios.interceptors.response.use(function (response) {
    if (+response.data.code === 0) {
        return Promise.resolve(response.data);
    } else {
        return Promise.reject(response.data);
    }
}, function (error) {
    return Promise.reject(error);
});

export default axios;
