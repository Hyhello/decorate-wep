/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：home 首页
 */
<style lang="scss" scoped>

</style>
<template>
  <div class="home-panel">
      <hy-header></hy-header>
      <hy-footer></hy-footer>
  </div>
</template>
<script>
  import { hyHeader, hyFooter } from '@/components';

  export default {
    components: { hyHeader, hyFooter }
  };
</script>
