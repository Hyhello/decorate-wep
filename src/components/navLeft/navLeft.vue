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
        background-color: #FFFFFF;
        border: 1px solid #EDEDED;
        dt {
            padding: 0 15px;
            height: 50px;
            line-height: 45px;
            text-align: center;
            background-color: #01C2BD;
            color: #FFFFFF;
            font-size: 18px;
            margin-bottom: 15px;
            text-shadow: 0 0px hsl(0, 0%,80%),
            0 1px hsl(0, 0%, 75%),
            0 2px hsl(0, 0%, 70%),
            0 3px hsl(0, 0%, 65%),
            0 4px 8px rgba(0, 0, 0, 0.5);
        }
        dd a {
            display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #FFF;
            text-decoration: none;
            color: #767676;
            margin-bottom: 10px;
            &.router-link-active,
            &:hover {
                background-color: #ECF0F1;
                color: #01C2BD;
                border-color: #ECF0F1;
            }
        }
    }
</style>
<template>
    <dl class="query_nav">
        <dt>{{routerList[0].meta.title}}</dt>
        <dd v-if="!item.meta.desciption" v-for="(item, index) in routerList[0].children" :key="index">
            <router-link :to="item.path" tag="a">{{item.meta.title}}</router-link>
        </dd>
    </dl>
</template>
<script>
    import { addStyle, debounce, getDom } from '@/libs/utils';

    export default {
        data () {
            return {
                scroll: 0
            };
        },
        computed: {
            routerList () {
                const matched = this.$route.matched[0];
                let routes = this.$router.options.routes.filter(item => item.path === matched.path);
                if (!('children' in routes[0])) {
                    routes[0].children = routes;
                }
                return routes;
            }
        },
        mounted () {
            this.scrollEvent = debounce(200, this.handleScroll);
            window.addEventListener('scroll', this.scrollEvent, false);
        },
        methods: {
            getPos () {
                let rect = this.$el.getBoundingClientRect();
                let top = getDom('scrollTop') + rect.top;
                let left = getDom('scrollLeft') + rect.left;
                return (this.pos = {
                    top,
                    left,
                    height: rect.height
                });
            },
            handleScroll () {
                this.$nextTick(() => {
                    let scrollTop = getDom('scrollTop');
                    let clientHeight = getDom('clientHeight');
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
