/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：尾部
 */
<style lang="scss" scoped>
    @import 'src/scss/mixins';

    .footbox {
        font-size: 14px;
        width: 100%;
        min-width: 1200px;
        _width: 1200px;
        background-color: #000;
        .footer {
            width: 1200px;
            margin: 0 auto;
            text-align: center;
            .footertext {
                display: inline-block;
                text-align: left;
                margin-bottom: 30px;
                @include clearfix;
                li {
                    float: left;
                    margin: 30px 15px 0 15px;
                    a {
                        text-decoration: none;
                        color: #C4C8CB;
                        &:hover {
                            text-decoration: underline;
                            color: #C4C8CB;
                        }
                    }
                }
            }
            .texticp {
                font-size: 12px;
                color: #C4C8CB;
                padding-bottom: 20px;
                p {
                    margin: 5px 0;
                }
            }
        }
    }
</style>
<template>
    <div class="footbox">
        <div class="footer">
            <ul class="footertext clearfix">
                <li><a href="###">问题与反馈</a></li>
                <li><a href="###">联系我们</a></li>
                <li><a href="###">版权声明</a></li>
                <li><a href="###">关于比特工厂</a></li>
            </ul>
            <div class="texticp">
                <p>Copyright&nbsp;2015 www.bitworks.cn&nbsp;版权所有：武汉尚伟教育科技有限公司</p>
                <p>所有教程、视频除特别声明外，均为原创作品，谢绝任何形式的转载、引用和其他商业用途&nbsp;鄂ICP备&nbsp;13003952号-3</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>
