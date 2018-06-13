/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：app入口
 */
<style lang="scss">
    @import 'normalize.css';
    @import 'src/scss/common';
    @import 'src/scss/animate';
</style>
<template>
    <div class="main-panel">
        <hy-header></hy-header>
        <template v-if="!$route.meta.desciption">
            <hy-banner></hy-banner>
            <content-tpl>
                <nav-left slot="left"></nav-left>
                <div slot="right">
                    <router-view></router-view>
                </div>
            </content-tpl>
            <hy-footer></hy-footer>
        </template>
        <router-view v-else></router-view>
        <!-- 回到顶部 -->
        <back-top transition="fadeRight"></back-top>
    </div>
</template>
<script>
    import { hyHeader, hyFooter, hyBanner, contentTpl, navLeft, backTop } from '@/components';

    export default {
        components: { hyHeader, hyFooter, hyBanner, contentTpl, navLeft, backTop }
    };
</script>
