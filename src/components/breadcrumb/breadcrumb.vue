/**
 * 作者：yeshengqiang
 * 时间：2018-05-17
 * 描述：面包屑
 */
<style lang="scss" scoped>
    .breadcrumb-panel {
        font-size: 14px;
        line-height: 1;
        background-color: transparent;
        zoom: 1;
        &::after {
            content: '';
            display: block;
            clear: both;
        }
    }
</style>
<template>
    <div class="breadcrumb-panel" aria-label="breadcrumb" role="navigation">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'breadcrumb',
        props: {
            separator: {
                type: String,
                default: '/'
            }
        }
    };
</script>
