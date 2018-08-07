/**
 * 作者：yeshengqiang
 * 时间：2018-06-07
 * 描述：业务范围
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .right_content {
       background-color: $white;
        width: 980px;
        padding: 10px;
        margin-bottom: 15px;
        .query_title {
            margin-bottom: 15px;
        }
        .right_img img{
            width: 202px;
            height: 170px;
        }
        .right_text {
            width: 753px;
            padding: 5px 10px 5px 15px;
            max-height: 160px;
            _height: 160px;
            overflow: hidden;
            p {
                line-height: 1.5;
            }
            .right_color {
                color: #D8251C;
            }
            a.begin {
                display: inline-block;
                padding: 8px 12px;
                background-color: $global_color;
                position: absolute;
                bottom: 0;
                right: 10px;
                color: $white;
                text-decoration: none;
                border-radius: 4px;
            }
        }
        .right_bottom {
            position: relative;
        }
    }
</style>
<template>
    <div class="container" v-loading="loading" :loading-text="loadingText">
        <ul>
            <li v-for="(item, index) in list" :key="index" v-animate-line class="right_content clearfix">
                <div class="right_img fl">
                    <img :src="requireSrc(item.src)" alt="img" />
                </div>
                <div class="right_text fl">
                    <h3 class="query_title">{{item.title}}</h3>
                    <p>{{item.review_top}}</p>
                    <p class="query_title">{{item.review_bottom}}</p>
                    <div class="right_bottom">
                        <span class="mr30">设计内容：<span class="right_color">{{item.design}}</span></span>
                        <a href="javascript: void(0);" @click="getDetail(item.id)" class="begin">查看详情</a>
                    </div>
                </div>
            </li>
        </ul>
        <div class="page-panel" v-show="pageShow">
            <el-pagination
                background
                :page-size="searchData.pageSize"
                :current-page="searchData.pageNo"
                :layout="$store.state.layout"
                :total="list.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import list from '@/mixins/list';
    import { getBusinessList } from '@/api/business';

    export default {
        mixins: [ list ],
        data () {
            return {
                detailInfo: {}
            };
        },
        methods: {
            async _getList () {
                const result = await getBusinessList();
                this.loading = false;
                this.list = result.data;
                this.detailInfo = this.list[0];
            },
            getDetail (id) {
                this.$router.push({path: '/business/detail', query: {id}});
            },
            requireSrc (src) {
                if (!src) return '';
                return require(`../../../assets/images/${src}`);
            }
        }
    };
</script>
