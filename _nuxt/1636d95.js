(window.webpackJsonp=window.webpackJsonp||[]).push([[46,3,4,6,12,14,15,17],{374:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),r=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return r(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),r=n(23),o=n(13),l=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var m=o(r(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(o(c),l,"&quot;")+'"'),v+">"+m+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){"use strict";var c=n(2),r=n(382).trim;c({target:"String",proto:!0,forced:n(383)("trim")},{trim:function(){return r(this)}})},382:function(t,e,n){var c=n(4),r=n(23),o=n(13),l=n(374),d=c("".replace),m="["+l+"]",v=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),_=function(t){return function(e){var n=o(r(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},383:function(t,e,n){var c=n(90).PROPER,r=n(3),o=n(374);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||c&&o[t].name!==t}))}},384:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},385:function(t,e,n){"use strict";n(375)},386:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(381),n(378),n(17),n(131),n(52),n(75),n(91);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png",link:"/programme/new_retail"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png",link:"/programme/operators"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png",link:"/programme/government"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png",link:"/programme/finance"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png",link:"/programme/cloud"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png",link:"/programme/media"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨交通物流",icon:"/images/index/solution/icon-7.png",link:"/programme/other"}]}},computed:{children:function(){var t=this,e=this.production,n=e.reduce((function(t,e){return t.concat(e.children)}),[]);return this.search?n.filter((function(e){return e.title.includes(t.search)})):e[this.index].children}},methods:{change:function(i){this.index=i}}},r=(n(385),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(384)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"children.length"}],staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",class:{"is-search":t.search},attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.search,expression:"!search"}],staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.children.length,expression:"!children.length"}],staticClass:"m-empty"},[t._v("\n                    没找到结果，请重新输入\n                ")])])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},388:function(t,e,n){"use strict";n(376)},389:function(t,e,n){"use strict";n(377)},390:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:"/"},{label:"解决方案",class:"active",key:"solution",href:"/"},{label:"合作伙伴",class:"active",key:"partner",href:"/"},{label:"服务支持",class:"active",key:"service",href:"/"},{label:"联系我们",class:"active",key:"contact",href:"/"},{label:"关于我们",class:"active",key:"about",href:"/"}]}},computed:{activeIndex:function(){return this.$store.state.activeIndex}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.$store.commit("changeMenuIndex",t)},clean:function(){this.type=""}}},r=(n(388),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(387),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label)+"\n                ")])])})),1)],1),t._v(" "),e("div",{on:{mouseleave:t.clean}},[e("index-menu",{attrs:{type:t.type}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(386).default})},391:function(t,e,n){"use strict";n.r(e);var c=n(11),r=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),o=(n(389),n(51)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone",staticStyle:{background:"url('/images/index/footer/phone.png') no-repeat left center"}},[t._v("\n                025-86702988\n            ")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},392:function(t,e,n){},393:function(t,e,n){},395:function(t,e,n){"use strict";n(392)},396:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},r=(n(395),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n(393)},398:function(t,e,n){"use strict";n.r(e);n(53);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},computed:{newData:function(){return this.pmDotCon.map((function(t,i){return t.index=i+1,t}))}}},r=(n(397),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.newData,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:n.index%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){},403:function(t,e,n){"use strict";n(399)},404:function(t,e,n){"use strict";n.r(e);var c={props:{pAboutBCS:Array,pAboutBCSTil:String,pAboutBCSClass:String},data:function(){return{}},methods:{}},r=(n(403),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-aboutBCS",class:t.pAboutBCSClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pAboutBCSTil))]),t._v(" "),e("div",{staticClass:"m-bcs"},t._l(t.pAboutBCS,(function(n,c){return e("p",{key:c},[e("span",[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"tags"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){},434:function(t,e,n){"use strict";n(420)},445:function(t,e,n){"use strict";n.r(e);var c={props:{pmPInfoTil:String,pmPInfoImg:String},data:function(){return{}},methods:{}},r=(n(434),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-pInfo"},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmPInfoTil))]),t._v(" "),e("div",{staticClass:"infoImg",style:"backgroundImage: url(".concat(t.pmPInfoImg,")")})])])}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,n){},516:function(t,e,n){"use strict";n(469)},621:function(t,e,n){"use strict";n.r(e);var c=n(398),r=n(396),o=n(445),l=n(404),d={name:"products-ECS",data:function(){return{pmBanner:{title:"弹性云服务器",desc:"弹性云服务器（Elastic Cloud Server, ECS）是一种云上可随时自助获取、可弹性伸缩的计算服务，可帮助您打造安全、可靠、灵活、高效的应用环境。",img:"/images/products/products_ecs/b1.jpg"},pAboutBCSTil:"了解弹性云服务器",pAboutBCSClass:"m-p-ECS",pAboutBCS:[{til:"30+年",desc:"注入自身在ICT基础设施领域30多年的技术、能力、经验积累"},{til:"多样性算力",desc:"支持X86、鲲鹏、昇腾、异构四大类型算力，提供更优算力选择"},{til:"200+",desc:"支持200+企业应用场景，满足各类业务的上云需求"},{til:"80+",desc:"80+全球安全合规认证，打造中立、安全、可信的云服务"}],pmDotConTil:"产品优势",pmDotConClass:"ecs-dotcon",pmDotCon:[{title:"弹性灵活，助您低成本轻松上云",desc:"- 用户可通过Web页面或开放API，同时管理一个、数百个、甚至数千个弹性云服务器实例 \n- 用户可根据业务需求自行定义弹性伸缩策略，通过可视化控制台配置定时或周期性的监控策略，动态调整弹性云服务器实例，满足业务需求的同时，减少资源投入 \n- 提供按需、包周期、竞价等多种计费模式，满足各类业务使用需求",img:"/images/products/products_ecs/01.jpeg",imgCss:"pic-r"},{title:"性能强劲，为企业提供旗舰级产品",desc:"- 最大提供208vCPU，4096G内存，引领业界顶级算力 \n- 业界首推千万级PPS转发实例，单实例最大内网带宽可达44Gbps \n- 千台弹性云服务器分钟级极速发放",img:"/images/products/products_ecs/02.jpeg",imgCss:"pic-l"},{title:"多规格类型，满足不同企业的个性化需求",desc:"- 提供X86、鲲鹏、昇腾、异构等多种类型的弹性云服务器 \n- 提供公共、私有、共享三种镜像，还可以使用镜像市场提供的包含各类软件的优质第三方镜像 \n- 所有弹性云服务器和镜像可一键部署，无需配置，满足用户建站、应用开发、可视化管理等个性化需求",img:"/images/products/products_ecs/03.jpeg",imgCss:"pic-r"},{title:"数据可靠，提供坚实的基础数据平台",desc:"- 数据持久性高达99.9999999%，保证数据安全可靠，保护您的业务免受故障影响 \n- 提供极速型SSD、超高IO、通用型SSD、高IO等多种性能规格的云硬盘，可根据业务需要灵活选择不同规格 \n- 支持共享云硬盘、云硬盘加密、云硬盘备份、云服务器备份、快照等功能，可满足不同业务场景的需求",img:"/images/products/products_ecs/04.jpeg",imgCss:"pic-l"},{title:"多重防护，专业保护您的数据安全",desc:"- 帮助用户快速发现安全弱点和威胁，并给出最佳安全实践建议，有效减少或避免由于网络中病毒和恶意攻击带来的损失 \n- 通过专业的防DDoS设备为客户互联网应用提供精细化的抵御DDoS攻击能力 \n- 联合全球知名数字证书服务机构，为您提供的一站式安全套接层（SSL）证书和传输层安全（TLS）证书的全生命周期管理服务，实现网站的可信身份认证与安全数据传输",img:"/images/products/products_ecs/05.jpeg",imgCss:"pic-r"}],pmPInfoTil:"擎天架构加持，助力弹性云服务器更快、更稳",pmPInfoImg:"/images/products/products_ecs/bg.png",pmDotConTil01:"权威认可",pmDotConClass01:"bcsAuth",pmDotCon01:[{title:"云计算服务能力标准符合性一级证书",desc:"由中国电子工业标准化技术协会（ESA）信息技术服务分会颁发，标志着基础设施服务在规模、功能、性能、安全、人员和管理等维度全面满足工业和信息化部《云计算综合标准化体系建设指南》的最高要求。",img:"/images/products/products_ecs/01.png"},{title:"OCP与USCP运筹优化算法赛道第一名",desc:"在GECCO 2020国际会议中，擎天架构的调度算法团队同时获得OCP与USCP运筹优化算法赛道第一名，算法运行结果刷新了十个文献算例的已知最好结果。",img:"/images/products/products_ecs/02.png"},{title:"51项国际榜单纪录",desc:"擎天架构调度算法团队打破了51项由全球优化算法领域权威机构SINTEF维护的PDPTW榜单纪录，成为中国研究机构中最多纪录的保持者。",img:"/images/products/products_ecs/03.png"},{title:"可信云技术最佳实践奖",desc:"擎天架构，凭借业界领先的云基础设施技术底座，以及面向多场景的技术创新，得到可信云权威机构的高度认可，荣获2020-2021年度“可信云技术最佳实践奖”。",img:"/images/products/products_ecs/04.png"},{title:"下一代云计算技术创新奖",desc:"中国电子技术标准化研究院主办的“第九届中国云计算标准和应用大会”，鲲鹏云服务全系列计算实例（鲲鹏ECS/BMS），荣获主委会高度认可，并颁发荣誉证书。",img:"/images/products/products_ecs/05.png"},{title:"年度领先游戏云服务器",desc:"广东省游戏协会、深圳市文化市场等多家产业协会指导，游戏行业头部媒体游戏陀螺、陀螺电竞等联合主办的2019未来商业生态链接大会暨第四届金陀螺奖颁奖典礼上，通用计算增强型实例C6s被评选为2019年度领先游戏云服务器。",img:"/images/products/products_ecs/06.png"}]}},components:{pmBanner:r.default,pmDotCon:c.default,pAboutBCS:l.default,pmPInfo:o.default}},m=(n(516),n(51)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pAboutBCS",{attrs:{pAboutBCS:t.pAboutBCS,pAboutBCSTil:t.pAboutBCSTil,pAboutBCSClass:t.pAboutBCSClass}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass,pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-pmPInfo",{attrs:{pmPInfoTil:t.pmPInfoTil,pmPInfoImg:t.pmPInfoImg}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass01,pmDotConTil:t.pmDotConTil01,pmDotCon:t.pmDotCon01}}),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(390).default,CommonFooter:n(391).default})}}]);