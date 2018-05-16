/**
 * 作者：yeshengqiang
 * 时间：2018-05-16
 * 描述：滚动到顶部
 */
<style lang="scss" scoped>
    .back-top-panel {
        position: fixed;
        z-index: 9999;
        right: 15px;
        bottom: 15px;
        .back-top-text {
            padding: 10px;
            background-color: #01C2BD;
            border-radius: 4px;
            color: #FFFFFF;
            cursor: pointer;
        }
    }
</style>
<template>
    <transition :name="transition">
        <div class="back-top-panel" v-show="backTopActive" @click="handleBack" :class="classes" :style="placement">
            <slot><span class="back-top-text">返回顶部</span></slot>
        </div>
    </transition>
</template>
<script>
    import { addEvent, removeEvent, getDom, scrollTop } from '@/libs/utils';

    export default {
        name: 'backTop',
        props: {
            offset: {
                type: [Number, String],
                default: 200
            },
            transition: {
                type: String,
                default: 'fade'
            },
            duration: {
                type: [Number, String],
                default: 500
            },
            placement: {
                type: Object,
                default () {
                    return {
                        right: '30px',
                        bottom: '30px'
                    };
                }
            }
        },
        data () {
            return {
                backTopActive: false
            };
        },
        computed: {
            classes () {
                let placement = '';
                ['left', 'right'].forEach(item => {
                    if (item in this.placement) {
                        placement = item;
                    };
                });
                return {
                    [`back-top-${placement}`]: !!placement
                };
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init () {
                this.updateStatus();
                addEvent(window, 'scroll', this.updateStatus);
                addEvent(window, 'resize', this.updateStatus);
            },
            updateStatus () {
                this.backTopActive = getDom('scrollTop') >= +this.offset;
            },
            handleBack () {
                scrollTop(window, getDom('scrollTop'), 0, this.duration);
            }
        },
        beforeDestroy () {
            removeEvent(window, 'scroll', this.handleScroll);
            removeEvent(window, 'resize', this.handleResize);
        }
    };
</script>
