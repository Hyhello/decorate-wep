/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    pageNo: 1,
    pageSize: 20,
    layout: 'prev, pager, next, total',
    totalElement: 0,
    loadingText: '加载中',
    company: '北京叶斌腾达装饰设计有限公司'
};

export default new Vuex.Store({
	state,
	strict: process.env.NODE_ENV !== 'production'
});
