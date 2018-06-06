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
                &:hover {
                    color: #01C2BD;
                }
            }
        }
        .breadcrumb-item__separator {
            float: left;
            margin: 0 9px;
            font-weight: 700;
            color: #c0c4cc;
        }
        &:last-child .breadcrumb-item__separator {
            display: none;
        }
    }
</style>
<template>
    <span class="breadcrumb-item__panel">
        <router-link class="breadcrumb-item__inner" :class="{'is-link': !!this.to}" :tag="linkTag" :to="to"><slot></slot></router-link>
        <span class="breadcrumb-item__separator">{{separator}}</span>
    </span>
</template>
<script>
    export default {
        name: 'BreadcrumbItem',
        props: {
            to: {
                type: [Object, String],
                default: ''
            }
        },
        data () {
            return {
                separatorShow: true,
                separator: ''
            };
        },
        computed: {
            linkTag () {
                return this.to ? 'a' : 'span';
            },
            hasParent () {
                return this.$parent.$options.name === 'Breadcrumb';
            }
        }
    };
</script>
