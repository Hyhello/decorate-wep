/**
 * 作者：yeshengqiang
 * 时间：2018-06-07
 * 描述：客户案例
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .right_content {
       background-color: $white;
        width: 980px;
        padding: 10px;
        margin-bottom: 15px;
        .query_title {
            margin-bottom: 20px;
        }
        .right_img img{
            width: 202px;
            height: 170px;
        }
        .right_text {
            width: 768px;
            padding: 5px 0 5px 10px;
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
                    <img src="../../assets/images/course.png" />
                </div>
                <div class="right_text fl">
                    <h3 class="query_title">北京住宅隔音案例-各住宅小区清单</h3>
                    <p>《从零开始学习软件开发》是一门专门为零基础学员设计的、已C语言为入门语言的软件开发课程，即使你从未有过编程经验，也可以轻松的程序设计。</p>
                    <p class="query_title">本课程分为基础和实训课程两部分，基础部分主要讲解必备的软件开发、程序设计知识，实训部分教师将带领和引导学员设计和开发一个简单地媒体播放器，以提升学员项目经验及编程能力。</p>
                    <div class="right_bottom">
                        <span class="mr30">学员要求：<span class="right_color">无编程经验要求</span></span>
                        <span>课时：<span class="right_color">60</span></span>
                        <a href="javascript: void(0);" class="begin">查看详情</a>
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
    import { getCustomerCase } from '@/api/customerCase';

    export default {
        mixins: [ list ],
        methods: {
            async _getList () {
                const result = await getCustomerCase();
                this.loading = false;
                this.list = result.data;
            }
        }
    };
</script>
