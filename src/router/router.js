/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：router.js
 */
import App from '../App';

// home
const home = r => require.ensure([], () => r(require('../view/home/home')), 'home');

// text
const text = r => require.ensure([], () => r(require('../view/text')), 'text');

// comText
const comText = r => require.ensure([], () => r(require('../view/comText')), 'comText');

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: 'home'
            },
            {
                path: 'home',
                component: home
            },
            {
                path: 'text',
                component: text
            },
            {
                path: 'comText',
                component: comText
            }
        ]
    }
];
