(window.webpackJsonp=window.webpackJsonp||[]).push([[54,17,18,21,25],{398:function(t,e,n){},399:function(t,e,n){},407:function(t,e,n){"use strict";n(398)},409:function(t,e,n){},410:function(t,e,n){t.exports=n.p+"img/check.108f54e.svg"},411:function(t,e,n){},414:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},type:function(){return this.data.type||""}}},r=(n(407),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-programme-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])])])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){"use strict";n(399)},416:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""}},methods:{background:function(img){return{backgroundImage:"url(".concat(img,")")}}}},r=(n(415),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-all-text"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-list wp",class:t.type?"u-".concat(t.type):""},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",style:n.img?t.background(n.img):""},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";n(409)},425:function(t,e,n){"use strict";n(411)},430:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},img:function(){return this.data.img||""},list:function(){return this.data.list||[]}}},r=(n(424),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-text-picture"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-cont wp"},[e("div",{staticClass:"m-list"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0),t._v(" "),e("img",{staticClass:"u-img",attrs:{src:t.img}})])])}),[],!1,null,null,null);e.default=component.exports},431:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{desc:function(){return this.data.desc||""},list:function(){return this.data.list||""},title:function(){return this.data.title||""}}},r=(n(425),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-recommend"},[e("div",{staticClass:"wp m-recommend-content",class:t.title?"u-shadow":""},[e("div",{staticClass:"m-title"},[e("h2",[t._v(t._s(t.title?t.title:"场景推荐"))]),t._v(" "),t.desc?e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]):t._e()]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(c,i){return e("div",{key:i,staticClass:"u-item"},[e("div",{staticClass:"u-txt"},[e("span",{staticClass:"u-title"},[t._v(t._s(c.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(c.desc)}}),t._v(" "),c.tag?e("div",{staticClass:"m-tag"},t._l(c.tag,(function(c,r){return e("span",{key:r,staticClass:"u-tag"},[e("img",{staticClass:"u-img",attrs:{src:n(410)}}),t._v(" "),e("span",[t._v(t._s(c))])])})),0):t._e()]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:"",target:"_blank"}},[t._v("立即咨询")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},451:function(t,e,n){t.exports=n.p+"img/2-1.d5b07b1.svg"},452:function(t,e,n){t.exports=n.p+"img/2-2.d386272.svg"},453:function(t,e,n){t.exports=n.p+"img/2-3.5735f06.svg"},454:function(t,e,n){t.exports=n.p+"img/2-4.0a073dc.svg"},489:function(t,e,n){},567:function(t,e,n){t.exports=n.p+"img/img.a7ebbbf.svg"},568:function(t,e,n){"use strict";n(489)},671:function(t,e,n){"use strict";n.r(e);var header=n(414),c=n(430),r=n(431),l=n(416),o={components:{Header:header.default,TextPicture:c.default,Recommend:r.default,AllText:l.default},head:function(){return{title:"运营商行业解决方案"}},data:function(){return{header:{type:"operators",title:"运营商行业解决方案",desc:"结合多年来的 ICT行业经验，可以提供更适合运营商的业务云化转型方案以及面向运营商企业客户的行业数字化方案，帮助运营商加速网络变现，业务创新，运营敏捷，取得新增长。"},trend:{title:"行业趋势",img:n(567),list:[{title:"CT与IT融合",desc:"电信行业的云转型已进入深水区，机遇和挑战加速来临。只有建设并运营高效敏捷的ICT基础设施，运营商才能提供有竞争力的业务，抓住新市场、实现新增长<br />运营商的云化转型应该是基于CT，以云为辅助。要从电信行业自身优势出发，利用云化转型来放大电信网络和电信业务的价值，释放联接红利"},{title:"云网融合",desc:"运营商在提供云网协同服务方面具有领先优势，能够为toB客户提供更好的业务体验、更全面的服务组合，从而提升toB业务收入规模、扩大在垂直行业中的影响力、打开新的增长空间"}]},advantages:{title:"方案优势",list:[{img:n(451),title:"云化转型最佳实践",desc:"● 同时提供电信业务软件，理解电信软件云需求<br />● 移动金融等电信业务创新实践沉淀<br />● 沉淀全行业AI大数据在创新应用经验，高效的云原生开发生产线"},{img:n(452),title:"加速释放联接红利",desc:"● ICT native 的厂家，更懂电信网络<br /> ● 基于云来扩大网络价值的能力<br />● 云网边端协同在政企市场网络变现的最佳实践"},{img:n(453),title:"更卓越的运营和体验",desc:"● 网络规划，网络自动驾驶等领域算法模型在云上沉淀<br /> ● 已为60+运营商实施上云规划与迁移提升业务体验与效率<br />● 业务上云预集成预验证，业界最全的部署形态"},{img:n(454),title:"一站式的本地服务",desc:"● 服务网点全球覆盖170个国家，抵近服务客户<br /> ● 运营商享有战略合作伙伴权益<br />● 在技术、方案、生态，市场等多领域服务与支持"}]},cooperation:{title:"多种合作方案",list:[{title:"助力运营商自身云化转型",desc:"1、运营商上云迁移咨询规划<br />2、FinTech等业务创新<br />3、提供多种部署方式的数字化转型与创新的云底座"},{title:"使能运营商发展行业客户",desc:"1、运营商享有战略合作伙伴咨询转售权益，为企业提供优质云服务<br />2、开放行业生态，云网融合，做大运营商企业业务<br />3、多种支持和激励，助力运营商打造本地应用生态"},{title:"打造自有品牌云服务",desc:"1、打造运营商自有独立品牌云，享受全栈能力，迭代升级保持技术领先<br />2、支持云联邦合作，优势互补<br />3、共享云产业技术与生态，规建维全领域合作"}]}}}},d=(n(568),n(14)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-programme"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-programme-content"},[e("Header",{attrs:{data:t.header}}),t._v(" "),e("TextPicture",{attrs:{data:t.trend}}),t._v(" "),e("AllText",{attrs:{data:t.advantages}}),t._v(" "),e("div",{staticClass:"m-more"},[e("Recommend",{attrs:{data:t.cooperation}})],1)],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(252).default,CommonFooter:n(253).default})}}]);