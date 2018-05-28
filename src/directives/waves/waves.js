/**
 * 作者：yeshengqiang
 * 时间：2018-05-23
 * 描述：animateWaves.js
 */

 import { setStyle } from '@/libs/utils';
 import Velocity from 'velocity-animate';

 // 默认配置
 const _default = {
    bgColor: 'rgba(255, 255, 255, 0.3)',
    opacity: 0.25
 };

 // 读取配置
 const getConfig = (el, context) => {
     let result = {};
     let bgColor = el.getAttribute('waves-bg');
     let opacity = el.getAttribute('waves-opacity');
     (bgColor = (context && context[bgColor]) || bgColor) && (result.bgColor = bgColor);
     (opacity = (context && context[opacity]) || opacity) && (result.opacity = opacity);
     el._config_ = Object.assign({}, _default, result);
 };

 // 计算duration
 const calcDuration = (el, evCenterX, evCenterY) => {
    // 计算鼠标点击点到对角线的最远距离
    const oWdith = el.offsetWidth;
    const oHeight = el.offsetHeight;
    const x = evCenterX > oWdith / 2 ? evCenterX : oWdith - evCenterX;
    const y = evCenterY > oHeight / 2 ? evCenterY : oHeight - evCenterY;
    let maxLen = Math.sqrt(x * x + y * y);
    let durantion = 0;
    while (maxLen >= 0) {
        durantion += 16.7;
        maxLen -= 1;
    }
    return Math.ceil(durantion);
 };

 export default {
    name: 'waves',
    bind (el, binding, { context }) {
        // 读取配置文件
        getConfig(el, context);
        const oCanvas = el._oCanvas_ = document.createElement('canvas');
        el.appendChild(oCanvas);
        setStyle(oCanvas, {
            position: 'absolute',           // 脱离文本流
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            opacity: el._config_.opacity
        });
        context.$nextTick(() => {
            if (oCanvas.offsetParent !== el) {
                setStyle(el, {
                    position: 'relative'
                });
            }
            oCanvas.width = oCanvas.offsetWidth;
            oCanvas.height = oCanvas.offsetHeight;
        });
        // 点击事件
        el.__outSideClick__ = (ev) => {
            const cxt = oCanvas.getContext('2d');
            const centerX = ev.offsetX;
            const centerY = ev.offsetY;
            const duration = calcDuration(oCanvas, centerX, centerY);
            let radius = 0;
            cxt.clearRect(0, 0, oCanvas.width, oCanvas.height);
            Velocity(oCanvas, 'stop');
            Velocity(oCanvas, {
                _radius: '=+1'
            }, {
                easing: 'linear',
                progress: function () {
                    cxt.beginPath();
                    cxt.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                    cxt.fillStyle = el._config_.bgColor;
                    cxt.fill();
                    radius += 2;
                },
                complete: function () {
                    cxt.clearRect(0, 0, oCanvas.width, oCanvas.height);
                },
                duration
            });
        };
        oCanvas.addEventListener('click', el.__outSideClick__, false);
    },
    unbind (el) {
        el._oCanvas_.removeEventListener('click', el.__outSideClick__, false);
        el.removeChild(el._oCanvas_);
        el.__outSideClick__ = null;
        el._config_ = null;
        el._oCanvas_ = null;
    }
 };
