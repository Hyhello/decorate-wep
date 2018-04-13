/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：头部文件
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';
    .header-panel {
        height: 32px;
        background-color: $header_bg;
        line-height: 32px;
        color: $white;
        .header-tips li {
            text-align: left;
            width: 50%;
            float: left;
            &:last-child {
                text-align: right;
            }
            .icon {
                color: $white;
                font-size: 18px;
                margin-right: 5px;
            }
        }
        .header-nav {
            background: url('../../assets/icon02.png') left top repeat;
        }
    }
</style>
<template>
    <div class="container header-panel">
        <div class="container-main">
            <!-- tips -->
            <ul class="header-tips clearfix">
                <li><span>吸音板—苏州润声建筑装饰材料有限公司！</span></li>
                <li><span><svg-icon class="icon" type="service"></svg-icon>热线电话：0512-66155787</span></li>
            </ul>
        </div>
        <!-- nav -->
        <div class="header-nav">
            <div class="header-logo">
                <img src="../../assets/logo.png" alt="logo" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'hyHeader'
    };
</script>
