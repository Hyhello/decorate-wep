/**
 * 作者：yeshengqiang
 * 时间：2018-07-17
 * 描述：tabItem
 */
<style lang="scss" scoped>
    .fadeIn-enter-active {
        transition: opacity .3s;
    }
    .fadeIn-leave-active {
        position: absolute;
    }
    .fadeIn-enter,
    .fadeIn-leave-to {
        opacity: 0;
    }
</style>
<template>
    <transition name="fadeIn">
        <div class="tab-panel__content-item" v-show="tabs.currentValue === label">
            <slot></slot>
        </div>
    </transition>
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
