(window.webpackJsonp=window.webpackJsonp||[]).push([[49,8,10,11,18],{393:function(t,n,c){},394:function(t,n,c){},395:function(t,n,c){},396:function(t,n,c){"use strict";c(393)},397:function(t,n,c){"use strict";c.r(n);var e=c(392),l={props:{bannerKey:{type:String,default:""}},computed:{data:function(){return e.c[this.bannerKey]||{}}}},r=(c(396),c(14)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-banner",style:"backgroundImage: url(".concat(t.data.img,")")},[n("div",{staticClass:"m-banner-content"},[n("h2",{staticClass:"u-banner__title"},[t._v(t._s(t.data.title))]),t._v(" "),n("p",{staticClass:"u-banner__desc"},[t._v(t._s(t.data.desc))])])])}),[],!1,null,null,null);n.default=component.exports},398:function(t,n,c){"use strict";c(394)},399:function(t,n,c){"use strict";c(395)},400:function(t,n,c){},401:function(t,n,c){"use strict";c.r(n);var e=c(392),l={name:"graphicMatrix",props:{matrixKey:{type:String,default:""},customClass:{type:String,default:""}},computed:{data:function(){return e.b[this.matrixKey]||{}}}},r=(c(398),c(14)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"pm-dotCon",class:t.customClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{staticClass:"m-tabs"},t._l(t.data.children,(function(c,i){return n("div",{key:i,staticClass:"m-item",class:c.imgCss?c.imgCss:(i+1)%2==0?"pic-r":"pic-l"},[n("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(c.img,")")}),t._v(" "),n("div",{staticClass:"u-con"},[n("span",{staticClass:"u-title"},[n("span",[t._v(t._s(c.title))])]),t._v(" "),n("span",{staticClass:"u-desc"},[t._v(t._s(c.desc))])])])})),0)])])}),[],!1,null,null,null);n.default=component.exports},402:function(t,n,c){"use strict";c.r(n);var e=c(32),l=c(392),r={props:{tabKey:{type:String,default:"ai"},customClass:{type:String,default:""}},data:function(){return{index:0}},computed:{children:function(){return this.data.children[this.index].children},data:function(){return l.e[this.tabKey]}},methods:{change:function(i){this.index=i}}},o=(c(399),c(14)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-scene",class:t.customClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),t.data.children.length>1?n("div",{staticClass:"m-tabs"},t._l(t.data.children,(function(c,i){return n("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(n){return t.change(i)}}},[n("span",{staticClass:"u-label"},[t._v(t._s(c.label))])])})),0):t._e(),t._v(" "),n("div",{staticClass:"m-Scontent"},[n("div",{staticClass:"m-item"},[n("span",{staticClass:"u-img"},[n("img",{attrs:{src:t.children.src}})]),t._v(" "),n("div",{staticClass:"u-con"},[n("p",{staticClass:"u-title"},[t._v("\n                        "+t._s(t.children.title)+"\n                        "),t.children.titletag?n("span",{staticClass:"u-titletag"},[t._v(t._s(t.children.titletag))]):t._e()]),t._v(" "),n("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(c,i){return n("p",{key:i,staticClass:"u-tag"},["object"===Object(e.a)(c)?[n("b",[t._v(t._s(c.title))]),t._v("\n                                    "+t._s(c.desc)+"\n                                ")]:[t._v("\n                                    "+t._s(c)+"\n                                ")]],2)})):t._e()],2)])])])])])}),[],!1,null,null,null);n.default=component.exports},405:function(t,n,c){"use strict";c(400)},406:function(t,n,c){"use strict";c.r(n);var e=c(392),l={props:{textKey:{type:String,default:"bcs"},customClass:String},computed:{data:function(){return e.a[this.textKey]}}},r=(c(405),c(14)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-p-aboutBCS",class:t.customClass},[n("div",{staticClass:"wp"},[n("h2",[t._v(t._s(t.data.title))]),t._v(" "),n("div",{staticClass:"m-bcs"},t._l(t.data.children,(function(c,e){return n("p",{key:e},[n("span",[t._v(t._s(c.title))]),t._v(" "),n("span",{staticClass:"tags"},[t._v(t._s(c.desc))])])})),0)])])}),[],!1,null,null,null);n.default=component.exports},475:function(t,n,c){},521:function(t,n,c){"use strict";c(475)},658:function(t,n,c){"use strict";c.r(n);var e={name:"products-VPC",layout:"products",data:function(){return{pmDotConTil01:"权威认可",pmDotConClass01:"bcsAuth",pmDotCon01:[{title:"云网能力技术最佳实践奖",desc:"由中国信息通信研究院、中国标准化协会颁发的技术创新的系列奖项。KYON企业级云网络凭借极简敏捷的携网上云能力，以及数项技术创新，得到可信云权威评估机构的高度认可，斩获“2020可信云技术最佳实践奖”",img:"/images/products/products_vpc/icon.png"},{title:"IPv6支持度优秀奖",desc:"作为首批通过工信部IPv6认证的云厂商之一，16项云服务获得工信部认证的云服务IPv6支持能力测评证书，标志着云服务在IPv6网络下的各项能力均已走在行业前列",img:"/images/products/products_vpc/icon.png"}],pmScene:{products:0,til:"应用场景",sceneClass:"m-Bms-products_vpc",list:[{label:"云端专属网络",children:{title:"云端专属网络",titletag:"基于云构建的云上私有网络环境，用户通过弹性IP访问云上私有网络环境，配置部署业务",src:"/images/products/products_vpc/01.svg",tag:[{tagTil:"· 灵活配置",tagCon:"自由定义网络，按需划分子网，申请弹性IP等资源"},{tagTil:"· 安全隔离",tagCon:"VPC之间完全隔离，子网之间可配置访问控制策略"}]}},{label:"Web服务",children:{title:"Web服务",titletag:"基于云构建的云上私有网络环境，通过弹性负载均衡对外提供服务，支撑海量用户访问",src:"/images/products/products_vpc/02.svg",tag:[{tagTil:"· 可支撑高并发连接",tagCon:"应对海量接入，与弹性伸缩服务无缝集成，业务稳定可靠"},{tagTil:"· 后端资源自动扩容",tagCon:"按照业务流量自动扩容，适合业务量突增场景"}]}},{label:"混合云部署",children:{title:"混合云部署",titletag:"基于云提供的VPN/云专线服务，高速连接云上私有网络和用户自有IT设施，满足云上和自有设施间业务和数据的迁移，支撑混合云场景等",src:"/images/products/products_vpc/03.svg",tag:[{tagTil:"· 选择多样化",tagCon:"云专线独占私有线路，高速，安全 。 VPN稳定，高性价比"},{tagTil:"· 云上云下互通",tagCon:"用户业务和数据可以云上、线下灵活部署并迁移"}]}}]}}}},l=(c(521),c(14)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"p-products"},[n("products-banner",{attrs:{"banner-key":"vpc"}}),t._v(" "),n("products-frame-text",{attrs:{"text-key":"vpc","custom-class":"m-p-ECS"}}),t._v(" "),n("products-graphic-matrix",{attrs:{"matrix-key":"vpc_x","custom-class":"ecs-dotcon"}}),t._v(" "),n("products-pmDotCon",{attrs:{pmDotConClass:t.pmDotConClass01,pmDotConTil:t.pmDotConTil01,pmDotCon:t.pmDotCon01}}),t._v(" "),n("products-tabs",{attrs:{data:t.pmScene}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ProductsBanner:c(397).default,ProductsFrameText:c(406).default,ProductsGraphicMatrix:c(401).default,ProductsTabs:c(402).default})}}]);