(window.webpackJsonp=window.webpackJsonp||[]).push([[33,2,3,5,11,13,14,16],{373:function(t,n,e){},374:function(t,n,e){},375:function(t,n,e){},376:function(t,n,e){},377:function(t,n,e){},378:function(t,n,e){"use strict";var c=e(2),o=e(379);c({target:"String",proto:!0,forced:e(380)("link")},{link:function(t){return o(this,"a","href",t)}})},379:function(t,n,e){var c=e(4),o=e(23),l=e(13),r=/"/g,d=c("".replace);t.exports=function(t,n,e,c){var m=l(o(t)),C="<"+n;return""!==e&&(C+=" "+e+'="'+d(l(c),r,"&quot;")+'"'),C+">"+m+"</"+n+">"}},380:function(t,n,e){var c=e(3);t.exports=function(t){return c((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},381:function(t,n,e){t.exports=e.p+"img/search.d35ef00.svg"},382:function(t,n,e){"use strict";e(373)},383:function(t,n,e){"use strict";e.r(n);e(26),e(178),e(378);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/productsAI"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/productsAIS"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/productsBCS"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/productsTCS"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/productsECS"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/productsBMS"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/productsDH"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/productsCDW"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/productsDIS"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/productsDLV"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/productsVPC"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/productsDC"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/productsGA"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/productsWSA"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/productsIEC"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/productsTSP"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/productsCF"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/productsHSS"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/productsDEW"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){return this.production[this.index].children}},methods:{change:function(i){this.index=i}}},o=(e(382),e(51)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return t.type?n("div",{staticClass:"m-index-menu"},[n("div",{staticClass:"wp"},["production"==t.type?[n("div",{staticClass:"m-list-production"},[n("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(e,i){return n("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(n){return t.change(i)}}},[t._v("\n                    "+t._s(e.title))])}))],2),t._v(" "),n("div",{staticClass:"m-search"},[n("div",{staticClass:"u-search"},[n("img",{staticClass:"u-img",attrs:{src:e(381)}}),t._v(" "),n("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1),t._v(" "),n("div",{staticClass:"m-content"},t._l(t.children,(function(e,i){return n("a",{key:i,staticClass:"m-item",attrs:{href:e.link,target:"_blank"}},[n("span",{staticClass:"u-title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"u-desc"},[t._v(t._s(e.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[n("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(e,i){return n("div",{key:i,staticClass:"m-item"},[n("img",{staticClass:"u-img",attrs:{src:e.icon}}),t._v(" "),n("a",{staticClass:"u-txt",attrs:{href:e.link,target:"_blank"}},[n("span",{staticClass:"u-label"},[t._v(t._s(e.label))]),t._v(" "),n("span",{staticClass:"u-desc"},[t._v(t._s(e.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);n.default=component.exports},385:function(t,n,e){t.exports=e.p+"img/logo.3608031.svg"},386:function(t,n,e){"use strict";e(374)},387:function(t,n,e){"use strict";e(375)},388:function(t,n,e){"use strict";e.r(n);var c={data:function(){return{type:"",list:[{label:"首页",key:"index",href:""},{label:"产品中心",key:"production",href:""},{label:"解决方案",key:"solution",href:""},{label:"合作伙伴",key:"partner",href:""},{label:"服务支持",key:"service",href:""},{label:"联系我们",key:"contact",href:""},{label:"关于我们",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""}}},o=(e(386),e(51)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"c-header"},[n("div",{staticClass:"wp"},[n("img",{attrs:{src:e(385),alt:"Xcron"}}),t._v(" "),n("div",{staticClass:"m-box"},t._l(t.list,(function(e,i){return n("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:e.href}},[n("span",{staticClass:"u-txt",on:{mouseover:function(n){return t.change(e.key)}}},[t._v(" "+t._s(e.label))])])})),1)]),t._v(" "),n("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{IndexMenu:e(383).default})},389:function(t,n,e){"use strict";e.r(n);var c=e(11),o=(e(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.params,n.abrupt("return",{});case 2:case"end":return n.stop()}}),n)})))()}}),l=(e(387),e(51)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"c-footer"},[n("div",{staticClass:"wp"},[n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(e,i){return n("a",{key:i,staticClass:"u-link",attrs:{href:e.href,target:"_blank"}},[t._v("\n                "+t._s(e.label)+"\n            ")])}))],2),t._v(" "),n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(e,i){return n("a",{key:i,staticClass:"u-link",attrs:{href:e.href,target:"_blank"}},[t._v("\n                "+t._s(e.label)+"\n            ")])}))],2),t._v(" "),n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(e,i){return n("div",{key:i,staticClass:"u-line"},[n("img",{staticClass:"u-img",attrs:{src:e.src}}),t._v(" "),n("div",{staticClass:"u-txt"},[n("span",[t._v(t._s(e.label))]),t._v(" "),e.desc?n("span",[t._v(t._s(e.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),n("span",[t._v("咨询热线：")]),t._v(" "),n("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),n("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),n("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),n("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-item m-code"},[n("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),n("span",[t._v("随时了解最新资讯")]),t._v(" "),n("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);n.default=component.exports},390:function(t,n,e){"use strict";e(376)},391:function(t,n,e){"use strict";e.r(n);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},o=(e(390),e(51)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-banner"},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),n("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);n.default=component.exports},392:function(t,n,e){"use strict";e(377)},393:function(t,n,e){"use strict";e.r(n);e(17),e(40);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},data:function(){return{}},methods:{function1:function(){this.pmDotCon.forEach((function(t,i){t.index=i}))}},mounted:function(){this.function1()}},o=(e(392),e(51)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),n("div",{staticClass:"m-tabs"},t._l(t.pmDotCon,(function(e,i){return n("div",{key:i,staticClass:"m-item",class:e.index%2==0?"pic-r":"pic-l"},[n("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(e.img,")")}),t._v(" "),n("div",{staticClass:"u-con"},[n("span",{staticClass:"u-title"},[n("span",[t._v(t._s(e.title))])]),t._v(" "),n("span",{staticClass:"u-desc"},[t._v(t._s(e.desc))])])])})),0)])])}),[],!1,null,null,null);n.default=component.exports},394:function(t,n,e){},397:function(t,n,e){"use strict";e(394)},398:function(t,n,e){"use strict";e.r(n);var c={props:{pAboutBCS:Array,pAboutBCSTil:String,pAboutBCSClass:String},data:function(){return{}},methods:{}},o=(e(397),e(51)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-aboutBCS",class:t.pAboutBCSClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pAboutBCSTil))]),t._v(" "),n("div",{staticClass:"m-bcs"},t._l(t.pAboutBCS,(function(e,c){return n("p",{key:c},[n("span",[t._v(t._s(e.til))]),t._v(" "),n("span",{staticClass:"tags"},[t._v(t._s(e.desc))])])})),0)])])}),[],!1,null,null,null);n.default=component.exports},403:function(t,n,e){},406:function(t,n,e){"use strict";e(403)},412:function(t,n,e){"use strict";e.r(n);var c={props:{pmPInfoTil:String,pmPInfoImg:String},data:function(){return{}},methods:{}},o=(e(406),e(51)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-pInfo"},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pmPInfoTil))]),t._v(" "),n("div",{staticClass:"infoImg"},[n("img",{attrs:{src:t.pmPInfoImg,alt:""}})])])])}),[],!1,null,null,null);n.default=component.exports},431:function(t,n,e){},461:function(t,n,e){"use strict";e(431)},485:function(t,n,e){"use strict";e.r(n);var c=e(393),o=e(391),l=e(412),r=e(398),d={name:"products-ECS",data:function(){return{pmBanner:{title:"弹性云服务器",desc:"弹性云服务器（Elastic Cloud Server, ECS）是一种云上可随时自助获取、可弹性伸缩的计算服务，可帮助您打造安全、可靠、灵活、高效的应用环境。"},pAboutBCSTil:"了解弹性云服务器",pAboutBCSClass:"m-p-ECS",pAboutBCS:[{til:"30+年",desc:"注入自身在ICT基础设施领域30多年的技术、能力、经验积累"},{til:"多样性算力",desc:"支持X86、鲲鹏、昇腾、异构四大类型算力，提供更优算力选择"},{til:"200+",desc:"支持200+企业应用场景，满足各类业务的上云需求"},{til:"80+",desc:"80+全球安全合规认证，打造中立、安全、可信的云服务"}],pmDotConTil:"产品优势",pmDotConClass:"ecs-dotcon",pmDotCon:[{title:"弹性灵活，助您低成本轻松上云",desc:"-用户可通过Web页面或开放API，同时管理一个、数百个、甚至数千个弹性云服务器实例 \n-用户可根据业务需求自行定义弹性伸缩策略，通过可视化控制台配置定时或周期性的监控策略，动态调整弹性云服务器实例，满足业务需求的同时，减少资源投入 \n-提供按需、包周期、竞价等多种计费模式，满足各类业务使用需求",img:"/images/products/productsECS/01.jpeg"},{title:"性能强劲，为企业提供旗舰级产品",desc:"-最大提供208vCPU，4096G内存，引领业界顶级算力 \n-业界首推千万级PPS转发实例，单实例最大内网带宽可达44Gbps \n-千台弹性云服务器分钟级极速发放",img:"/images/products/productsECS/02.jpeg"},{title:"多规格类型，满足不同企业的个性化需求",desc:"-提供X86、鲲鹏、昇腾、异构等多种类型的弹性云服务器 \n-提供公共、私有、共享三种镜像，还可以使用镜像市场提供的包含各类软件的优质第三方镜像 \n-所有弹性云服务器和镜像可一键部署，无需配置，满足用户建站、应用开发、可视化管理等个性化需求",img:"/images/products/productsECS/03.jpeg"},{title:"数据可靠，提供坚实的基础数据平台",desc:"-数据持久性高达99.9999999%，保证数据安全可靠，保护您的业务免受故障影响 \n-提供极速型SSD、超高IO、通用型SSD、高IO等多种性能规格的云硬盘，可根据业务需要灵活选择不同规格 \n-支持共享云硬盘、云硬盘加密、云硬盘备份、云服务器备份、快照等功能，可满足不同业务场景的需求",img:"/images/products/productsECS/04.jpeg"},{title:"多重防护，专业保护您的数据安全",desc:"-帮助用户快速发现安全弱点和威胁，并给出最佳安全实践建议，有效减少或避免由于网络中病毒和恶意攻击带来的损失 \n-通过专业的防DDoS设备为客户互联网应用提供精细化的抵御DDoS攻击能力 \n-联合全球知名数字证书服务机构，为您提供的一站式安全套接层（SSL）证书和传输层安全（TLS）证书的全生命周期管理服务，实现网站的可信身份认证与安全数据传输",img:"/images/products/productsECS/05.jpeg"}],pmPInfoTil:"擎天架构加持，助力弹性云服务器更快、更稳",pmPInfoImg:"/images/products/productsECS/bg.png",pmDotConTil01:"权威认可",pmDotConClass01:"bcsAuth",pmDotCon01:[{title:"云计算服务能力标准符合性一级证书",desc:"由中国电子工业标准化技术协会（ESA）信息技术服务分会颁发，标志着基础设施服务在规模、功能、性能、安全、人员和管理等维度全面满足工业和信息化部《云计算综合标准化体系建设指南》的最高要求。",img:"/images/products/productsECS/01.png"},{title:"OCP与USCP运筹优化算法赛道第一名",desc:"在GECCO 2020国际会议中，擎天架构的调度算法团队同时获得OCP与USCP运筹优化算法赛道第一名，算法运行结果刷新了十个文献算例的已知最好结果。",img:"/images/products/productsECS/02.png"},{title:"51项国际榜单纪录",desc:"擎天架构调度算法团队打破了51项由全球优化算法领域权威机构SINTEF维护的PDPTW榜单纪录，成为中国研究机构中最多纪录的保持者。",img:"/images/products/productsECS/03.png"},{title:"可信云技术最佳实践奖",desc:"擎天架构，凭借业界领先的云基础设施技术底座，以及面向多场景的技术创新，得到可信云权威机构的高度认可，荣获2020-2021年度“可信云技术最佳实践奖”。",img:"/images/products/productsECS/04.png"},{title:"下一代云计算技术创新奖",desc:"中国电子技术标准化研究院主办的“第九届中国云计算标准和应用大会”，鲲鹏云服务全系列计算实例（鲲鹏ECS/BMS），荣获主委会高度认可，并颁发荣誉证书。",img:"/images/products/productsECS/05.png"},{title:"年度领先游戏云服务器",desc:"广东省游戏协会、深圳市文化市场等多家产业协会指导，游戏行业头部媒体游戏陀螺、陀螺电竞等联合主办的2019未来商业生态链接大会暨第四届金陀螺奖颁奖典礼上，通用计算增强型实例C6s被评选为2019年度领先游戏云服务器。",img:"/images/products/productsECS/06.png"}]}},components:{pmBanner:o.default,pmDotCon:c.default,pAboutBCS:r.default,pmPInfo:l.default}},m=(e(461),e(51)),component=Object(m.a)(d,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"p-products"},[n("common-header"),t._v(" "),n("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),n("products-pAboutBCS",{attrs:{pAboutBCS:t.pAboutBCS,pAboutBCSTil:t.pAboutBCSTil,pAboutBCSClass:t.pAboutBCSClass}}),t._v(" "),n("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass,pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),n("products-pmPInfo",{attrs:{pmPInfoTil:t.pmPInfoTil,pmPInfoImg:t.pmPInfoImg}}),t._v(" "),n("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass01,pmDotConTil:t.pmDotConTil01,pmDotCon:t.pmDotCon01}}),t._v(" "),n("common-footer")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CommonHeader:e(388).default,CommonFooter:e(389).default})}}]);