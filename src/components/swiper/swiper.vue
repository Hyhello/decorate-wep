/**
 * 作者：yeshengqiang
 * 时间：2018-04-13
 * 描述：首页swiper
 */
<style lang="scss" scoped>
    .bannerbox {
        width: 100%;
        position:relative;
        min-width: 1200px;
        _width: 1200px;
        overflow: hidden;
        .hy-carousel-item {
            width: 100%;
            display: block;
        }
        .banner_small {
            width: 100%;
            background-color: rgba(0, 0, 0, 0.4);
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
                    color: #d5d5d5;
                    background-color: transparent;
                    transition: all 0.3s linear;
                    -webkit-transition: all 0.3s linear;
                    &:hover,
                    &.active {
                        color: #FFEDED;
                        background-color: #01C2BD;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="banner-panel">
        <div class="bannerbox">
            <el-carousel ref="carousel" :interval="5000" indicator-position="none" height="420px" @change="handleChange">
                <el-carousel-item v-for="(item, index) in list" :key="index">
                    <img class="hy-carousel-item" :src="item.src" :alt="index"/>
                </el-carousel-item>
            </el-carousel>
            <div class="banner_small">
                <div class="banner_smalltitle">
                    <a href="javascript: void(0);" @click="handleClick(index)" v-for="(item, index) in list" :class="{'active': index === currentIndex}" :key="index">{{item.title}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'swiper',
        data () {
            return {
                currentIndex: 0,
                list: [
                    {
                        src: require('../../assets/images/首页图banner.jpeg'),
                        title: '音乐厅'
                    },
                    {
                        src: require('../../assets/images/首页轮换多功能厅.jpeg'),
                        title: '多功能厅'
                    },
                    {
                        src: require('../../assets/images/首页轮换录音棚.jpeg'),
                        title: '录音棚'
                    },
                    {
                        src: require('../../assets/images/首页轮换电影院.jpeg'),
                        title: '电影院'
                    }
                ]
            };
        },
        methods: {
            handleClick (index) {
                this.$refs.carousel.setActiveItem(index);
            },
            handleChange (index) {
                this.currentIndex = index;
            }
        }
    };
</script>
