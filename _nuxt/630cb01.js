(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2,3,5,11,13,14,16,17],{373:function(t,n,e){},374:function(t,n,e){},375:function(t,n,e){},376:function(t,n,e){},377:function(t,n,e){},378:function(t,n,e){"use strict";var c=e(2),l=e(379);c({target:"String",proto:!0,forced:e(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,n,e){var c=e(4),l=e(23),o=e(13),r=/"/g,d=c("".replace);t.exports=function(t,n,e,c){var m=o(l(t)),v="<"+n;return""!==e&&(v+=" "+e+'="'+d(o(c),r,"&quot;")+'"'),v+">"+m+"</"+n+">"}},380:function(t,n,e){var c=e(3);t.exports=function(t){return c((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},381:function(t,n,e){t.exports=e.p+"img/search.d35ef00.svg"},382:function(t,n,e){"use strict";e(373)},383:function(t,n,e){"use strict";e.r(n);e(26),e(178),e(378);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/productsAI"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/productsAIS"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/productsBCS"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/productsTCS"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/productsECS"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/productsBMS"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/productsDH"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/productsCDW"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/productsDIS"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/productsDLV"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/productsVPC"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/productsDC"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/productsGA"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/productsWSA"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/productsIEC"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/productsTSP"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/productsCF"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/productsHSS"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/productsDEW"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){return this.production[this.index].children}},methods:{change:function(i){this.index=i}}},l=(e(382),e(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return t.type?n("div",{staticClass:"m-index-menu"},[n("div",{staticClass:"wp"},["production"==t.type?[n("div",{staticClass:"m-list-production"},[n("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(e,i){return n("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(n){return t.change(i)}}},[t._v("\n                    "+t._s(e.title))])}))],2),t._v(" "),n("div",{staticClass:"m-search"},[n("div",{staticClass:"u-search"},[n("img",{staticClass:"u-img",attrs:{src:e(381)}}),t._v(" "),n("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(n){t.search=n},expression:"search"}})],1),t._v(" "),n("div",{staticClass:"m-content"},t._l(t.children,(function(e,i){return n("a",{key:i,staticClass:"m-item",attrs:{href:e.link,target:"_blank"}},[n("span",{staticClass:"u-title"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"u-desc"},[t._v(t._s(e.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[n("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(e,i){return n("div",{key:i,staticClass:"m-item"},[n("img",{staticClass:"u-img",attrs:{src:e.icon}}),t._v(" "),n("a",{staticClass:"u-txt",attrs:{href:e.link,target:"_blank"}},[n("span",{staticClass:"u-label"},[t._v(t._s(e.label))]),t._v(" "),n("span",{staticClass:"u-desc"},[t._v(t._s(e.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);n.default=component.exports},384:function(t,n,e){},385:function(t,n,e){t.exports=e.p+"img/logo.3608031.svg"},386:function(t,n,e){"use strict";e(374)},387:function(t,n,e){"use strict";e(375)},388:function(t,n,e){"use strict";e.r(n);var c={data:function(){return{type:"",list:[{label:"首页",key:"index",href:""},{label:"产品中心",key:"production",href:""},{label:"解决方案",key:"solution",href:""},{label:"合作伙伴",key:"partner",href:""},{label:"服务支持",key:"service",href:""},{label:"联系我们",key:"contact",href:""},{label:"关于我们",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""}}},l=(e(386),e(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"c-header"},[n("div",{staticClass:"wp"},[n("img",{attrs:{src:e(385),alt:"Xcron"}}),t._v(" "),n("div",{staticClass:"m-box"},t._l(t.list,(function(e,i){return n("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:e.href}},[n("span",{staticClass:"u-txt",on:{mouseover:function(n){return t.change(e.key)}}},[t._v(" "+t._s(e.label))])])})),1)]),t._v(" "),n("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{IndexMenu:e(383).default})},389:function(t,n,e){"use strict";e.r(n);var c=e(11),l=(e(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.params,n.abrupt("return",{});case 2:case"end":return n.stop()}}),n)})))()}}),o=(e(387),e(51)),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"c-footer"},[n("div",{staticClass:"wp"},[n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(e,i){return n("a",{key:i,staticClass:"u-link",attrs:{href:e.href,target:"_blank"}},[t._v("\n                "+t._s(e.label)+"\n            ")])}))],2),t._v(" "),n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(e,i){return n("a",{key:i,staticClass:"u-link",attrs:{href:e.href,target:"_blank"}},[t._v("\n                "+t._s(e.label)+"\n            ")])}))],2),t._v(" "),n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(e,i){return n("div",{key:i,staticClass:"u-line"},[n("img",{staticClass:"u-img",attrs:{src:e.src}}),t._v(" "),n("div",{staticClass:"u-txt"},[n("span",[t._v(t._s(e.label))]),t._v(" "),e.desc?n("span",[t._v(t._s(e.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),n("span",[t._v("咨询热线：")]),t._v(" "),n("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),n("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),n("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),n("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-item m-code"},[n("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),n("span",[t._v("随时了解最新资讯")]),t._v(" "),n("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);n.default=component.exports},390:function(t,n,e){"use strict";e(376)},391:function(t,n,e){"use strict";e.r(n);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(e(390),e(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-banner"},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),n("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);n.default=component.exports},392:function(t,n,e){"use strict";e(377)},393:function(t,n,e){"use strict";e.r(n);e(17),e(40);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},data:function(){return{}},methods:{function1:function(){this.pmDotCon.forEach((function(t,i){t.index=i}))}},mounted:function(){this.function1()}},l=(e(392),e(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),n("div",{staticClass:"m-tabs"},t._l(t.pmDotCon,(function(e,i){return n("div",{key:i,staticClass:"m-item",class:e.index%2==0?"pic-r":"pic-l"},[n("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(e.img,")")}),t._v(" "),n("div",{staticClass:"u-con"},[n("span",{staticClass:"u-title"},[n("span",[t._v(t._s(e.title))])]),t._v(" "),n("span",{staticClass:"u-desc"},[t._v(t._s(e.desc))])])])})),0)])])}),[],!1,null,null,null);n.default=component.exports},394:function(t,n,e){},395:function(t,n,e){"use strict";e(384)},396:function(t,n,e){"use strict";e.r(n);var c={props:{pmScene:Object},data:function(){return{index:0}},computed:{children:function(){return this.pmScene.list[this.index].children}},methods:{change:function(i){this.index=i}}},l=(e(395),e(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-scene",class:t.pmScene.sceneClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pmScene.til))]),t._v(" "),n("div",{staticClass:"m-tabs"},t._l(t.pmScene.list,(function(e,i){return n("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(n){return t.change(i)}}},[n("span",{staticClass:"u-label"},[t._v(t._s(e.label))])])})),0),t._v(" "),t.pmScene.isShow?n("div",{staticClass:"m-Scontent"},[n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.children.src,")")}),t._v(" "),n("span",{staticClass:"u-title"},[t._v(t._s(t.children.title))]),t._v(" "),n("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(e,i){return n("p",{key:i,staticClass:"u-tag"},[t._v(t._s(e))])})):t._e()],2)])]):n("div",{staticClass:"m-Scontent"},[n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.children.src,")")}),t._v(" "),n("p",{staticClass:"u-title"},[t._v("\n                    "+t._s(t.children.title)),n("span",{staticClass:"u-titletag"},[t._v(t._s(t.children.titletag))])]),t._v(" "),n("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(e,i){return n("p",{key:i,staticClass:"u-tag"},[n("b",[t._v(t._s(e.tagTil))]),t._v("\n                            "+t._s(e.tagCon)+"\n                        ")])})):t._e()],2)])])])])}),[],!1,null,null,null);n.default=component.exports},397:function(t,n,e){"use strict";e(394)},398:function(t,n,e){"use strict";e.r(n);var c={props:{pAboutBCS:Array,pAboutBCSTil:String,pAboutBCSClass:String},data:function(){return{}},methods:{}},l=(e(397),e(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-aboutBCS",class:t.pAboutBCSClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pAboutBCSTil))]),t._v(" "),n("div",{staticClass:"m-bcs"},t._l(t.pAboutBCS,(function(e,c){return n("p",{key:c},[n("span",[t._v(t._s(e.til))]),t._v(" "),n("span",{staticClass:"tags"},[t._v(t._s(e.desc))])])})),0)])])}),[],!1,null,null,null);n.default=component.exports},403:function(t,n,e){},406:function(t,n,e){"use strict";e(403)},412:function(t,n,e){"use strict";e.r(n);var c={props:{pmPInfoTil:String,pmPInfoImg:String},data:function(){return{}},methods:{}},l=(e(406),e(51)),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-pInfo"},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.pmPInfoTil))]),t._v(" "),n("div",{staticClass:"infoImg"},[n("img",{attrs:{src:t.pmPInfoImg,alt:""}})])])])}),[],!1,null,null,null);n.default=component.exports},423:function(t,n,e){},453:function(t,n,e){"use strict";e(423)},477:function(t,n,e){"use strict";e.r(n);var c=e(393),l=e(391),o=e(398),r=e(412),d=e(396),m={name:"products-EBCS",data:function(){return{pmBanner:{title:"裸金属服务器",desc:"裸金属服务器（Bare Metal Server）为您和您的企业提供专属的云上物理服务器，具备传统物理服务器高性能的同时，兼具云上高安全可靠、灵活快速发放等特点，助力企业在数据库、大数据、容器、高性能计算、AI等场景关键业务云上创新。"},pAboutBCSTil:"了解裸金属服务器",pAboutBCSClass:"m-p-ECS",pAboutBCS:[{til:"性能卓越",desc:"零虚拟化开销，性能无损，支持高带宽、低时延云存储、云网络"},{til:"高效部署",desc:"支持分钟级资源快速发放，自助式资源生命周期管理和运维"},{til:"安全可靠",desc:"资源用户专属，支持VPC、安全组隔离、主机安全，云磁盘、硬盘备份恢复等"},{til:"快速集成",desc:"支持云服务和解决方案快速集成，加速业务云化上线效率"}],pmDotConTil:"产品优势",pmDotConClass:"ecs-dotcon",pmDotCon:[{title:"用更优的成本，享更多的服务",desc:"• 裸金属服务器 \n只需支付裸金属实例费用，无需购买和安装任何软硬件，简化运维操作，无缝对接各类公有云服务 \n• 传统物理服务器 \n服务器、系统、数据库等软硬件费用 + 机房托管费用 + 运维操作成本",img:"/images/products/productsBMS/01.jpeg"},{title:"分钟级快速部署，自助式运维体验",desc:"• 支持分钟级资源快速发放，按需申请，不受硬件资源约束，满足租户的资源弹性和快速部署需求  \n• 基于统一console控制台、开放API和SDK，支持自助式资源生命周期管理和运维",img:"/images/products/productsBMS/02.jpeg"},{title:"云上安全防护，保障企业数据安全",desc:"• 免费提供DDoS防护、木马查杀、防暴力破解等服务，可轻松实现多用户对多服务器的访问控制 \n• 裸金属服务器是用户专属的计算资源，支持VPC、安全组隔离、主机安全能力；满足企业数据安全和监管的安全和可靠性诉求",img:"/images/products/productsBMS/03.jpeg"},{title:"云上高可靠存储，为企业数据保驾护航",desc:"• 采用云磁盘作为数据持久化，支持服务器重建，整体可用性、可靠性高于传统服务器 \n• 支持在线对裸金属服务器进行云硬盘挂载、卸载，满足用户对弹性存储的诉求；同时业界独家支持共享卷，更好支持集群场景应用 \n• 支持云磁盘作为系统盘和数据盘、硬盘备份恢复能力",img:"/images/products/productsBMS/04.jpeg"},{title:"云上升级换代，时刻保持技术领先",desc:"• 云擎天架构加持，无虚拟化开销和性能损失，100%释放算力资源 \n• 深度定制化硬件，尽享云上硬件红利 \n• 业界独家支持共享云存储，更好满足集群应用需求 \n• 资源服务遍布全球，助力企业业务全球快速扩展",img:"/images/products/productsBMS/05.jpeg"}],pmPInfoTil:"擎天架构，为裸金属提供业界领先技术支撑",pmPInfoImg:"/images/products/productsBMS/bg.png",pmScene:{products:0,til:"应用场景",isShow:!1,sceneClass:"m-Bms-scene",list:[{label:"核心数据库",children:{title:"企业核心数据库场景",titletag:"满足核心数据库对性能和安全的要求，云BMS提供多种规格的服务器，支持自动化挂载共享云硬盘。",src:"/images/products/productsBMS/01.svg",tag:[{tagTil:"· 集群部署",tagCon:"多台主机同时绑定云硬盘，支持集群应用部署"},{tagTil:"· 大容量",tagCon:"可挂载多块云硬盘，单盘最大32TB, 弹性扩容，按需计费"},{tagTil:"· 高可靠",tagCon:"三副本备份，数据持久性达99.9999999%，保障数据安全可靠"}]}},{label:"高性能计算",children:{title:"高性能计算场景",titletag:"针对高计算，高吞吐的场景特点，BMS支持最新Intel CPU的计算实例，结合100G网络，带来低时延的性能体验",src:"/images/products/productsBMS/02.svg",tag:[{tagTil:"· 低时延",tagCon:"100G网络自动化、安全隔离，支持微秒级时延"},{tagTil:"· 高性能",tagCon:"支持Intel最新CPU，性能强劲"},{tagTil:"· 易扩展",tagCon:"支持开放API，便于生态集成"}]}},{label:"大数据",children:{title:"大数据存储与分析场景",titletag:"大数据存储、分析等典型业务。支持裸金属本地存储和结合OBS服务的存算分离方案",src:"/images/products/productsBMS/03.svg",tag:[{tagTil:"· 大数据专用实例",tagCon:"BMS本地存储型D系列实例、鲲鹏通用计算KS系列实例"},{tagTil:"· 高性价比",tagCon:"支持大数据存算分离方案，计算、存储资源独立扩展"},{tagTil:"· 易用性",tagCon:"支持分钟级快速发放，实现业务快速部署上线"}]}}]}}},components:{pmBanner:l.default,pmDotCon:c.default,pAboutBCS:o.default,pmPInfo:r.default,pmScene:d.default}},v=(e(453),e(51)),component=Object(v.a)(m,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"p-products"},[n("common-header"),t._v(" "),n("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),n("products-pAboutBCS",{attrs:{pAboutBCS:t.pAboutBCS,pAboutBCSTil:t.pAboutBCSTil,pAboutBCSClass:t.pAboutBCSClass}}),t._v(" "),n("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass,pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),n("products-pmPInfo",{attrs:{pmPInfoTil:t.pmPInfoTil,pmPInfoImg:t.pmPInfoImg}}),t._v(" "),n("products-pmScene",{attrs:{pmScene:t.pmScene}}),t._v(" "),n("common-footer")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CommonHeader:e(388).default,CommonFooter:e(389).default})}}]);