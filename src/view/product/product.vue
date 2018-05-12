/**
 * 作者：yeshengqiang
 * 时间：2018-05-07
 * 描述：产品中心
 */
<style lang="scss" scoped>

</style>
<template>
    <div>
        <hy-banner></hy-banner>
        <content-tpl>
            <nav-left slot="left"></nav-left>
            <div slot="right">
                123123
            </div>
        </content-tpl>
    </div>
</template>
<script>
    import { hyBanner, contentTpl, navLeft } from '@/components';

    export default {
        components: { hyBanner, contentTpl, navLeft }
    };
</script>
