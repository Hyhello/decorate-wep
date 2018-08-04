/**
 * 作者：yeshengqiang
 * 时间：2018-07-17
 * 描述：tab组件
 */
<style lang="scss" scoped>
    @import 'src/scss/mixins';

    .tab-panel {
        width: 100%;
        text-align: center;
        .tab-panel__header {
            @include clearfix;
            margin-bottom: 50px;
            display: inline-block;
            .tab-panel__header-item {
                float: left;
                .header-item-link {
                    display: inline-block;
                    padding: 10px 40px;
                    border: 1px solid #939AA0;
                    color: #939AA0;
                    text-decoration: none;
                    transition: all 0.3s linear;
                    -webkit-transition: all 0.3s linear;
                    margin-left: -1px;
                }
                &:hover,
                &.link-active {
                    .header-item-link {
                        background-color: #01C2BD;
                        color: #FFEDED;
                        border-color: #01C2BD;
                    }
                }
                &:first-child {
                    .header-item-link {
                        border-radius: 5px 0 0 5px;
                    }
                }
                &:last-child {
                    .header-item-link {
                        border-radius:0 5px 5px 0;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="tab-panel">
        <ul class="tab-panel__header">
            <li class="tab-panel__header-item" :class="{'link-active': item === currentValue}" @click="handleChoose(item)" v-for="(item, index) in tabList" :key="index">
                <slot name="title" :row="item">
                    <a class="header-item-link" href="javascript: void(0);">{{item}}</a>
                </slot>
            </li>
        </ul>
        <div class="tab-panel__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'hyTab',
        props: {
            value: {
                type: [String, Number],
                default: ''
            }
        },
        data () {
            return {
                tabList: []
            };
        },
        computed: {
            currentValue: {
                get () {
                    return this.value;
                },
                set (val) {
                    this.$emit('input', val);
                }
            }
        },
        provide () {
            return {
                tabs: this
            };
        },
        mounted () {
            this.updateTabList();
        },
        methods: {
            // 查找
            findChild () {
                return this.$children.filter(item => item.$options.name === 'hyTabItem');
            },
            handleChoose (item) {
                this.currentValue = item;
            },
            updateTabList () {
                this.$nextTick(() => {
                    this.tabList = [];
                    this.findChild().forEach(item => {
                        this.tabList.push(item.label);
                    });
                });
            }
        },
        watch: {
            currentValue () {
                this.updateTabList();
            }
        }
    };
</script>
