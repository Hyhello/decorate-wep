webpackJsonp([25],{"/5L7":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("bGai"),e={components:{hySwiper:i.k,hyTab:i.l,hyTabItem:i.m},data:function(){return{addInfo:{}}},methods:{goSoundBoard:function(t){this.$router.push(t)},sendDemand:function(){this.addInfo={},this.$message({message:"需求已提交！",type:"success"})}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home-panel"},[s("hy-swiper"),t._v(" "),s("section",{staticClass:"contentbox"},[s("div",{staticClass:"part1"},[s("h3",{staticClass:"home-title blueColor"},[t._v("\n                精选分类\n            ")]),t._v(" "),s("ul",{staticClass:"tabbox clearfix"},[s("li",{staticStyle:{"margin-left":"0"}},[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/soundBoard")}}},[s("img",{attrs:{src:"/static/images/吸音板/聚脂钎维吸音板.jpg",alt:"javascript"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            吸音板\n                        ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/soundAbsorption")}}},[s("img",{attrs:{src:"/static/images/吸音棉/吸音棉效果图.jpg",alt:"ps"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            吸音棉\n                        ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/soundBlanket")}}},[s("img",{attrs:{src:"/static/images/隔音毡/9mm厚阻尼隔音毡.jpg",alt:"java"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            隔音毡\n                        ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/softPackage")}}},[s("img",{attrs:{src:"/static/images/软包/背景墙软包.jpg",alt:"python"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            软包\n                        ")])])]),t._v(" "),s("li",{staticStyle:{"margin-left":"0"}},[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/hardPackage")}}},[s("img",{attrs:{src:"/static/images/硬包/办公室会议室硬包.jpg",alt:"python"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            硬包\n                        ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/flockBoard")}}},[s("img",{attrs:{src:"/static/images/隔音门/钢制木制隔音门.jpg",alt:"css3"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            隔音门\n                        ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/flockBoard")}}},[s("img",{attrs:{src:"/static/images/聚酯纤维板/聚酯纤维板.jpg",alt:"jq"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            聚酯纤维板\n                        ")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"javascript: void(0);"},on:{click:function(a){t.goSoundBoard("/product/hotPlate")}}},[s("img",{attrs:{src:"/static/images/矿棉板/timg矿棉板.jpg",alt:"jq"}}),t._v(" "),s("span",{staticClass:"tabtext"},[t._v("\n                            矿棉板\n                        ")])])])])]),t._v(" "),s("div",{staticClass:"message-panel"},[t._m(0),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{offset:4,span:8}},[s("div",{staticClass:"el_col-item"},[s("el-input",{attrs:{placeholder:"您的姓名 *"},model:{value:t.addInfo.name,callback:function(a){t.$set(t.addInfo,"name",a)},expression:"addInfo.name"}})],1),t._v(" "),s("div",{staticClass:"el_col-item"},[s("el-input",{attrs:{placeholder:"您的 E-MAIL *"},model:{value:t.addInfo.email,callback:function(a){t.$set(t.addInfo,"email",a)},expression:"addInfo.email"}})],1),t._v(" "),s("div",{staticClass:"el_col-item"},[s("el-input",{attrs:{placeholder:"您的面积 *"},model:{value:t.addInfo.area,callback:function(a){t.$set(t.addInfo,"area",a)},expression:"addInfo.area"}})],1)]),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-input",{attrs:{type:"textarea",rows:7,placeholder:"您的需求 *"},model:{value:t.addInfo.demand,callback:function(a){t.$set(t.addInfo,"demand",a)},expression:"addInfo.demand"}})],1),t._v(" "),s("el-col",{attrs:{span:24}},[s("el-button",{staticClass:"mes-btn",attrs:{type:"primary"},on:{click:t.sendDemand}},[t._v("发送需求")])],1)],1)],1),t._v(" "),s("div",{staticClass:"tips-panel"},[s("ul",{staticClass:"tips-list-panel"},[s("li",{staticClass:"tips-list-item"},[s("svg-icon",{attrs:{type:"main_phone"}}),t._v(" "),s("p",{staticClass:"tips-list-text"},[t._v("18201282808")])],1),t._v(" "),s("li",{staticClass:"tips-list-item"},[s("svg-icon",{attrs:{type:"main_email"}}),t._v(" "),s("p",{staticClass:"tips-list-text"},[t._v("www.813221592@qq.com")])],1),t._v(" "),s("li",{staticClass:"tips-list-item"},[s("svg-icon",{attrs:{type:"main_address"}}),t._v(" "),s("p",{staticClass:"tips-list-text"},[t._v("北京市密云区高岭镇政府办公楼208室-436")])],1)]),t._v(" "),s("div",{staticClass:"tips-icon"},[s("svg-icon",{attrs:{type:"main_gps"}})],1)])]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{staticClass:"home-title"},[this._v("\n                联系我们\n                "),a("p",{staticClass:"home-title-tips"},[this._v("有任何合作需求可以联系我们")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("footer",{staticClass:"footer-panel"},[i("div",{staticClass:"footer_box"},[i("h3",{staticClass:"footer-title"},[t._v("联系叶斌腾达")]),t._v(" "),i("p",{staticClass:"footer-p"},[t._v("北京市密云区高岭镇政府办公楼208室-436")]),t._v(" "),i("p",{staticClass:"footer-p"},[i("span",{staticClass:"footer-p-label"},[t._v("电话：")]),t._v("\n                18201282808\n            ")]),t._v(" "),i("p",{staticClass:"footer-p"},[i("span",{staticClass:"footer-p-label"},[t._v("邮箱：")]),t._v("\n                www.813221592@qq.com\n            ")]),t._v(" "),i("p",{staticClass:"footer-p"},[i("span",{staticClass:"footer-p-label"},[t._v("邮编：")]),t._v("\n                100000\n            ")]),t._v(" "),i("div",{staticClass:"wechat-panel"},[i("img",{attrs:{width:"100",src:s("zuiJ"),alt:"wechat"}}),t._v(" "),i("p",{staticClass:"wechat-tips"},[t._v("- 官方微信 -")])])]),t._v(" "),i("div",{staticClass:"copyright"},[t._v("Copyright 2016  版权所有：北京叶斌腾达装饰设计有限公司")])])}]};var o=s("Aizv")(e,n,!1,function(t){s("D4Pb")},"data-v-e83fee00",null);a.default=o.exports},D4Pb:function(t,a){}});
//# sourceMappingURL=25.ad96750cdf4864f68788.js.map