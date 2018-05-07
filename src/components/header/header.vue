/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：头部文件
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';
    .headerbox {
        width: 100%;
        background-color: #000000;
        min-width: 1200px;
        _width: 1200px;
        .header {
            padding: 0 15px;
            .header_logo {
                float: left;
                width: 250px;
                text-align: left;
                padding: 13px 0;
                vertical-align: middle;
            }
            .navbox {
                float: left;
                ul li{
                    float: left;
                    margin-left: 5px;
                    a {
                        font-size: 14px;
                        display: block;
                        padding: 0 22px;
                        line-height: 60px;
                        text-align: center;
                        color: #93989C;
                        background-color: transparent;
                        text-decoration: none;
                        transition: all 0.3s linear;
                        -webkit-transition: all 0.3s linear;
                        &:hover {
                            background-color: #373C42;
                            color: $white;
                        }
                        &.router-link-active {
                            background-color: #373C42;
                            color: $white;
                        }
                    }
                }
            }
            .header_search {
                float: right;
                .search_input {
                    width: 197px;
                    height: 18px;
                    line-height: 18px;
                    vertical-align: middle;
                    padding: 6px 45px 6px 12px;
                    color: #93989C;
                    margin: 13px 10px;
                    background: #373C42 url(../../assets/images/search.png) no-repeat 221px center;
                    border: 1px solid #373C42;
                    transition: all 0.3s ease-in-out;
                    -webkit-transition: all 0.3s ease-in-out;
                    &:focus {
                        box-shadow: inset 0 0 1px #373C42;
                        -webkit-box-shadow: inset 0 0 1px #373C42;
                    }
                }
            }
        }
    }
</style>
<template>
    <header class="headerbox">
        <div class="header clearfix">
            <div class="header_logo">
                <a href="javascript: void(0);"><img src="../../assets/images/logo.png" alt="logo" class="vm" /></a>
            </div>
            <div class="navbox">
                <ul class="fl">
                    <li v-if="!item.hidden" v-for="(item, index) in routerList" :key="index">
                        <router-link tag="a" :to="`/${item.path}`">{{item.meta.title}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="header_search">
                <input class="search_input" type="text" placeholder="请您输入想搜索的关键字" />
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'hyHeader',
        computed: {
            routerList () {
                return this.$router.options.routes[0].children;
            }
        }
    };
</script>
