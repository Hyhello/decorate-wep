/**
* 作者：yeshengqiang
* 时间：2018-06-07
* 描述：吸音知识
*/
<style lang="scss" scoped>
    @import 'src/scss/vars';
    .overview {
        display: flex;
        flex-direction: row;
        padding: 20px;
        background: #FFFFFF;
        border-bottom: 1px solid #EEEEEE;
        .content-left {
            margin-right: 20px;
            img {
                width: 160px;
                height: 110px;
            }
        }
        .content-center {
            h3 {
                font-size: 16px;
                line-height: 40px;
                font-weight: bold;
            }
            span {
                line-height: 24px;
            }
        }
    }
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
    <div class="news-panel">
        <div class="overview">
            <div class="content-left">
                <img src="../../../assets/images/qyxw.jpg" alt="">
            </div>
            <div class="content-center">
                <h3>室内装饰业未来的发展特点</h3>
                <span>室内装饰业未来的发展以及发展趋势是怎样的？未来发展有什么特点，有什么明显的特征。下面苏州润声聚酯纤维吸音板小编来告诉你： 一 、它作为社会发展到一定阶段的大众文化消费，要以一定的经济实力和文化素养为...</span>
            </div>
        </div>
        <ul class="container" v-loading="loading" :loading-text="loadingText">
            <li class="news-panel-item" v-for="(item, index) in list" :data-index="index + 1" :key="index">
                <router-link to="/home" v-animate-piano="item.title"></router-link>
                <span class="news-item-time">{{item.releaseTime}}</span>
            </li>
        </ul>
    </div>
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
