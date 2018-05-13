/**
 * 作者：yeshengqiang
 * 时间：2018-05-12
 * 描述：详情左边导航
 */
<style lang="scss" scoped>
    .query_nav {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s;
        li a {
            display: block;
            width: 178px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: #FFF;
            text-decoration: none;
            color: #000;
            border: 1px solid #EDEDED;
            margin: -1px 0 0 0;
            &.router-link-active,
            &:hover {
                background-color: #DA251C;
                color: #FFF;
                border-color: #DA251C;
            }
        }
    }
</style>
<template>
    <ul class="query_nav">
        <li v-if="item.meta.desciption" v-for="(item, index) in routerList" :key="index">
            <router-link :to="`/${item.path}`" tag="a">{{item.meta.title}}</router-link>
        </li>
    </ul>
</template>
<script>
    import { addStyle, debounce } from '@/libs/utils';

    export default {
        data () {
            return {
                scroll: 0
            };
        },
        computed: {
            routerList () {
                return this.$router.options.routes[0].children;
            }
        },
        mounted () {
            this.scrollEvent = debounce(500, this.handleScroll);
            window.addEventListener('scroll', this.scrollEvent, false);
        },
        methods: {
            getPos () {
                let rect = this.$el.getBoundingClientRect();
                let top = this.getDom('scrollTop') + rect.top;
                let left = this.getDom('scrollLeft') + rect.left;
                return (this.pos = {
                    top,
                    left,
                    height: rect.height
                });
            },
            getDom (type) {
                return document.documentElement[type] || document.body[type];
            },
            handleScroll () {
                this.$nextTick(() => {
                    let scrollTop = this.getDom('scrollTop');
                    let clientHeight = this.getDom('clientHeight');
                    let scroll = this.pos || this.getPos();
                    let scrollX = Math.ceil((clientHeight - scroll.height) / 2) + scrollTop - scroll.top;
                    if (scrollX < 0) {
                        scrollX = 0;
                    }
                    addStyle(this.$el, 'transform', `translateY(${scrollX}px)`);
                });
            }
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.scrollEvent, false);
        }
    };
</script>
