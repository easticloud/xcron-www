(window.webpackJsonp=window.webpackJsonp||[]).push([[39,2,3,5,13,14,15],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),l=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),l=n(23),o=n(13),r=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var m=o(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(o(c),r,"&quot;")+'"'),v+">"+m+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},382:function(t,e,n){"use strict";n(373)},383:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(378);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/productsAI"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/productsAIS"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/productsBCS"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/productsTCS"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/productsECS"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/productsBMS"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/productsDH"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/productsCDW"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/productsDIS"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/productsDLV"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/productsVPC"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/productsDC"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/productsGA"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/productsWSA"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/productsIEC"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/productsTSP"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/productsCF"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/productsHSS"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/productsDEW"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){return this.production[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(382),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(381)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},386:function(t,e,n){"use strict";n(374)},387:function(t,e,n){"use strict";n(375)},388:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",activeIndex:0,list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:""},{label:"解决方案",class:"active",key:"solution",href:""},{label:"合作伙伴",class:"active",key:"partner",href:""},{label:"服务支持",class:"active",key:"service",href:""},{label:"联系我们",class:"active",key:"contact",href:""},{label:"关于我们",class:"active",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.activeIndex=t}}},l=(n(386),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(385),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{target:"_blank",to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v("\n                    "+t._s(n.label))])])})),1)],1),t._v(" "),e("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(383).default})},389:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),o=(n(387),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n(376)},391:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(n(390),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n(377)},393:function(t,e,n){"use strict";n.r(e);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},data:function(){return{}},methods:{},mounted:function(){}},l=(n(392),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmDotCon,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:"pic-l"==n.imgCss?"pic-l":"pic-r"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){},400:function(t,e,n){"use strict";n(399)},402:function(t,e,n){"use strict";n.r(e);var c={props:{pmImgConTil:String,pmImgCon:Array,pmImgConClass:String},data:function(){return{}},methods:{}},l=(n(400),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-imgCon",class:t.pmImgConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmImgConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmImgCon,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},437:function(t,e,n){},467:function(t,e,n){"use strict";n(437)},494:function(t,e,n){"use strict";n.r(e);var c=n(393),l=n(402),o={name:"products-TSP",data:function(){return{pmBanner:{title:"终端安全防护",desc:"可对终端侧的安全威胁事前预防、事中防护及事后检测和响应，并联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",img:"/images/products/productsTSP/b1.jpg"},pmImgConTil:"产品功能",pmImgCon:[{title:"恶性病毒处置修复",desc:"基于AI与大数据分析技术，能够快速对恶性病毒变种进行检测，实现病毒快速、无损修复，原文件可继续使用",img:"/images/products/productsTSP/5.png"},{title:"勒索病毒专项防护",desc:"提供实现预防、防御、检测与响应的4-6-6三层立体防护，为终端提供全面、实时、快速、有效的安全防护能力，让勒索病毒无所遁形，保护组织终端业务安全",img:"/images/products/productsTSP/6.png"},{title:"网端联动",desc:"通过网络及终端的深度协同联动，能够实现在网络端发现威胁、定位主机后，可直接在控制台下发对终端的处置命令，实现高协同、更有效、全面的危险防御",img:"/images/products/productsTSP/7.png"}],pmDotConTil:"应用场景",pmDotConClass:"ecs-dotcon",pmDotCon:[{title:"企业终端遭勒索病毒攻击并感染，文件被加密，核心资产受威胁",desc:"通过4 层勒索入侵防御、6级勒索反加密防护和6项勒索检测与响应，可提前识别和封锁攻击入口，对攻击手段进行对抗，并快速定位、处置与阻断勒索病毒，减少对用户的业务影响",img:"/images/products/img.jpeg",imgCss:"pic-l"},{title:"企业员工下载携带未知威胁的文件，终端安全防护软件无法识别，安全事件频发",desc:"通过网络及终端的深度协同联动，终端未知的新型威胁可通过流量侧如上网行为分析、上网流量检测等提前发现异常并及时分析与处置，实现更全面的安全威胁防护",img:"/images/products/img.jpeg",imgCss:"pic-r"}],pmDotConTil01:"产品优势",pmDotCon01:[{title:"轻资产",desc:"无需在本地服务器上安装控制台，云端按需订阅终端安全服务即可，即开即用，大大降低设备投入成本。",img:"/images/products/productsTSP/1.png"},{title:"全网终端统一管理",desc:"除在网终端外，离网终端（出差、移动办公）也可进行统一管控；云端管理平台实时更新全网（在网和离网）终端病毒库。",img:"/images/products/productsTSP/2.png"},{title:"桌面管控运维简单",desc:"拥有广告弹窗、远程桌面、USB管控、违规外联等桌管功能，日常运维管理简单高效。。",img:"/images/products/productsTSP/3.png"},{title:"实时响应",desc:"云端专家7*24小时在线服务，及时响应和处理您的问题。全网安全风险情报实时同步，支持微信公众号主动告警和一键处置风险。",img:"/images/products/productsTSP/4.png"}]}},components:{pmBanner:n(391).default,pmDotCon:c.default,pmImgCon:l.default}},r=(n(467),n(51)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil01,pmDotCon:t.pmDotCon01}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass,pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-pmImgCon",{attrs:{pmImgConTil:t.pmImgConTil,pmImgCon:t.pmImgCon}}),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(388).default,CommonFooter:n(389).default})}}]);