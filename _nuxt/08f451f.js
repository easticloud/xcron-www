(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{392:function(t,c,n){},394:function(t,c,n){"use strict";n(392)},396:function(t,c,n){"use strict";n.r(c);var e=n(399),l={name:"graphicMatrix",props:{matrixKey:{type:String,default:""},customClass:{type:String,default:""}},computed:{data:function(){return e.a[this.matrixKey]||{}}}},r=(n(394),n(14)),component=Object(r.a)(l,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"pm-dotCon",class:t.customClass},[c("div",{staticClass:"wp"},[c("h2",[t._v(t._s(t.data.title))]),t._v(" "),c("div",{staticClass:"m-tabs"},t._l(t.data.children,(function(n,i){return c("div",{key:i,staticClass:"m-item",class:n.imgCss?n.imgCss:(i+1)%2==0?"pic-r":"pic-l"},[c("span",{staticClass:"u-pic",style:"backgroundImage: url(".concat(n.img,")")}),t._v(" "),c("div",{staticClass:"u-con"},[c("span",{staticClass:"u-title"},[c("span",[t._v(t._s(n.title))])]),t._v(" "),c("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);c.default=component.exports},461:function(t,c,n){},510:function(t,c,n){"use strict";n(461)},649:function(t,c,n){"use strict";n.r(c);var e={name:"products-DLV",layout:"products",data:function(){return{pmScene:{products:0,til:"应用场景",isShow:!1,sceneClass:"m-Bms-products_dlv",list:[{label:"安全态势场景",children:{title:"安全态势感知",titletag:"从微观到宏观，全面呈现，让一切入侵有迹可循，为云上企业的安全事件处置提供可视化的决策依据",src:"/images/products/products_dlv/1.png",tag:[{tagTil:"· 实时业务态势",tagCon:"实时检测，有效防范每一起安全事件"},{tagTil:"· 地理化访问轨迹",tagCon:"通过2D、3D地图组件使安全威胁来源一目了然"}]}},{label:"经营管理看板",children:{title:"经营管理看板",titletag:"通过接入企业经营数据，可以对企业的生产情况、产品质量情况、产品的销售情况了如指掌，为企业管理者提供可视化的决策依据",src:"/images/products/products_dlv/2.png",tag:[{tagTil:"· 经营状态实时可见",tagCon:"实时可视化的呈现企业的经营状态，企业管理者实时了解企业的状态"},{tagTil:"· 简单易用",tagCon:"组件化拖拽式编排，轻松上手"}]}}]},pmDotConTil01:"功能描述",pmDotCon01:[{title:"数据连接管理",desc:"创建数据连接，提供数据大屏所需动态数据",img:"/images/products/products_dlv/01.png"},{title:"数据大屏管理",desc:"基于多种场景模板创建管理您的数据大屏",img:"/images/products/products_dlv/02.png"},{title:"可视化编辑器",desc:"画布、可视化界面编辑器和所见及所得的大屏编辑区域，是数据湖可视化最主要的功能区域。用户通过画布可实现对组件布局编排、样式配置以及数据源与图表之间绑定",img:"/images/products/products_dlv/03.png"},{title:"公开与加密发布",desc:"开发过程支持预览，开发完成后可支持公开与加密发布",img:"/images/products/products_dlv/04.png"}]}}},l=(n(510),n(14)),component=Object(l.a)(e,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"p-products"},[c("products-banner",{attrs:{"banner-key":"dlv"}}),t._v(" "),c("products-graphic-matrix",{attrs:{"matrix-key":"dlv"}}),t._v(" "),c("products-pmScene",{attrs:{pmScene:t.pmScene}}),t._v(" "),c("products-pmDotCon",{attrs:{pmDotConTil:t.pmDotConTil01,pmDotCon:t.pmDotCon01}})],1)}),[],!1,null,null,null);c.default=component.exports;installComponents(component,{ProductsBanner:n(397).default,ProductsGraphicMatrix:n(396).default})}}]);