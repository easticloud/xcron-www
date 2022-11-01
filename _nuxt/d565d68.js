(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{392:function(t,e,c){},394:function(t,e,c){"use strict";c(392)},396:function(t,e,c){"use strict";c.r(e);var n=c(399),l={name:"graphicMatrix",props:{matrixKey:{type:String,default:""},customClass:{type:String,default:""}},computed:{data:function(){return n.a[this.matrixKey]||{}}}},r=(c(394),c(14)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.customClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.data.children,(function(c,i){return e("div",{key:i,staticClass:"m-item",class:c.imgCss?c.imgCss:(i+1)%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(c.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(c.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(c.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},465:function(t,e,c){},514:function(t,e,c){"use strict";c(465)},653:function(t,e,c){"use strict";c.r(e);var n={name:"products-IEC",layout:"products",data:function(){return{pmScene:{index:0,til:"应用场景",isShow:!1,sceneClass:"m-Bms-scene",list:[{label:"互动直播",children:{title:"互动直播",titletag:"互动直播场景将音视频转码、弹幕分发、内容审核等处理能力部署在边缘站点，可以显著提升业务处理质量，优化响应效率，降低流量成本。",src:"/images/products/products_iec/s1.svg",tag:[{tagTil:"· 多样算力",tagCon:"提供GPU、AI等多样化算力，提升高清转码、内容审核等场景处理的性价比"},{tagTil:"· 流量本地化",tagCon:"优化直播弹幕等大流量业务的成本"}]}},{label:"在线教育",children:{title:"在线教育",titletag:"在线教育场景为老师与学生提供实时互动的视频教育体验，需要在边缘侧提供区域间稳定互联的低时延通信链路，从而有效支撑师生间多点对多点实时互动。",src:"/images/products/products_iec/s2.svg",tag:[{tagTil:"· 边云网络",tagCon:"基于时延和丢包率实时探测的动态网络选路"},{tagTil:"· 广域覆盖",tagCon:"边缘节点覆盖中国大陆各主要区域"}]}},{label:"应用加速",children:{title:"应用加速",titletag:"应用加速场景如游戏加速、App加速等，需要根据端到端时延要求，选择靠近最终用户的边缘站点，并通过优化端到端的网络选路，降低端到端时延。",src:"/images/products/products_iec/s3.svg",tag:[{tagTil:"· 弹性扩展",tagCon:"资源按需使用，批量业务创建，有效应对业务的突发增量需求"},{tagTil:"· 高效运维",tagCon:"多站点资源的统一管理，基于API的服务管控和监控运维"}]}},{label:"自建CDN",children:{title:"自建CDN",titletag:"前互联网企业或服务商自建CDN网络时，大多采取租赁IDC的模式，需要建设和维护遍布多地域的大量站点。边缘云服务提供覆盖中国大陆的边缘算力网络，以及全局管理和自动化运维能力，帮助用户快速搭建和维护CDN网络。",src:"/images/products/products_iec/s4.svg",tag:[{tagTil:"· 广域覆盖",tagCon:"遍布中国大陆各主要地域和省市的站点布局"},{tagTil:"· 高性价比",tagCon:"提供内容分发场景所需的含NVMe的高性能本地存储型实例"}]}}]},pmDotConTil01:"功能描述",pmDotCon01:[{title:"边缘算力",desc:"提供C6系列高性能通用算力、G5系列GPU算力、Ai系列AI推理算力、D3系列存储型算力，满足边缘业务当前和持续演进的业务需求",img:"/images/products/products_iec/05.png"},{title:"边缘网络",desc:"提供VPC、子网、网络ACL、安全组、虚IP、EIP等完善的边缘网络能力，方便客户进行灵活网络的方案配置和管理",img:"/images/products/products_iec/06.png"},{title:"统一管理",desc:"一站式实现分布式多节点业务的统一创建、更新、伸缩、运维等管理操作",img:"/images/products/products_iec/07.png"},{title:"批量部署",desc:"分钟级完成批量化边缘业务的自动部署",img:"/images/products/products_iec/08.png"},{title:"高效运维",desc:"功能全面的服务控制台和API接口，方便管理边缘资源，实时查阅运维监控指标",img:"/images/products/products_iec/09.png"},{title:"安全可靠",desc:"高可用、高容错的边缘计算平台，算力和网络实现多租户安全隔离",img:"/images/products/products_iec/10.png"}]}}},l=(c(514),c(14)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("products-banner",{attrs:{"banner-key":"iec"}}),t._v(" "),e("products-graphic-matrix",{attrs:{"matrix-key":"iec"}}),t._v(" "),e("products-pmScene",{attrs:{pmScene:t.pmScene}}),t._v(" "),e("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil01,pmDotCon:t.pmDotCon01}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsBanner:c(397).default,ProductsGraphicMatrix:c(396).default})}}]);