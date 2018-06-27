/**
 * 作者：yeshengqiang
 * 时间：2018-05-07
 * 描述：技术支持
 */
<style lang="scss" scoped>
    .fadeTo-enter-active, .fadeTo-leave-active {
        transition: all .5s;
        position: absolute;
    }
    .fadeTo-enter {
        opacity: 0;
        transform: translateX(-40px);
    }
    .fadeTo-leave-to {
        opacity: 0;
        transform: translateX(40px);
    }
</style>
<template>
    <div class="container">
        <transition name="fadeTo">
            <router-view></router-view>
        </transition>
    </div>
</template>
