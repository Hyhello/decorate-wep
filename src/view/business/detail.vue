/**
 * 作者：yeshengqiang
 * 时间：2018-08-05
 * 描述：详情界面
 */
<style lang="scss" scoped>
    .detail-panel {
        background-color: #FFFFFF;
        .detail-title {
            font-size: 24px;
            width: 100%;
            text-align: center;
            line-height: 30px;
            font-weight: bold;
            text-overflow: ellipsis;
            color: #666;
            margin-bottom: 30px;
            .detail-title-tips {
                font-weight: normal;
                font-size: 14px;
                color: #666;
            }
        }
        .detail-content {
            // text-indent: 30px;
            line-height: 30px;
            margin-bottom: 15px;
            img {
                display: block;
                width: 100%;
            }
        }
        .detail-btn {
            margin-bottom: 10px;
            .detail-prev,
            .detail-next {
                color: #666666;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>
<template>
    <div class="container detail-panel" v-loading="loading" :loading-text="$store.state.loadingText">
        <h3 class="detail-title">
            {{detailInfo.title}}
            <div class="detail-title-tips">
                来源：<font color="#CC0000">{{this.$store.state.company}}</font> 发布时间：<font color="#CC0000">{{detailInfo.releaseTime}}</font> 已被浏览 <font color="#CC0000">{{detailInfo.times}}</font> 次
            </div>
        </h3>
        <div class="detail-content" v-html="detailInfo.content"></div>
        <div class="detail-btn">
            上一篇：
            <a href="javascript: void(0);" @click="_getDetail(detailInfo._prevId)" class="detail-prev">{{detailInfo._prevTitle}}</a>
        </div>
        <div class="detail-btn">
            下一篇：
            <a href="javascript: void(0);" @click="_getDetail(detailInfo._nextId)" class="detail-prev">{{detailInfo._nextTitle}}</a>
        </div>
    </div>
</template>
<script>
    import { getBusinessDetail } from '@/api/business';

    export default {
        data () {
            return {
                loading: true,
                detailInfo: {}
            };
        },
        created () {
            this._getDetail(this.$route.query.id);
        },
        methods: {
            async _getDetail (id) {
                if (!id) return;
                this.loading = true;
                const result = await getBusinessDetail({id});
                this.loading = false;
                this.detailInfo = result.data;
            }
        }
    };
</script>
