/**
 * 作者：yeshengqiang
 * 时间：2018-04-25
 * 描述：CarouselItem
 */
<style lang="scss" scoped>
    .carousel-item-panel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
        &.is-active {
            z-index: 1;
        }
        &.is-animate {
            transition: transform 0.4s ease-in-out;
            -webkit-transition: transform 0.4s ease-in-out;
        }
    }
</style>
<template>
    <div class="carousel-item-panel" :class="classes" :style="styles"><slot></slot></div>
</template>
<script>
    export default {
        name: 'CarouselItem',
        data () {
            return {
                currentAnimate: false,
                currentValue: false,
                offset: 0
            };
        },
        computed: {
            classes () {
                return {
                    'is-active': this.currentValue,
                    'is-animate': this.currentAnimate
                };
            },
            styles () {
                return {
                    transform: `translate3d(${this.offset}px, 0, 0)`
                };
            }
        },
        mounted () {
            this.updateValue();
        },
        methods: {
            updateValue () {
                if (this.$parent) {
                    this.$parent.updateValue();
                }
            }
        }
    };
</script>
