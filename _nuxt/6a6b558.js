(window.webpackJsonp=window.webpackJsonp||[]).push([[22,2,3,4,5,6,7,8,9],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),l=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),l=n(23),r=n(13),d=/"/g,o=c("".replace);t.exports=function(t,e,n,c){var _=r(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+o(r(c),d,"&quot;")+'"'),v+">"+_+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},382:function(t,e,n){"use strict";n(373)},383:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(378);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){return this.production[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(382),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(381)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},386:function(t,e,n){"use strict";n(374)},387:function(t,e,n){"use strict";n(375)},388:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",activeIndex:0,list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:""},{label:"解决方案",class:"active",key:"solution",href:""},{label:"合作伙伴",class:"active",key:"partner",href:""},{label:"服务支持",class:"active",key:"service",href:""},{label:"联系我们",class:"active",key:"contact",href:""},{label:"关于我们",class:"active",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.activeIndex=t}}},l=(n(386),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(385),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{target:"_blank",to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label))])])})),1)],1),t._v(" "),e("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(383).default})},389:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),r=(n(387),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},407:function(t,e,n){},408:function(t,e,n){},409:function(t,e,n){},410:function(t,e,n){},411:function(t,e,n){},414:function(t,e){t.exports={title:"title",description:"desc",__cdn:"https://console.cnyixun.com/easticloud/",API:{cms:"https://cms.easticloud.iruxu.com/"}}},415:function(t,e,n){"use strict";n(407)},416:function(t,e,n){"use strict";n(408)},417:function(t,e,n){"use strict";n(409)},418:function(t,e,n){"use strict";n(410)},419:function(t,e,n){"use strict";n(411)},440:function(t,e,n){},445:function(t,e,n){"use strict";n.r(e);var c=n(414);function l(t){return c.__cdn+"image/kv/"+t}var r={data:function(){return{data:[{title:"上云场景组合折上折",desc:"所有场景组合折上9折起！万元礼券限时领！",href:"/solution/mix",target:"_blank",src:l("xcron-1.jpg"),mode:"dark"},{title:"X.CRON推荐奖励计划",desc:"加入推广成为云推官，推荐新用户下单即可获得现金奖励",href:"/production/servers",target:"_blank",src:l("xcron-2.jpg"),mode:"light"},{title:"企业上云解决方案",desc:"高质量、高效率、高安全”7*24h专业运维服务",href:"/production/international",target:"_blank",src:l("xcron-3.jpg"),mode:"light"}]}},methods:{changeHandle:function(t){}}},d=(n(415),n(51)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-slider"},[e("el-carousel",{attrs:{direction:"horizontal",autoplay:!0},on:{change:t.changeHandle}},t._l(t.data,(function(n,i){return e("el-carousel-item",{key:i,staticClass:"u-item"},[e("a",{staticClass:"u-link",style:"background-image: url(".concat(n.src,")"),attrs:{href:n.href,target:n.target}},[e("div",{staticClass:"wp",class:"dark"==n.mode?"dark":"light"},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))]),t._v(" "),e("span",{staticClass:"u-btn"},[t._v("立即查看")])])])])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,n){"use strict";n.r(e);n(378);var c={data:function(){return{index:0,list:[{label:"人工智能",src:"/images/index/A.png",children:[{title:"智能AI边缘盒子",sign:"自动化部署",link:"products/products_ai",desc:"提供识别、抓拍、对比、报警等服务",tag:["算法适配","海量储存"]},{title:"AI在线服务",sign:"",link:"products/products_ais",desc:"适用于图像识别、自然语言处理等多个领域",tag:["安全可靠","简单易用"]}]},{label:"区块链",src:"/images/index/B.png",children:[{title:"区块链服务",sign:"自研平台",link:"products/products_bcs",desc:"高性能、高安全的区块链技术平台服务",tag:["云链结合","高效灵活"]},{title:"可信跨链服务",sign:"",link:"products/products_tcs",desc:"实现不同区块链内核的可信互联互通",tag:["可扩展性"]}]},{label:"云计算",src:"/images/index/C.png",children:[{title:"弹性云服务器",sign:"多样性",link:"products/products_ecs",desc:"可随时自动获取、弹性伸缩的云服务器",tag:["安全可靠","灵活高效"]},{title:"裸金属服务器",sign:"大容量",link:"products/products_bms",desc:"高性能、高安全的云上物理服务器",tag:["高效部署","快速集成"]},{title:"专属主机",sign:"多配置",link:"products/products_dh",desc:"专属物理主机创建的云服务器",tag:["安全合规","节约成本"]}]},{label:"大数据",src:"/images/index/D.png",children:[{title:"云数据仓库",sign:"生态兼容",link:"products/products_cdw",desc:"极致性能、稳定、按需扩展的数据仓库服务",tag:["新一代","全场景"]},{title:"数据接入服务",sign:"永久在线",link:"products/products_dis",desc:"实时数据接入、处理、转储服务",tag:["高效传输","简单易用"]},{title:"数据可视化",sign:"",link:"products/products_dlv",desc:"提供可视化组件定制和应用数据大屏",tag:["实时监测"]}]},{label:"网络",src:"/images/index/N.png",children:[{title:"虚拟私有云",sign:"100%隔离",link:"products/products_vpc",desc:"隔离的、私密的虚拟网络环境",tag:["灵活易用","轻松扩展"]},{title:"云专线",sign:"混合云",link:"products/products_dc",desc:"搭建本地数据中心与VPC间的专属连接通道",tag:["高安全性","无缝扩展"]},{title:"全球加速",sign:"灵活部署",link:"products/products_ga",desc:"提供SLA稳定的加速传输",tag:["高合规","高可靠","低时延"]}]},{label:"智能边缘",src:"/images/index/E.png",children:[{title:"全站加速",sign:"动静结合",link:"products/products_wsa",desc:"提升网络传输的性能、稳定性和访问体验",tag:["节点丰富","智能加速"]},{title:"智能边缘云",sign:"边云协同",link:"products/products_iec",desc:"部署在距用户更近的位置，提供低时延体验",tag:["广域覆盖","卓越性能"]}]},{label:"终端",src:"/images/index/T.png",children:[{title:"终端安全防护",sign:"网端联动",link:"products/products_tsp",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",tag:["实时响应","专项防护"]}]},{label:"安全",src:"/images/index/S.png",children:[{title:"云防火墙",sign:"",link:"products/products_cf",desc:"网络流量管控与入侵安全防护",tag:["安全","可视","极简"]},{title:"企业主机安全",sign:"",link:"products/products_hss",desc:"服务器贴身安全管家",tag:["合规","高效","稳定"]},{title:"数据加密服务",sign:"",link:"products/products_dew",desc:"云上数据加密和密钥托管服务",tag:["等保合规","专属加密"]}]}]}},computed:{children:function(){return this.list[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(416),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item m-index-production"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:i==t.index},on:{click:function(e){return t.change(i)}}},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0)]),t._v(" "),e("div",{staticClass:"m-content"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-children"},t._l(t.children,(function(n,i){return e("div",{key:i,staticClass:"u-child"},[e("span",{staticClass:"u-title"},[e("a",{staticClass:"u-child-title",attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.title))]),t._v(" "),n.sign?e("span",{staticClass:"u-sign"},[t._v(t._s(n.sign))]):t._e()]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))]),t._v(" "),e("div",{staticClass:"u-tags"},t._l(n.tag,(function(n,c){return e("span",{key:c,staticClass:"u-tag"},[t._v(t._s(n))])})),0)])})),0)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("丰富、安全、稳定的产品及服务")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"/",target:"_blank"}},[t._v("查看全部产品 >")])])}],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{list:[{title:"热门场景",desc:"精选热门业务场景，为您推荐爆款产品组合购。",src:"/images/index/scene/01.svg",icon:"/images/index/scene/icon-1.svg"},{title:"企业场景",desc:"为企业提供多场景、一站式上云服务，满足企业各发展阶段的需求，为您推荐场景组合购。",src:"/images/index/scene/02.svg",icon:"/images/index/scene/icon-2.svg"},{title:"通用场景",desc:"为各个行业企业提供通用的场景方案，助力开展云上业务，降本提效。",src:"/images/index/scene/03.svg",icon:"/images/index/scene/icon-3.svg"},{title:"行业场景",desc:"从行业维度出发，基于行业内的业务痛点，业务场景，为用户提供相应的场景组合购买推荐。",src:"/images/index/scene/04.svg",icon:"/images/index/scene/icon-4.svg"}]}},computed:{},methods:{}},l=(n(417),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item m-index-scene"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",style:"backgroundImage: url(".concat(n.src,")")},[e("span",{staticClass:"u-line"}),t._v(" "),e("span",{staticClass:"u-title"},[e("img",{staticClass:"u-icon",attrs:{src:n.icon}}),t._v(" "),e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("易用、精选、一站式应用场景组合推荐")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("精选多款域名关联场景组合购")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-content"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-box m-left"},[e("div",{staticClass:"m-list"},[e("span",{staticClass:"u-item"},[t._v("7*24h专业服务")]),t._v(" "),e("span",{staticClass:"u-item"},[t._v("业务故障 双倍赔偿")]),t._v(" "),e("span",{staticClass:"u-item"},[t._v("0元试用7天")]),t._v(" "),e("span",{staticClass:"u-item"},[t._v("1V1大客户专享服务")])]),t._v(" "),e("div",{staticClass:"m-btn"},[e("span",{staticClass:"u-btn"},[t._v("安全中心")]),t._v(" "),e("span",{staticClass:"u-btn red"},[t._v("数据保障")])])]),t._v(" "),e("div",{staticClass:"m-box m-right"},[e("span",{staticClass:"u-title"},[t._v("[稳定·可靠·安全]真正实现"),e("b",[t._v("降本提效")])]),t._v(" "),e("div",{staticClass:"m-item"},[e("div",{staticClass:"u-item"},[e("span",{staticClass:"u-num"},[e("b",[t._v("99.9999")]),t._v("%")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v("数据可靠性")])]),t._v(" "),e("div",{staticClass:"u-item"},[e("span",{staticClass:"u-num"},[e("b",[t._v("99.9995")]),t._v("%")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v("业务可靠性")])])])])])])}],!1,null,null,null);e.default=component.exports},448:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{index:0,list:[{label:"新零售",src:"/images/index/solution/icon-1.png",children:{title:"新零售行业解决方案",desc:"通过云计算、大数据、人工智能等技术，蒋零售场景中要素进行整合，达到精准营销，高效运营。",src:"/images/index/solution/01.svg",tag:["数据驱动","数字赋能","AI加持"],other:[]}},{label:"运营商",src:"/images/index/solution/icon-2.png",children:{title:"运营商行业解决方案",desc:"提供更适合运营商的业务云化转型方案以及面向运营商企业客户的行业数字化方案，帮助运营商加速网络变现，业务创新，运营敏捷，取得新增长。",src:"/images/index/solution/02.jpeg",tag:["网络变现","业务创新","运营敏捷"],other:[]}},{label:"数字政府",src:"/images/index/solution/icon-3.png",children:{title:"数字政府解决方案",desc:"通过全栈专属云，人工智能和微服务等服务，帮助政府及公共事业的服务能力向移动化和智能化发展。",src:"/images/index/solution/03.jpeg",tag:["协同共享","智能精准","简单易用"],other:[]}},{label:"金融",src:"/images/index/solution/icon-4.png",children:{title:"金融行业解决方案",desc:"通过金融专区、专属云安全合规部署和全栈技术创新，助力金融客户业务敏捷创新、智能升级等数字化转型目标。",src:"/images/index/solution/04.jpeg",tag:["全新趋势","转型升级","业务创新"],other:[]}},{label:"上云与迁移",src:"/images/index/solution/icon-5.png",children:{title:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务，为您完成数字化时代的企业管理工具转型。",src:"/images/index/solution/05.jpeg",tag:["降低成本","安全稳定","最新技术"],other:[]}},{label:"媒体应用",src:"/images/index/solution/icon-6.png",children:{title:"TIk Tok解决方案",desc:"抖音国际版Tiktok在全球深受欢迎，成为国际上下载量最多的APP之一。由简入深，针对浏览客户、运营客户以及企业高端客户都有完整配套解决方案，解决个人/企业Tiktok问题。",src:"/images/index/solution/06.jpeg",tag:["全案定制","高速转化","精准匹配"],other:[]}},{label:"其他",src:"/images/index/solution/icon-7.png",children:{title:"",desc:"",src:"",tag:[],other:["能源行业解决方案","医疗健康行业解决方案","教育行业解决方案","工业互联网行业解决方案"]}}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},computed:{children:function(){return this.list[this.index].children}},methods:{change:function(i){this.index=i}}}),r=(n(418),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item m-index-solution"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0),t._v(" "),e("div",{staticClass:"m-content",style:"backgroundImage: url(".concat(t.children.src,")")},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v(t._s(t.children.title))]),t._v(" "),t.children.desc?e("span",{staticClass:"u-desc"},[t._v(t._s(t.children.desc))]):t._e(),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("span",{key:i,staticClass:"u-tag"},[t._v(t._s(n))])})):t._e()],2)]),t._v(" "),e("div",{staticClass:"u-others"},[t.children.other.length?t._l(t.children.other,(function(n,i){return e("span",{key:i,staticClass:"u-other"},[t._v(t._s(n))])})):t._e()],2)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("全面、专业、智能的解决方案")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("查看全部解决方案 >")])])}],!1,null,null,null);e.default=component.exports},449:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{list:[{label:"三度集团",href:"",src:"/images/index/partner/01.png"},{label:"华为云",href:"",src:"/images/index/partner/02.png"},{label:"网宿科技",href:"",src:"/images/index/partner/03.png"},{label:"斗鱼",href:"",src:"/images/index/partner/04.png"},{label:"字节跳动",href:"",src:"/images/index/partner/05.png"},{label:"硅基智能",href:"",src:"/images/index/partner/06.png"},{label:"Aegis擎盾",href:"",src:"/images/index/partner/07.png"},{label:"Stacks network",href:"",src:"/images/index/partner/08.png"},{label:"易信科技",href:"",src:"/images/index/partner/09.png"},{label:"速丰通联",href:"",src:"/images/index/partner/10.png"},{label:"创世云数据",href:"",src:"/images/index/partner/11.png"},{label:"INIDC",href:"",src:"/images/index/partner/12.png"},{label:"Fiber Home",href:"",src:"/images/index/partner/13.png"},{label:"安恒信息",href:"",src:"/images/index/partner/14.png"},{label:"驰速信息",href:"",src:"/images/index/partner/15.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),r=(n(419),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.list,(function(t,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:t.href,target:"_blank"}},[e("img",{attrs:{src:t.src,alt:t.label}})])})),0)]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("全国5000+客户的信任与选择")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("查看全部合作伙伴 >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-contact"},[e("span",[t._v("联系我们，获取更多个性化定制方案")]),t._v(" "),e("a",{staticClass:"u-btn",attrs:{href:"",target:"_blank"}},[t._v("立即咨询")])])}],!1,null,null,null);e.default=component.exports},470:function(t,e,n){"use strict";n(440)},497:function(t,e,n){"use strict";n.r(e);var c={name:"IndexPage"},l=(n(470),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-index"},[e("common-header"),t._v(" "),e("client-only",[e("index-kv")],1),t._v(" "),e("index-production"),t._v(" "),e("index-scene"),t._v(" "),e("index-solution"),t._v(" "),e("index-partner"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(388).default,IndexKv:n(445).default,IndexProduction:n(446).default,IndexScene:n(447).default,IndexSolution:n(448).default,IndexPartner:n(449).default,CommonFooter:n(389).default})}}]);