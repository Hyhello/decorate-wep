/**
 * 作者：yeshengqiang
 * 时间：2018-07-17
 * 描述：tabItem
 */
<style lang="scss" scoped>

</style>
<template>
    <div class="tab-panel__content-item" v-show="tabs.currentValue === label">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'hyTabItem',
        props: {
            label: {
                type: [String, Number],
                required: true
            }
        },
        inject: ['tabs'],
        methods: {
            updateTabList () {
                this.$parent.updateTabList();
            }
        },
        watch: {
            label () {
                this.updateTabList();
            }
        }
    };
</script>
