/**
 * 作者：yeshengqiang
 * 时间：2018-05-07
 * 描述：新闻中心
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .news-panel {
        background-color: $white;
        padding: 15px;
        .news-panel-item {
            font-size: 14px;
            height: 28px;
            line-height: 28px;
            border-bottom: 1px solid #EFEFEF;
            .news-item-time {
                float: right;
            }
        }
    }
</style>
<template>
    <ul class="news-panel">
        <li class="news-panel-item" v-for="(item, index) in 10" :key="index">
            <animate-piano :content="content"></animate-piano>
            <!-- <a href="javascript: void(0);" :animate-piano-duration="config.duration" :animate-piano-recline="config.recline" :animate-piano-offset="config.offset" v-animate-piano="content"></a> -->
            <span class="news-item-time">2018-05-17</span>
        </li>
    </ul>
</template>
<script>
    import { animatePiano } from '@/components';

    export default {
        components: { animatePiano },
        data () {
            return {
                config: {
                    offset: 22,             // 最大偏移量
                    duration: 500,          // 晃动时间
                    recline: 0.1            // 每像素偏移量
                },
                content: '史上墙施工介介绍墙施工介介绍 ...'
            };
        },
        mounted () {
            setTimeout(() => {
               this.content = '史上墙施工介介绍墙施工介介绍 ...官方提供了几十种动';
            }, 3000);
        }
    };
</script>
