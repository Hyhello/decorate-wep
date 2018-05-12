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
            &.query_bt {
                border-top: none;
            }
            &.active,
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
        <li><a href="#1" class="active">实训课程</a></li>
        <li><a href="#2" class="query_bt">零基础课程</a></li>
        <li><a href="#3" class="query_bt">中级课程</a></li>
        <li><a href="#4" class="query_bt">高级课程</a></li>
        <li><a href="#5" class="query_bt">面试题解析</a></li>
    </ul>
</template>
<script>
    export default {

    };
</script>
