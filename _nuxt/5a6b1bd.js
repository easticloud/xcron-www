(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{392:function(t,e,c){},394:function(t,e,c){"use strict";c(392)},396:function(t,e,c){"use strict";c.r(e);var n=c(399),r={name:"graphicMatrix",props:{matrixKey:{type:String,default:""},customClass:{type:String,default:""}},computed:{data:function(){return n.a[this.matrixKey]||{}}}},l=(c(394),c(14)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pm-dotCon",class:t.customClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.data.children,(function(c,i){return e("div",{key:i,staticClass:"m-item",class:c.imgCss?c.imgCss:(i+1)%2==0?"pic-r":"pic-l"},[e("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(c.img,")")}),t._v(" "),e("div",{staticClass:"u-con"},[e("span",{staticClass:"u-title"},[e("span",[t._v(t._s(c.title))])]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(c.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,c){},518:function(t,e,c){"use strict";c(469)},657:function(t,e,c){"use strict";c.r(e);var n={name:"products-WSA",layout:"products",data:function(){return{pmDotConTil:"产品优势",pmDotCon:[{title:"节点丰富",desc:"中国大陆2000+加速节点，中国大陆境外800+加速节点，全网带宽输出能力不低于150Tbps",img:"/images/products/products_wsa/01.svg"},{title:"智能加速",desc:"全球更加精准的IP库，具有不断进化的能力，调度精准率最高99.99%；大数据实时反馈服务质量，动态调整用户的节点",img:"/images/products/products_wsa/02.svg"},{title:"操作简单",desc:"接入方式简单快速，提供自助化的域名管理，并且支持多种可定制配置项，方便客户进行统计分析、日志管理、自定义缓存策略等操作",img:"/images/products/products_wsa/03.svg"},{title:"安全防护",desc:"中立、安全、可靠的云加速服务。支持全网HTTPS安全传输，网站防盗链等高级安全控制功能",img:"/images/products/products_wsa/04.svg"}],pmSceneUseSTil:"应用场景",pmSceneUseS:{title:"全站加速",imgSrc:"/images/products/products_wsa/s1.svg",titletag:"适用于各行业动静态内容混合，含较多动态资源请求（如asp、jsp、php等格式的文件）的网站。\n通过智能网络路由及加速技术，以及CDN优质的全线路、跨区域覆盖网络，提升客户动静态混合、纯动态站点/APP、内容上传、API调用等场景下网络传输的性能、稳定性和访问体验",list:[{til:"· 动静态分离",desc:"融合动态加速与静态缓存技术，实现动静态内容自动分离加速"},{til:"· 智能路由",desc:"智能、实时动态的路由计算，可根据接入位置、运营商、网络质量、节点负载等因素，综合计算到源站的最优线路"},{til:"· 安全加速",desc:"可配置HTTPS和防盗链保障网站安全"},{til:"· 多线回源",desc:"自动识别单线源站，并智能路由到多线节点回源，提升跨网传输质量"},{til:"· 协议优化",desc:"降低时延、卡顿率，通过自研协议优化算法，对端侧弱网接入场景下的丢包、时延带来改善"},{til:"· 高可靠性",desc:"业务高可靠性，分布式节点覆盖广、质量高，同时基于CDN节点监控及质量冗余控制，保证从接入、CDN网络、源站全链路传输动态可靠。7*24小时全链路服务，不间断稳定服务"}]}}}},r=(c(518),c(14)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("products-banner",{attrs:{"banner-key":"wsa"}}),t._v(" "),e("products-graphic-matrix",{attrs:{"matrix-key":"wsa"}}),t._v(" "),e("products-pmSceneUseS",{attrs:{pmSceneUseS:t.pmSceneUseS,pmSceneUseSTil:t.pmSceneUseSTil}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsBanner:c(397).default,ProductsGraphicMatrix:c(396).default})}}]);