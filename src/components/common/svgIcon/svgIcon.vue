/**
 * 作者：yeshengqiang
 * 时间：2018-02-27
 * 描述：svgIcon
 */
<style lang="scss" scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        font-size: 1em;
    }
    .icon-code {
        vertical-align: 0;
    }
</style>
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
    export default {
        name: 'svgIcon',
        props: {
            type: {
                type: String,
                required: true
            },
            className: {
                type: String
            }
        },
        computed: {
            iconName () {
                return `#icon-${this.type}`;
            },
            svgClass () {
                if (this.className) {
                    return 'svg-icon ' + this.className;
                } else {
                    return 'svg-icon';
                }
            }
        }
    };
</script>