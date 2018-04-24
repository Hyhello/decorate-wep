/**
 * 作者：yeshengqiang
 * 时间：2018-04-13
 * 描述：banner
 */
<style lang="scss" scoped>
    .bannerbox {
        width: 100%;
        position:relative;
        min-width: 1200px;
        _width: 1200px;
        height: 375px;
        overflow: hidden;
        .banner_big {
            width: 100%;
            height: 375px;
            position: absolute;
            left: 0;
            top: 0;
            li {
                width: 100%;
                height: 375px;
                overflow: hidden;
                position: relative;
                float: left;
                img {
                    width: 100%;
                    display: block;
                }
                a.more {
                    display: inline-block;
                    padding: 10px 20px;
                    position: absolute;
                    top: 55%;
                    left: 50%;
                    background-color: transparent;
                    border: 1px solid #FFF;
                    border-radius: 4px;
                    -wbkit-border-radius: 4px;
                    transform: translate(-50%, -50%);
                    -webkit-transform: translate(-50%, -50%);
                    box-shadow: inset 0 0 1px #F0EDE8;
                    -webkit-box-shadow: inset 0 0 1px #F0EDE8;
                    color: #F0EDE8;
                    text-decoration: none;
                    transition: all 0.7s linear;
                    -webkit-transition: all 0.7s linear;
                    &:hover {
                        text-decoration: none;
                    }
                }
                .text_part1,
                .text_part2 {
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -webkit-transform: translate(-50%, -50%);
                    z-index: 999;
                    font-size: 30px;
                    color: #FFF;
                    font-weight: 100;
                    transition: all 0.7s linear;
                    -webkit-transition: all 0.7s linear;
                }
                .text_part1 {
                    top: 20%;
                    margin-top: -20px;
                }
                .text_part2 {
                    top: 35%;
                    margin-top: -15px;
                }
                &.active {
                    .text_part1 {
                        transition-delay: 0.7s;
                        margin-top: 0;
                    }
                    .text_part2 {
                        transition-delay: 1.2s;
                        margin-top: 0;
                    }
                    a.more {
                        transition-delay: 1.5s;
                    }
                }
            }
        }
        .banner_small {
            width: 100%;
            background-color: rgba(218,37,28,0.5);
            position: absolute;
            bottom: 0;
            text-align: center;
            z-index: 9999;
            min-width: 1200px;
            _width: 1200px;
            .banner_smalltitle {
                width: 1200px;
                margin: 0 auto;
                a {
                    display: inline-block;
                    width: 230px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    text-decoration: none;
                    color: #FFEDED;
                    background-color: transparent;
                    transition: all 0.3s linear;
                    -webkit-transition: all 0.3s linear;
                    &:hover,
                    &.active {
                        background-color: rgba(218,37,28,1);
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="banner-panel">
        <div class="bannerbox">
            <ul class="banner_big clearfix">
                <li class="active">
                    <img src="../../assets/images/banner.png" alt="banner"/>
                    <span class="text_part1">剥茧化蝶，成就梦想</span>
                    <span class="text_part2">从零开始，做真正的程序员</span>
                    <a href="###" class="more">了解详情</a>
                </li>
            </ul>
            <div class="banner_small">
                <div class="banner_smalltitle">
                    <a href="javascript:;" class="active">核心课程</a>
                    <a href="javascript:;">项目实训</a>
                    <a href="javascript:;">教师在线指导</a>
                    <a href="javascript:;">团体学习社会</a>
                    <a href="javascript:;">民企面试题解析</a>
                </div>
            </div>
        </div>
        <!-- <img src="../../assets/banner.jpg" /> -->
    </div>
</template>
<script>
    import swiper from 'swiper';
    console.log(swiper);
    export default {
        name: 'banner'
    };
</script>
