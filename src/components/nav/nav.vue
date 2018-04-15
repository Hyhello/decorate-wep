/**
 * 作者：yeshengqiang
 * 时间：2018-04-14
 * 描述：导航
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .nav-panel {
        background-color: $white;
        box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.3);
        .nav-logo {
            float: left;
            margin-top: 25px;
            // margin: 20px;
        }
        .nav-body {
            float: right;
            .nav-body-item {
                float: left;
                line-height: 50px;
                padding: 15px;
                a:link {
                    color: #333;
                    font-size: 14px;
                }
                a.active {
                    color: #01C2BD;
                }
            }
        }
    }
</style>
<template>
    <div class="container nav-panel">
        <div class="container-main clearfix">
            <div class="nav-logo">
                <img src="../../assets/logo.jpg" alt="logo" />
            </div>
            <ul class="nav-body">
                <li class="nav-body-item">
                    <a class="active" href="javascript: void(0);">首页</a>
                </li>
                <li class="nav-body-item">
                    <a href="javascript: void(0);">关于我们</a>
                </li>
                <li class="nav-body-item">
                    <a href="javascript: void(0);">新闻中心</a>
                </li>
                <li class="nav-body-item">
                    <a href="javascript: void(0);">产品中心</a>
                </li>
                <li class="nav-body-item">
                    <a href="javascript: void(0);">客户案例</a>
                </li>
                <li class="nav-body-item">
                    <a href="javascript: void(0);">联系我们</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'hyNav'
    };
</script>
