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
                    title: '关于我们'
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
        redirect: '/product/soundBoard',
        component: _import('product/product'),
        meta: {
            title: '产品中心'
        },
        children: [
            {
                path: 'soundBoard',
                component: _import('product/child/soundBoard'),
                meta: {
                    title: '吸音板'
                }
            },
            {
                path: 'soundAbsorption',
                component: _import('product/child/soundAbsorption'),
                meta: {
                    title: '吸音棉'
                }
            },
            {
                path: 'soundBlanket',
                component: _import('product/child/soundBlanket'),
                meta: {
                    title: '隔音毡'
                }
            },
            {
                path: 'softPackage',
                component: _import('product/child/softPackage'),
                meta: {
                    title: '软包'
                }
            },
            {
                path: 'hardPackage',
                component: _import('product/child/hardPackage'),
                meta: {
                    title: '硬包'
                }
            },
            {
                path: 'flockBoard',
                component: _import('product/child/flockBoard'),
                meta: {
                    title: '植绒印花板'
                }
            },
            {
                path: 'hotPlate',
                component: _import('product/child/hotPlate'),
                meta: {
                    title: '烫金体'
                }
            }
        ]
    },
    {
        path: '/customerCase',
        component: _import('customerCase/customerCase'),
        meta: {
            title: '客户案例'
        }
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
