/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {

};

export default new Vuex.Store({
	state,
	strict: process.env.NODE_ENV !== 'production'
});