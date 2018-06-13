/**
 * 作者：yeshengqiang
 * 时间：2018-06-07
 * 描述：吸音音板
 */
<style lang="scss" scoped>
    @import 'src/scss/mixins';
    $width: 100% / 3;

    .carousel-panel {
        @include clearfix;
        box-sizing: border-box;
        padding-bottom: 50px;
        border-bottom: 1px solid #cccccc;
        .carousel-item {
            float: left;
            padding: 10px;
            width: $width;
            box-sizing: border-box;
            .figure__panel {
                border-radius: 5px;
                box-shadow: 0 0 5px #cccccc;
                overflow: hidden;
                img {
                    display: block;
                    width: 100%;
                    height: 200px;
                }
                .figcaption__panel {
                    text-align: center;
                    // line-height: 50px;
                    padding: 10px 0;
                    @include clearfix;
                    .figcaption__panel__inner {
                        float: left;
                        width: $width;
                        color: #cccccc;
                        position: relative;
                        text-align: center;
                        height: 36px;
                        line-height: 36px;
                        box-sizing: border-box;
                        &.borderBoth {
                            border-left: 1px solid #ebebeb;
                            border-right: 1px solid #ebebeb;
                        }
                        .figcaption__inner__text {
                            display: inline-block;
                            font-size: 18px;
                            vertical-align: middle;
                            color: #333333;
                        }
                        &.fontSize20 {
                            font-size: 20px;
                        }
                        &.fontSize26 {
                            font-size: 26px;
                        }
                    }
                }
            }
        }
        .pagination-panel {
            padding-top: 30px;
            border-top: 1px solid #cccccc;
        }
    }
</style>
<template>
    <div class="board-panel">
        <ul class="carousel-panel">
            <li class="carousel-item" v-for="(item, index) in 9" :key="index">
                <figure class="figure__panel">
                    <img src="../../../assets/images/img1.png" />
                    <figcaption class="figcaption__panel">
                        <div class="figcaption__panel__inner fontSize20">
                            <svg-icon type="heart"></svg-icon>
                            <span class="figcaption__inner__text">32</span>
                        </div>
                        <div class="figcaption__panel__inner borderBoth fontSize26">
                            <svg-icon type="eyes"></svg-icon>
                            <span class="figcaption__inner__text">610</span>
                        </div>
                        <div class="figcaption__panel__inner fontSize20">
                            <svg-icon type="message"></svg-icon>
                            <span class="figcaption__inner__text">7</span>
                        </div>
                    </figcaption>
                </figure>
            </li>
        </ul>
        <!-- 分页 -->
        <div class="pagination-panel">
            <a class="pagination-item">上一页</a>
            <a class="pagination-item">下一页</a>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>
