/**
 * 作者：yeshengqiang
 * 时间：2018-05-12
 * 描述：banner 用于详情
 */
<style lang="scss" scoped>
    .query_bannerbox {
        width: 100%;
        min-width: 1200px;
        _width: 1200px;
        margin-bottom: 20px;
        img {
            width: 100%;
            display: block;
            height: 258px;
        }
    }
</style>
<template>
    <div class="query_bannerbox">
        <img src="../../assets/images/banner1.png" />
    </div>
</template>
<script>
    export default {
        name: 'banner'
    };
</script>
