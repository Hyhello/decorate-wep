/**
 * 作者：yeshengqiang
 * 时间：2018-05-02
 * 描述：animate.js
 */

import './animate.js';
import { ensureNumber, noop } from './utils.js';

const easeOutExpo = function (t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
};

export default class Count {
    constructor (startVal, endVal, duration, callback) {
        this.timer = null;
        this.startVal = Number(startVal);
        this.endVal = Number(endVal);
        this.duration = Number(duration);
        if (!ensureNumber(this.startVal) ||
            !ensureNumber(this.endVal) ||
            !ensureNumber(this.duration)) {
            console.error(`[Count] startVal (${startVal}) or endVal (${endVal}) or duration (${duration}) is not a number`);
        }
        this.callback = callback || noop;
        this.countDown = this.startVal > this.endVal;
    };
    count (timestamp) {
        if (!this.startTime) { this.startTime = timestamp; }
        this.timestamp = timestamp;
        var progress = timestamp - this.startTime;
        this.remaining = this.duration - progress;
        var val = this.countDown
                    ? this.startVal - easeOutExpo(progress, 0, this.startVal - this.endVal, this.duration)
                    : easeOutExpo(progress, this.startVal, this.endVal - this.startVal, this.duration);
        this.frameVal = this.countDown
                            ? Math.max(val, this.endVal)
                            : Math.min(val, this.endVal);
        this.callback && this.callback(this.frameVal);
        if (progress < this.duration) {
            this.timer = requestAnimationFrame(this.count.bind(this));
        }
    };
    start () {
        this.timer = requestAnimationFrame(this.count.bind(this));
    };
    reset () {
        delete this.startTime;
        cancelAnimationFrame(this.timer);
        this.timer = null;
        this.countDown = this.startVal > this.endVal;
        this.callback(this.startVal);
    };
    update (newEndVal) {
        newEndVal = Number(newEndVal);
        if (!ensureNumber(newEndVal)) {
            console.error('[CountUp] update() - new endVal is not a number: ' + newEndVal);
            return;
        }
        if (newEndVal === this.frameVal) return;
        cancelAnimationFrame(this.timer);
        delete this.startTime;
        this.startVal = this.frameVal;
        this.endVal = newEndVal;
        this.countDown = this.startVal > this.endVal;
        this.timer = requestAnimationFrame(this.count.bind(this));
    }
};
