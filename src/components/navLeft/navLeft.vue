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
    export default {
        computed: {
            routerList () {
                return this.$router.options.routes[0].children;
            }
        }
    };
</script>
