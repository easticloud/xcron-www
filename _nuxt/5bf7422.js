(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2,3,5,11,13,14,15],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),l=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),l=n(23),o=n(13),r=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var m=o(l(t)),C="<"+e;return""!==n&&(C+=" "+n+'="'+d(o(c),r,"&quot;")+'"'),C+">"+m+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},382:function(t,e,n){"use strict";n(373)},383:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(378);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/productsAI"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/productsAIS"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/productsBCS"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/productsTCS"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/productsECS"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/productsBMS"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/productsDH"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/productsCDW"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/productsDIS"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/productsDLV"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/productsVPC"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/productsDC"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/productsGA"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/productsWSA"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/productsIEC"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/productsTSP"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/productsCF"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/productsHSS"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/productsDEW"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},computed:{children:function(){return this.production[this.index].children}},methods:{change:function(i){this.index=i}}},l=(n(382),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(381)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("div",{staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",attrs:{href:n.link,target:"_blank"}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link,target:"_blank"}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},386:function(t,e,n){"use strict";n(374)},387:function(t,e,n){"use strict";n(375)},388:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",activeIndex:0,list:[{label:"首页",class:"active",key:"index",href:"/"},{label:"产品中心",class:"active",key:"production",href:"../products/productsAI"},{label:"解决方案",class:"active",key:"solution",href:""},{label:"合作伙伴",class:"active",key:"partner",href:""},{label:"服务支持",class:"active",key:"service",href:""},{label:"联系我们",class:"active",key:"contact",href:""},{label:"关于我们",class:"active",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""},activeHandle:function(t){this.activeIndex=t}}},l=(n(386),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n(385),alt:"Xcron"}})]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",class:t.activeIndex==i?"active":"",on:{click:function(e){return t.activeHandle(i)},mouseover:function(e){return t.change(n.key)}}},[t._v(" "+t._s(n.label))])])})),1)],1),t._v(" "),e("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(383).default})},389:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),o=(n(387),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n(376)},391:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(n(390),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner",style:"backgroundImage: url(".concat(t.pmBanner.img,")")},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n(377)},393:function(t,e,n){"use strict";n.r(e);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},data:function(){return{}},methods:{},mounted:function(){}},l=(n(392),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmDotCon,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:"pic-l"==n.imgCss?"pic-l":"pic-r"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){},397:function(t,e,n){"use strict";n(394)},398:function(t,e,n){"use strict";n.r(e);var c={props:{pAboutBCS:Array,pAboutBCSTil:String,pAboutBCSClass:String},data:function(){return{}},methods:{}},l=(n(397),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-aboutBCS",class:t.pAboutBCSClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pAboutBCSTil))]),t._v(" "),e("div",{staticClass:"m-bcs"},t._l(t.pAboutBCS,(function(n,c){return e("p",{key:c},[e("span",[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"tags"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){},400:function(t,e,n){"use strict";n(399)},402:function(t,e,n){"use strict";n.r(e);var c={props:{pmImgConTil:String,pmImgCon:Array,pmImgConClass:String},data:function(){return{}},methods:{}},l=(n(400),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-imgCon",class:t.pmImgConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmImgConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmImgCon,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},423:function(t,e,n){},453:function(t,e,n){"use strict";n(423)},480:function(t,e,n){"use strict";n.r(e);var c=n(402),l=n(393),o=n(391),r=n(398),d={name:"products-BCS",data:function(){return{pmBanner:{title:"区块链服务",desc:"区块链是构建信任的基石，是实现信用传递，价值传递的可信网络。区块链聚焦构建安全、可靠的区块链基础设施，让企业、政府快速、高效的搭建区块链网络及行业应用，实现资金流、物流、信息流的可信快速流动，高效可信协同，助力降低协作成本，提升效率。",img:"/images/products/productsBCS/b1.jpg"},pAboutBCSTil:"了解区块链服务",pAboutBCS:[{til:"100000+",desc:"10万级TPS秒级共识"},{til:"10000+",desc:"支持10000+节点扩展"},{til:"400+",desc:"已落地400+应用场景"},{til:"可信",desc:"满足金融级可信和协同要求"}],pmImgConTil:"产品与服务",pmImgConClass:"noimgCon",pmImgCon:[{title:"区块链服务BCS(区块链引擎)",desc:"自主研发的满足企业级和金融级的可信、协调要求的高性能、高安全的区块链技术服务平台。",img:""},{title:"数字资产链 DAC",desc:"自研的数字资产链平台，基于云区块链引擎，可实现数字资产的确权、可信保存、安全交易。",img:""},{title:"区块链BCS(Hyperledger Fabric增强版)",desc:"基于软硬协同、自主创新、安全可控技术，简单易用， 通过Kubernetes管理，数分钟内即可完成区块链网络的构建。",img:""},{title:"可信跨链服务 TCS",desc:"基于一系列可信区块链标准跨链协议，保证交易全栈可追溯可扩展等，实现同构和异构链之间的互联互通。",img:""},{title:"可信分布式身份服务 TDIS",desc:"为个人和企业用户提供统一的分布式身份标识，支持多场景细粒度的可验证凭证管理能力。",img:""},{title:"可信数据交换与计算服务 TC3",desc:"为链上应用提供可信数据资产交换和可信联合分析计算，做到数据“可用不可见，可见不可得”。",img:""}],pmImgConTil01:"产品优势",pmImgConClass01:"bcsBg",pmImgCon01:[{title:"场景丰富",desc:"提供安全计算、可信数据共享、分布式身份管理等服务，提升多方可信协作效率。",img:"/images/products/productsBCS/01.svg"},{title:"开放共赢",desc:"专注于区块链底层技术和平台服务能力搭建，和各行业合作伙伴携手合作，共同推进区块链场景落地，帮助企业实现商业成功。",img:"/images/products/productsBCS/02.svg"},{title:"安全可靠",desc:"提供自主研发的区块链平台，在共识算法、同态加密、零知识证明、高速网络连接、海量存储等方面具有自主知识产权的专利和技术积累。",img:"/images/products/productsBCS/03.svg"},{title:"高效灵活",desc:"10万级TPS性能和10000+的联盟节点网络，混合云、边缘云等部署管理能力，充分满足差异化组网诉求等",img:"/images/products/productsBCS/04.svg"},{title:"简单易用",desc:"帮助企业实现自动化配置、部署区块链应用，并提供区块链全生命周期管理，让您简单使用区块链系统，专注于上层应用的创新和开发",img:"/images/products/productsBCS/05.svg"},{title:"云链结合",desc:"提供各种区块链需要的无限可扩展的资源和丰富多样的云计算产品、定制化的各行业解决方案，可以给企业带来更大的便利和价值",img:"/images/products/productsBCS/06.svg"}],pmDotConTil:"权威认可",pmDotConClass:"bcsAuth",pmDotCon:[{title:"通过可信区块链双项测评",desc:"2021年12月通过中国通信院第六批可信区块链功能专项、性能专项两项测评，同事时性能评测局第一位，获得权威认可。",img:"/images/products/productsBCS/01.png"},{title:"可信云最佳实践奖",desc:"凭借业界领先的区块链技术，作为第一个应用区块链技术解决政务数据共享难题的厂商，得到权威机构的高度认可。",img:"/images/products/productsBCS/01.png"},{title:"十佳区块链技术服务商",desc:"在第二届全球供应链数字经济峰会上，荣获区块链应用分会委员会高度认可，并颁发荣誉证书。",img:"/images/products/productsBCS/02.png"},{title:"2021区块链技术领军企业",desc:"中国西部数字经济博览会暨第二届中国西安区块链产业发展论坛中，荣获2021区块链技术应用领军企业荣誉。",img:"/images/products/productsBCS/03.png"}]}},components:{pmBanner:o.default,pmImgCon:c.default,pmDotCon:l.default,pAboutBCS:r.default}},m=(n(453),n(51)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pAboutBCS",{attrs:{pAboutBCSTil:t.pAboutBCSTil,pAboutBCS:t.pAboutBCS}}),t._v(" "),e("products-pmImgCon",{attrs:{pmImgConClass:t.pmImgConClass,pmImgConTil:t.pmImgConTil,pmImgCon:t.pmImgCon}}),t._v(" "),e("products-pmImgCon",{attrs:{pmImgConClass:t.pmImgConClass01,pmImgConTil:t.pmImgConTil01,pmImgCon:t.pmImgCon01}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass,pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(388).default,CommonFooter:n(389).default})}}]);