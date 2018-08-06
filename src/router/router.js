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
                path: 'business',
                component: _import('about/child/business'),
                meta: {
                    title: '业务介绍'
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
            },
            {
                path: 'detail',
                hidden: true,
                component: _import('product/detail'),
                meta: {
                    title: '详情'
                }
            }
        ]
    },
    {
        path: '/business',
        component: _import('business/business'),
        meta: {
            title: '业务范围'
        },
        children: [
            {
                path: 'businessList',
                component: _import('business/child/businessList'),
                meta: {
                    title: '业务范围'
                }
            },
            {
                path: 'detail',
                hidden: true,
                component: _import('business/detail'),
                meta: {
                    title: '详情'
                }
            }
        ]
    },
    {
        path: '/customerCase',
        component: _import('customerCase/customerCase'),
        meta: {
            title: '客户案例'
        },
        children: [
            {
                path: 'detail',
                hidden: true,
                component: _import('customerCase/detail'),
                meta: {
                    title: '详情'
                }
            }
        ]
    },
    {
        path: '/news',
        component: _import('news/news'),
        redirect: '/news/enterprise',
        meta: {
            title: '新闻中心'
        },
        children: [
            {
                path: 'enterprise',
                component: _import('news/child/enterprise'),
                meta: {
                    title: '企业新闻'
                }
            },
            {
                path: 'industry',
                component: _import('news/child/industry'),
                meta: {
                    title: '行业新闻'
                }
            },
            {
                path: 'evaluation',
                component: _import('news/child/evaluation'),
                meta: {
                    title: '客户评价'
                }
            },
            {
                path: 'soundknowledge',
                component: _import('news/child/soundknowledge'),
                meta: {
                    title: '吸音知识'
                }
            },
            {
                path: 'detail',
                hidden: true,
                component: _import('news/detail'),
                meta: {
                    title: '详情'
                }
            }
        ]
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
        redirect: '/technicalSupport/afterService',
        component: _import('technicalSupport/technicalSupport'),
        meta: {
            title: '技术支持'
        },
        children: [
            {
                path: 'afterService',
                component: _import('technicalSupport/child/afterService'),
                meta: {
                    title: '售后服务'
                }
            },
            {
                path: 'installMethod',
                component: _import('technicalSupport/child/installMethod'),
                meta: {
                    title: '安装方法'
                }
            },
            {
                path: 'commonProblem',
                component: _import('technicalSupport/child/commonProblem'),
                meta: {
                    title: '常见问题'
                }
            }
        ]
    },
    {
        path: '/text',
        component: _import('text'),
        hidden: true,
        meta: {
            title: '测试页面',
            desciption: true
        }
    },
    {
        path: '/comText',
        component: _import('comText'),
        hidden: true,
        meta: {
            title: '组件测试页面',
            desciption: true
        }
    }
];
