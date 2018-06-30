// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import svgIcon from './icons';
import ElementUI from 'element-ui';
import waves from '@/directives/waves';
import animateLine from '@/directives/animateLine';
import animatePiano from '@/directives/animatePiano';
import 'element-ui/lib/theme-chalk/index.css';
// 采用mock数据
import '@/mock';

Vue.config.productionTip = false;

Vue.use(waves);
Vue.use(svgIcon);
Vue.use(ElementUI);
Vue.use(animateLine);
Vue.use(animatePiano);

/* eslint-disable no-new */
new Vue({
	router,
    store,
    template: '<App />',
    components: { App }
}).$mount('#app');
