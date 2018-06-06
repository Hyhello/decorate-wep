/**
 * 作者：yeshengqiang
 * 时间：2018-05-12
 * 描述：内容模板
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';
    @import 'src/scss/mixins';

    .query_contentbox {
        font-size: 14px;
        width: 100%;
        min-width: 1200px;
        _width: 1200px;
        padding-bottom: 15px;
        .query_content {
            width: 1200px;
            margin: 0 auto;
            @include clearfix;
            .query_left {
                width: 180px;
                margin-right: 20px;
                position: relative;
                float: left;
            }
            .query_right {
                width: 1000px;
                float: right;
                .query_title {
                    font-weight: normal;
                    font-size: 15px;
                    margin-bottom: 15px;
                    background-color: $white;
                    height: 45px;
                    line-height: 45px;
                    padding: 0 15px;
                    position: relative;
                    border-left: 4px solid #01C2BD;
                }
                .right_content {
                    width: 1000px;
                }
            }
        }
    }
    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all .5s;
        display: inline-block;
        position: absolute;
    }

    .breadcrumb-enter,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }
</style>
<template>
    <div class="query_contentbox">
        <div class="query_content">
            <div class="query_left" :style="styles">
                <slot name="left"></slot>
            </div>
            <div class="query_right">
                <breadcrumb tag="h2" class="query_title">
                    <transition-group name="breadcrumb">
                        <breadcrumb-item v-if="item.meta.title" :to="item.path" v-for="item in routerList" :key="item.path">
                            {{item.meta.title}}
                        </breadcrumb-item>
                    </transition-group>
                </breadcrumb>
                <div class="right_content">
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { BreadcrumbItem, Breadcrumb } from '../breadcrumb';

    export default {
        name: 'contentTpl',
        components: { BreadcrumbItem, Breadcrumb },
        data () {
            return {
                clientHeight: 0
            };
        },
        computed: {
            styles () {
                if (this.clientHeight) {
                    return {
                        'min-height': `${this.clientHeight}px`
                    };
                }
                return {};
            },
            routerList () {
                return [{meta: {title: '首页'}, path: '/home'}].concat(this.$route.matched);
            }
        },
        mounted () {
            this.$nextTick(() => {
                let slotLeft = this.$slots.left;
                this.clientHeight = slotLeft && slotLeft[0].elm && slotLeft[0].elm.clientHeight;
            });
        }
    };
</script>
