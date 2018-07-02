/**
 * 作者：yeshengqiang
 * 时间：2018-07-01
 * 描述：loading
 */
<style lang="scss" scoped>
    .loading-panel {
        position: absolute;
        background: #ffffffe6;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        text-align: center;
        .loading-body {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .loading-spiner {
                display: inline-block;
                width: 32px;
                height: 32px;
                background-color: #01C2BD;
                animation: rotateplane 1.2s infinite ease-in-out;
            }
            .loading-text {
                display: block;
                padding: 5px 0;
                font-size: 14px;
            }
        }
    }
    @keyframes rotateplane {
        0% {
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        } 50% {
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        } 100% {
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
    }
</style>
<template>
    <transition name="fade">
        <div class="loading-panel" v-show="visible">
            <div class="loading-body">
                <span class="loading-spiner"></span>
                <span class="loading-text" v-show="text">{{text}}</span>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'Loading',
        data () {
            return {
                visible: false,
                text: '',
                fullscreen: false
            };
        }
    };
</script>
