(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{374:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},375:function(t,e,n){},378:function(t,e,n){"use strict";var c=n(2),r=n(379);c({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return r(this,"a","href",t)}})},379:function(t,e,n){var c=n(4),r=n(23),o=n(13),l=/"/g,d=c("".replace);t.exports=function(t,e,n,c){var h=o(r(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(o(c),l,"&quot;")+'"'),m+">"+h+"</"+e+">"}},380:function(t,e,n){var c=n(3);t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},381:function(t,e,n){"use strict";var c=n(2),r=n(382).trim;c({target:"String",proto:!0,forced:n(383)("trim")},{trim:function(){return r(this)}})},382:function(t,e,n){var c=n(4),r=n(23),o=n(13),l=n(374),d=c("".replace),h="["+l+"]",m=RegExp("^"+h+h+"*"),v=RegExp(h+h+"*$"),_=function(t){return function(e){var n=o(r(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,v,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},383:function(t,e,n){var c=n(90).PROPER,r=n(3),o=n(374);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||c&&o[t].name!==t}))}},384:function(t,e,n){t.exports=n.p+"img/search.d35ef00.svg"},385:function(t,e,n){"use strict";n(375)},386:function(t,e,n){"use strict";n.r(e);n(26),n(178),n(381),n(378),n(17),n(131),n(52),n(75),n(91);var c={props:["type"],data:function(){return{index:0,search:"",production:[{title:"人工智能",children:[{title:"智能AI边缘盒子",desc:"提供识别、抓拍、对比、报警等服务",link:"/products/products_ai"},{title:"AI在线服务",desc:"适用于图像识别、自然语言处理等服务",link:"/products/products_ais"}]},{title:"区块链",children:[{title:"区块链服务",desc:"高性能、高安全的区块链技术平台服务",link:"/products/products_bcs"},{title:"可信跨链服务",desc:"实现不同区块链内核的可信互联互通",link:"/products/products_tcs"}]},{title:"云计算",children:[{title:"弹性云服务器",desc:"可随时自动获取、弹性伸缩的云服务器",link:"/products/products_ecs"},{title:"裸金属服务器",desc:"高性能、高安全的云上物理服务器",link:"/products/products_bms"},{title:"专属主机",desc:"专属物理主机创建的云服务器",link:"/products/products_dh"}]},{title:"大数据",children:[{title:"云数据仓库",desc:"极致性能、稳定、按需扩展的数据仓库服务",link:"/products/products_cdw"},{title:"数据接入服务",desc:"实时数据接入、处理、转储服务",link:"/products/products_dis"},{title:"数据可视化",desc:"提供可视化组件定制和应用数据大屏",link:"/products/products_dlv"}]},{title:"网络",children:[{title:"虚拟私有云",desc:"隔离的、私密的虚拟网络环境",link:"/products/products_vpc"},{title:"云专线",desc:"搭建本地数据中心与VPC间的专属连接通道",link:"/products/products_dc"},{title:"全球加速",desc:"提供SLA稳定的加速传输",link:"/products/products_ga"}]},{title:"智能边缘",children:[{title:"全站加速",desc:"提升网络传输的性能、稳定性和访问体验",link:"/products/products_wsa"},{title:"智能边缘云",desc:"部署在距用户更近的位置，提供低时延体验",link:"/products/products_iec"}]},{title:"终端",children:[{title:"终端安全防护",desc:"联动网络侧的安全防御能力，为企业构建由网到端的全面闭环防护",link:"/products/products_tsp"}]},{title:"安全",children:[{title:"云防火墙",desc:"网络流量管控与入侵安全防护",link:"/products/products_cf"},{title:"企业主机安全",desc:"服务器贴身安全管家",link:"/products/products_hss"},{title:"数据加密服务",desc:"云上数据加密和密钥托管服务",link:"/products/products_dew"}]}],solution:[{label:"新零售行业解决方案",desc:"要素整合、精准营销、高效果运营",icon:"/images/index/solution/icon-1.png",link:"/programme/new_retail"},{label:"运营商行业解决方案",desc:"网络变现、业务创新、运营敏捷",icon:"/images/index/solution/icon-2.png",link:"/programme/operators"},{label:"数字政府解决方案",desc:"服务能力向移动化和智能化发展",icon:"/images/index/solution/icon-3.png",link:"/programme/government"},{label:"金融行业解决方案",desc:"敏捷创新、智能升级、数字化转型",icon:"/images/index/solution/icon-4.png",link:"/programme/finance"},{label:"迁移上云解决方案",desc:"提供ERP系统上云一站式服务",icon:"/images/index/solution/icon-5.png",link:"/programme/cloud"},{label:"TIk Tok解决方案",desc:"解决个人/企业Tiktok问题",icon:"/images/index/solution/icon-6.png",link:"/programme/media"},{label:"其他行业解决方案",desc:"能源丨医疗健康丨教育丨交通物流",icon:"/images/index/solution/icon-7.png",link:"/programme/other"}]}},computed:{children:function(){var t=this,e=this.production,n=e.reduce((function(t,e){return t.concat(e.children)}),[]);return this.search?n.filter((function(e){return e.title.includes(t.search)})):e[this.index].children}},methods:{change:function(i){this.index=i}}},r=(n(385),n(51)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.type?e("div",{staticClass:"m-index-menu"},[e("div",{staticClass:"wp"},["production"==t.type?[e("div",{staticClass:"m-list-production"},[e("a",{staticClass:"u-more",attrs:{href:"",target:"_blank"}},[t._v("查看全部产品 >")]),t._v(" "),t._l(t.production,(function(n,i){return e("span",{key:i,staticClass:"u-list",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[t._v("\n                    "+t._s(n.title))])}))],2),t._v(" "),e("div",{staticClass:"m-search"},[e("div",{staticClass:"u-search"},[e("img",{staticClass:"u-img",attrs:{src:n(384)}}),t._v(" "),e("el-input",{staticClass:"u-input",attrs:{placeholder:"搜索云产品"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.children.length,expression:"children.length"}],staticClass:"m-content"},t._l(t.children,(function(n,i){return e("a",{key:i,staticClass:"m-item",class:{"is-search":t.search},attrs:{href:n.link}},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.search,expression:"!search"}],staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.children.length,expression:"!children.length"}],staticClass:"m-empty"},[t._v("\n                    没找到结果，请重新输入\n                ")])])]:t._e(),t._v(" "),"solution"==t.type?[e("div",{staticClass:"m-list-solution"},t._l(t.solution,(function(n,i){return e("div",{key:i,staticClass:"m-item"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("a",{staticClass:"u-txt",attrs:{href:n.link}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)]:t._e()],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);