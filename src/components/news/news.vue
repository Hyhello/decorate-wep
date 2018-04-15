/**
 * 作者：yeshengqiang
 * 时间：2018-04-14
 * 描述：新闻部分
 */
<style lang="scss" scoped>
    @import 'src/scss/vars';

    .news-panel {
        background-color: #22252C;
        color: $white;
        font-size: 14px;
        height: 100px;
    }
</style>
<template>
    <div class="container news-panel">
        <div class="container-main">
            <ul class="">
                <li>
                    <svg-icon type="radio"></svg-icon>
                    公司动态
                </li>
                <li>
                    室内装饰业未来的发展特点
                    <small>室内装饰业未来的发展以及发展趋势是怎样的？未来发展有什么特点，有什么明显的特征</small>
                </li>
                <li>
                    <button class="btn">更多</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'hyNews'
    };
</script>
