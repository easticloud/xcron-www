(window.webpackJsonp=window.webpackJsonp||[]).push([[51,18,19,20,22],{396:function(t,e,n){},397:function(t,e,n){},399:function(t,e,n){"use strict";n(396)},400:function(t,e,n){},401:function(t,e,n){},406:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},type:function(){return this.data.type||""}}},l=(n(399),n(14)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-programme-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])])])}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){"use strict";n(397)},408:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""}},methods:{background:function(img){return{backgroundImage:"url(".concat(img,")")}}}},l=(n(407),n(14)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-all-text"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-list wp",class:t.type?"u-".concat(t.type):""},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",style:n.img?t.background(n.img):""},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,n){"use strict";n(400)},413:function(t,e,n){"use strict";n(401)},418:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""}},methods:{background:function(t){if(t)return t.background?{backgroundColor:"#f8f8f8"}:""}}},l=(n(412),n(14)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-icon-text",style:t.background(t.data)},[e("h2",[t._v(t._s(t.title))]),t._v(" "),t.desc?e("div",{staticClass:"m-desc wp"},[e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])]):t._e(),t._v(" "),e("div",{staticClass:"m-list wp",class:t.type?"u-".concat(t.type):""},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[n.icon?e("img",{staticClass:"u-img",attrs:{src:n.icon}}):t._e(),t._v(" "),e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},img:function(){return this.data.img||""},list:function(){return this.data.list||[]}}},l=(n(413),n(14)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-text-picture"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-cont wp"},[e("div",{staticClass:"m-list"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0),t._v(" "),e("img",{staticClass:"u-img",attrs:{src:t.img}})])])}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,n){},531:function(t,e,n){t.exports=n.p+"img/img.72ed5d9.png"},532:function(t,e,n){"use strict";n(471)},659:function(t,e,n){"use strict";n.r(e);var header=n(406),c=n(418),l=n(419),r=n(408),d={components:{Header:header.default,IconText:c.default,TextPicture:l.default,AllText:r.default},data:function(){return{header:{type:"finance",title:"金融行业解决方案",desc:"通过金融专区、专属云安全合规部署和全栈技术创新，助力金融客户业务敏捷创新、智能升级等数字化转型目标。"},trend:{title:"行业趋势",img:n(531),list:[{title:"金融行业趋势",desc:"近年来，随着云计算、大数据、物联网、人工智能的快速发展，推动着传统金融行业进行深刻的业务变革，金融科技对传统金融进行着全业务流程的重塑，将会极大改变行业格局，为用户带来全新的业务体验"},{title:"金融监管趋严",desc:"金融行业强监管的一个重要原因是要保障金融业务的安全、稳定运行，保障业务的连续性，所以从监管的角度，对承载业务的IT基础设施将会有更严格的要求"},{title:"业务创新驱动",desc:"随着移动互联网技术的发展，互联网金融模式表现出很强的创新性和竞争力，导致传统金融行业越来越面临来自互联网金融的压力，传统金融要想在竞争中赢得胜利，必须进行快速的业务创新，通过创新提升竞争力"}]},advantages:{title:"方案优势",type:"half",list:[{title:"行业隔离，安全合规部署",desc:"在北京、上海等多地提供具备A类机房的金融专区部署模式，满足行业隔离，通过等保四、可信云等权威认证，满足行业合规部署和自主可信建设要求。"},{title:"全栈安全防护，保障保险客户数据安全",desc:"全球50+权威认证，1000+安全规则，7×24小时持续监控和危机响应，主动消减99%以上的安全威胁和攻击，为金融客户提供不间断安全保障。"},{title:"基础设施全面升级，提供极致性能体验",desc:"基于自研硬件实现计算、存储、网络的全面加速，网络包转发率达到1000万PPS,内网带宽达到40Gbps，存储50-100μs的低时延，满足金融业务对极致性能的要求。"},{title:"全栈金融FinTech，满足业务创新驱动",desc:"丰富的AI服务、一站式AI开发平台、智能数据湖、IoT、区块链等多样领先技术，助力金融客户持续提升效率、优化运营，快速实现业务创新。"}]},mode:{title:"部署方式",type:"card",list:[{title:"金融专区",desc:"金融专区在北上深A类机房规划建设，通过等保四认证、符合JR/T 0071-2012等权威认证，与非金融行业物理隔离，满足金融合规监管要求、遵循行业规范，为金融行业构筑安全合规可靠的业务基座"},{title:"专属云",desc:"全栈专属云为大中型金融机构提供计算、存储、网络和云服务管控平台完全物理隔离的专属云服务，满足大中型金融建构全业务云上部署，满足金融行业严监管要求"},{title:"标准公有云",desc:"公有云满足金融行业弱监管类业务云上部署需求，满足业务云上资源按需开通，端到端降低使用成本，通过高可用架构和全方位的安全防护，保障金融业务的高可用部署和业务的安全防护>"}]}}}},o=(n(532),n(14)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-programme"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-programme-content"},[e("Header",{attrs:{data:t.header}}),t._v(" "),e("TextPicture",{attrs:{data:t.trend}}),t._v(" "),e("AllText",{attrs:{data:t.advantages}}),t._v(" "),e("IconText",{attrs:{data:t.mode}})],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(251).default,CommonFooter:n(252).default})}}]);