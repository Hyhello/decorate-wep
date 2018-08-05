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
            text-indent: 30px;
            line-height: 30px;
            margin-bottom: 15px;
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
    <div class="container detail-panel">
        <h3 class="detail-title">
            房间最不宜存放的6种植物
            <div class="detail-title-tips">
                来源：<font color="#CC0000">北京叶斌腾达装饰设计有限公司</font> 发布时间：<font color="#CC0000">2016-11-19</font> 已被浏览 <font color="#CC0000">1123</font> 次
            </div>
        </h3>
        <div class="detail-content">
            北京叶斌腾达装饰设计有限公司
        </div>
        <div class="detail-btn">
            上一篇：
            <a href="javascript: void(0);" class="detail-prev">排练室装修</a>
        </div>
        <div class="detail-btn">
            下一篇：
            <a href="javascript: void(0);" class="detail-prev">视听室装修</a>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>
