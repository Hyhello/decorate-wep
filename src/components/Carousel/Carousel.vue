/**
 * 作者：yeshengqiang
 * 时间：2018-04-25
 * 描述：Carousel组件
 */
<style lang="scss" scoped>
    .carousel-panel {
        position: relative;
        background-color: #ccc;
        overflow-x: hidden;
        .carousel__container {
            position: relative;
            width: 100%;
            height: 300px;  // default
            .carousel__btn {
                position: absolute;
                z-index: 9999;
                top: 50%;
                border: none;
                outline: none;
                cursor: pointer;
                padding: 6px 12px;
                user-select: none;
                -webkit-user-select: none;
                transform: translate3d(0, -50%, 0);
                -webkit-transform: translate3d(0, -50%, 0);
                &.carousel__arrow--left {
                    left: 20px;
                }
                &.carousel__arrow--right {
                    right: 20px;
                }
            }
        }
        .carousel__indicators-panel {
            position: absolute;
            z-index: 2;
            list-style: none;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
            padding: 0;
            font-size: 0;
            .carousel__indicators {
                &.is-active {
                    background-color: #fdd000;
                    width: 12px;
                }
                display: inline-block;
                width: 6px;
                height: 6px;
                opacity: 1;
                border-radius: 10px;
                background: #fff;
                margin: 0 3px;
                cursor: pointer;
                transition: width 0.3s ease-in-out;
            }
        }
    }
</style>
<template>
    <div class="carousel-panel">
        <div class="carousel__container">
            <button @click="handlePrev()" class="carousel__btn carousel__arrow--left">
                <svg-icon type="back"></svg-icon>
            </button>
            <button @click="handleNext()" class="carousel__btn carousel__arrow--right">
                <svg-icon type="forward"></svg-icon>
            </button>
            <slot></slot>
        </div>
        <ul class="carousel__indicators-panel">
            <li class="carousel__indicators" @click="handleChoose(index)" :class="{'is-active': currentValue === index}" v-for="(item, index) in indicatorsList" :key="index"></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Carousel',
        props: {
            value: {
                type: Number,
                default: 0
            },
            height: String
        },
        data () {
            return {
                currentValue: this.value,
                indicatorsList: 0
            };
        },
        methods: {
            findChild () {
                return this.$children.filter(item => item.$options.name === 'CarouselItem');
            },
            forwordToBack (num, arr) {
                var center = parseInt(arr.length / 2);
                return num !== center
                            ? arr.slice(center).concat(arr.slice(0, center))
                            : arr;
            },
            updateValue () {
                const childs = this.findChild();
                this.indicatorsList = childs.length;
                let width = this.$el.offsetWidth;
                childs.forEach((item, index) => {
                    item.currentValue = this.currentValue === index;
                    let diff = index - this.currentValue;
                    let offset = 0;
                    if (this.indicatorsList - Math.abs(diff) <= 2) {
                        offset = (diff > 0 ? -1 : 1) * (this.indicatorsList - Math.abs(diff));
                    } else {
                        offset = Math.abs(diff) <= 2
                                    ? diff
                                    : diff > 0 ? 2 : -2;
                    }
                    item.currentAnimate = Math.abs(offset) <= 1;
                    item.offset = offset * width;
                });
                // this.getPos();
            },
            // 获取pos
            getPos () {
                const childs = this.findChild();
                if (childs.length <= 0) return;
                const el = childs[0].$el;
                this.$nextTick(() => {
                    let rect = el.getBoundingClientRect();
                    console.log(rect);
                    // this.$refs['carousel-containter'].style.height = `${rect.height}px`;
                });
            },
            handlePrev () {
                if (--this.currentValue < 0) {
                    this.currentValue = this.indicatorsList - 1;
                }
            },
            handleNext () {
                if (++this.currentValue > this.indicatorsList - 1) {
                    this.currentValue = 0;
                }
            },
            handleChoose (index) {
                this.currentValue = index;
            }
        },
        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val, oldValue) {
                this.updateValue();
                this.$emit('input', val);
            }
        }
    };
</script>
