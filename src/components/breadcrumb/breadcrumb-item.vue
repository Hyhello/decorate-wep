/**
 * 作者：yeshengqiang
 * 时间：2018-05-17
 * 描述：面包屑
 */
<style lang="scss" scoped>
    .breadcrumb-item__panel {
        float: left;
        .breadcrumb-item__inner {
            float: left;
            color: #606266;
            &.is-link {
                font-weight: 700;
                text-decoration: none;
                transition: color .2s cubic-bezier(.645, .045, .355, 1);
                color: #303133;
            }
        }
        .breadcrumb-item__separator {
            float: left;
            margin: 0 9px;
            font-weight: 700;
            color: #c0c4cc;
        }
    }
</style>
<template>
    <span class="breadcrumb-item__panel">
        <router-link class="breadcrumb-item__inner" :class="{'is-link': !!this.to}" :tag="linkTag" :to="to">首页</router-link>
        <span class="breadcrumb-item__separator">/</span>
    </span>
</template>
<script>
    export default {
        name: 'breadcrumbItem',
        props: {
            to: {
                type: [Object, String],
                default: ''
            }
        },
        computed: {
            linkTag () {
                return this.to ? 'a' : 'span';
            }
        }
    };
</script>
