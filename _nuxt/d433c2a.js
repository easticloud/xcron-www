(window.webpackJsonp=window.webpackJsonp||[]).push([[45,8,10,18],{393:function(t,e,n){},395:function(t,e,n){},396:function(t,e,n){"use strict";n(393)},397:function(t,e,n){"use strict";n.r(e);var c=n(392),l={props:{bannerKey:{type:String,default:""}},computed:{data:function(){return c.c[this.bannerKey]||{}}}},r=(n(396),n(14)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-banner",style:"backgroundImage: url(".concat(t.data.img,")")},[e("div",{staticClass:"m-banner-content"},[e("h2",{staticClass:"u-banner__title"},[t._v(t._s(t.data.title))]),t._v(" "),e("p",{staticClass:"u-banner__desc"},[t._v(t._s(t.data.desc))])])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n(395)},400:function(t,e,n){},402:function(t,e,n){"use strict";n.r(e);var c=n(32),l=n(392),r={props:{tabKey:{type:String,default:"ai"},customClass:{type:String,default:""}},data:function(){return{index:0}},computed:{children:function(){return this.data.children[this.index].children},data:function(){return l.e[this.tabKey]}},methods:{change:function(i){this.index=i}}},d=(n(399),n(14)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-scene",class:t.customClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.data.title))]),t._v(" "),t.data.children.length>1?e("div",{staticClass:"m-tabs"},t._l(t.data.children,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0):t._e(),t._v(" "),e("div",{staticClass:"m-Scontent"},[e("div",{staticClass:"m-item"},[e("span",{staticClass:"u-img"},[e("img",{attrs:{src:t.children.src}})]),t._v(" "),e("div",{staticClass:"u-con"},[e("p",{staticClass:"u-title"},[t._v("\n                        "+t._s(t.children.title)+"\n                        "),t.children.titletag?e("span",{staticClass:"u-titletag"},[t._v(t._s(t.children.titletag))]):t._e()]),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("p",{key:i,staticClass:"u-tag"},["object"===Object(c.a)(n)?[e("b",[t._v(t._s(n.title))]),t._v("\n                                    "+t._s(n.desc)+"\n                                ")]:[t._v("\n                                    "+t._s(n)+"\n                                ")]],2)})):t._e()],2)])])])])])}),[],!1,null,null,null);e.default=component.exports},405:function(t,e,n){"use strict";n(400)},406:function(t,e,n){"use strict";n.r(e);var c=n(392),l={props:{textKey:{type:String,default:"bcs"},customClass:String},computed:{data:function(){return c.a[this.textKey]}}},r=(n(405),n(14)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-p-aboutBCS",class:t.customClass},[e("div",{staticClass:"wp"},[e("h2",[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"m-bcs"},t._l(t.data.children,(function(n,c){return e("p",{key:c},[e("span",[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"tags"},[t._v(t._s(n.desc))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,n){},517:function(t,e,n){"use strict";n(471)},654:function(t,e,n){"use strict";n.r(e);var c={name:"products-HSS",layout:"products",data:function(){return{pmScene:{index:0,til:"应用场景",sceneClass:"m-Bms-scene",list:[{label:"满足等保合规",children:{title:"等保测评要求",titletag:"《网络安全法》第二十一条：国家实行网络安全等级保护制度。网络安全等级保护制度中对主机的入侵防范，恶意代码防范，漏洞扫描，都有明确要求。\n等保备案需要有企业主机安全的购买和使用记录，等保测评时需要测试企业的主机安全防护能力是否满足要求。",src:"/images/products/products_hss/s1.svg",tag:[{tagTil:"· 满足入侵防范条款",tagCon:"企业主机安全的入侵检测，漏洞管理功能满足等保的主机入侵防范条款。"},{tagTil:"· 满足恶意代码防范条款",tagCon:"企业主机安全的恶意程序检测，漏洞管理功能满足等保的恶意代码防范条款。"}]}},{label:"统一安全管理",children:{title:"统一安全管理",titletag:"提供统一的主机安全管理功能，帮助用户更方便地查看与处置云主机的安全事件，以及配置下发安全策，降低安全风险与管理运营成本。",src:"/images/products/products_hss/s2.svg",tag:[{tagTil:"· 跨云部署，统一管理",tagCon:"客户端支持混合云、私有云，其他云跨多平台部署，管理员统一进行安全管理与运营。"},{tagTil:"· 多操作系统",tagCon:"支持支持在Windows、Linux、Ubuntu、Debian、EulerOS:等多种操作系统的物理/虚拟主机上部署。"},{tagTil:"· 统一灵活的策略下发",tagCon:"旗舰版支持自定义检测策略配置与下发，能够为每组或每台主机灵活配置策略，便于精细化安全运营。"}]}},{label:"主动安全防御",children:{title:"主动风险预防及防御",titletag:"通过清点主机安全资产，管理主机漏洞与不安全配置，预防安全风险；通过网络、应用、文件主动防护引擎主动防御安全风险。",src:"/images/products/products_hss/s3.svg",tag:[{tagTil:"· 安全风险预防",tagCon:"识别主机的安全资产、软件漏洞以及关键配置，分析并管理其中的潜在安全风险，提前防范风险，有效减少主机90%被攻击面。"},{tagTil:"· 账户安全防护",tagCon:"通过先进快慢检测算法，全网威胁信息，双因子认证三位一体有效阻止账户暴力破解攻击；支持IP白名单配置，只允许白名单中IP登录主机。"},{tagTil:"· 应用运行认证",tagCon:"通过应用黑白名单及用户私有应用信誉库，确保主机上运行的应用程序安全可信。"},{tagTil:"· 文件完整性校",tagCon:"验提供系统关键文件变更检测及文件完整性校验，确保系统关键文件的安全可信；同时结合防篡改技术，可保证系统关键文件不被篡改。"}]}},{label:"黑客入侵检测",children:{title:"黑客入侵检测与响应",titletag:"提供主机全攻击路径检测能力，能够实时、准确地感黑客知入侵事件，并提供入侵事件的响应手段，对业务系统“零”影响，有效应对APT攻击等高级威胁。",src:"/images/products/products_hss/s4.svg",tag:[{tagTil:"· 勒索、挖矿程序查杀",tagCon:"提供病毒云查杀引擎，结合AI检测引擎，有效检出运行程序的勒索，挖矿，后门，木马等恶意程序，并提供一键隔离查杀功能。"},{tagTil:"· AI检测引擎",tagCon:"提供AI检测引擎及自研检测算法，有效提升恶意程序、网站后门（WebShell）等威胁的检出率。"},{tagTil:"· APT检测能力",tagCon:"以ATT＆CK模型为基础结合对抗APT攻击实践，提供主机全攻击路径检测能力，有效应对包括APT攻击内部的高级入侵行为。"}]}}]},pmSceneUseSTil:"重磅升级",pmSceneUseSTrue:!0,pmSceneUseS:{imgR:"imgR",title:"勒索病毒防治",imgSrc:"/images/products/products_hss/m1.png",titletag:"防勒索病毒是一个长期而持久的过程，企业主机安全 HSS升级2.0版本后，通过事前（安全体检与加固）、事中（主动防御）、事后（备份恢复）三部曲，为您防御勒索病毒的入侵，营造主机资产安全运行环境。",list:[{til:"· 事前：安全体检与加固",desc:"● 全方位检测服务器的资产、漏洞、基线、入侵风险，识别可能被勒索的高风险主机。\n● 即刻输出检测结果，让您快捷定位和处理风险。"},{til:"· 事中：主动防御",desc:"● 实时隔离查杀已知勒索病毒：通过云查杀检测并隔离查杀已知勒索病毒，防止病毒扩散蔓延。\n● 动静结合检测未知勒索病毒：通过放置动态诱饵快速检测异常加密行为，结合AI算法识别未知勒索文件，快速降低未知病毒的误报率。\n● 可信进程学习：通过机器学习完成可信进程的判定，进一步提高异常加密等进程识别能力。"},{til:"· 事后：备份恢复",desc:"● 主机安全提供定期对服务器进行备份的服务，服务器被勒索病毒入侵后，您可以通过云服务器备份进行数据恢复，降低勒索病毒给您带来的损失。"}]},pmSceneUseS01:{title:"应用防护",imgSrc:"/images/products/products_hss/m2.png",titletag:"应用防护功能旨在为运行时的应用提供安全防御。您无需修改应用程序文件，只需将探针注入到应用程序，即可为应用提供强大的安全防护能力。",list:[{til:"· 技术原理",desc:"通过动态代码注入技术在运行时将监控&保护代码（即探针）注入到应用程序的关键监控&保护点（即关键函数），探针根据预定义规则，结合通过保护点的数据、以及上下文环境（应用逻辑、配置、数据和事件流等），识别出攻击行为。"},{til:"· 实时检测",desc:"0 day漏洞检测、SQL注入、OS命令注入、XSS注入攻击、上传WebShell、反序列化输入、文件目录遍历等多种应用攻击行为。"}]}}}},l=(n(517),n(14)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-products"},[e("products-banner",{attrs:{"banner-key":"hss"}}),t._v(" "),e("products-frame-text",{attrs:{"text-key":"hss"}}),t._v(" "),e("products-tabs",{attrs:{data:t.pmScene}}),t._v(" "),e("products-tabsUseS",{attrs:{pmSceneUseS:t.pmSceneUseS,pmSceneUseSTil:t.pmSceneUseSTil,pmSceneUseSTrue:t.pmSceneUseSTrue,pmSceneUseS01:t.pmSceneUseS01}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsBanner:n(397).default,ProductsFrameText:n(406).default,ProductsTabs:n(402).default})}}]);