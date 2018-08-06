/**
* 作者：yeshengqiang
* 时间：2018-06-07
* 描述：吸音棉
*/
<style lang="scss" scoped>
    @import 'src/scss/vars';
    @import 'src/scss/mixins';
    $width: 100% / 3;

    .carousel-panel {
        @include clearfix;
        box-sizing: border-box;
        .carousel-item {
            float: left;
            padding: 10px;
            width: $width;
            box-sizing: border-box;
            .figure__panel {
                border-radius: 5px;
                box-shadow: 0 0 5px #cccccc;
                overflow: hidden;
                .figure_img {
                    position: relative;
                    .tips__item {
                        position: absolute;
                        top: 15px;
                        left: 15px;
                        padding: 6px 12px;
                        color: $white;
                        border-radius: 4px;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: 200px;
                    }
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
    }
    .pagination-panel {
        margin-top: 80px;
        padding-top: 80px;
        text-align: center;
        border-top: 1px solid #e9e9e9;
        .pagination-item {
            display: inline-block;
            vertical-align: middle;
            border-right: 1px solid #e9e9e9;
            .pagination-prev,
            .pagination-next {
                margin: 0 10px;
                display: inline-block;
                @include wh(45px, 45px);
                font-size: 24px;
                text-align: center;
                line-height: 45px;
                color: $white;
                border-radius: 100%;
                background-color: $global_color;
            }
        }
    }
</style>
<template>
    <div class="board-panel">
        <ul class="carousel-panel">
            <li class="carousel-item" v-for="(item, index) in 6" :key="index">
                <figure class="figure__panel">
                    <div class="figure_img">
                        <img :src="`/static/images/xym${index+1}.jpg`" />
                        <span class="tips__item">吸音棉</span>
                    </div>
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
        <!-- <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination> -->
        <!-- <div class="pagination-panel">
            <span class="pagination-item">
                <a href="javascript: void(0);" class="pagination-prev"><svg-icon type="back"></svg-icon></a>
                <a href="javascript: void(0);">上一页</a>
            </span>
            <a class="pagination-item">
                <a href="javascript: void(0);">下一页</a>
                <a href="javascript: void(0);" class="pagination-next"><svg-icon type="forward"></svg-icon></a>
            </a>
        </div> -->
    </div>
</template>
<script>
    export default {

    };
</script>
