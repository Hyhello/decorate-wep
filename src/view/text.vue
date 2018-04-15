/**
 * 作者：yeshengqiang
 * 时间：2018-03-20
 * 描述：svg text
 */
<style lang="scss" scoped>
    .svgText {
        font-size: 18px;
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        color: #000000;
        .svg {
            flex: 1;
        }
        figcaption {
            margin-top: 5px;
        }
    }
</style>

<template>
    <div class="svgText">
        123
        <div class="svg" v-for="(item, index) in svgList" :key="index">
            <figure>
                <svg-icon :type="item"></svg-icon>
                <figcaption>{{item}}</figcaption>
            </figure>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                svgList: []
            };
        },
        mounted () {
            this.svgInit();
        },
        methods: {
            svgInit () {
                this.svgList = require.context('@/icons/svg', false, /\.svg$/).keys().map(item => {
                    return item.replace(/^\.\/(\w+?)\.svg$/, '$1');
                });
            }
        }
    };
</script>
