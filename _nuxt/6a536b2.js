(window.webpackJsonp=window.webpackJsonp||[]).push([[40,2,3,5,13,14,19],{373:function(t,e,n){},374:function(t,e,n){},375:function(t,e,n){},376:function(t,e,n){},377:function(t,e,n){},378:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},379:function(t,e,n){"use strict";n(373)},380:function(t,e,n){"use strict";n.r(e);n(26),n(178);var c={props:["type"],data:function(){return{production_key:"人工智能",search:"",production:["人工智能","区块链","云计算","大数据","网络","智能边缘","终端","安全"],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨工业互联网",icon:"/images/index/solution/icon-7.png"}]}},methods:{}},l=(n(379),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.production_key==n}},[t._v("\n                    "+t._s(n))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(378)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t._m(0)])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-content"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("智能AI边缘盒子")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v("提供识别、抓拍、对比、报警等服务")])]),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("AI在线服务")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v("适用于图像识别、自然语言处理等服务")])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,n){t.exports=n.p+"img/logo.3608031.svg"},383:function(t,e,n){"use strict";n(374)},384:function(t,e,n){"use strict";n(375)},385:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{type:"",list:[{label:"首页",key:"index",href:""},{label:"产品中心",key:"production",href:""},{label:"解决方案",key:"solution",href:""},{label:"合作伙伴",key:"partner",href:""},{label:"服务支持",key:"service",href:""},{label:"联系我们",key:"contact",href:""},{label:"关于我们",key:"about",href:""}]}},methods:{change:function(t){this.type="production"==t||"solution"==t?t:""}}},l=(n(383),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-header"},[e("div",{staticClass:"wp"},[e("img",{attrs:{src:n(382),alt:"Xcron"}}),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(n,i){return e("nuxt-link",{key:i,staticClass:"u-link",attrs:{to:n.href}},[e("span",{staticClass:"u-txt",on:{mouseover:function(e){return t.change(n.key)}}},[t._v(" "+t._s(n.label))])])})),1)]),t._v(" "),e("index-menu",{attrs:{type:t.type}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexMenu:n(380).default})},386:function(t,e,n){"use strict";n.r(e);var c=n(11),l=(n(74),{data:function(){return{hot:[{label:"云服务器",href:""},{label:"高性能计算",href:""},{label:"容量引擎",href:""},{label:"人脸识别",href:""},{label:"实时音视频",href:""}],contact:[{label:"企业介绍",href:""},{label:"品牌理念",href:""},{label:"荣誉证书",href:""},{label:"客户案例",href:""},{label:"加入我们",href:""}],approved:[{label:"高新技术企业",src:"/images/index/footer/tech.png"},{label:"质量管理体系认证",desc:"ISO09001",src:"/images/index/footer/9001.png"},{label:"信息安全管理体系认证",desc:"ISO27001",src:"/images/index/footer/27001.png"}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()}}),o=(n(384),n(51)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"c-footer"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("热门推荐")]),t._v(" "),t._l(t.hot,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("关于我们")]),t._v(" "),t._l(t.contact,(function(n,i){return e("a",{key:i,staticClass:"u-link",attrs:{href:n.href,target:"_blank"}},[t._v("\n                "+t._s(n.label)+"\n            ")])}))],2),t._v(" "),e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("权威认证")]),t._v(" "),t._l(t.approved,(function(n,i){return e("div",{key:i,staticClass:"u-line"},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",[t._v(t._s(n.label))]),t._v(" "),n.desc?e("span",[t._v(t._s(n.desc))]):t._e()])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-title"},[t._v("联系我们")]),t._v(" "),e("span",[t._v("咨询热线：")]),t._v(" "),e("div",{staticClass:"u-phone"},[t._v("025-86702988")]),t._v(" "),e("span",[t._v("邮箱：SDSF@025108.com ")]),t._v(" "),e("span",[t._v("商务合作：15335159292（胡经理）")]),t._v(" "),e("span",[t._v("渠道合作：15335159298（王经理）")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-item m-code"},[e("img",{staticClass:"u-code",attrs:{src:"/images/index/footer/code.png",alt:"实点实分"}}),t._v(" "),e("span",[t._v("随时了解最新资讯")]),t._v(" "),e("span",[t._v("关注实点实分公众号")])])},function(){var t=this._self._c;return t("div",{staticClass:"m-copyright"},[t("span",{staticClass:"u-txt"},[this._v("© 2022 江苏实点实分网络科技有限公司 丨 苏ICP备15031332号")])])}],!1,null,null,null);e.default=component.exports},387:function(t,e,n){"use strict";n(376)},388:function(t,e,n){"use strict";n.r(e);var c={props:{pmBanner:Object},data:function(){return{}},methods:{}},l=(n(387),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-banner"},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmBanner.title))]),t._v(" "),e("p",[t._v(t._s(t.pmBanner.desc))])])])}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,n){"use strict";n(377)},390:function(t,e,n){"use strict";n.r(e);n(17),n(40);var c={props:{pmDotCon:Array,pmDotConTil:String,pmDotConClass:String},data:function(){return{}},methods:{function1:function(){this.pmDotCon.forEach((function(t,i){t.index=i}))}},mounted:function(){this.function1()}},l=(n(389),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.pmDotConClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmDotConTil))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.pmDotCon,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:n.index%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(n.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,n){},401:function(t,e,n){"use strict";n(398)},402:function(t,e,n){"use strict";n.r(e);var c={props:{pmSceneUseS:Object,pmSceneUseSTil:String,pmSceneUseSTrue:String,pmSceneUseS01:Object},data:function(){return{}},computed:{},methods:{}},l=(n(401),n(51)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-SceneuseS"},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.pmSceneUseSTil))]),t._v(" "),e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item",class:t.pmSceneUseS.imgR},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.pmSceneUseS.imgSrc,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("b",[t._v(t._s(t.pmSceneUseS.title))]),t._v(t._s(t.pmSceneUseS.titletag))]),t._v(" "),t._l(t.pmSceneUseS.list,(function(n,c){return e("div",{key:c,staticClass:"u-content"},[e("span",{staticClass:"u-til"},[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])}))],2)]),t._v(" "),e("div",{staticClass:"m-Scontent",attrs:{"v-if":t.pmSceneUseSTrue}},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img",style:"backgroundImage: url(".concat(t.pmSceneUseS01.imgSrc,")")}),t._v(" "),e("span",{staticClass:"u-title"},[e("b",[t._v(t._s(t.pmSceneUseS01.title))]),t._v(t._s(t.pmSceneUseS01.titletag))]),t._v(" "),t._l(t.pmSceneUseS01.list,(function(n,c){return e("div",{key:c,staticClass:"u-content"},[e("span",{staticClass:"u-til"},[t._v(t._s(n.til))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports},435:function(t,e,n){},465:function(t,e,n){"use strict";n(435)},489:function(t,e,n){"use strict";n.r(e);var c=n(390),l=n(402),o={name:"products-WSA",data:function(){return{pmBanner:{title:"全站加速",desc:"全站加速(Whole Site Acceleration)是一种融合了动态和静态加速的网站加速解决方案。用户请求资源时，静态内容从边缘节点就近获取，动态内容通过动态加速技术智能选择最佳路由回源获取。CDN全站加速能有效提升动态页面的加载速度，避开网络拥堵路由，提高访问成功率，实现网站整体加速与实时优化"},pmDotConTil:"产品优势",pmDotCon:[{title:"节点丰富",desc:"中国大陆2000+加速节点，中国大陆境外800+加速节点，全网带宽输出能力不低于150Tbps",img:"/images/index/scene/01.svg"},{title:"智能加速",desc:"全球更加精准的IP库，具有不断进化的能力，调度精准率最高99.99%；大数据实时反馈服务质量，动态调整用户的节点",img:"/images/index/scene/02.svg"},{title:"操作简单",desc:"接入方式简单快速，提供自助化的域名管理，并且支持多种可定制配置项，方便客户进行统计分析、日志管理、自定义缓存策略等操作",img:"/images/index/scene/03.svg"},{title:"安全防护",desc:"中立、安全、可靠的云加速服务。支持全网HTTPS安全传输，网站防盗链等高级安全控制功能",img:"/images/index/scene/03.svg"}],pmSceneUseSTil:"应用场景",pmSceneUseS:{title:"全站加速",imgSrc:"/images/index/solution/01.svg",titletag:"适用于各行业动静态内容混合，含较多动态资源请求（如asp、jsp、php等格式的文件）的网站。\n通过智能网络路由及加速技术，以及CDN优质的全线路、跨区域覆盖网络，提升客户动静态混合、纯动态站点/APP、内容上传、API调用等场景下网络传输的性能、稳定性和访问体验",list:[{til:"· 动静态分离",desc:"融合动态加速与静态缓存技术，实现动静态内容自动分离加速"},{til:"· 智能路由",desc:"智能、实时动态的路由计算，可根据接入位置、运营商、网络质量、节点负载等因素，综合计算到源站的最优线路"},{til:"· 安全加速",desc:"可配置HTTPS和防盗链保障网站安全"},{til:"· 多线回源",desc:"自动识别单线源站，并智能路由到多线节点回源，提升跨网传输质量"},{til:"· 协议优化",desc:"降低时延、卡顿率，通过自研协议优化算法，对端侧弱网接入场景下的丢包、时延带来改善"},{til:"· 高可靠性",desc:"业务高可靠性，分布式节点覆盖广、质量高，同时基于CDN节点监控及质量冗余控制，保证从接入、CDN网络、源站全链路传输动态可靠。7*24小时全链路服务，不间断稳定服务"}]}}},components:{pmBanner:n(388).default,pmDotCon:c.default,pmSceneUseS:l.default}},r=(n(465),n(51)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("common-header"),t._v(" "),e("products-pmBanner",{attrs:{pmBanner:t.pmBanner}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil,pmDotCon:t.pmDotCon}}),t._v(" "),e("products-pmSceneUseS",{attrs:{pmSceneUseS:t.pmSceneUseS,pmSceneUseSTil:t.pmSceneUseSTil}}),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(385).default,CommonFooter:n(386).default})}}]);