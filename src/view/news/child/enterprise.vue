/**
 * 作者：yeshengqiang
 * 时间：2018-06-07
 * 描述：企业新闻
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
    <ul class="container" v-loading="loading" :loading-text="loadingText">
        <li class="news-panel-item" v-for="(item, index) in list" :data-index="index + 1" :key="index">
            <router-link to="/home" v-animate-piano="item.title"></router-link>
            <span class="news-item-time">{{item.releaseTime}}</span>
        </li>
    </ul>
</template>
<script>
    import { getKnowledgeList } from '@/api/news';
    import { animatePiano } from '@/components';

    export default {
        components: { animatePiano },
        data () {
            return {
                loading: true,
                loadingText: '加载中',
                list: []
            };
        },
        created () {
            this._getList();
        },
        methods: {
            async _getList () {
                const result = await getKnowledgeList();
                this.loading = false;
                this.list = result.data;
            }
        }
    };
</script>
