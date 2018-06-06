/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：router.js
 */

import _import from './_import.js';

export default [
    {
        path: '',
        redirect: '/home',
        hidden: true
    },
    {
        path: '/home',
        component: _import('home/home'),
        meta: {
            title: '首页',
            desciption: true
        }
    },
    {
        path: '/about',
        redirect: '/about/aboutUs',
        component: _import('about/about'),
        meta: {
            title: '关于公司'
        },
        children: [
            {
                path: 'aboutUs',
                component: _import('about/child/aboutUs'),
                meta: {
                    title: '关于腾达'
                }
            },
            {
                path: 'contactUs',
                component: _import('about/child/contactUs'),
                meta: {
                    title: '联系我们'
                }
            },
            {
                path: 'message',
                component: _import('about/child/message'),
                meta: {
                    title: '用户留言'
                }
            }
        ]
    },
    {
        path: '/product',
        redirect: '/product/',
        component: _import('product/product'),
        meta: {
            title: '产品中心'
        },
        children: [
            {
                path: 'soundInsulation',
                component: _import('product/child/soundInsulation'),
                meta: {
                    title: '隔音板'
                }
            },
            {
                path: 'soundAbsorption',
                component: _import('product/child/soundAbsorption'),
                meta: {
                    title: '吸音棉'
                }
            }
        ]
    },
    {
        path: '/news',
        component: _import('news/news'),
        meta: {
            title: '新闻中心'
        }
    },
    // {
    //     path: 'customerCase',
    //     component: _import('customerCase/customerCase'),
    //     meta: {
    //         title: '客户案例'
    //     }
    // },
    {
        path: '/technicalSupport',
        component: _import('technicalSupport/technicalSupport'),
        meta: {
            title: '技术支持'
        }
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
