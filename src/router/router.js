/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：router.js
 */

import _import from './_import.js';

import App from '../App';

export default [
    {
        path: '/',
        component: App,
        redirect: 'home',
        children: [
            {
                path: 'home',
                component: _import('home/home'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'about',
                component: _import('about/about'),
                meta: {
                    title: '关于我们'
                }
            },
            {
                path: 'product',
                component: _import('product/product'),
                meta: {
                    title: '产品中心'
                }
            },
            {
                path: 'news',
                component: _import('news/news'),
                meta: {
                    title: '新闻中心'
                }
            },
            {
                path: 'customerCase',
                component: _import('customerCase/customerCase'),
                meta: {
                    title: '客户案例'
                }
            },
            {
                path: 'technicalSupport',
                component: _import('technicalSupport/technicalSupport'),
                meta: {
                    title: '技术支持'
                }
            },
            {
                path: 'message',
                component: _import('message/message'),
                meta: {
                    title: '用户留言'
                }
            }
        ]
    },
    {
        path: '/text',
        component: _import('text'),
        hidden: true,
        meta: {
            title: '测试页面'
        }
    },
    {
        path: '/comText',
        component: _import('comText'),
        hidden: true,
        meta: {
            title: '组件测试页面'
        }
    }
];
