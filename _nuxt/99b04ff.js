(window.webpackJsonp=window.webpackJsonp||[]).push([[56,23,24,25,27],{410:function(t,e,n){t.exports=n.p+"img/check.108f54e.svg"},411:function(t,e,n){},412:function(t,e,n){},413:function(t,e,n){},420:function(t,e,n){},425:function(t,e,n){"use strict";n(411)},426:function(t,e,n){"use strict";n(412)},427:function(t,e,n){"use strict";n(413)},431:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{desc:function(){return this.data.desc||""},list:function(){return this.data.list||""},title:function(){return this.data.title||""}}},r=(n(425),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-recommend"},[e("div",{staticClass:"wp m-recommend-content",class:t.title?"u-shadow":""},[e("div",{staticClass:"m-title"},[e("h2",[t._v(t._s(t.title?t.title:"场景推荐"))]),t._v(" "),t.desc?e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]):t._e()]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(c,i){return e("div",{key:i,staticClass:"u-item"},[e("div",{staticClass:"u-txt"},[e("span",{staticClass:"u-title"},[t._v(t._s(c.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(c.desc)}}),t._v(" "),c.tag?e("div",{staticClass:"m-tag"},t._l(c.tag,(function(c,r){return e("span",{key:r,staticClass:"u-tag"},[e("img",{staticClass:"u-img",attrs:{src:n(410)}}),t._v(" "),e("span",[t._v(t._s(c))])])})),0):t._e()]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:"",target:"_blank"}},[t._v("立即咨询")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},432:function(t,e,n){"use strict";n.r(e);var c={props:["data","index"],emits:["change"],computed:{list:function(){return this.data||[]}},methods:{change:function(i){this.$emit("change",i)},active:function(i){return this.index===i?"active":""}}},r=(n(426),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-tabs"},[e("div",{staticClass:"wp m-tabs-content"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",class:t.active(i),on:{click:function(e){return t.change(i)}}},[t._v("\n            "+t._s(n)+"\n        ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,n){"use strict";n.r(e);n(251);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},link:function(){return this.data.link||""},type:function(){return this.data.type||""}}},r=(n(427),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:t.link,target:"_blank"}},[t._v("立即咨询")])])])}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,n){"use strict";n(420)},435:function(t,e,n){"use strict";n.r(e);n(41);var c={props:["data"],computed:{img:function(){return this.data.img||""},scene:function(){return this.data.scene||""},advantage:function(){return this.data.advantage||[]},recommend:function(){return this.data.recommend||[]}}},r=(n(434),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-programme"},[e("div",{staticClass:"wp m-programme-content"},[e("div",{staticClass:"u-img-box"},[e("img",{staticClass:"u-img",attrs:{src:t.img}})]),t._v(" "),e("div",{staticClass:"m-programme-box"},[e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title u-scene"},[t._v("方案场景")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.scene))])]),t._v(" "),e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title"},[t._v("方案优势")]),t._v(" "),e("div",{staticClass:"m-list"},t._l(t.advantage,(function(c,i){return e("div",{key:i,staticClass:"u-item"},[e("img",{staticClass:"u-img",attrs:{src:n(410)}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",{staticClass:"u-label"},[t._v(t._s(c.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(c.desc))])])])})),0)]),t._v(" "),e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title"},[t._v("推荐产品")]),t._v(" "),e("div",{staticClass:"m-product"},t._l(t.recommend,(function(n,i){return e("div",{key:i,staticClass:"u-product"},[e("img",{staticClass:"u-img",attrs:{src:n.icon}}),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.name))])])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},491:function(t,e,n){},587:function(t,e,n){t.exports=n.p+"img/marketing.ef50d33.png"},588:function(t,e,n){t.exports=n.p+"img/ai.1b9f593.svg"},589:function(t,e,n){t.exports=n.p+"img/resources.241763e.png"},590:function(t,e,n){t.exports=n.p+"img/host.0d2bb41.svg"},591:function(t,e,n){t.exports=n.p+"img/administration.81e3d73.png"},592:function(t,e,n){t.exports=n.p+"img/desktop.f0c0f4c.svg"},593:function(t,e,n){t.exports=n.p+"img/finance.f5e0a46.png"},594:function(t,e,n){t.exports=n.p+"img/box.2cb688e.svg"},595:function(t,e,n){t.exports=n.p+"img/production.e51f0b6.png"},596:function(t,e,n){t.exports=n.p+"img/server.882e798.svg"},597:function(t,e,n){"use strict";n(491)},673:function(t,e,n){"use strict";n.r(e);var header=n(433),c=n(432),r=n(435),o=n(431),d={components:{Header:header.default,Tabs:c.default,Programme:r.default,Recommend:o.default},data:function(){return{title:"通用场景",header:{type:"common",title:"业务通用场景专区",desc:"为各个企业核心职能部门提供业务通用场景方案，助力开展云上业务，降本提效",link:""},tabs:["市场营销","人力资源","综合行政","资本财务","生产研发"],tabsIndex:0,content:[{programme:{img:n(587),scene:"市场营销部门需要对企业市场分布、产品优劣势、营销活动、市场渠道、以及品牌等内容进行分析以及进行决策判断、为企业提供更好的营销策略，借助各类营销产品工作，帮助企业完成更高的业绩目标，实现业务快速增长。",advantage:[{title:"降低营销成本",desc:"以点对点方式完成用户触达、降低获客成本"},{title:"品牌外宣提效",desc:"对外输出产品形态、企业形象；提高品牌知名度"},{title:"市场实况探究",desc:"以贴近消费者、市场前线的角色洞察行业动态、市场峰值"},{title:"智能营销决策",desc:"通过丰富的用户洞察模型和便捷的策略配置，完成消费者多维洞察分析和多渠道触达，助力企业实现用户增长"}],recommend:[{icon:n(588),name:"AI在线服务"}]},recommend:{desc:"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",list:[{title:"app拉新（企业通信）",desc:"APP新用户注册时直接以手机号为账号，获得用户授权后，直接完成...",tag:["号码认证服务","短信认证"]},{title:"用户触达（企业通信）",desc:"广泛应用于通知类场景，如验证码、外卖取货、直播开播提醒、医院工厂...",tag:["国内语音通知","国内短信套餐"]},{title:"企业形象展示（数字化营销）",desc:"利用DataV可视化大屏在项目路演、重大汇报时协助企业向外展现内部实...",tag:["DataV数据可视化","Quick Bi"]}]}},{programme:{img:n(589),scene:"核心为企业文化发展、人员招聘与配置 、员工职能培训 、绩效管理、薪资福利管理、劳动关系等范围提供更好的服务；借助更多的OA办公、智能化的服务 帮助企业更好地做人员储备和发展。",advantage:[{title:"线下部署困难",desc:"线下IDC部署缓慢，维护、拓展困难"},{title:"自建成本过高",desc:"中小企业，自建IDC成本过高"},{title:"运维简单",desc:"企业内部应用覆盖协同、营销、OA、ERP等管理系统，后期运维简单"},{title:"快速方便",desc:"全方位一站式地企业服务，可以低成本快速解决上云需求"},{title:"手工处理业务费时费力",desc:"智慧AI加持，业务便捷省力"}],recommend:[{icon:n(590),name:"专属主机"}]},recommend:{desc:"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",list:[{title:"身份核验（智慧AI）",desc:"不同业务场景中,利用自动录入身份证件信息+实人认证，快速实现用户注册...",tag:["实人认证","身份证识别"]},{title:"简历抽取（降本提效）",desc:"在面对大批量的简历信息时，利用印刷文字识别将图片转文本或同时利用自然...",tag:["高精版识别","自然语言处理"]}]}},{programme:{img:n(591),scene:"核心为企业的综合服务做保障，围绕公关任务、法律事务、会议管理、办公物业与制度管理、办公器具采购与管理、车辆管理等职能的场景服务；借助各类智能化服务等工具，帮企业更好地做好后勤保障工作。",advantage:[{title:"运维简单",desc:"企业内部应用覆盖协同、营销、OA、ERP等管理系统，后期运维简单"},{title:"快速方便",desc:"全方位一站式地企业服务，可以低成本快速解决上云需求"},{title:"网络易规划",desc:"混合云私网加密互连，避免暴露在公网增加不必要的安全风险"},{title:"项目协作缓慢",desc:"云上流程办公，加速业务周期"}],recommend:[{icon:n(592),name:"云桌面"}]}},{programme:{img:n(593),scene:"财务是一家企业核心的职能部门，围绕财务管理 、投资管理、融资管理等职能的场景服务；通过财务管理等，有效控制企业成本，帮助企业价值显性化。",advantage:[{title:"多样化的产品",desc:"丰富的产品品类，配合云市场强大拓展能力，为企业提供全生命周期服务"},{title:"知识产权服务",desc:"域名服务和商标注册服务全国领先，APP 软著支持无纸化全在线办理等等"},{title:"公司成立，资质速审",desc:"提供普通公司注册、云上公司注册及 ICP、EDI、网络文化经营许可、高新企业认定等各类资质服务。"},{title:"数据繁琐、手工作业复杂",desc:"智慧AI加持，节省人力资源，缩短作业周期"}],recommend:[{icon:n(594),name:"智能AI边缘盒子"}]}},{programme:{img:n(595),scene:"研发、技术、安全服务相关类场景，是一家企业建设必不可少的职能部门，对焦于企业基础建设、网络系统、各类产品研发、企业安全等服务场景；借助各类技术产品资源、帮助企业更稳定地持续发展。",advantage:[{title:"简单高效",desc:"配置简单，企业轻松接入"},{title:"企业成本降低",desc:"自动备份，减少运维成本，轻松恢复，降低故障开资"},{title:"备份稳定可靠",desc:"实现跨可用区或跨地域的实时复制，实现秒级RPO，分钟级RTO的高性能应用级容灾"}],recommend:[{icon:n(596),name:"弹性云服务器"}]},recommend:{desc:"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买",list:[{title:"防域名劫持",desc:"域名A的DNS解析结果IP1被恶意替换为IP2，导致A的访问失败。H...",tag:["云服务器"]},{title:"企业降成本",desc:"提供部署业务系统所需要的云计算服务资源与支持与多种云产品搭配使用，可...",tag:["云服务器","存储容量"]}]}}]}},computed:{current:function(){return this.content[this.tabsIndex]}},methods:{changeTab:function(i){this.tabsIndex=i}}},l=(n(597),n(14)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-scene"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-common-scene"},[e("Header",{attrs:{data:t.header}}),t._v(" "),e("Tabs",{attrs:{data:t.tabs,index:t.tabsIndex},on:{change:t.changeTab}}),t._v(" "),e("div",{staticClass:"wp m-common-content m-scene-content"},[t.current.programme?e("Programme",{attrs:{data:t.current.programme}}):t._e(),t._v(" "),t.current.recommend?e("Recommend",{attrs:{data:t.current.recommend}}):t._e()],1)],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(252).default,CommonFooter:n(253).default})}}]);