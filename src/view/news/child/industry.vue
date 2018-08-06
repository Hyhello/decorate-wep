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
        <div class="container" v-loading="loading" :loading-text="loadingText">
            <div class="overview" v-show="pageShow">
                <div class="content-left">
                    <img :src="requireSrc(detailInfo.src)" alt="img" />
                </div>
                <div class="content-center">
                    <h3><router-link :to="{path: '/news/detail', query: { id: detailInfo.id, from: 'industry' }}">{{detailInfo.title}}</router-link></h3>
                    <span>{{detailInfo.review}}</span>
                </div>
            </div>
            <ul>
                <li class="news-panel-item" v-for="(item, index) in list" :data-index="index + 1" :key="index">
                    <router-link :to="{path: '/news/detail', query: { id: item.id, from: 'industry' }}" v-animate-piano="item.title"></router-link>
                    <span class="news-item-time">{{item.releaseTime}}</span>
                </li>
            </ul>
            <div class="page-panel" v-show="pageShow">
                <el-pagination
                    :page-size="searchData.pageSize"
                    :current-page="searchData.pageNo"
                    :layout="$store.state.layout"
                    :total="list.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
    import list from '@/mixins/list';
    import { getIndustryList } from '@/api/news';
    import { animatePiano } from '@/components';

    export default {
        mixins: [ list ],
        components: { animatePiano },
        data () {
            return {
                detailInfo: {}
            };
        },
        methods: {
            async _getList () {
                const result = await getIndustryList();
                this.loading = false;
                this.list = result.data;
                this.detailInfo = this.list[0];
            },
            requireSrc (src) {
                if (!src) return '';
                return require(`../../../assets/images/${src}`);
            }
        }
    };
</script>
