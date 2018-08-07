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
                text-align: left;
                width: 200px;
                margin: 0 15px;
                padding: 13px 0;
                vertical-align: middle;
                .vm-logo {
                    display: block;
                    height: 50px;
                }
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
                        line-height: 72px;
                        text-align: center;
                        color: #93989C;
                        background-color: transparent;
                        text-decoration: none;
                        transition: all 0.3s linear;
                        -webkit-transition: all 0.3s linear;
                        position: relative;
                        border-bottom: 4px solid transparent;
                        &:hover {
                            background-color: #373C42;
                            color: $white;
                            border-color: $global_color;
                        }
                        &.router-link-active {
                            background-color: #373C42;
                            color: $white;
                            border-color: $global_color;
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
                    margin: 20px 10px;
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
                <a href="javascript: void(0);"><img src="../../assets/images/logo.png" alt="logo" class="vm-logo" /></a>
            </div>
            <div class="navbox">
                <ul class="fl">
                    <li v-if="!item.hidden" v-for="(item, index) in routerList" :key="index">
                        <router-link tag="a" :to="item.path">{{item.meta.title}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="header_search">
                <input class="search_input" v-model="searchModel" @keydown.enter="search" type="text" placeholder="请您输入想搜索的关键字" />
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name: 'hyHeader',
        data () {
            return {
                searchModel: ''
            };
        },
        computed: {
            routerList () {
                let routes = this.$router.options.routes;
                // routes = routes.concat([
                //     {
                //         path: '/about/message',
                //         meta: {
                //             title: '用户留言'
                //         }
                //     },
                //     {
                //         path: '/about/contactUs',
                //         meta: {
                //             title: '联系我们'
                //         }
                //     }
                // ]);
                return routes;
            }
        },
        methods: {
            search () {
                this.searchModel = '';
                this.$message({
                    message: '敬请期待！',
                    type: 'success'
                });
            }
        }
    };
</script>
