(window.webpackJsonp=window.webpackJsonp||[]).push([[38,3,4,6,12,14,15,17,18],{374:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),l=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),l=n(23),r=n(13),o=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var m=r(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(r(c),o,"&quot;")+'"'),v+">"+m+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){"use strict";var c=n(2),l=n(382).trim;c({target:"String",proto:!0,forced:n(383)("trim")},{trim:function(){return l(this)}})},382:function(t,e,n){var c=n(4),l=n(23),r=n(13),o=n(374),d=c("".replace),m="["+o+"]",v=RegExp("^"+m+m+"*"),_=RegExp(m+m+"*$"),f=function(t){return function(e){var n=r(l(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,_,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},383:function(t,e,n){var c=n(90).PROPER,l=n(3),r=n(374);t.exports=function(t){return l((function(){return!!r[t]()||"​᠎"!=="​᠎"[t]()||c&&r[t].name!==t}))}},384:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},385:function(t,e,n){"use strict";n(375)},386:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(381),n(378),n(17),n(131),n(52),n(75),n(91);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等...",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png",link:"/programme/new_retail"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png",link:"/programme/operators"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png",link:"/programme/government"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png",link:"/programme/finance"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png",link:"/programme/cloud"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png",link:"/programme/media"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨交通物流",icon:"/images/index/solution/icon-7.png",link:"/programme/other?key=energy"}]}},computed:{children:function(){var t=this,e=this.production,n=e.reduce((function(t,e){return t.concat(e.children)}),[]);return this.search?n.filter((function(e){return e.title.includes(t.search)})):e[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(385),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(384)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"children.length"}],staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",class:{"is-search":t.search},attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.search,expression:"!search"}],staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.children.length,expression:"!children.length"}],staticClass:"m-empty"},[t._v("没找到结果，请重新输入")])])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},388:function(t,e,n){"use strict";n(376)},389:function(t,e,n){"use strict";n(377)},390:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:"/"},{label:"解决方案",class:"active",key:"solution",href:"/"},{label:"合作伙伴",class:"active",key:"partner",href:"/"},{label:"服务支持",class:"active",key:"service",href:"/"},{label:"联系我们",class:"active",key:"contact",href:"/"},{label:"关于我们",class:"active",key:"about",href:"/"}]}},computed:{activeIndex:function(){return this.$store.state.activeIndex}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.$store.commit("changeMenuIndex",t)},clean:function(){this.type=""}}},l=(n(388),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(387),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label)+"\n                ")])])})),1)],1),t._v(" "),e("div",{on:{mouseleave:t.clean}},[e("index-menu",{attrs:{type:t.type}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(386).default})},391:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),r=(n(389),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone",staticStyle:{background:"url('/images/index/footer/phone.png') no-repeat left center"}},[t._v("\n                025-86702988\n            ")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},392:function(t,e,n){},393:function(t,e,n){},394:function(t,e,n){},395:function(t,e,n){"use strict";n(392)},396:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(n(395),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n(393)},398:function(t,e,n){"use strict";n.r(e);n(53);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},computed:{newData:function(){return this.pmDotCon.map((function(t,i){return t.index=i+1,t}))}}},l=(n(397),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.newData,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:n.index%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){},400:function(t,e,n){"use strict";n(394)},401:function(t,e,n){"use strict";n.r(e);var c={props:{pmScene:Object},data:function(){return{index:0}},computed:{children:function(){return this.pmScene.list[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(400),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-scene",class:t.pmScene.sceneClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmScene.til))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmScene.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0),t._v(" "),t.pmScene.isShow?e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img"},[e("img",{attrs:{src:t.children.src}})]),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[t._v(t._s(t.children.title))]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[t._v(t._s(n))])})):t._e()],2)])])]):e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img"},[e("img",{attrs:{src:t.children.src}})]),t._v(" "),e("div",{staticClass:"u-con"},[e("p",{staticClass:"u-title"},[t._v("\n                        "+t._s(t.children.title)),e("span",{staticClass:"u-titletag"},[t._v(t._s(t.children.titletag))])]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[e("b",[t._v(t._s(n.tagTil))]),t._v("\n                                "+t._s(n.tagCon)+"\n                            ")])})):t._e()],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n(399)},404:function(t,e,n){"use strict";n.r(e);var c={props:{pAboutBCS:Array,pAboutBCSTil:String,pAboutBCSClass:String},data:function(){return{}},methods:{}},l=(n(403),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-aboutBCS",class:t.pAboutBCSClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pAboutBCSTil))]),t._v(" "),e("div",{staticClass:"m-bcs"},t._l(t.pAboutBCS,(function(n,c){return e("p",{key:c},[e("span",[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"tags"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){},440:function(t,e,n){"use strict";n(429)},448:function(t,e,n){"use strict";n.r(e);var c={props:{pmPInfoTil:String,pmPInfoImg:String},data:function(){return{}},methods:{}},l=(n(440),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-pInfo"},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmPInfoTil))]),t._v(" "),e("div",{staticClass:"infoImg",style:"backgroundImage: url(".concat(t.pmPInfoImg,")")})])])}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,n){},508:function(t,e,n){"use strict";n(461)},645:function(t,e,n){"use strict";n.r(e);var c=n(398),l=n(396),r=n(404),o=n(448),d=n(401),m={name:"products-BMS",data:function(){return{pmBanner:{title:"裸金属服务器",desc:"裸金属服务器（Bare Metal Server）为您和您的企业提供专属的云上物理服务器，具备传统物理服务器高性能的同时，兼具云上高安全可靠、灵活快速发放等特点，助力企业在数据库、大数据、容器、高性能计算、AI等场景关键业务云上创新。",img:"/images/products/products_bms/b1.jpg"},pAboutBCSTil:"了解裸金属服务器",pAboutBCSClass:"m-p-ECS",pAboutBCS:[{til:"性能卓越",desc:"零虚拟化开销，性能无损，支持高带宽、低时延云存储、云网络"},{til:"高效部署",desc:"支持分钟级资源快速发放，自助式资源生命周期管理和运维"},{til:"安全可靠",desc:"资源用户专属，支持VPC、安全组隔离、主机安全，云磁盘、硬盘备份恢复等"},{til:"快速集成",desc:"支持云服务和解决方案快速集成，加速业务云化上线效率"}],pmDotConTil:"产品优势",pmDotConClass:"ecs-dotcon",pmDotCon:[{title:"用更优的成本，享更多的服务",desc:"• 裸金属服务器 \n只需支付裸金属实例费用，无需购买和安装任何软硬件，简化运维操作，无缝对接各类公有云服务 \n• 传统物理服务器 \n服务器、系统、数据库等软硬件费用 + 机房托管费用 + 运维操作成本",img:"/images/products/products_bms/01.jpeg",imgCss:"pic-l"},{title:"分钟级快速部署，自助式运维体验",desc:"• 支持分钟级资源快速发放，按需申请，不受硬件资源约束，满足租户的资源弹性和快速部署需求  \n• 基于统一console控制台、开放API和SDK，支持自助式资源生命周期管理和运维",img:"/images/products/products_bms/02.jpeg",imgCss:"pic-r"},{title:"云上安全防护，保障企业数据安全",desc:"• 免费提供DDoS防护、木马查杀、防暴力破解等服务，可轻松实现多用户对多服务器的访问控制 \n• 裸金属服务器是用户专属的计算资源，支持VPC、安全组隔离、主机安全能力；满足企业数据安全和监管的安全和可靠性诉求",img:"/images/products/products_bms/03.jpeg",imgCss:"pic-l"},{title:"云上高可靠存储，为企业数据保驾护航",desc:"• 采用云磁盘作为数据持久化，支持服务器重建，整体可用性、可靠性高于传统服务器 \n• 支持在线对裸金属服务器进行云硬盘挂载、卸载，满足用户对弹性存储的诉求；同时业界独家支持共享卷，更好支持集群场景应用 \n• 支持云磁盘作为系统盘和数据盘、硬盘备份恢复能力",img:"/images/products/products_bms/04.jpeg",imgCss:"pic-r"},{title:"云上升级换代，时刻保持技术领先",desc:"• 云擎天架构加持，无虚拟化开销和性能损失，100%释放算力资源 \n• 深度定制化硬件，尽享云上硬件红利 \n• 业界独家支持共享云存储，更好满足集群应用需求 \n• 资源服务遍布全球，助力企业业务全球快速扩展",img:"/images/products/products_bms/05.jpeg",imgCss:"pic-l"}],pmPInfoTil:"擎天架构，为裸金属提供业界领先技术支撑",pmPInfoImg:"/images/products/products_bms/bg.png",pmScene:{products:0,til:"应用场景",isShow:!1,sceneClass:"m-Bms-scene",list:[{label:"核心数据库",children:{title:"企业核心数据库场景",titletag:"满足核心数据库对性能和安全的要求，云BMS提供多种规格的服务器，支持自动化挂载共享云硬盘。",src:"/images/products/products_bms/01.svg",tag:[{tagTil:"· 集群部署",tagCon:"多台主机同时绑定云硬盘，支持集群应用部署"},{tagTil:"· 大容量",tagCon:"可挂载多块云硬盘，单盘最大32TB, 弹性扩容，按需计费"},{tagTil:"· 高可靠",tagCon:"三副本备份，数据持久性达99.9999999%，保障数据安全可靠"}]}},{label:"高性能计算",children:{title:"高性能计算场景",titletag:"针对高计算，高吞吐的场景特点，BMS支持最新Intel CPU的计算实例，结合100G网络，带来低时延的性能体验",src:"/images/products/products_bms/02.svg",tag:[{tagTil:"· 低时延",tagCon:"100G网络自动化、安全隔离，支持微秒级时延"},{tagTil:"· 高性能",tagCon:"支持Intel最新CPU，性能强劲"},{tagTil:"· 易扩展",tagCon:"支持开放API，便于生态集成"}]}},{label:"大数据",children:{title:"大数据存储与分析场景",titletag:"大数据存储、分析等典型业务。支持裸金属本地存储和结合OBS服务的存算分离方案",src:"/images/products/products_bms/03.svg",tag:[{tagTil:"· 大数据专用实例",tagCon:"BMS本地存储型D系列实例、鲲鹏通用计算KS系列实例"},{tagTil:"· 高性价比",tagCon:"支持大数据存算分离方案，计算、存储资源独立扩展"},{tagTil:"· 易用性",tagCon:"支持分钟级快速发放，实现业务快速部署上线"}]}}]}}},components:{pmBanner:l.default,pmDotCon:c.default,pAboutBCS:r.default,pmPInfo:o.default,pmScene:d.default}},v=(n(508),n(51)),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pAboutBCS",{attrs:{pAboutBCS:t.pAboutBCS,pAboutBCSTil:t.pAboutBCSTil,pAboutBCSClass:t.pAboutBCSClass}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass,pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-pmPInfo",{attrs:{pmPInfoTil:t.pmPInfoTil,pmPInfoImg:t.pmPInfoImg}}),t._v(" "),e("products-pmScene",{attrs:{pmScene:t.pmScene}}),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(390).default,CommonFooter:n(391).default})}}]);