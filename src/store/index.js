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
    totalElement: 0,
    loadingText: '加载中'
};

export default new Vuex.Store({
	state,
	strict: process.env.NODE_ENV !== 'production'
});
