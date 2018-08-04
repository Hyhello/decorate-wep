/**
 * 作者：yeshengqiang
 * 时间：2018-06-04
 * 描述：contactUs
 */
<style lang="scss" scoped>
    .conact-us-panel {
        .amap {
            height: 300px;
            border-radius: 4px;
            margin-bottom: 15px;
        }
        .conact-us-detail {
            color: #333333;
            .footer-title {
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 1px;
                margin-bottom: 10px;
            }
            .footer-p {
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 25px;
                letter-spacing: 1px;
                color: #333333;
            }
        }
    }
</style>
<template>
    <div class="conact-us-panel">
        <div ref="map" class="amap"></div>
        <div class="conact-us-detail">
            <h3 class="footer-title">联系叶斌腾达</h3>
            <p class="footer-p">北京市密云区高岭镇政府办公楼208室-436</p>
            <p class="footer-p">
                <span class="footer-p-label">电话：</span>
                18201282808
            </p>
            <p class="footer-p">
                <span class="footer-p-label">邮箱：</span>
                www.813221592@qq.com
            </p>
            <p class="footer-p">
                <span class="footer-p-label">邮编：</span>
                100000
            </p>
        </div>
    </div>
</template>
<script>
    import AMap from 'AMap';

    export default {
        mounted () {
            this._initMap();
        },
        methods: {
            _initMap () {
                if (!this.map) {
                    this.map = new AMap.Map(this.$refs.map, {
                        scrollWheel: false,
                        zoom: 12
                    });
                    let marker = new AMap.Marker({
                        icon: '//webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
                        position: [117.111067, 40.604234]
                    });
                    marker.setMap(this.map);
                    this.map.setFitView();
                }
            }
        }
    };
</script>
