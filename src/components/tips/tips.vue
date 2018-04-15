/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：头部文件
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';
    $baseColor: #01C2BD;

    .header-panel {
        background-color: #21242B;
        color: $white;
        font-size: 14px;
        .header-tips {
            .header-tips-item {
                float: left;
                line-height: 30px;
                padding: 5px 0;
                &.mr30 {
                    margin-right: 30px;
                }
                &.tips-search {
                    float: right;
                    .search_input {
                        width: 254px;
                        height: 30px;
                        line-height: 30px;
                        vertical-align: middle;
                        padding: 6px 45px 6px 12px;
                        color: #93989C;
                        background: #373C42 url(../../assets/search.png) no-repeat 221px center;
                        border: 1px solid #373C42;
                        transition: all 0.3s ease-in-out;
                        &::focus {
                            box-shadow:inset 0 0 1px #373C42;
                            -webkit-box-shadow:inset 0 0 1px #373C42;
                        }
                    }
                }
                .svg-panel {
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    line-height: 22px;
                    border-radius: 2px;
                    text-align: center;
                    font-size: 12px;
                    background-color: $baseColor;
                    margin-right: 5px;
                    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.125);
                    &.email {
                        font-size: 13px;
                    }
                }
                .tips-title {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.5);
                    vertical-align: middle;
                }
                .tips-phone {
                    font-size: 13px;
                    vertical-align: middle;
                    color: rgba(255, 255, 255, 0.7);
                }
                .tips-email {
                    font-size: 13px;
                    vertical-align: middle;
                    color: $baseColor;
                }
            }

        }
    }
</style>
<template>
    <div class="container header-panel">
        <div class="container-main">
            <!-- tips -->
            <ul class="header-tips clearfix">
                <li class="header-tips-item mr30">
                    <span class="svg-panel">
                        <svg-icon type="phone"></svg-icon>
                    </span>
                    <span class="tips-title">Call Us:</span>
                    <span class="tips-phone">15623595054</span>
                </li>
                <li class="header-tips-item">
                    <span class="svg-panel email">
                        <svg-icon type="email"></svg-icon>
                    </span>
                    <span class="tips-title">Email:</span>
                    <span class="tips-email">hyhello@qq.com</span>
                </li>
                <li class="header-tips-item tips-search">
                    <input class="search_input" type="text" placeholder="请您输入想搜索的关键字" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'hyTips'
    };
</script>
