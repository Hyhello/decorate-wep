/**
 * 作者：yeshengqiang
 * 时间：2018-05-22
 * 描述：animatePiano.js
 */
import './animatePiano.scss';
import Velocity from 'velocity-animate';
import { toArray, setStyle } from '@/libs/utils';

// 动画函数
const easeOutElastic = (x, t, b, c, d) => {
    var s = 1.70158; var p = 0; var a = c;
    if (t === 0) return b; if ((t /= d) === 1) return b + c; if (!p) p = d * 0.3;
    if (a < Math.abs(c)) { a = c; s = p / 4; } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};

export default {
    name: 'animatePiano',
    props: {
        tag: {
            type: String,
            default: 'a'
        },
        offset: {
            type: Number,
            default: 20
        },
        duration: {
            type: Number,
            default: 500
        },
        recline: {
            type: Number,
            default: 0.1
        },
        content: String
    },
    data () {
        return {
            originalPosArr: [],                  // 原始位置
            offsetPos: {}                        // 原始鼠标移入位置
        };
    },
    methods: {
        // 定位
        _toPosfix () {
            this.$nextTick(() => {
                this.childs = toArray(this.$el.children);
                this.childs.forEach((item, index) => {
                    this.originalPosArr[index] = {
                        left: item.offsetLeft,
                        top: item.offsetTop
                    };
                });
                this.childs.forEach((item, index) => {
                    let pos = this.originalPosArr[index];
                    setStyle(item, {
                        position: 'absolute',
                        top: `${pos.top}px`,
                        left: `${pos.left}px`
                    });
                });
            });
        },
        // 鼠标移入
        handleEnter (ev) {
            const rect = this.$el.getBoundingClientRect();
            this.offsetPos = {
                xPos: ev.pageX - rect.left,
                yPos: ev.pageY - rect.top
            };
        },
        // 鼠标移动
        handleMove (ev) {
            const rect = this.$el.getBoundingClientRect();
            const offsetX = ev.pageX - rect.left;
            const offsetY = ev.pageY - rect.top - this.offsetPos.yPos;
            // 偏移量大于this.offset;
            if (Math.abs(offsetY) > this.offset) return;
            // 方向
            let placement = offsetY > 0;                   // 移动方向

            this.childs.forEach((item, index) => {
                const originalPos = this.originalPosArr[index];
                let reclineNum = Math.abs(offsetX - originalPos.left) * this.recline;
                reclineNum *= placement ? 1 : -1;
                let resY = originalPos.top + offsetY - reclineNum;

                if (placement && resY < originalPos.top) {
                    resY = originalPos.top;
                } else if (!placement && resY > originalPos.top) {
                    resY = originalPos.top;
                }
                setStyle(item, {
                    top: `${resY}px`
                });
            });
        },
        // 鼠标移出
        handleLeave () {
            this.childs.forEach((item, index) => {
                Velocity(item, {
                    top: this.originalPosArr[index].top
                }, {
                    easing: 'spring',
                    progress: easeOutElastic
                });
            });
        },
        // 拆分tag
        _splitToTag () {
            let strTpl = '';
            const textArr = this.content.split('');
            textArr.forEach(item => {
                strTpl += `<span>${item}</span>`;
            });
            // 获取定位
            this._toPosfix();
            return strTpl;
        }
    },
    render (h) {
        return h(this.tag, {
            'class': 'animate-piano__panel',
            on: {
                mouseenter: this.handleEnter,
                mousemove: this.handleMove,
                mouseleave: this.handleLeave
            },
            domProps: {
                innerHTML: this.content && this._splitToTag(h)
            }
        });
    }
};
