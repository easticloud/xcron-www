(window.webpackJsonp=window.webpackJsonp||[]).push([[63,3,4,6,28,31],{374:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),r=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return r(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),r=n(23),l=n(13),o=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var v=l(r(t)),_="<"+e;return""!==n&&(_+=" "+n+'="'+d(l(c),o,"&quot;")+'"'),_+">"+v+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){"use strict";var c=n(2),r=n(382).trim;c({target:"String",proto:!0,forced:n(383)("trim")},{trim:function(){return r(this)}})},382:function(t,e,n){var c=n(4),r=n(23),l=n(13),o=n(374),d=c("".replace),v="["+o+"]",_=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),h=function(t){return function(e){var n=l(r(e));return 1&t&&(n=d(n,_,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},383:function(t,e,n){var c=n(90).PROPER,r=n(3),l=n(374);t.exports=function(t){return r((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||c&&l[t].name!==t}))}},384:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},385:function(t,e,n){"use strict";n(375)},386:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(381),n(378),n(17),n(131),n(52),n(75),n(91);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png",link:"/programme/new_retail"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png",link:"/programme/operators"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png",link:"/programme/government"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png",link:"/programme/finance"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png",link:"/programme/cloud"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png",link:"/programme/media"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨交通物流",icon:"/images/index/solution/icon-7.png",link:"/programme/other"}]}},computed:{children:function(){var t=this,e=this.production,n=e.reduce((function(t,e){return t.concat(e.children)}),[]);return this.search?n.filter((function(e){return e.title.includes(t.search)})):e[this.index].children}},methods:{change:function(i){this.index=i}}},r=(n(385),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(384)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"children.length"}],staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",class:{"is-search":t.search},attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.search,expression:"!search"}],staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.children.length,expression:"!children.length"}],staticClass:"m-empty"},[t._v("\n                    没找到结果，请重新输入\n                ")])])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},388:function(t,e,n){"use strict";n(376)},389:function(t,e,n){"use strict";n(377)},390:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:"/"},{label:"解决方案",class:"active",key:"solution",href:"/"},{label:"合作伙伴",class:"active",key:"partner",href:"/"},{label:"服务支持",class:"active",key:"service",href:"/"},{label:"联系我们",class:"active",key:"contact",href:"/"},{label:"关于我们",class:"active",key:"about",href:"/"}]}},computed:{activeIndex:function(){return this.$store.state.activeIndex}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.$store.commit("changeMenuIndex",t)},clean:function(){this.type=""}}},r=(n(388),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(387),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label)+"\n                ")])])})),1)],1),t._v(" "),e("div",{on:{mouseleave:t.clean}},[e("index-menu",{attrs:{type:t.type}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(386).default})},391:function(t,e,n){"use strict";n.r(e);var c=n(11),r=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),l=(n(389),n(51)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone",staticStyle:{background:"url('/images/index/footer/phone.png') no-repeat left center"}},[t._v("\n                025-86702988\n            ")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},409:function(t,e,n){},419:function(t,e,n){"use strict";n(409)},427:function(t,e,n){"use strict";n.r(e);n(378);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},link:function(){return this.data.link||""},type:function(){return this.data.type||""}}},r=(n(419),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:t.link,target:"_blank"}},[t._v("立即咨询")])])])}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,n){},450:function(t,e,n){"use strict";n(439)},490:function(t,e,n){},499:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{service:function(){return this.data||null}}},r=(n(450),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.service?e("div",{staticClass:"m-scene-service"},[e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title"},[t._v(t._s(t.service.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.service.desc))]),t._v(" "),e("span",{staticClass:"m-price"},[e("span",[t._v("¥")]),t._v(" "),e("span",{staticClass:"u-number"},[t._v(t._s(t.service.price))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.service.label))])]),t._v(" "),e("span",{staticClass:"u-tag"},[e("span",{staticClass:"u-txt"},[t._v(t._s(t.service.tag))])])]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:"",target:"_blank"}},[t._v("立即咨询")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},582:function(t,e,n){t.exports=n.p+"img/check.d835d2a.svg"},583:function(t,e,n){"use strict";n(490)},638:function(t,e,n){"use strict";n.r(e);var header=n(427),c=n(499),r={components:{Header:header.default,Service:c.default},data:function(){return{header:{type:"hot",title:"企业热门场景专区",desc:"我们为您的企业提供企业初创到营销、管理、业务拓展的全套上云解决方案，助力业务快速发展",link:""},info:[{label:"30年",desc:"30年成熟ICT技术积累"},{label:"220+",desc:"布局全球多个地理区域和可用区的云产品"},{label:"80+",desc:"全球安全合规认证，助您上云无忧"}],tag:["一站选购，即开即用","高效灵活，细致服务","满足企业多场景需求"],service:[{title:"域名注册",desc:"适用于品牌保护、网站建设等业务场景",price:"1.00",label:"/件起",tag:"多种域名特惠1元起"},{title:"商标智能注册",desc:"智能申报、由服务商代理递交注册申请",price:"271.00",label:"/件起",tag:"新用户专享价"},{title:"IOT云通信联接短信套餐包",desc:"支持验证码、通知、会员营销短信",price:"640.00",label:"/2万条起",tag:"行业短信0.032元/条"},{title:"云速邮箱",desc:"即开即用企业邮箱，无限邮箱容量",price:"0.40",label:"/天起",tag:"2年8折、4年6折"},{title:"金蝶云星辰ERP",desc:"智能记账、智能取票、一键开票",price:"2800.00",label:"/年起",tag:"新用户专享价"},{title:"SaaS Package初创版会员包",desc:"包含云速邮箱、石墨文档、快报税",price:"3240.00",label:"/年起",tag:"一站式购买"}]}}},l=(n(583),n(51)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-scene"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-hot-scene"},[e("Header",{attrs:{data:t.header}}),t._v(" "),e("div",{staticClass:"wp m-hot-content"},[e("div",{staticClass:"m-info"},t._l(t.info,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{staticClass:"m-shop"},[e("h2",[t._v("云商店")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v("携手5,000+合作伙伴，提供丰富、安全、可靠的企业应用服务")]),t._v(" "),e("div",{staticClass:"m-tag"},t._l(t.tag,(function(c,i){return e("div",{key:i,staticClass:"u-tag"},[e("img",{staticClass:"u-img",attrs:{src:n(582)}}),t._v(" "),e("span",[t._v(" "+t._s(c))])])})),0)]),t._v(" "),e("div",{staticClass:"m-service"},t._l(t.service,(function(t,i){return e("Service",{key:i,attrs:{data:t}})})),1)])],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,"1776dde8",null);e.default=component.exports;installComponents(component,{CommonHeader:n(390).default,CommonFooter:n(391).default})}}]);