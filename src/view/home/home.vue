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
        .home-title {
            text-align: center;
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            color: #ffffff;
            margin-bottom: 60px;
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
    .part1 {width:1198px;margin:0 auto;}
    .comtitle {text-align:center;margin-bottom:50px;letter-spacing:1px;}
    .comtitle span {display:inline-block;font-size:35px;color:#01C2BD;font-weight:500;width:200px;padding:70px 0 35px;border-bottom:1px solid #01C2BD;}
    .nav_nav {width:1198px;margin:0 auto;text-align:center;}
    .nav_nav ul {display:inline-block;margin-bottom:50px;}
    .nav_nav ul li{float:left;}
    .nav_nav ul li a {display:inline-block;padding:10px 40px;border:1px solid #939AA0;color:#939AA0;text-decoration:none;transition:all 0.3s linear;-webkit-transition:all 0.3s linear;}
    .nav_nav ul li a.bl {border-left:none;}
    .nav_nav ul li a.leftbtn {border-radius:10px 0 0 10px;-webkit-border-radius:10px 0 0 10px;-moz-border-radius:10px 0 0 10px;}
    .nav_nav ul li a.rightbtn {border-radius:0 10px 10px 0;-webkit-border-radius:0 10px 10px 0;-moz-border-radius:0 10px 10px 0;}
    .nav_nav ul li a:hover,
    .nav_nav ul li a.active {background:#01C2BD;color:#FFEDED;border-color:#01C2BD;}

    .tabbox{width:1198px;margin:0 auto;margin-bottom:30px;}
    .tabbox li{float:left;margin-left:10px;margin-bottom:24px;width:292px;text-align:center;}
    .tabbox li a {display:inline-block;text-decoration:none;color:#000;text-align:center;transition:all 0.3s linear;-webkit-transition:all 0.3s linear;}
    .tabbox li a:hover {color:#01C2BD;}
    .tabbox li a img {width:281px;height:169px;}
    .tabtext {display:block;width:292px;height:78px;line-height:70px;background:url(../../assets/images/shadow.png) no-repeat center top;}
    .part1_more {width:100%;text-align:center;margin-bottom:30px;}
    .part1_more a {display:inline-block;padding:10px 30px;border:1px solid #01C2BD;border-radius:10px;-webkit-border-radius:10px;text-decoration:none;color:#01C2BD;box-shadow:inset 0 0 1px #01C2BD;-webkit-box-shadow:inset 0 0 1px #01C2BD;}
    .footer-panel {
        width: 100%;
        height: 280px;
        background: #1f2830 url(../../assets/images/footer_bg.png) no-repeat top center;
        background-size: 100% 100%;
        position: relative;
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
                <h1 class="comtitle">
                    <span>精选分类</span>
                </h1>
                <hy-tab v-model="currentValue">
                    <hy-tab-item label="服务范围">
                        <ul class="tabbox clearfix">
                            <li style="margin-left:0;">
                                <a href="###">
                                    <img src="/static/images/xyb1.jpg" alt="javascript"/>
                                    <span class="tabtext">
                                        吸音板
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="/static/images/xym1.jpg" alt="ps"/>
                                    <span class="tabtext">
                                        吸音棉
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="/static/images/gyz1.jpg" alt="java"/>
                                    <span class="tabtext">
                                        隔音毡
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="/static/images/rb1.jpg" alt="python"/>
                                    <span class="tabtext">
                                        软包
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="/static/images/yb1.jpg" alt="python"/>
                                    <span class="tabtext">
                                        硬包
                                    </span>
                                </a>
                            </li>
                            <li style="margin-left:0;">
                                <a href="###">
                                    <img src="/static/images/mryhb1.jpg" alt="css3"/>
                                    <span class="tabtext">
                                        植绒印花板
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="/static/images/xyb2.jpg" alt="bootstrap"/>
                                    <span class="tabtext">
                                        吸引体
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="###">
                                    <img src="/static/images/tjb1.jpg" alt="jq"/>
                                    <span class="tabtext">
                                        烫金板
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="part1_more">
                            <a href="./query.html">查看更多产品</a>
                        </div>
                    </hy-tab-item>
                    <hy-tab-item label="产品推荐">产品推荐</hy-tab-item>
                    <hy-tab-item label="客户案例">客户案例</hy-tab-item>
                    <hy-tab-item label="关于我们">关于我们</hy-tab-item>
                </hy-tab>
            </div>
            <div class="message-panel">
                <h3 class="home-title">
                    联系我们
                    <p class="home-title-tips">有任何合作需求可以联系我们</p>
                </h3>
                <el-row :gutter="20">
                    <el-col :offset="4" :span="8">
                        <div class="el_col-item">
                            <el-input placeholder="您的姓名 *" v-model="form.name"></el-input>
                        </div>
                        <div class="el_col-item">
                            <el-input placeholder="您的 E-MAIL *" v-model="form.name"></el-input>
                        </div>
                        <div class="el_col-item">
                            <el-input placeholder="您的面积 *" v-model="form.name"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <el-input
                            type="textarea"
                            :rows="7"
                            placeholder="您的需求 *"
                            v-model="form.name">
                        </el-input>
                    </el-col>
                    <el-col :span="24">
                        <el-button class="mes-btn" type="primary">发送需求</el-button>
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
                        <p class="tips-list-text">www.673089899@qq.com</p>
                    </li>
                    <li class="tips-list-item">
                        <svg-icon type="main_address"></svg-icon>
                        <p class="tips-list-text">湖北省武汉市江夏区大花岭大学城</p>
                    </li>
                </ul>
                <div class="tips-icon">
                    <svg-icon type="main_gps"></svg-icon>
                </div>
            </div>
        </section>
        <footer class="footer-panel">
            <ul>
                <li></li>
            </ul>
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
            currentValue: '服务范围',
            form: {
                name: ''
            }
        };
    },
    methods: {
        onSubmit () {
            console.log('submit!');
        }
    }
  };
</script>
