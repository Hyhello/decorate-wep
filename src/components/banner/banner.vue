/**
 * 作者：yeshengqiang
 * 时间：2018-04-13
 * 描述：banner
 */
<style lang="scss" scoped>
    .banner-panel {
        height: 400px;
        overflow: hidden;
        img {
            display: block;
            width: 100%;
        }
    }
</style>
<template>
    <div class="banner-panel">
        <img src="../../assets/banner.jpg" />
    </div>
</template>
<script>
    import swiper from 'swiper';
    console.log(swiper);
    export default {
        name: 'banner'
    };
</script>
