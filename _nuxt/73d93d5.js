(window.webpackJsonp=window.webpackJsonp||[]).push([[21,2,3,5,12,13,14],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},379:function(t,e,n){"use strict";n(373)},380:function(t,e,n){},381:function(t,e,n){"use strict";n.r(e);n(26),n(178);var l={props:["type"],data:function(){return{production_key:"人工智能",search:"",production:["人工智能","区块链","云计算","大数据","网络","智能边缘","终端","安全"],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},methods:{}},c=(n(379),n(51)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.production_key==n}},[t._v("\n                    "+t._s(n))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(378)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t._m(0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-content"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("智能AI边缘盒子")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v("提供识别、抓拍、对比、报警等服务")])]),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("AI在线服务")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v("适用于图像识别、自然语言处理等服务")])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},383:function(t,e,n){"use strict";n(374)},384:function(t,e,n){"use strict";n(375)},385:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{type:"",list:[{label:"首页",key:"index",href:""},{label:"产品中心",key:"production",href:""},{label:"解决方案",key:"solution",href:""},{label:"合作伙伴",key:"partner",href:""},{label:"服务支持",key:"service",href:""},{label:"联系我们",key:"contact",href:""},{label:"关于我们",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""}}},c=(n(383),n(51)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("img",{attrs:{src:n(382),alt:"Xcron"}}),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",on:{mouseover:function(e){return t.change(n.key)}}},[t._v(" "+t._s(n.label))])])})),1)]),t._v(" "),e("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(381).default})},386:function(t,e,n){"use strict";n.r(e);var l=n(12),c=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),o=(n(384),n(51)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);e.default=component.exports},387:function(t,e,n){"use strict";n(376)},388:function(t,e,n){"use strict";n(377)},389:function(t,e,n){"use strict";n.r(e);var l={props:{pmBanner:Object},data:function(){return{}},methods:{}},c=(n(387),n(51)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner"},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n.r(e);var l={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},data:function(){return{}},methods:{}},c=(n(388),n(51)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmDotCon,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,n){"use strict";n(380)},393:function(t,e,n){"use strict";n.r(e);var l={props:{pmImgConTil:String,pmImgCon:Array,pmImgConClass:String},data:function(){return{}},methods:{}},c=(n(391),n(51)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-imgCon",class:t.pmImgConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmImgConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmImgCon,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){},426:function(t,e,n){"use strict";n(409)},437:function(t,e,n){"use strict";n.r(e);var l=n(389),c=n(390),o=n(393),r={name:"products-AIS",data:function(){return{pmBanner:{title:"AI在线服务",desc:"AI 在线服务是面向AI在线inference服务的大规模分布式计算平台：提供海量计算节点，自动负载均衡，动态扩缩容；基于UCloud云生态构建，提供高可用性、高安全性和高功能性保障；按需收费，灵活便捷；适用于图像识别、自然语言处理等多个AI领域。"},pmDotConTil:"产品优势",pmDotConClass:"m-p-oSer",pmDotCon:[{title:"面向AI开发",desc:"支持多种主流AI框架（Tensorflow，Keras, MXNet, Caffe），快速AI算法在线服务化。",img:""},{title:"海量计算资源",desc:"十万核级别计算资源池，充分保障计算资源需求。",img:""},{title:"按需使用、按量付费",desc:"按照实际计算资源消耗收费，无需担心资源闲置浪费。",img:""},{title:"弹性伸缩，快速扩容",desc:"随着业务的高峰和低峰，系统自动调整计算资源配比，自动对计算集群进行横向扩展和回缩。",img:""},{title:"服务高可用",desc:"计算节点集群化，提供可用区级别的容灾保障，无需担心单点错误。",img:""},{title:"用户隔离，安全可靠",desc:"多用户存储、网络、计算资源隔离，安全可靠。",img:""},{title:"简单易用",desc:"操作简单上手，并支持可视化业务管理和监控。",img:""}],pmImgConTil:"产品功能",pmImgCon:[{title:"自动化部署工具",desc:"提供自动化部署工具，一键从本地部署到UAI-Inference集群。",img:"/images/index/scene/01.svg"},{title:"服务管理",desc:"支持在线新增、更新、删除、启动、停止、恢复AI服务。",img:"/images/index/scene/01.svg"},{title:"版本管理",desc:"支持同一服务多版本部署，灰度切换，流量控制，版本回滚。",img:"/images/index/scene/01.svg"},{title:"日志查询",desc:"支持在线查询服务版本发布情况，服务运行情况。",img:"/images/index/scene/01.svg"},{title:"监控报警",desc:"支持对服务运行异常状态及时报警。",img:"/images/index/scene/01.svg"}]}},components:{pmBanner:l.default,pmDotCon:c.default,pmImgCon:o.default}},m=(n(426),n(51)),component=Object(m.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon,pmDotConClass:t.pmDotConClass}}),t._v(" "),e("products-pmImgCon",{attrs:{pmImgConTil:t.pmImgConTil,pmImgCon:t.pmImgCon}}),t._v(" "),e("products-pmSceneUse"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(385).default,CommonFooter:n(386).default})}}]);