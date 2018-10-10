import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.js';

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes,
    strict: process.env.NODE_ENV !== 'production'
});

export default router;
