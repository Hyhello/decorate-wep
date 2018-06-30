/**
 * 作者：yeshengqiang
 * 时间：2018-05-07
 * 描述：新闻中心
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .news-panel-item {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        color: #333;
        border-bottom: 1px solid #EFEFEF;
        position: relative;
        margin-left: 25px;
        &:before {
            content: attr(data-index);
            position: absolute;
            top: 50%;
            right: 100%;
            display: block;
            width: 22px;
            height: 22px;
            font-size: 12px;
            color: $white;
            text-align: center;
            line-height: 22px;
            border-radius: 4px;
            background-color: #CF973A;
            transform: translate(-5px, -50%) scale(0.65, 0.65);
        }
        a:link,
        a:visited,
        a:active {
            color: #333333;
            text-decoration: none;
        }
        a:hover {
            color: $global-color;
            text-decoration: none;
        }
        .news-item-time {
            float: right;
        }
    }
</style>
<template>
    <router-view></router-view>
</template>
