(window.webpackJsonp=window.webpackJsonp||[]).push([[36,2,3,5,11,13,17,19],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),l=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),l=n(23),r=n(13),o=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var _=r(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(r(c),o,"&quot;")+'"'),v+">"+_+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},382:function(t,e,n){"use strict";n(373)},383:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(378),n(52),n(17),n(75),n(90);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){var t=this,e=this.production;return this.search?e.filter((function(e){return e.title.includes(t.search)})):e[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(382),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(381)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,n){},385:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},386:function(t,e,n){"use strict";n(374)},387:function(t,e,n){"use strict";n(375)},388:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:"/"},{label:"解决方案",class:"active",key:"solution",href:"/"},{label:"合作伙伴",class:"active",key:"partner",href:"/"},{label:"服务支持",class:"active",key:"service",href:"/"},{label:"联系我们",class:"active",key:"contact",href:"/"},{label:"关于我们",class:"active",key:"about",href:"/"}]}},computed:{activeIndex:function(){return this.$store.state.activeIndex}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.$store.commit("changeMenuIndex",t)},clean:function(){this.type=""}}},l=(n(386),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(385),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label)+"\n                ")])])})),1)],1),t._v(" "),e("div",{on:{mouseleave:t.clean}},[e("index-menu",{attrs:{type:t.type}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(383).default})},389:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),r=(n(387),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone",staticStyle:{background:"url('/images/index/footer/phone.png') no-repeat left center"}},[t._v("\n                025-86702988\n            ")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n(376)},391:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(n(390),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){},395:function(t,e,n){"use strict";n(384)},396:function(t,e,n){"use strict";n.r(e);var c={props:{pmScene:Object},data:function(){return{index:0}},computed:{children:function(){return this.pmScene.list[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(395),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-scene",class:t.pmScene.sceneClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmScene.til))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmScene.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0),t._v(" "),t.pmScene.isShow?e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img"},[e("img",{attrs:{src:t.children.src}})]),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[t._v(t._s(t.children.title))]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[t._v(t._s(n))])})):t._e()],2)])])]):e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img"},[e("img",{attrs:{src:t.children.src}})]),t._v(" "),e("div",{staticClass:"u-con"},[e("p",{staticClass:"u-title"},[t._v("\n                        "+t._s(t.children.title)),e("span",{staticClass:"u-titletag"},[t._v(t._s(t.children.titletag))])]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[e("b",[t._v(t._s(n.tagTil))]),t._v("\n                                "+t._s(n.tagCon)+"\n                            ")])})):t._e()],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n(394)},398:function(t,e,n){"use strict";n.r(e);var c={props:{pAboutBCS:Array,pAboutBCSTil:String,pAboutBCSClass:String},data:function(){return{}},methods:{}},l=(n(397),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-aboutBCS",class:t.pAboutBCSClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pAboutBCSTil))]),t._v(" "),e("div",{staticClass:"m-bcs"},t._l(t.pAboutBCS,(function(n,c){return e("p",{key:c},[e("span",[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"tags"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){},404:function(t,e,n){"use strict";n(401)},405:function(t,e,n){"use strict";n.r(e);var c={props:{pmSceneUseS:Object,pmSceneUseSTil:String,pmSceneUseSTrue:Boolean,pmSceneUseS01:Object},data:function(){return{}},computed:{},methods:{}},l=(n(404),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-SceneuseS"},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmSceneUseSTil))]),t._v(" "),e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item",class:t.pmSceneUseS.imgR},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.pmSceneUseS.imgSrc,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",{staticClass:"u-bold"},[t._v(t._s(t.pmSceneUseS.title))]),t._v(" "),t.pmSceneUseS.titletag?e("span",[t._v(" "+t._s(t.pmSceneUseS.titletag))]):t._e()]),t._v(" "),t._l(t.pmSceneUseS.list,(function(n,c){return e("div",{key:c,staticClass:"u-content"},[e("span",{staticClass:"u-til"},[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])}))],2)]),t._v(" "),t.pmSceneUseSTrue?e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.pmSceneUseS01.imgSrc,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",{staticClass:"u-bold"},[t._v(t._s(t.pmSceneUseS01.title))]),t._v("\n                    "+t._s(t.pmSceneUseS01.titletag)+"\n                ")]),t._v(" "),t._l(t.pmSceneUseS01.list,(function(n,c){return e("div",{key:c,staticClass:"u-content"},[e("span",{staticClass:"u-til"},[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])}))],2)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,n){},463:function(t,e,n){"use strict";n(433)},494:function(t,e,n){"use strict";n.r(e);var c=n(391),l=n(398),r=n(405),o=n(396),d={name:"products-HSS",data:function(){return{pmBanner:{title:"企业主机安全",desc:"企业主机安全（Host Security Service）是服务器贴身安全管家，通过资产管理、漏洞管理、基线检查、入侵检测、程序运行认证、文件完整性校验，安全运营、网页防篡改等功能，帮助企业更方便地管理主机安全风险，实时发现黑客入侵行为，以及满足等保合规要求。",img:"/images/products/products_hss/b1.jpg"},pAboutBCSTil:"了解企业主机安全",pAboutBCS:[{til:"减少被攻击面",desc:"资产管理、基线检查、漏洞管理三大功能及时发现主机风险，有效减少90%被攻击面"},{til:"防暴力破解",desc:"账户破解防护+双因子认证，实现100%暴力破解防护"},{til:"勒索病毒防治",desc:"通过安全体检，主动防御和文件备份功能，有效进行勒索病毒防治"},{til:"网页防篡改",desc:"支持动态、静态网页防篡改，保障重要系统的网站信息不被恶意篡改"}],pmScene:{index:0,til:"应用场景",isShow:!1,sceneClass:"m-Bms-scene",list:[{label:"满足等保合规",children:{title:"等保测评要求",titletag:"《网络安全法》第二十一条：国家实行网络安全等级保护制度。网络安全等级保护制度中对主机的入侵防范，恶意代码防范，漏洞扫描，都有明确要求。\n等保备案需要有企业主机安全的购买和使用记录，等保测评时需要测试企业的主机安全防护能力是否满足要求。",src:"/images/products/products_hss/s1.svg",tag:[{tagTil:"· 满足入侵防范条款",tagCon:"企业主机安全的入侵检测，漏洞管理功能满足等保的主机入侵防范条款。"},{tagTil:"· 满足恶意代码防范条款",tagCon:"企业主机安全的恶意程序检测，漏洞管理功能满足等保的恶意代码防范条款。"}]}},{label:"统一安全管理",children:{title:"统一安全管理",titletag:"提供统一的主机安全管理功能，帮助用户更方便地查看与处置云主机的安全事件，以及配置下发安全策，降低安全风险与管理运营成本。",src:"/images/products/products_hss/s2.svg",tag:[{tagTil:"· 跨云部署，统一管理",tagCon:"客户端支持混合云、私有云，其他云跨多平台部署，管理员统一进行安全管理与运营。"},{tagTil:"· 多操作系统",tagCon:"支持支持在Windows、Linux、Ubuntu、Debian、EulerOS:等多种操作系统的物理/虚拟主机上部署。"},{tagTil:"· 统一灵活的策略下发",tagCon:"旗舰版支持自定义检测策略配置与下发，能够为每组或每台主机灵活配置策略，便于精细化安全运营。"}]}},{label:"主动安全防御",children:{title:"主动风险预防及防御",titletag:"通过清点主机安全资产，管理主机漏洞与不安全配置，预防安全风险；通过网络、应用、文件主动防护引擎主动防御安全风险。",src:"/images/products/products_hss/s3.svg",tag:[{tagTil:"· 安全风险预防",tagCon:"识别主机的安全资产、软件漏洞以及关键配置，分析并管理其中的潜在安全风险，提前防范风险，有效减少主机90%被攻击面。"},{tagTil:"· 账户安全防护",tagCon:"通过先进快慢检测算法，全网威胁信息，双因子认证三位一体有效阻止账户暴力破解攻击；支持IP白名单配置，只允许白名单中IP登录主机。"},{tagTil:"· 应用运行认证",tagCon:"通过应用黑白名单及用户私有应用信誉库，确保主机上运行的应用程序安全可信。"},{tagTil:"· 文件完整性校",tagCon:"验提供系统关键文件变更检测及文件完整性校验，确保系统关键文件的安全可信；同时结合防篡改技术，可保证系统关键文件不被篡改。"}]}},{label:"黑客入侵检测",children:{title:"黑客入侵检测与响应",titletag:"提供主机全攻击路径检测能力，能够实时、准确地感黑客知入侵事件，并提供入侵事件的响应手段，对业务系统“零”影响，有效应对APT攻击等高级威胁。",src:"/images/products/products_hss/s4.svg",tag:[{tagTil:"· 勒索、挖矿程序查杀",tagCon:"提供病毒云查杀引擎，结合AI检测引擎，有效检出运行程序的勒索，挖矿，后门，木马等恶意程序，并提供一键隔离查杀功能。"},{tagTil:"· AI检测引擎",tagCon:"提供AI检测引擎及自研检测算法，有效提升恶意程序、网站后门（WebShell）等威胁的检出率。"},{tagTil:"· APT检测能力",tagCon:"以ATT＆CK模型为基础结合对抗APT攻击实践，提供主机全攻击路径检测能力，有效应对包括APT攻击内部的高级入侵行为。"}]}}]},pmSceneUseSTil:"重磅升级",pmSceneUseSTrue:!0,pmSceneUseS:{imgR:"imgR",title:"勒索病毒防治",imgSrc:"/images/products/products_hss/m1.png",titletag:"防勒索病毒是一个长期而持久的过程，企业主机安全 HSS升级2.0版本后，通过事前（安全体检与加固）、事中（主动防御）、事后（备份恢复）三部曲，为您防御勒索病毒的入侵，营造主机资产安全运行环境。",list:[{til:"· 事前：安全体检与加固",desc:"● 全方位检测服务器的资产、漏洞、基线、入侵风险，识别可能被勒索的高风险主机。\n● 即刻输出检测结果，让您快捷定位和处理风险。"},{til:"· 事中：主动防御",desc:"● 实时隔离查杀已知勒索病毒：通过云查杀检测并隔离查杀已知勒索病毒，防止病毒扩散蔓延。\n● 动静结合检测未知勒索病毒：通过放置动态诱饵快速检测异常加密行为，结合AI算法识别未知勒索文件，快速降低未知病毒的误报率。\n● 可信进程学习：通过机器学习完成可信进程的判定，进一步提高异常加密等进程识别能力。"},{til:"· 事后：备份恢复",desc:"● 主机安全提供定期对服务器进行备份的服务，服务器被勒索病毒入侵后，您可以通过云服务器备份进行数据恢复，降低勒索病毒给您带来的损失。"}]},pmSceneUseS01:{title:"应用防护",imgSrc:"/images/products/products_hss/m2.png",titletag:"应用防护功能旨在为运行时的应用提供安全防御。您无需修改应用程序文件，只需将探针注入到应用程序，即可为应用提供强大的安全防护能力。",list:[{til:"· 技术原理",desc:"通过动态代码注入技术在运行时将监控&保护代码（即探针）注入到应用程序的关键监控&保护点（即关键函数），探针根据预定义规则，结合通过保护点的数据、以及上下文环境（应用逻辑、配置、数据和事件流等），识别出攻击行为。"},{til:"· 实时检测",desc:"0 day漏洞检测、SQL注入、OS命令注入、XSS注入攻击、上传WebShell、反序列化输入、文件目录遍历等多种应用攻击行为。"}]}}},components:{pmBanner:c.default,pmSceneUseS:r.default,pmScene:o.default,pAboutBCS:l.default}},_=(n(463),n(51)),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pAboutBCS",{attrs:{pAboutBCSTil:t.pAboutBCSTil,pAboutBCS:t.pAboutBCS}}),t._v(" "),e("products-pmScene",{attrs:{pmScene:t.pmScene}}),t._v(" "),e("products-pmSceneUseS",{attrs:{pmSceneUseS:t.pmSceneUseS,pmSceneUseSTil:t.pmSceneUseSTil,pmSceneUseSTrue:t.pmSceneUseSTrue,pmSceneUseS01:t.pmSceneUseS01}}),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(388).default,CommonFooter:n(389).default})}}]);