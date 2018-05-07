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
        <router-view></router-view>
        <hy-footer></hy-footer>
    </div>
</template>
<script>
    import { hyHeader, hyFooter } from '@/components';

    export default {
        components: { hyHeader, hyFooter }
    };
</script>
