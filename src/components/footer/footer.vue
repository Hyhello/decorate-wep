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
        background-color: #1f2830;
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
                <li><router-link :to="{path: '/product'}">产品中心</router-link></li>
                <li><router-link :to="{path: '/business'}">业务范围</router-link></li>
                <li><router-link :to="{path: '/technicalSupport'}">技术支持</router-link></li>
                <li><router-link :to="{path: '/about'}">关于叶斌腾达</router-link></li>
            </ul>
            <div class="texticp">
                <p>Copyright&nbsp;2016 &nbsp;版权所有：{{$store.state.company}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    };
</script>
