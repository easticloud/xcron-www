(window.webpackJsonp=window.webpackJsonp||[]).push([[38,2,3,5,13,14,15,19],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),l=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),l=n(23),r=n(13),o=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var m=r(l(t)),_="<"+e;return""!==n&&(_+=" "+n+'="'+d(r(c),o,"&quot;")+'"'),_+">"+m+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},382:function(t,e,n){"use strict";n(373)},383:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(378);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){return this.production[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(382),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu",on:{mouseleave:function(e){e.stopPropagation(),t.type=""}}},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(381)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},386:function(t,e,n){"use strict";n(374)},387:function(t,e,n){"use strict";n(375)},388:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",activeIndex:0,list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:""},{label:"解决方案",class:"active",key:"solution",href:""},{label:"合作伙伴",class:"active",key:"partner",href:""},{label:"服务支持",class:"active",key:"service",href:""},{label:"联系我们",class:"active",key:"contact",href:""},{label:"关于我们",class:"active",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:"",this.isshow="display:block"},activeHandle:function(t){this.activeIndex=t}}},l=(n(386),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(385),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{target:"_blank",to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label))])])})),1)],1),t._v(" "),e("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(383).default})},389:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),r=(n(387),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone",staticStyle:{background:"url('/images/index/footer/phone.png') no-repeat left center"}},[t._v("\n                025-86702988\n            ")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n(376)},391:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(n(390),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n(377)},393:function(t,e,n){"use strict";n.r(e);n(52);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},computed:{newData:function(){return this.pmDotCon.map((function(t,i){return t.index=i+1,t}))}}},l=(n(392),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.newData,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:n.index%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){},400:function(t,e,n){"use strict";n(399)},401:function(t,e,n){},402:function(t,e,n){"use strict";n.r(e);var c={props:{pmImgConTil:String,pmImgCon:Array,pmImgConClass:String},data:function(){return{}},methods:{}},l=(n(400),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-imgCon",class:t.pmImgConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmImgConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmImgCon,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n(401)},405:function(t,e,n){"use strict";n.r(e);var c={props:{pmSceneUseS:Object,pmSceneUseSTil:String,pmSceneUseSTrue:Boolean,pmSceneUseS01:Object},data:function(){return{}},computed:{},methods:{}},l=(n(404),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-SceneuseS"},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmSceneUseSTil))]),t._v(" "),e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item",class:t.pmSceneUseS.imgR},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.pmSceneUseS.imgSrc,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",{staticClass:"u-bold"},[t._v(t._s(t.pmSceneUseS.title))]),t._v(" "),t.pmSceneUseS.titletag?e("span",[t._v(" "+t._s(t.pmSceneUseS.titletag))]):t._e()]),t._v(" "),t._l(t.pmSceneUseS.list,(function(n,c){return e("div",{key:c,staticClass:"u-content"},[e("span",{staticClass:"u-til"},[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])}))],2)]),t._v(" "),t.pmSceneUseSTrue?e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.pmSceneUseS01.imgSrc,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",{staticClass:"u-bold"},[t._v(t._s(t.pmSceneUseS01.title))]),t._v("\n                    "+t._s(t.pmSceneUseS01.titletag)+"\n                ")]),t._v(" "),t._l(t.pmSceneUseS01.list,(function(n,c){return e("div",{key:c,staticClass:"u-content"},[e("span",{staticClass:"u-til"},[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])}))],2)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},435:function(t,e,n){},465:function(t,e,n){"use strict";n(435)},496:function(t,e,n){"use strict";n.r(e);var c=n(402),l=n(393),r=n(391),o=n(405),d={name:"products-TCS",data:function(){return{pmBanner:{title:"可信跨链服务",desc:"可信跨链服务(Trusted Cross-Chain Service)基于一系列制定的可信区块链标准跨链协议，保证跨链交易全栈可追溯，可扩展性及可靠性等，实现基于不同区块链内核所构建的同构及异构链之间的互联互通，打破区块链数据孤岛，助力不同企业联盟链可信互联，促进区块链产业生态可信融合。",img:"/images/products/products_tcs/b1.jpg"},pmDotConTil:"产品优势",pmDotCon:[{title:"跨链操作可审计",desc:"跨链申请、授权等操作行为完整保存上链，交易过程记录本地账本，全流程自动、透明、可监督，支持事中校验、事后审计，保障多方权益。",img:"/images/products/products_tcs/05.svg"},{title:"跨链数据授权访问",desc:"跨链账本数据以及链代码数据仅在所有者授权情况下才能进行访问，基于身份体系对跨链合约及账本查询和交易操作提供授权能力，在保护数据安全的同时，还保证数据的使用过程可以被追溯。",img:"/images/products/products_tcs/06.svg"},{title:"统一分布式跨链身份",desc:"基于分布式身份体系支持跨链系统治理，为各个接入区块链配置通用标识，支持基于标识寻址发起跨链访问。",img:"/images/products/products_tcs/07.svg"},{title:"数据安全和隐私保护",desc:"基于TEE的证明生成流程，保证跨链交互数据安全可靠，跨链中继侧不记录对应链的数据信息，支持跨链组件点对点数据交互，防止隐私泄露，有效保护跨链数据隐私。",img:"/images/products/products_tcs/08.svg"}],pmImgConTil:"产品与服务",pmImgConClass:"noimgCon",pmImgCon:[{title:"区块链服务BCS\n(Hyperledger Fabric增强版)",desc:"基于软硬协同、自主创新、安全可控技术，简单易用， 通过Kubernetes管理，数分钟内即可完成区块链网络的构建。",img:""},{title:"可信数据交换与计算服务 TC3",desc:"为链上应用提供可信数据资产交换和可信联合分析计算，做到数据“可用不可见，可见不可得”。",img:""},{title:"可信分布式身份服务 TDIS",desc:"为个人和企业用户提供统一的分布式身份标识，支持多场景细粒度的可验证凭证管理能力。",img:""},{title:"区块链服务BCS(区块链引擎)",desc:"自主研发的满足企业级和金融级的可信、协调要求的高性能、高安全的区块链技术服务平台。",img:""},{title:"数字资产链 DAC",desc:"自研的数字资产链平台，基于云区块链引擎，可实现数字资产的确权、可信保存、安全交易。",img:""}],pmDotConTil01:"产品功能",pmDotCon01:[{title:"跨链数据迁移",desc:"基于可信环境中授权信息，支持读取账本中的数据，将不同异构链或者同构链中的状态信息迁移到目的链中，所有迁移皆记录在账本中，实现数据可追溯，可审计，并支持对迁移完成数据进行校验，保证数据迁移正确性。",img:"/images/products/products_tcs/01.png"},{title:"数据访问权限管理",desc:"统一的身份管理体系，提供身份的创建、更新等功能。用户可以基于分布式身份体系完成区块链服务的注册，并对申请访问区块链进行授权操作，可以基于账本，链代码的查询及交易动作进行分别授权。",img:"/images/products/products_tcs/02.png"},{title:"跨链互操作",desc:"在可信环境中，用户可以授权访问其他区块链访问其跨链合约，经过跨链寻址，身份校验等一系列动作，实现合约的远程调用，完成业务场景中的复杂互操作。",img:"/images/products/products_tcs/03.png"},{title:"同构异构链管理",desc:"基于区块链跨链服务，实现不同类型，不同架构，不同安全算法区块链配置对接，生成相应接入服务。",img:"/images/products/products_tcs/04.png"}],pmSceneUseSTil:"应用场景",pmSceneUseS:{title:"跨地域电子票据",imgSrc:"/images/products/products_tcs/bg.svg",list:[{til:"· 解决数据孤岛",desc:"随着区块链生态的发展，不同地市税局提出不同区块链解决方案，产生基于不同架构，安全算法等一系列区块链联盟。如何保证在跨链传递过程中数据的真实性，事务的一致性，不让单链成为限制发票全生命周期流转的限制，是需要解决的问题。"},{til:"· 提升客户价值",desc:"通过跨链服务，能够安全可信地进行区块链之间的数据流通，全生命周期追踪发票信息，保证税务开票实时性，避免虚开发票场景，提升数据时效性。"},{til:"· 方便易用接入门槛低",desc:"提供可视化平台大幅降低用户接入门槛。用户可通过可视化界面操作完成不同区块链之间的对接，快速实现跨链业务。"}]}}},components:{pmBanner:r.default,pmImgCon:c.default,pmDotCon:l.default,pmSceneUseS:o.default}},m=(n(465),n(51)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-pmImgCon",{attrs:{pmImgConClass:t.pmImgConClass,pmImgConTil:t.pmImgConTil,pmImgCon:t.pmImgCon}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil01,pmDotCon:t.pmDotCon01}}),t._v(" "),e("products-pmSceneUseS",{attrs:{pmSceneUseS:t.pmSceneUseS,pmSceneUseSTil:t.pmSceneUseSTil}}),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(388).default,CommonFooter:n(389).default})}}]);