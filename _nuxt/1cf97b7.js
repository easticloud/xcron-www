(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,3,5,13,14,17],{373:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){},379:function(t,e,n){"use strict";var c=n(2),r=n(380);c({target:"String",proto:!0,forced:n(381)("link")},{link:function(t){return r(this,"a","href",t)}})},380:function(t,e,n){var c=n(4),r=n(23),l=n(13),o=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var v=l(r(t)),_="<"+e;return""!==n&&(_+=" "+n+'="'+d(l(c),o,"&quot;")+'"'),_+">"+v+"</"+e+">"}},381:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},382:function(t,e,n){"use strict";var c=n(2),r=n(383).trim;c({target:"String",proto:!0,forced:n(384)("trim")},{trim:function(){return r(this)}})},383:function(t,e,n){var c=n(4),r=n(23),l=n(13),o=n(373),d=c("".replace),v="["+o+"]",_=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),f=function(t){return function(e){var n=l(r(e));return 1&t&&(n=d(n,_,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},384:function(t,e,n){var c=n(90).PROPER,r=n(3),l=n(373);t.exports=function(t){return r((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||c&&l[t].name!==t}))}},385:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},386:function(t,e,n){"use strict";n(374)},387:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(382),n(379),n(17),n(131),n(52),n(75),n(91);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){var t=this,e=this.production,n=e.reduce((function(t,e){return t.concat(e.children)}),[]);return this.search?n.filter((function(e){return e.title.includes(t.search)})):e[this.index].children}},methods:{change:function(i){this.index=i}}},r=(n(386),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(385)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"children.length"}],staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",class:{"is-search":t.search},attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.search,expression:"!search"}],staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.children.length,expression:"!children.length"}],staticClass:"m-empty"},[t._v("\n                    没找到结果，请重新输入\n                ")])])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,n){},389:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},390:function(t,e,n){"use strict";n(375)},391:function(t,e,n){"use strict";n(376)},392:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:"/"},{label:"解决方案",class:"active",key:"solution",href:"/"},{label:"合作伙伴",class:"active",key:"partner",href:"/"},{label:"服务支持",class:"active",key:"service",href:"/"},{label:"联系我们",class:"active",key:"contact",href:"/"},{label:"关于我们",class:"active",key:"about",href:"/"}]}},computed:{activeIndex:function(){return this.$store.state.activeIndex}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.$store.commit("changeMenuIndex",t)},clean:function(){this.type=""}}},r=(n(390),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(389),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label)+"\n                ")])])})),1)],1),t._v(" "),e("div",{on:{mouseleave:t.clean}},[e("index-menu",{attrs:{type:t.type}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(387).default})},393:function(t,e,n){"use strict";n.r(e);var c=n(11),r=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),l=(n(391),n(51)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone",staticStyle:{background:"url('/images/index/footer/phone.png') no-repeat left center"}},[t._v("\n                025-86702988\n            ")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-copyright"},[e("span",{staticClass:"u-txt"},[t._v("© 2022 江苏实点实分网络科技有限公司 丨 "),e("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("苏ICP备15031332号")])])])}],!1,null,null,null);e.default=component.exports},394:function(t,e,n){"use strict";n(377)},395:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},r=(n(394),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,n){"use strict";n(378)},397:function(t,e,n){"use strict";n.r(e);n(53);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},computed:{newData:function(){return this.pmDotCon.map((function(t,i){return t.index=i+1,t}))}}},r=(n(396),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.newData,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:n.index%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n(388)},400:function(t,e,n){"use strict";n.r(e);var c={props:{pmScene:Object},data:function(){return{index:0}},computed:{children:function(){return this.pmScene.list[this.index].children}},methods:{change:function(i){this.index=i}}},r=(n(399),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-scene",class:t.pmScene.sceneClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmScene.til))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmScene.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0),t._v(" "),t.pmScene.isShow?e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img"},[e("img",{attrs:{src:t.children.src}})]),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[t._v(t._s(t.children.title))]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[t._v(t._s(n))])})):t._e()],2)])])]):e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img"},[e("img",{attrs:{src:t.children.src}})]),t._v(" "),e("div",{staticClass:"u-con"},[e("p",{staticClass:"u-title"},[t._v("\n                        "+t._s(t.children.title)),e("span",{staticClass:"u-titletag"},[t._v(t._s(t.children.titletag))])]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[e("b",[t._v(t._s(n.tagTil))]),t._v("\n                                "+t._s(n.tagCon)+"\n                            ")])})):t._e()],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){},454:function(t,e,n){"use strict";n(424)},485:function(t,e,n){"use strict";n.r(e);var c=n(395),r=n(397),l=n(400),o={name:"Products-AI",data:function(){return{pmBanner:{title:"智能AI边缘盒子",desc:"一款基于寒武纪220系列模块设计的计算平台，采用嵌入式设计原理，搭载AI处理芯片，内嵌基于深度学习的算法，提供识别、抓拍、比对、报警等服务。可广泛部署在边缘区域，以及时、快速、精准的做智能化分析。",img:"/images/products/products_ai/b1.jpg"},pmDotConTil:"产品优势",pmDotCon:[{title:"高解码能力/高算力",desc:"在编解码方面，拥有16x 1080p解码能力，同时支持16路视频流解析(视算法/帧率)，在计算方面，拥有16Tops@INT8算力，可支持各类算法推理的支持。",img:"/images/products/products_ai/01.svg"},{title:"算法适配",desc:"支持人脸识别，结合身份证识别、人脸对比、活体检测等多项组合能力，检测图像、视频中的所有车辆，可识别非机动车，机动车；可监控分析城市道路、园区/厂区等公共场所非机动车的停放情况等。",img:"/images/products/products_ai/02.svg"},{title:"Vision-E赋能硬件",desc:"内嵌Vision-E嵌入式AI中间件（嵌入式推理框架+AI应用集成+自动部署集成）实现算法持续优化，持续部署，尤其对于各类事件场景算法尤为便捷可行，可实现指定算法到指定设备的自动化部署。",img:"/images/products/products_ai/03.svg"},{title:"支持大容量存储",desc:"实现支持存储30万大容量底库，支持注册照、特征值入库；通过支持前端提取后端比对模式，可以将人脸底库提升到千万级，业务响应时间小于前端提取前端比对时间，可离线存储至少20万条业务记录。",img:"/images/products/products_ai/03.svg"}],pmScene:{index:0,til:"场景介绍",isShow:!0,list:[{label:"数据中心",children:{title:"数据中心",src:"/images/products/products_ai/01.jpeg",tag:["● 提供区域入侵检测，保护机房内部重要设备，提供安全可靠的运行环境","● 提供烟火检测，实时识别区域内烟气、明火情况，及时告警","● 提供安全帽、工装检测,自动识别区域内人员作业着装检测，对不符合要求的及时告警","● 提供人体骨骼关键点检测，在前端设备未抓取到人体正脸时，通过骨骼关键点及着装情况，分析人员","● 提供脱岗、摔倒检测，自动识别区域内人员状态，对脱岗及摔倒状态，及时告警"]}},{label:"智慧工地",children:{title:"智慧工地",src:"/images/products/products_ai/02.jpeg",tag:["● 提供人员出入检测，智能识别出入人员","● 提供升降梯人数识别，严控入梯人数，降低安全隐患","● 提供人员聚集检测，当检测到人员异常聚集时，及时告警","● 提供玩手机识别，对区域内人员进行玩手机行为检测，并实时告警，保障安全生产","● 提供反光衣、灭火器检测，对区域内人员是否穿戴反光衣及区域内是否放置灭火器检测，防范安全事故"]}}]}}},components:{pmBanner:c.default,pmDotCon:r.default,pmScene:l.default}},d=(n(454),n(51)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pShow"),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-pmScene",{attrs:{pmScene:t.pmScene}}),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(392).default,CommonFooter:n(393).default})}}]);