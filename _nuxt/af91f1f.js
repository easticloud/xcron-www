(window.webpackJsonp=window.webpackJsonp||[]).push([[29,2,3,5,11,13,14,17],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),l=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),l=n(23),r=n(13),o=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var _=r(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(r(c),o,"&quot;")+'"'),v+">"+_+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},382:function(t,e,n){"use strict";n(373)},383:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(378);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){return this.production[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(382),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(381)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,n){},385:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},386:function(t,e,n){"use strict";n(374)},387:function(t,e,n){"use strict";n(375)},388:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",activeIndex:0,list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:""},{label:"解决方案",class:"active",key:"solution",href:""},{label:"合作伙伴",class:"active",key:"partner",href:""},{label:"服务支持",class:"active",key:"service",href:""},{label:"联系我们",class:"active",key:"contact",href:""},{label:"关于我们",class:"active",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.activeIndex=t}}},l=(n(386),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(385),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{target:"_blank",to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label))])])})),1)],1),t._v(" "),e("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(383).default})},389:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),r=(n(387),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n(376)},391:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(n(390),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n(377)},393:function(t,e,n){"use strict";n.r(e);n(52);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},computed:{newData:function(){return this.pmDotCon.map((function(t,i){return t.index=i+1,t}))}}},l=(n(392),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.newData,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:n.index%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){},395:function(t,e,n){"use strict";n(384)},396:function(t,e,n){"use strict";n.r(e);var c={props:{pmScene:Object},data:function(){return{index:0}},computed:{children:function(){return this.pmScene.list[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(395),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-scene",class:t.pmScene.sceneClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmScene.til))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmScene.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0),t._v(" "),t.pmScene.isShow?e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.children.src,")")}),t._v(" "),e("span",{staticClass:"u-title"},[t._v(t._s(t.children.title))]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[t._v(t._s(n))])})):t._e()],2)])]):e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.children.src,")")}),t._v(" "),e("p",{staticClass:"u-title"},[t._v("\n                    "+t._s(t.children.title)),e("span",{staticClass:"u-titletag"},[t._v(t._s(t.children.titletag))])]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},[e("b",[t._v(t._s(n.tagTil))]),t._v("\n                            "+t._s(n.tagCon)+"\n                        ")])})):t._e()],2)])])])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n(394)},398:function(t,e,n){"use strict";n.r(e);var c={props:{pAboutBCS:Array,pAboutBCSTil:String,pAboutBCSClass:String},data:function(){return{}},methods:{}},l=(n(397),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-aboutBCS",class:t.pAboutBCSClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pAboutBCSTil))]),t._v(" "),e("div",{staticClass:"m-bcs"},t._l(t.pAboutBCS,(function(n,c){return e("p",{key:c},[e("span",[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"tags"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},427:function(t,e,n){},457:function(t,e,n){"use strict";n(427)},484:function(t,e,n){"use strict";n.r(e);var c=n(398),l=n(396),r=n(393),o={name:"products-DC",data:function(){return{pmBanner:{title:"云专线",desc:"云专线（Direct Connect）用于搭建用户本地数据中心与VPC之间高速、低时延、稳定安全的专属连接通道，充分利用服务优势的同时，继续使用现有的IT设施，实现灵活一体，可伸缩的混合云计算环境。",img:"/images/products/products_dc/b1.jpg"},pAboutBCSTil:"了解云专线",pAboutBCSClass:"m-p-ECS",pAboutBCS:[{til:"用通道高安全",desc:"用户使用云专线接入VPC，使用专享私密通道进行通信，网络隔离，安全性极高"},{til:"多种接入线路",desc:"云专线支持从用户IDC拉运营商MSTP/传输专线、裸光纤、MPLS VPN等类型的专线接入"},{til:"混合云无缝扩展",desc:"通过云专线将用户本地数据中心与云上资源互联，形成灵活可伸缩的混合云部署"},{til:"超大带宽",desc:"主力region专线单线路最大支持100Gbps带宽连接，满足各类用户带宽需求"}],pmScene:{products:0,til:"应用场景",isShow:!1,sceneClass:"m-Bms-products_dc",list:[{label:"混合云部署",children:{title:"混合云部署",titletag:"通过云专线将云下用户数据中心和云上VPC互联，利用云上的弹性，快速扩展能力，扩展应用层的计算能力",src:"/images/products/products_dc/01.png",tag:[{tagTil:"· 混合云架构",tagCon:"多地接入，拓扑灵活"},{tagTil:"· 安全可靠",tagCon:"专属网络通信，安全隔离，稳定可靠"},{tagTil:"· 高性能",tagCon:"主力region单线最大带宽支持100Gbps"}]}},{label:"多云互联",children:{title:"多云互联",titletag:"通过云专线将多云互联，业务部署在多云进行备份，提高业务的可靠性",src:"/images/products/products_dc/02.png",tag:[{tagTil:"· 多云架构",tagCon:"多地接入，拓扑灵活，多云备份容灾"},{tagTil:"· 安全可靠",tagCon:"专属网络通信，安全隔离，稳定可靠"},{tagTil:"· 高性能",tagCon:"主力region单线最大带宽支持100Gbps"}]}}]},pmDotConTil:"权威认可",pmDotConClass:"bcsAuth-1",pmDotCon:[{title:"可信云·云平台网络能力",desc:"云专线解决方案获得中国信息通信研究院可信云·云平台网络能力认证",img:"/images/products/products_dc/1.png"},{title:"网络安全等级保护",desc:"网络安全等级保护是公安部用于指导国内各组织单位进行网络安全建设的依据",img:"/images/products/products_dc/2.png"},{title:"中国网络安全审查",desc:"中国网络安全审查是中华人民共和国网信办保障网络安全和数据安全、维护国家安全的要求",img:"/images/products/products_dc/3.png"}]}},components:{pmBanner:n(391).default,pAboutBCS:c.default,pmScene:l.default,pmDotCon:r.default}},d=(n(457),n(51)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pAboutBCS",{attrs:{pAboutBCS:t.pAboutBCS,pAboutBCSTil:t.pAboutBCSTil,pAboutBCSClass:t.pAboutBCSClass}}),t._v(" "),e("products-pmScene",{attrs:{pmScene:t.pmScene}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass,pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-contactUs"),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(388).default,CommonFooter:n(389).default})}}]);