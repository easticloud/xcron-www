(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5,6,7,8],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){},379:function(t,e,n){},380:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},381:function(t,e,n){"use strict";n(373)},382:function(t,e){t.exports={title:"title",description:"desc",__cdn:"https://console.cnyixun.com/easticloud/",API:{cms:"https://cms.easticloud.iruxu.com/"}}},383:function(t,e,n){"use strict";n(374)},384:function(t,e,n){"use strict";n(375)},385:function(t,e,n){"use strict";n(376)},386:function(t,e,n){"use strict";n(377)},387:function(t,e,n){"use strict";n(378)},388:function(t,e,n){"use strict";n(379)},390:function(t,e,n){},391:function(t,e,n){"use strict";n.r(e);var r=n(382);function c(t){return r.__cdn+"image/kv/"+t}var l={data:function(){return{data:[{href:"/solution/mix",target:"_blank",src:c("xcron-1.jpg"),mode:"dark"},{href:"/production/servers",target:"_blank",src:c("xcron-2.jpg"),mode:"dark"},{href:"/production/international",target:"_blank",src:c("xcron-3.jpg"),mode:"light"}]}},methods:{changeHandle:function(t){this.$store.commit("home/setKVMode",this.data[t].mode)}}},o=(n(383),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-slider"},[e("el-carousel",{attrs:{direction:"horizontal",autoplay:!0},on:{change:t.changeHandle}},t._l(t.data,(function(t,i){return e("el-carousel-item",{key:i,staticClass:"u-item"},[e("a",{staticClass:"u-link",style:"background-image: url(".concat(t.src,")"),attrs:{href:t.href,target:t.target}})])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n.r(e);var r=n(12),c=(n(74),{data:function(){return{list:[{label:"首页",href:""},{label:"产品中心",href:""},{label:"解决方案",href:""},{label:"合作伙伴",href:""},{label:"服务支持",href:""},{label:"联系我们",href:""},{label:"关于我们",href:""}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),l=(n(381),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("img",{attrs:{src:n(380),alt:"Xcron"}}),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[t._v("\n                "+t._s(n.label)+"\n            ")])})),1)])])}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,n){"use strict";n.r(e);var r=n(12),c=(n(74),{data:function(){return{list:[{label:"人工智能",src:"/images/index/A.png"},{label:"区块链",src:"/images/index/B.png"},{label:"云计算",src:"/images/index/C.png"},{label:"大数据",src:"/images/index/D.png"},{label:"网络",src:"/images/index/N.png"},{label:"智能边缘",src:"/images/index/E.png"},{label:"终端",src:"/images/index/T.png"},{label:"安全",src:"/images/index/S.png"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),l=(n(384),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item m-index-production"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0)]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("丰富、安全、稳定的产品及服务")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-content"},[t("div",{staticClass:"wp"})])}],!1,null,null,null);e.default=component.exports},394:function(t,e,n){"use strict";n.r(e);var r=n(12),c=(n(74),{data:function(){return{list:[{title:"热门场景",desc:"精选热门业务场景，为您推荐爆款产品组合购。",src:"/images/index/scene/01.svg",icon:"/images/index/scene/icon-1.svg"},{title:"企业场景",desc:"为企业提供多场景、一站式上云服务，满足企业各发展阶段的需求，为您推荐场景组合购",src:"/images/index/scene/02.svg",icon:"/images/index/scene/icon-2.svg"},{title:"通用场景",desc:"为各个行业企业提供通用的场景方案，助力开展云上业务，降本提效。",src:"/images/index/scene/03.svg",icon:"/images/index/scene/icon-3.svg"},{title:"行业场景",desc:"从行业维度出发，基于行业内的业务痛点，业务场景，为用户提供相应的场景组合购买推荐",src:"/images/index/scene/04.svg",icon:"/images/index/scene/icon-4.svg"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),l=(n(385),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item m-index-scene"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",style:"backgroundImage: url(".concat(n.src,")")},[e("span",{staticClass:"u-title"},[e("img",{staticClass:"u-icon",attrs:{src:n.icon}}),t._v(" "),e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("易用、精选、一站式应用场景组合推荐")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("精选多款域名关联场景组合购")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-content"},[t("div",{staticClass:"wp"})])}],!1,null,null,null);e.default=component.exports},395:function(t,e,n){"use strict";n.r(e);var r=n(12),c=(n(74),{data:function(){return{list:[{label:"新零售",src:"/images/index/solution/icon-1.png"},{label:"运营商",src:"/images/index/solution/icon-2.png"},{label:"数字政府",src:"/images/index/solution/icon-3.png"},{label:"金融",src:"/images/index/solution/icon-4.png"},{label:"上云与迁移",src:"/images/index/solution/icon-5.png"},{label:"媒体应用",src:"/images/index/solution/icon-6.png"},{label:"媒体应用",src:"/images/index/solution/icon-7.png"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),l=(n(386),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item m-index-solution"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0),t._v(" "),e("div",{staticClass:"m-content"})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("全面、专业、智能的解决方案")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("查看全部解决方案 >")])])}],!1,null,null,null);e.default=component.exports},396:function(t,e,n){"use strict";n.r(e);var r=n(12),c=(n(74),{data:function(){return{list:[{label:"三度集团",href:"",src:"/images/index/partner/01.png"},{label:"华为云",href:"",src:"/images/index/partner/02.png"},{label:"网宿科技",href:"",src:"/images/index/partner/03.png"},{label:"斗鱼",href:"",src:"/images/index/partner/04.png"},{label:"字节跳动",href:"",src:"/images/index/partner/05.png"},{label:"硅基智能",href:"",src:"/images/index/partner/06.png"},{label:"Aegis擎盾",href:"",src:"/images/index/partner/07.png"},{label:"Stacks network",href:"",src:"/images/index/partner/08.png"},{label:"易信科技",href:"",src:"/images/index/partner/09.png"},{label:"速丰通联",href:"",src:"/images/index/partner/10.png"},{label:"创世云数据",href:"",src:"/images/index/partner/11.png"},{label:"INIDC",href:"",src:"/images/index/partner/12.png"},{label:"Fiber Home",href:"",src:"/images/index/partner/13.png"},{label:"安恒信息",href:"",src:"/images/index/partner/14.png"},{label:"驰速信息",href:"",src:"/images/index/partner/15.png"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),l=(n(387),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.list,(function(t,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.src,alt:t.label}})])})),0)]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("全国5000+客户的信任与选择")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("查看全部合作伙伴 >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-contact"},[e("span",[t._v("联系我们，获取更多个性化定制方案")]),t._v(" "),e("a",{staticClass:"u-btn",attrs:{href:"",target:"_blank"}},[t._v("立即咨询")])])}],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n.r(e);var r=n(12),c=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),l=(n(388),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n(390)},401:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage"},c=(n(399),n(51)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-index"},[e("common-header"),t._v(" "),e("client-only",[e("index-kv")],1),t._v(" "),e("index-production"),t._v(" "),e("index-scene"),t._v(" "),e("index-solution"),t._v(" "),e("index-partner"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(392).default,IndexKv:n(391).default,IndexProduction:n(393).default,IndexScene:n(394).default,IndexSolution:n(395).default,IndexPartner:n(396).default,CommonFooter:n(397).default})}}]);