(window.webpackJsonp=window.webpackJsonp||[]).push([[54,3,4,6,23,24,25],{374:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),r=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return r(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),r=n(23),l=n(13),o=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var v=l(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(l(c),o,"&quot;")+'"'),f+">"+v+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){"use strict";var c=n(2),r=n(382).trim;c({target:"String",proto:!0,forced:n(383)("trim")},{trim:function(){return r(this)}})},382:function(t,e,n){var c=n(4),r=n(23),l=n(13),o=n(374),d=c("".replace),v="["+o+"]",f=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),_=function(t){return function(e){var n=l(r(e));return 1&t&&(n=d(n,f,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},383:function(t,e,n){var c=n(90).PROPER,r=n(3),l=n(374);t.exports=function(t){return r((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||c&&l[t].name!==t}))}},384:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},385:function(t,e,n){"use strict";n(375)},386:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(381),n(378),n(17),n(131),n(52),n(75),n(91);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等...",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png",link:"/programme/new_retail"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png",link:"/programme/operators"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png",link:"/programme/government"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png",link:"/programme/finance"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png",link:"/programme/cloud"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png",link:"/programme/media"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨交通物流",icon:"/images/index/solution/icon-7.png",link:"/programme/other"}]}},computed:{children:function(){var t=this,e=this.production,n=e.reduce((function(t,e){return t.concat(e.children)}),[]);return this.search?n.filter((function(e){return e.title.includes(t.search)})):e[this.index].children}},methods:{change:function(i){this.index=i}}},r=(n(385),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(384)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"children.length"}],staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",class:{"is-search":t.search},attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.search,expression:"!search"}],staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.children.length,expression:"!children.length"}],staticClass:"m-empty"},[t._v("\n                    没找到结果，请重新输入\n                ")])])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},388:function(t,e,n){"use strict";n(376)},389:function(t,e,n){"use strict";n(377)},390:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:"/"},{label:"解决方案",class:"active",key:"solution",href:"/"},{label:"合作伙伴",class:"active",key:"partner",href:"/"},{label:"服务支持",class:"active",key:"service",href:"/"},{label:"联系我们",class:"active",key:"contact",href:"/"},{label:"关于我们",class:"active",key:"about",href:"/"}]}},computed:{activeIndex:function(){return this.$store.state.activeIndex}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.$store.commit("changeMenuIndex",t)},clean:function(){this.type=""}}},r=(n(388),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(387),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label)+"\n                ")])])})),1)],1),t._v(" "),e("div",{on:{mouseleave:t.clean}},[e("index-menu",{attrs:{type:t.type}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(386).default})},391:function(t,e,n){"use strict";n.r(e);var c=n(11),r=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),l=(n(389),n(51)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone",staticStyle:{background:"url('/images/index/footer/phone.png') no-repeat left center"}},[t._v("\n                025-86702988\n            ")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},402:function(t,e,n){},406:function(t,e,n){},408:function(t,e,n){},414:function(t,e,n){"use strict";n(402)},415:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},type:function(){return this.data.type||""}}},r=(n(414),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-programme-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])])])}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,n){"use strict";n(406)},423:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""},direction:function(){return this.data.direction?this.data.direction:"top"}},methods:{style:function(t){var e={};return t.bgImg&&(e.backgroundImage="url(".concat(t.bgImg,")")),t.position&&(e.backgroundPosition="center ".concat(t.position)),e}}},r=(n(418),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-picture-text",class:"u-".concat(t.direction)},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-list wp"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",class:t.type?"u-".concat(t.type):"",style:t.style(n)},[n.img?e("img",{staticClass:"u-img",attrs:{src:n.img}}):t._e(),t._v(" "),e("div",{staticClass:"m-text"},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])])})),0)])}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";n(408)},431:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""}},methods:{background:function(t){if(t)return t.background?{backgroundColor:"#f8f8f8"}:""}}},r=(n(424),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-icon-text",style:t.background(t.data)},[e("h2",[t._v(t._s(t.title))]),t._v(" "),t.desc?e("div",{staticClass:"m-desc wp"},[e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])]):t._e(),t._v(" "),e("div",{staticClass:"m-list wp",class:t.type?"u-".concat(t.type):""},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[n.icon?e("img",{staticClass:"u-img",attrs:{src:n.icon}}):t._e(),t._v(" "),e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},448:function(t,e,n){t.exports=n.p+"img/2-1.9183fbe.svg"},478:function(t,e,n){},525:function(t,e,n){t.exports=n.p+"img/1-1.8d75a7a.svg"},526:function(t,e,n){t.exports=n.p+"img/1-2.0f61823.svg"},527:function(t,e,n){t.exports=n.p+"img/1-3.1280790.svg"},528:function(t,e,n){t.exports=n.p+"img/1-4.deb01bb.svg"},529:function(t,e,n){t.exports=n.p+"img/3-1.b21c35b.svg"},530:function(t,e,n){t.exports=n.p+"img/3-2.8c439de.svg"},531:function(t,e,n){t.exports=n.p+"img/3-3.be5b3e0.svg"},532:function(t,e,n){"use strict";n(478)},657:function(t,e,n){"use strict";n.r(e);var header=n(415),c=n(431),r=n(423),l={components:{Header:header.default,IconText:c.default,PictureText:r.default},data:function(){return{header:{type:"cloud",title:"迁移上云解决方案",desc:"我们提供ERP系统上云一站式服务，为您完成数字化时代的企业管理工具转型。"},erp:{title:"为什么要构建云上ERP系统",desc:"随着移动互联网、云计算、大数据等新一代技术的发展，ERP系统向云端转型成为必然，为企业客户提供灵活、方便、低成本的ERP系统上云解决方案",list:[{icon:n(525),title:"成本降50%",desc:"只需按照实际业务量按需扩容，节省投入成本超过50%"},{icon:n(526),title:"网络更稳定",desc:"采用动态BGP有效避免因单运营商线路故障导致访问中断问题"},{icon:n(527),title:"最新技术",desc:"企业可直接运用5G、AI等最新技术实现业务突破"},{icon:n(528),title:"安全容灾",desc:"提供专业的云上容灾方案，企业无需自建容灾机房实现安全容"}]},advantages:{title:"方案优势",type:"mini",list:[{bgImg:n(448),title:"多年ICT经验的云供应商",desc:"将多年在ICT领域的技术积累开发给客户，致力于提供稳定可靠、安全可信、持续创新的云服务。"},{bgImg:n(448),title:"各行各业成熟实践经验",desc:"我们具备互联网、制造、金融、农业等16大行业的实践经验，确保能切实为您的公司创造价值。"},{bgImg:n(448),title:"携手顶尖合作伙伴",desc:"与用友、SAP、金蝶等业界顶尖合作伙伴一道，为您提供高质量多规格的云上ERP构建方案。"},{bgImg:n(448),title:"尊重数据主权",desc:"拥有全球化合规治理经验以及业界最佳实践，为客户提供符合法律法规及业界标准要求的业务运行环境及服务。"}]},customers:{title:"客户案例",type:"icon",list:[{bgImg:n(529),position:"30px",title:"专属ERP上云解决方案",desc:"哈药集团有限公司为中外合资企业。哈药集团已经成长为全国医药行业的首家上市公司，全国排名前十的制药行业企业，年销售额超过百亿。"},{bgImg:n(530),position:"30px",title:"混合云企业ERP管理系统",desc:"湖北良品铺子食品工业有限公司是一家致力于休闲食品研发、零售服务的专业品牌连锁运营公司。"},{bgImg:n(531),position:"30px",title:"让工业机器行走在云端",desc:"拓斯达成立于2007年，定位于为制造业客户提供生产线装备，早期在注塑机设备的生产和销售上获得成功，后来专注于工业机器人等智能装备的研发销售。"}]}}}},o=(n(532),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-programme"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-programme-content"},[e("Header",{attrs:{data:t.header}}),t._v(" "),e("IconText",{attrs:{data:t.erp}}),t._v(" "),e("PictureText",{attrs:{data:t.advantages}}),t._v(" "),e("PictureText",{attrs:{data:t.customers}})],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(390).default,CommonFooter:n(391).default})}}]);