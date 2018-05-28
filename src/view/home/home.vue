/**
 * 作者：yeshengqiang
 * 时间：2018-04-03
 * 描述：home 首页
 */
<style lang="scss" scoped>
    .contentbox {width:100%;min-width:1200px;_width:1200px;background:#FFF;}
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
    .part2 {width:100%;height:478px;background:url(../../assets/images/content_bg.png) no-repeat center center;background-size:cover;}
    .bgwhite span{color:#FFF;border-color:#FFF;}
    .text_text1,
    .text_text2 {text-align:center;color:#FFF;font-size:25px;margin-bottom:15px;}
    .text_text1 {padding-top:30px;margin-bottom:20px;}
    .text_text2 {margin-bottom:50px;}
    .part2_more {width:100%;text-align:center;}
    .part2_more a {display:inline-block;padding:10px 30px;border:1px solid #FFF;border-radius:10px;-webkit-border-radius:10px;text-decoration:none;color:#FFF;box-shadow:inset 0 0 1px #FFF;-webkit-box-shadow:inset 0 0 1px #FFF;}
    .newtab {border:none;margin:0 auto;border-collapse:separate;border-spacing:12px;text-align:center;}
    .abb {position:relative;}
    .part3 {background:#FFF;padding-bottom:80px;}
    .part4 {width:100%;height:520px;background:url(../../assets/images/content2_bg.png) no-repeat center center;background-size:cover;}
    .part4_time {width:1200px;margin:0 auto;padding-top:20px;position:relative;}
    .part4tab {width:100%;text-align:center;border-spacing:10px;}
    .headertime{min-width:79px;min-height:88px;_height:88px;_width:88px;color:#01C2BD;font-weight:bold;background:url(../../assets/images/time_bg.png) no-repeat center center;}
    .time-title {font-size:25px;padding-top:10px;padding-bottom:5px;}
    .part4_line {width:100%;height:1px;background:#FFF;overflow:hidden;font-size:1px;zoom:1;position:absolute;left:0;bottom:105px;}
    .part5 {width:100%;text-align:center;background:#FFF;padding-bottom:80px;}
    .icon a{margin:5px;}
    .part6 {width:100%;height:604px;background:url(../../assets/images/footer_bg.png) no-repeat center center;background-size:cover;position:relative;}
    .footerbox {width:1200px;margin:0 auto;padding-top:80px;}
    .foot_part1,
    .foot_part2,
    .foot_part3{width:28%;float:left;}
    .foot_part4 {width:16%;float:left;text-align:right;}
    .foot_part1 li,
    .foot_part2 li,
    .foot_part3 li,
    .foot_part4 li {float:left;width:100%;margin-bottom:40px;}
    .foot_part1 li a,
    .foot_part2 li a,
    .foot_part3 li a,
    .foot_part4 li a {text-decoration:none;color:#C4C8CB;}
    .foot_part1 li a:hover,
    .foot_part2 li a:hover,
    .foot_part3 li a:hover,
    .foot_part4 li a:hover {text-decoration:underline;color:#C4C8CB;}
    .bottom {position:absolute;width:100%;height:161px;background:rgba(0,0,0,0.5);bottom:0;left:0;}
    .bottomcontent {width:1200px;position:absolute;left:50%;top:0;margin-left:-600px;}
    .bottomtext {float:right;text-align:left;margin-bottom:50px;}
    .bottomtext li {float:left;margin:30px 15px 0 15px;}
    .bottomtext li a {text-decoration:none;color:#C4C8CB;}
    .bottomtext li a:hover {text-decoration:underline;color:#C4C8CB;}
    .bottomicp {color:#C4C8CB;}
    .bottomicp p {margin:5px 0;}
</style>
<template>
    <div class="home-panel">
        <hy-swiper></hy-swiper>
        <!--content-->
        <div class="contentbox">
            <div class="part1">
                <h1 class="comtitle">
                    <span>产品类型</span>
                </h1>
                <div class="nav_nav">
                    <ul class="clearfix">
                        <li><a href="javascript: void(0);" class="leftbtn active">精选课程</a></li>
                        <li><a href="javascript: void(0);" class="bl">精选博文</a></li>
                        <li><a href="javascript: void(0);" class="bl">实训案例</a></li>
                        <li><a href="javascript: void(0);" class="bl rightbtn">声学基础材料</a></li>
                    </ul>
                </div>
                <ul class="tabbox clearfix">
                    <li style="margin-left:0;">
                        <a href="###">
                            <img src="../../assets/images/Img1.png" alt="javascript"/>
                            <span class="tabtext">
                                javaScript入门篇
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img src="../../assets/images/Img2.png" alt="ps"/>
                            <span class="tabtext">
                                PS大神通关教程
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img src="../../assets/images/Img3.png" alt="java"/>
                            <span class="tabtext">
                                JAVA入门第一季
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img src="../../assets/images/Img4.png" alt="python"/>
                            <span class="tabtext">
                                python错误与异常
                            </span>
                        </a>
                    </li>
                    <li style="margin-left:0;">
                        <a href="###">
                            <img src="../../assets/images/Img5.png" alt="css3"/>
                            <span class="tabtext">
                                十天精通CSS3
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img src="../../assets/images/Img6.png" alt="bootstrap"/>
                            <span class="tabtext">
                                玩转Bootstrap(基础)
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img src="../../assets/images/Img7.png" alt="jq"/>
                            <span class="tabtext">
                                jQ基础教程
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="###">
                            <img src="../../assets/images/Img8.png" alt="html"/>
                            <span class="tabtext">
                                网页布局基础
                            </span>
                        </a>
                    </li>
                </ul>
                <div class="part1_more">
                    <a href="./query.html">查看更多课程</a>
                </div>
            </div>
            <div class="part2">
                <h1 class="comtitle bgwhite">
                    <span>云编译</span>
                </h1>
                <p class="text_text1">在线学习软件开发，点击从这里开始</p>
                <p class="text_text2">无需下载IDE，在线编辑、编译和运行C程序</p>
                <div class="part2_more">
                    <a href="###">点击进入</a>
                </div>
            </div>
            <div class="part3">
                <h1 class="comtitle">
                    <span>最近更新</span>
                </h1>
                <table class="newtab">
                    <tr>
                        <td rowspan="2">
                            <div class="abb">
                                <img src="../../assets/images/Img9.png" />
                                <div class="alert_abb" style="display:none;">
                                    如何在比特工厂学习
                                </div>
                            </div>
                        </td>
                        <td>
                            <img src="../../assets/images/Img10.png" />
                        </td>
                        <td>
                            <img src="../../assets/images/Img11.png" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="../../assets/images/Img12.png" />
                        </td>
                        <td>
                            <img src="../../assets/images/Img13.png" />
                        </td>
                    </tr>
                </table>
            </div>
            <div class="part4">
                <h1 class="comtitle bgwhite">
                    <span>最近来访</span>
                </h1>
                <div class="part4_time">
                    <table class="part4tab">
                        <tr>
                            <td>
                                <div class="headertime">
                                    <p class="time-title">23</p>
                                    <p class="time_time">2015-11</p>
                                </div>
                            </td>
                            <td>
                                <div class="headertime">
                                    <p class="time-title">23</p>
                                    <p class="time_time">2015-11</p>
                                </div>
                            </td>
                            <td>
                                <div class="headertime">
                                    <p class="time-title">23</p>
                                    <p class="time_time">2015-11</p>
                                </div>
                            </td>
                            <td>
                                <div class="headertime">
                                    <p class="time-title">23</p>
                                    <p class="time_time">2015-11</p>
                                </div>
                            </td>
                            <td>
                                <div class="headertime">
                                    <p class="time-title">23</p>
                                    <p class="time_time">2015-11</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="../../assets/images/time.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/time.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/time.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/time.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/time.png" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="../../assets/images/head.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/head.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/head.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/head.png" />
                            </td>
                            <td>
                                <img src="../../assets/images/head.png" />
                            </td>
                        </tr>
                    </table>
                    <div class="part4_line"></div>
                </div>
            </div>
            <div class="part5">
                <h1 class="comtitle">
                    <span>云编译</span>
                </h1>
                <div>
                    <img src="../../assets/images/content3_bg.png" />
                </div>
                <div class="icon">
                    <a href="##"><img src="../../assets/images/icon1.png" /></a>
                    <a href="##"><img src="../../assets/images/icon2.png" /></a>
                    <a href="##"><img src="../../assets/images/icon3.png" /></a>
                    <a href="##"><img src="../../assets/images/icon4.png" /></a>
                </div>
            </div>
            <div class="part6">
                <div class="footerbox clearfix">
                    <ul class="foot_part1">
                        <li>
                            <a href="###">新手入门</a>
                        </li>
                        <li>
                            <a href="###">关于比特工厂(bitworks.cn)</a>
                        </li>
                        <li>
                            <a href="###">新用户注册</a>
                        </li>
                    </ul>
                    <ul class="foot_part2">
                        <li>
                            <a href="###">报名指南</a>
                        </li>
                        <li>
                            <a href="###">实训课程</a>
                        </li>
                        <li>
                            <a href="###">课程特点</a>
                        </li>
                    </ul>
                    <ul class="foot_part3">
                        <li>
                            <a href="###">比特工厂(bitworks.cn)推荐</a>
                        </li>
                        <li>
                            <a href="###">团体学习社区</a>
                        </li>
                        <li>
                            <a href="###">项目实训营</a>
                        </li>
                    </ul>
                    <ul class="foot_part4">
                        <li>
                            <a href="###">个人中心</a>
                        </li>
                        <li>
                            <a href="###">学习中心</a>
                        </li>
                        <li>
                            <a href="###">找回密码</a>
                        </li>
                        <li>
                            <a href="###">意见与投诉</a>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <div class="bottomcontent">
                        <ul class="bottomtext">
                            <li><a href="###">问题与反馈</a></li>
                            <li><a href="###">联系我们</a></li>
                            <li><a href="###">版权声明</a></li>
                            <li><a href="###">关于比特工厂</a></li>
                        </ul>
                        <div class="bottomicp cb">
                            <p>Copyright&nbsp;2015 www.bitworks.cn&nbsp;版权所有：武汉尚伟教育科技有限公司</p>
                            <p>所有教程、视频除特别声明外，均为原创作品，谢绝任何形式的转载、引用和其他商业用途&nbsp;鄂ICP备&nbsp;13003952号-3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { hySwiper } from '@/components';

  export default {
    components: { hySwiper }
  };
</script>
