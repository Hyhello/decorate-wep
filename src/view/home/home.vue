/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：home 首页
 */
<style lang="scss" scoped>
    @import 'src/scss/mixins';

    .contentbox {
        width: 100%;
        min-width: 1200px;
        _width: 1200px;
        background-color: #FFF;
        text-align: center;
        .home-title {
            text-align: center;
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            color: #ffffff;
            margin-bottom: 60px;
            &.blueColor {
                display: inline-block;
                color: #01C2BD;
                padding: 70px 15px 15px;
                margin-bottom: 45px;
                border-bottom: 1px solid #01C2BD;
            }
            .home-title-tips {
                margin-top: 5px;
                font-size: 12px;
                font-weight: normal;
                font-style: italic;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #777777;
            }
        }
        .message-panel {
            padding: 100px 10px;
            background: url('../../assets/images/msg_bg.png') no-repeat center center;
            background-size: 100%;
            text-align: center;
            .el_col-item {
                margin-bottom: 20px;
            }
            .mes-btn {
                background-color: #01C2BD;
                padding: 0;
                width: 160px;
                height: 50px;
                line-height: 50px;
            }
        }
        .tips-panel {
            width: 100%;
            background-color: #FAFAFA;
            position: relative;
            text-align: center;
            .tips-list-panel {
                padding: 40px 0;
                display: inline-block;
                @include clearfix;
                .tips-list-item {
                    float: left;
                    font-size: 70px;
                    text-align: center;
                    width: 350px;
                    // padding: 0 100px;
                    .tips-list-text {
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #808c95;
                    }
                }
            }
            .tips-icon {
                position: absolute;
                top: -2px;
                left: 50%;
                font-size: 45px;
                transform: translate(-50%, -50%);
            }
        }
    }
    .part1 {width: 1198px;margin: 0 auto;}

    .tabbox{width:1198px;margin:0 auto;margin-bottom:30px;}
    .tabbox li{float:left;margin-left:10px;margin-bottom:24px;width:292px; border-radius: 4px; text-align:center;}
    .tabbox li a {display:inline-block;text-decoration:none;color:#000;text-align:center;transition:all 0.3s linear;-webkit-transition:all 0.3s linear;}
    .tabbox li a:hover {color:#01C2BD;}
    .tabbox li a img {width:281px;height:169px;}
    .tabtext {display:block;width:292px;height:78px;line-height:70px;background:url(../../assets/images/shadow.png) no-repeat center top;}
    .part1_more {width:100%;text-align:center;margin-bottom:30px;}
    .part1_more a {display:inline-block;padding:10px 30px;border:1px solid #01C2BD;border-radius:10px;-webkit-border-radius:10px;text-decoration:none;color:#01C2BD;box-shadow:inset 0 0 1px #01C2BD;-webkit-box-shadow:inset 0 0 1px #01C2BD;}
    .footer-panel {
        width: 100%;
        height: 270px;
        padding-top: 35px;
        background: #1f2830 url(../../assets/images/footer_bg.png) no-repeat top center;
        background-size: 100% 100%;
        position: relative;
        .footer_box {
            color: #FFFFFF;
            width: 800px;
            margin: 0 auto;
            position: relative;
            .footer-title {
                font-size: 22px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #01C2BD;
                margin-bottom: 10px;
            }
            .footer-p {
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 25px;
                letter-spacing: 1px;
                color: #ffffff;
                .footer-p-label {
                    color: #01C2BD;
                }
            }
            .wechat-panel {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                text-align: center;
                .wechat-tips {
                    padding-top: 10px;
                }
            }
        }
        .copyright {
            text-align: center;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            line-height: 60px;
            background-color: #1f2830;
            border-top: 1px solid #27323b;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #698295;
            .copyright-font {
                color: #e95f58;
            }
        }
    }
</style>
<template>
    <div class="home-panel">
        <hy-swiper></hy-swiper>
        <!--content-->
        <section class="contentbox">
            <div class="part1">
                <h3 class="home-title blueColor">
                    精选分类
                </h3>
                <ul class="tabbox clearfix">
                    <li style="margin-left:0;">
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/soundBoard')">
                            <img src="/static/images/xyb1.jpg" alt="javascript"/>
                            <span class="tabtext">
                                吸音板
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/soundAbsorption')">
                            <img src="/static/images/xym1.jpg" alt="ps"/>
                            <span class="tabtext">
                                吸音棉
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/soundBlanket')">
                            <img src="/static/images/gyz1.jpg" alt="java"/>
                            <span class="tabtext">
                                隔音毡
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/softPackage')">
                            <img src="/static/images/rb1.jpg" alt="python"/>
                            <span class="tabtext">
                                软包
                            </span>
                        </a>
                    </li>
                    <li style="margin-left:0;">
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/hardPackage')">
                            <img src="/static/images/yb1.jpg" alt="python"/>
                            <span class="tabtext">
                                硬包
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/flockBoard')">
                            <img src="/static/images/mryhb1.jpg" alt="css3"/>
                            <span class="tabtext">
                                隔音门
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/flockBoard')">
                            <img src="/static/images/聚酯纤维板/聚酯纤维板.jpg" alt="jq"/>
                            <span class="tabtext">
                                聚酯纤维板
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);" @click="goSoundBoard('/product/hotPlate')">
                            <img src="/static/images/矿棉板/timg矿棉板.jpg" alt="jq"/>
                            <span class="tabtext">
                                矿棉板
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="message-panel">
                <h3 class="home-title">
                    联系我们
                    <p class="home-title-tips">有任何合作需求可以联系我们</p>
                </h3>
                <el-row :gutter="20">
                    <el-col :offset="4" :span="8">
                        <div class="el_col-item">
                            <el-input placeholder="您的姓名 *" v-model="addInfo.name"></el-input>
                        </div>
                        <div class="el_col-item">
                            <el-input placeholder="您的 E-MAIL *" v-model="addInfo.email"></el-input>
                        </div>
                        <div class="el_col-item">
                            <el-input placeholder="您的面积 *" v-model="addInfo.area"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <el-input
                            type="textarea"
                            :rows="7"
                            placeholder="您的需求 *"
                            v-model="addInfo.demand">
                        </el-input>
                    </el-col>
                    <el-col :span="24">
                        <el-button class="mes-btn" @click="sendDemand" type="primary">发送需求</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="tips-panel">
                <ul class="tips-list-panel">
                    <li class="tips-list-item">
                        <svg-icon type="main_phone"></svg-icon>
                        <p class="tips-list-text">18201282808</p>
                    </li>
                    <li class="tips-list-item">
                        <svg-icon type="main_email"></svg-icon>
                        <p class="tips-list-text">www.813221592@qq.com</p>
                    </li>
                    <li class="tips-list-item">
                        <svg-icon type="main_address"></svg-icon>
                        <p class="tips-list-text">北京市密云区高岭镇政府办公楼208室-436</p>
                    </li>
                </ul>
                <div class="tips-icon">
                    <svg-icon type="main_gps"></svg-icon>
                </div>
            </div>
        </section>
        <footer class="footer-panel">
            <div class="footer_box">
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
                <div class="wechat-panel">
                    <img src="../../assets/images/wechat.png" alt="wechat" />
                    <p class="wechat-tips">- 官方微信 -</p>
                </div>
            </div>
            <div class="copyright">Copyright © 2018 <span class="copyright-font">Prospect</span></div>
        </footer>
    </div>
</template>
<script>
  import { hySwiper, hyTab, hyTabItem } from '@/components';

  export default {
    components: { hySwiper, hyTab, hyTabItem },
    data () {
        return {
            addInfo: {}
        };
    },
    methods: {
        goSoundBoard (path) {
            this.$router.push(path);
        },
        sendDemand () {
            this.addInfo = {};
            this.$message({
                message: '需求已提交！',
                type: 'success'
            });
        }
    }
  };
</script>
