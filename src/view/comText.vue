/**
 * 作者：yeshengqiang
 * 时间：2018-04-25
 * 描述：测试
 */
<style lang="scss" scoped>
    .carousel-item-panel h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
        text-align: center;
    }

    .carousel-item-panel:nth-child(2n) {
        background-color: #99a9bf;
    }

    .carousel-item-panel:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
<template>
    <div class="autoHeight">
        <!-- <Carousel v-model="currentValue">
            <carousel-item>
                <h3>1</h3>
            </carousel-item>
            <carousel-item>
                <h3>2</h3>
            </carousel-item>
            <carousel-item>
                <h3>3</h3>
            </carousel-item>
            <carousel-item>
                <h3>4</h3>
            </carousel-item>
            <carousel-item>
                <h3>5</h3>
            </carousel-item>
            <carousel-item>
                <h3>6</h3>
            </carousel-item>
        </Carousel> -->
        <breadcrumb>
            <breadcrumb-item to="/home">首页</breadcrumb-item>
        </breadcrumb>
    </div>
</template>
<script>
    import { Carousel, CarouselItem, BreadcrumbItem, Breadcrumb } from '@/components';

    export default {
        components: { Carousel, CarouselItem, BreadcrumbItem, Breadcrumb },
        data () {
            return {
                currentValue: 2
            };
        }
    };
</script>
