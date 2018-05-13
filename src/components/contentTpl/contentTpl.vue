/**
 * 作者：yeshengqiang
 * 时间：2018-05-12
 * 描述：内容模板
 */
<style lang="scss" scoped>
    @import 'src/scss/mixins';

    .query_contentbox {
        font-size: 14px;
        width: 100%;
        min-width: 1200px;
        _width: 1200px;
        padding-bottom: 50px;
        height: 1000px;
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
                    line-height: 16px;
                    height: 16px;
                    font-size: 15px;
                    margin-bottom: 15px;
                    position: relative;
                    .breadcrumb {
                        display: inline-block;
                        position: absolute;
                    }
                }
                .right_content {
                    background-color: #FFF;
                    width: 980px;
                    padding: 10px;
                    margin-bottom: 15px;
                }
            }
        }
    }
    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all .5s;
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
                <transition-group class="query_title" tag="h2" name="breadcrumb">
                    <span class="breadcrumb" v-if="$route.fullPath === `/${item.path}`" v-for="item in routerList" :key="item.path">
                        {{$route.meta.title}}
                    </span>
                </transition-group>
                <div class="right_content">
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'contentTpl',
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
                return this.$router.options.routes[0].children;
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
