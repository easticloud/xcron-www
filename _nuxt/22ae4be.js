(window.webpackJsonp=window.webpackJsonp||[]).push([[71,34,35,38],{1010:function(t,e,n){},1098:function(t,e,n){"use strict";n(1010)},1139:function(t,e,n){"use strict";n.r(e);n(15),n(33);var header=n(460),c=n(459),r=n(474),l=n(458),d={components:{Header:header.default,Tabs:c.default,Programme:r.default,Recommend:l.default},head:function(){return{title:"通用场景"}},data:function(){return{keys:["market","resources","administration","finance","develop"],tabsIndex:0}},computed:{current:function(){return this.keys[this.tabsIndex]}},methods:{changeTab:function(i){this.tabsIndex=i}}},o=(n(1098),n(14)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-scene"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-common-scene"},[e("Header",{attrs:{"banner-key":"common"}}),t._v(" "),e("Tabs",{attrs:{textKey:"common",index:t.tabsIndex},on:{change:t.changeTab}}),t._v(" "),e("div",{staticClass:"wp m-common-content m-scene-content"},[e("Programme",{attrs:{textKey:t.current}}),t._v(" "),e("Recommend",{attrs:{textKey:t.current}})],1)],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(257).default,CommonFooter:n(258).default})},424:function(t,e,n){},425:function(t,e,n){},426:function(t,e,n){},435:function(t,e,n){"use strict";var c=n(11),r=n(5),l=n(3),d=n(134),o=n(17),m=n(13),v=n(261),f=n(44),_=n(93),h=n(260),C=n(4),y=n(94).f,x=n(32).f,k=n(16).f,I=n(440),N=n(262).trim,S="Number",A=r.Number,P=A.prototype,O=r.TypeError,T=l("".slice),E=l("".charCodeAt),w=function(t){var e=h(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,c,r,l,d,o,code,m=h(t,"number");if(_(m))throw O("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=N(m),43===(e=E(m,0))||45===e){if(88===(n=E(m,2))||120===n)return NaN}else if(48===e){switch(E(m,1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+m}for(d=(l=T(m,2)).length,o=0;o<d;o++)if((code=E(l,o))<48||code>r)return NaN;return parseInt(l,c)}return+m};if(d(S,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var K,R=function(t){var e=arguments.length<1?0:A(w(t)),n=this;return f(P,n)&&C((function(){I(n)}))?v(Object(e),n,R):e},F=c?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;F.length>L;L++)m(A,K=F[L])&&!m(R,K)&&k(R,K,x(A,K));R.prototype=P,P.constructor=R,o(r,S,R,{constructor:!0})}},440:function(t,e,n){var c=n(3);t.exports=c(1..valueOf)},445:function(t,e,n){},449:function(t){t.exports=JSON.parse('{"media":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"游戏出海加速","desc":"随之而来的跨国游戏 服务会带来游戏时延高、登陆困难、经常掉线等 游戏体验差的问题，全球同服成为了出海游戏加 速的刚需。出海游戏如何提供稳定访问能力、灵 活快速构建多地域就近访问游戏服服务器、游戏 资源内容安全分发下载能力是出海游戏厂商需 要具备的核心技术能力。"}]},"online":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"云上高并发Web架构","desc":"云上高并发Web架构和云产品选择，阐述资源弹性、应用监测、性能评估、流量防护、故障演练等的部署与应用。"},{"title":"云上高并发系统改造","desc":"在水平扩展阶段通过SLB挂nginx增加负载均衡扩展性，在数据库拆分阶段通过DRDS进行分库分表。"}]},"health":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"云上高并发Web架构","desc":"云上高并发Web架构和云产品选择，阐述资源弹性、应用监测、性能评估、流量防护、故障演练等的部署与应用。"},{"title":"云上高并发系统改造","desc":"在水平扩展阶段通过SLB挂nginx增加负载均衡扩展性，在数据库拆分阶段通过DRDS进行分库分表。"}]},"cloud":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"单机网站架构云化","desc":"很多客户最开始使用云的时候，会把云（服务器）简单地当成普通的物理服务器来使用，比如把应用系统、数据库和文件等都保存在同一台云服务器上。"},{"title":"云上网站经典架构","desc":"在创业型公司，新项目发布初期存在较大的不确定性，既要考虑项目未来的扩展性，又要衡量项目的运营成本。"},{"title":"小型互联网迁移上云","desc":"本方案主要适用于中小型互联网企业，云迁移的最佳实践。方案中会概述网络规划、服务器、数据库、存储数据、Kafka和镜像数据的迁移方案描述。"}]},"start":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"如何通过云建站模板快速建站","desc":"云 . 速成美站产品面向企业/个人提供的一款自助建站产品。预置海量模板，类PPT操作设计，便捷、低成本的解决您的建站问题。"},{"title":"五步完成企业官网建设","desc":"云·企业官网，建站只需五步，全程由客户经理和设计师为您提供全程一对一服务，在您首次进入后台提交需求并由设计师确认需求后，开启网站制作。"}]},"marketing":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"智能营销解决方案总体架构","desc":"本系统基于全量企业知识图谱，由企业查询、高级筛选、智能推荐等发现线索功能，及线索管理、客户管理、商机管理、合同管理、统计分析等CRM功能模块组成。"},{"title":"电商网站智能推荐","desc":"基于领先的大数据和人工智能技术，结合在电商行业的多年积累为开发者提供个性化推荐服务，提升商品购买率和转化率。"}]},"safe":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"传统企业业务上云基础安全防护","desc":"提供传统企业业务上云后，如何在云上构建网络安全、主机安全、入侵检测、运维审计等可实操最佳实践。"},{"title":"企业上云等保三级合规","desc":"云原生高性价比的等保三级最佳实践；在等保二级基础上，叠加必要的安全产品及高可用架构/满足三级要求。"},{"title":"电商网站业务安全","desc":"电商网站运营期间的安全防护，包括防爬风险管理、DDoS防御、风险管理产品的能力及操作。"}]},"market":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"app拉新（企业通信）","desc":"APP新用户注册时直接以手机号为账号，获得用户授权后，直接完成...","tag":["号码认证服务","短信认证"]},{"title":"用户触达（企业通信）","desc":"广泛应用于通知类场景，如验证码、外卖取货、直播开播提醒、医院工厂...","tag":["国内语音通知","国内短信套餐"]},{"title":"企业形象展示（数字化营销）","desc":"利用DataV可视化大屏在项目路演、重大汇报时协助企业向外展现内部实...","tag":["DataV数据可视化","Quick Bi"]}]},"resources":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"身份核验（智慧AI）","desc":"不同业务场景中,利用自动录入身份证件信息+实人认证，快速实现用户注册...","tag":["实人认证","身份证识别"]},{"title":"简历抽取（降本提效）","desc":"在面对大批量的简历信息时，利用印刷文字识别将图片转文本或同时利用自然...","tag":["高精版识别","自然语言处理"]}]},"develop":{"desc":"基于实际业务场景，为您精心推荐的爆款产品、产品组合购买","list":[{"title":"防域名劫持","desc":"域名A的DNS解析结果IP1被恶意替换为IP2，导致A的访问失败。H...","tag":["云服务器"]},{"title":"企业降成本","desc":"提供部署业务系统所需要的云计算服务资源与支持与多种云产品搭配使用，可...","tag":["云服务器","存储容量"]}]},"operators":{"title":"多种合作方案","list":[{"title":"助力运营商自身云化转型","desc":"1、运营商上云迁移咨询规划<br />2、FinTech等业务创新<br />3、提供多种部署方式的数字化转型与创新的云底座"},{"title":"使能运营商发展行业客户","desc":"1、运营商享有战略合作伙伴咨询转售权益，为企业提供优质云服务<br />2、开放行业生态，云网融合，做大运营商企业业务<br />3、多种支持和激励，助力运营商打造本地应用生态"},{"title":"打造自有品牌云服务","desc":"1、打造运营商自有独立品牌云，享受全栈能力，迭代升级保持技术领先<br />2、支持云联邦合作，优势互补<br />3、共享云产业技术与生态，规建维全领域合作"}]}}')},450:function(t,e,n){"use strict";n(424)},451:function(t){t.exports=JSON.parse('{"industry":["娱乐媒体","电商行业","医疗健康"],"enterprise":["企业上云","企业初创","企业营销","企业安全"],"common":["市场营销","人力资源","综合行政","资本财务","生产研发"]}')},452:function(t,e,n){"use strict";n(425)},453:function(t){t.exports=JSON.parse('{"industry":{"type":"industry","title":"行业应用场景专区","desc":"从电商、娱乐媒体、医疗行业维度出发，基于行业内的业务痛点，业务场景；为用户提供相应的爆款产品、产品组合购；更多行业持续更新中","link":""},"hot":{"type":"hot","title":"企业热门场景专区","desc":"我们为您的企业提供企业初创到营销、管理、业务拓展的全套上云解决方案，助力业务快速发展","link":""},"enterprise":{"type":"enterprise","title":"企业通用场景专区","desc":"我们为您的企业提供企业初创到营销、管理、业务拓展的全套上云解决方案，助力业务快速发展","link":""},"common":{"type":"common","title":"业务通用场景专区","desc":"为各个企业核心职能部门提供业务通用场景方案，助力开展云上业务，降本提效","link":""}}')},454:function(t,e,n){"use strict";n(426)},458:function(t,e,n){"use strict";n.r(e);var c=n(449),r={props:{textKey:{type:String,default:""}},computed:{data:function(){return c[this.textKey]||""},desc:function(){return this.data.desc||""},list:function(){return this.data.list||""},title:function(){return this.data.title||""}}},l=(n(450),n(14)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.data?e("div",{staticClass:"m-scene-recommend"},[e("div",{staticClass:"wp m-recommend-content",class:t.title?"u-shadow":""},[e("div",{staticClass:"m-title"},[e("h2",[t._v(t._s(t.title?t.title:"场景推荐"))]),t._v(" "),t.desc?e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]):t._e()]),t._v(" "),e("div",{staticClass:"m-box"},t._l(t.list,(function(c,i){return e("div",{key:i,staticClass:"u-item"},[e("div",{staticClass:"u-txt"},[e("span",{staticClass:"u-title"},[t._v(t._s(c.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(c.desc)}}),t._v(" "),c.tag?e("div",{staticClass:"m-tag"},t._l(c.tag,(function(c,r){return e("span",{key:r,staticClass:"u-tag"},[e("img",{staticClass:"u-img",attrs:{src:n(432)}}),t._v(" "),e("span",[t._v(t._s(c))])])})),0):t._e()]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:"",target:"_blank"}},[t._v("立即咨询")])])})),0)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);n(435);var c=n(451),r={props:{textKey:{type:String,default:""},index:{type:String||Number,default:"1"}},emits:["change"],computed:{list:function(){return c[this.textKey]||[]}},methods:{change:function(i){this.$emit("change",i)},active:function(i){return this.index===i?"active":""}}},l=(n(452),n(14)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-tabs"},[e("div",{staticClass:"wp m-tabs-content"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",class:t.active(i),on:{click:function(e){return t.change(i)}}},[t._v("\n            "+t._s(n)+"\n        ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,n){"use strict";n.r(e);n(182);var c=n(453),r={props:{bannerKey:{type:String,default:""}},computed:{data:function(){return c[this.bannerKey]||{}},title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},link:function(){return this.data.link||""},type:function(){return this.data.type||""}}},l=(n(454),n(14)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:t.link,target:"_blank"}},[t._v("立即咨询")])])])}),[],!1,null,null,null);e.default=component.exports},465:function(t){t.exports=JSON.parse('{"media":{"img":"scene/industry/media.png","scene":"一站式解决方案，可以解决“网络不稳定拥塞、单线源站、突发流量等因素”导致的响应慢、丢包、服务不稳定等问题，实现用户体验的飞跃提升。","advantage":[{"title":"稳定极速","desc":"2800+全球节点，150T带宽资源，六大洲覆盖，国内主流运营商支持"},{"title":"高效智能","desc":"加速方案更智能，多种分发策略，边缘缓存、较优路由、压缩传输，访问效率提升60%"},{"title":"便携接入","desc":"站点无需动静态内容拆分加速，一键接入解决网络拥塞，提高访问成功率"}],"recommend":[{"icon":"scene/industry/quicken.svg","name":"全站加速"}]},"online":{"img":"scene/industry/commerce.png","scene":"灵活且具备弹性的系统部署的基础架构，可以充分应对大促期间高并发时带来的种种问题。可灵活扩容，缩容。具备平日运营成本可控，大促短时扩容的能力，对比传统按峰值规划的系统可大幅降低成本。","advantage":[{"title":"分钟级扩缩容","desc":"前端应用实现分钟级扩缩容，可根据流量情况自动化适配需要的计算资源。"},{"title":"数据库扩容","desc":"通过读写分离能力，实现只读业务的线性扩容，并大幅提升OLTP业务的并发承载能力。"},{"title":"多级缓存","desc":"通过缓存数据与消息队列，实现应用解耦与多级缓存，降低核心业务的负载压力，保障系统平稳运行。"},{"title":"监控与流控","desc":"实时的系统性能监控大盘，系统健康状态了然于胸，轻松接入流控模块，确保流量安全可控。"},{"title":"端到端压测","desc":"提供从网络层到后端服务的端到端压测能力，系统容量一清二楚。"}],"recommend":[{"icon":"scene/industry/quicken.svg","name":"全站加速"}]},"health":{"img":"scene/industry/health.png","scene":"通过云上的弹性扩容能力，高效应对放号高峰频繁查询和预约抢号带来的高并发峰值，保障系统稳定性，带来较佳的用户体验。","advantage":[{"title":"超强弹性","desc":"分钟级弹性可支持应用服务器随业务增加扩展。避免系统宕机。"},{"title":"超强稳定","desc":"高可靠性的应用服务架构于数据库服务，确保应用环境多重备份，保障稳定。"},{"title":"多级缓存","desc":"多种缓存技术充分降低数据库压力。确保数据库服务的可用性。"}],"recommend":[{"icon":"scene/industry/server.svg","name":"弹性云服务器"}]},"cloud":{"img":"scene/enterprise/cloud.png","scene":"云上网站标准化部署：通过云上部署计算、数据、存储等模块实现业务系统上云，满足未来可灵活的延展性和较低的运营成本。云上独立业务系统部署：对于典型行业的独立系统实现云上部署，云化的高可用架构保障业务运行稳定。","advantage":[{"title":"高并发","desc":"负载均衡，云数据库性能可达社区版3倍"},{"title":"高可用","desc":"消除业务单点故障，主备秒级切换"},{"title":"高弹性","desc":"压测预估资源量，弹性伸缩扩容"}],"recommend":[{"icon":"scene/enterprise/server.svg","name":"弹性云服务器"}]},"start":{"img":"scene/enterprise/start.png","scene":"全托管建站服务，为您提供APP，小程序，网站全套的线上企业站式和营销平台，一家供应商，一套业务系统，满足线上企业展示所需。","advantage":[{"title":"简单高效","desc":"无需为了不同的客户端对接多个开发商，一次沟通，一次投入"},{"title":"量身打造","desc":"提供1V1的策划咨询和开发设计服务，根据用户需求量体裁衣"},{"title":"节本增效","desc":"全功能定制，多端部署，统一平台。一次沟通，一次采购，一次开发，一次交付"}],"recommend":[{"icon":"scene/enterprise/start.svg","name":"定制建站"}]},"marketing":{"img":"scene/enterprise/marketing.png","scene":"围绕用户全生活场景的智能营销解决方案，基于用户行为大数据分析，结合智能科技提升营销自动化水平。通过在APP中接入生活场景服务，激活存量用户，促进产品二次销售，实现业务快速增长。","advantage":[{"title":"拉新留存","desc":"快速获取新用户，并增加用户粘性，预防流失"},{"title":"营销自动化","desc":"营销活动策划-准备-执行-分析，全链路高度自动化"},{"title":"智能营销","desc":"通过丰富的用户洞察模型和便捷的策略配置，完成消费者多维洞察分析和多渠道触达，助力企业实现用户增长"}],"recommend":[{"icon":"scene/enterprise/marketing.svg","name":"移动分析"}]},"safe":{"img":"scene/enterprise/security.png","scene":"配置安全产品后，可实现自动的流量清洗，主机安全，防篡改等能力，并且满足国家信息安全法合规要求。","advantage":[{"title":"防护能力极强","desc":"可以有效识别Web业务流量的恶意特征，避免网站服务器被恶意入侵导致服务器性能异常等问题"},{"title":"防护措施全面","desc":"整套安全方案覆盖各种业务环节众多应用场景，从网络层，应用层，主机层各环节建筑安全长城，告别各种渠道来源的安全隐患"},{"title":"便捷部署","desc":"一键部署防护，极大降低人力成本，防护无忧"}],"recommend":[{"icon":"scene/enterprise/security.svg","name":"终端安全防护"},{"icon":"scene/enterprise/cloud.svg","name":"云防火墙"}]},"market":{"img":"scene/common/marketing.png","scene":"市场营销部门需要对企业市场分布、产品优劣势、营销活动、市场渠道、以及品牌等内容进行分析以及进行决策判断、为企业提供更好的营销策略，借助各类营销产品工作，帮助企业完成更高的业绩目标，实现业务快速增长。","advantage":[{"title":"降低营销成本","desc":"以点对点方式完成用户触达、降低获客成本"},{"title":"品牌外宣提效","desc":"对外输出产品形态、企业形象；提高品牌知名度"},{"title":"市场实况探究","desc":"以贴近消费者、市场前线的角色洞察行业动态、市场峰值"},{"title":"智能营销决策","desc":"通过丰富的用户洞察模型和便捷的策略配置，完成消费者多维洞察分析和多渠道触达，助力企业实现用户增长"}],"recommend":[{"icon":"scene/common/ai.svg","name":"AI在线服务"}]},"resources":{"img":"scene/common/resources.png","scene":"核心为企业文化发展、人员招聘与配置 、员工职能培训 、绩效管理、薪资福利管理、劳动关系等范围提供更好的服务；借助更多的OA办公、智能化的服务 帮助企业更好地做人员储备和发展。","advantage":[{"title":"线下部署困难","desc":"线下IDC部署缓慢，维护、拓展困难"},{"title":"自建成本过高","desc":"中小企业，自建IDC成本过高"},{"title":"运维简单","desc":"企业内部应用覆盖协同、营销、OA、ERP等管理系统，后期运维简单"},{"title":"快速方便","desc":"全方位一站式地企业服务，可以低成本快速解决上云需求"},{"title":"手工处理业务费时费力","desc":"智慧AI加持，业务便捷省力"}],"recommend":[{"icon":"scene/common/host.svg","name":"专属主机"}]},"administration":{"img":"scene/common/administration.png","scene":"核心为企业的综合服务做保障，围绕公关任务、法律事务、会议管理、办公物业与制度管理、办公器具采购与管理、车辆管理等职能的场景服务；借助各类智能化服务等工具，帮企业更好地做好后勤保障工作。","advantage":[{"title":"运维简单","desc":"企业内部应用覆盖协同、营销、OA、ERP等管理系统，后期运维简单"},{"title":"快速方便","desc":"全方位一站式地企业服务，可以低成本快速解决上云需求"},{"title":"网络易规划","desc":"混合云私网加密互连，避免暴露在公网增加不必要的安全风险"},{"title":"项目协作缓慢","desc":"云上流程办公，加速业务周期"}],"recommend":[{"icon":"scene/common/desktop.svg","name":"云桌面"}]},"finance":{"img":"scene/common/finance.png","scene":"财务是一家企业核心的职能部门，围绕财务管理 、投资管理、融资管理等职能的场景服务；通过财务管理等，有效控制企业成本，帮助企业价值显性化。","advantage":[{"title":"多样化的产品","desc":"丰富的产品品类，配合云市场强大拓展能力，为企业提供全生命周期服务"},{"title":"知识产权服务","desc":"域名服务和商标注册服务全国领先，APP 软著支持无纸化全在线办理等等"},{"title":"公司成立，资质速审","desc":"提供普通公司注册、云上公司注册及 ICP、EDI、网络文化经营许可、高新企业认定等各类资质服务。"},{"title":"数据繁琐、手工作业复杂","desc":"智慧AI加持，节省人力资源，缩短作业周期"}],"recommend":[{"icon":"scene/common/box.svg","name":"智能AI边缘盒子"}]},"develop":{"img":"scene/common/production.png","scene":"研发、技术、安全服务相关类场景，是一家企业建设必不可少的职能部门，对焦于企业基础建设、网络系统、各类产品研发、企业安全等服务场景；借助各类技术产品资源、帮助企业更稳定地持续发展。","advantage":[{"title":"简单高效","desc":"配置简单，企业轻松接入"},{"title":"企业成本降低","desc":"自动备份，减少运维成本，轻松恢复，降低故障开资"},{"title":"备份稳定可靠","desc":"实现跨可用区或跨地域的实时复制，实现秒级RPO，分钟级RTO的高性能应用级容灾"}],"recommend":[{"icon":"scene/common/server.svg","name":"弹性云服务器"}]}}')},466:function(t,e,n){"use strict";n(445)},474:function(t,e,n){"use strict";n.r(e);n(41);var c=n(465),r={props:{textKey:{type:String,default:""}},computed:{data:function(){return c[this.textKey]||""},img:function(){return this.data.img||""},scene:function(){return this.data.scene||""},advantage:function(){return this.data.advantage||[]},recommend:function(){return this.data.recommend||[]}}},l=(n(466),n(14)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.data?e("div",{staticClass:"m-scene-programme"},[e("div",{staticClass:"wp m-programme-content"},[e("div",{staticClass:"u-img-box"},[e("img",{staticClass:"u-img",attrs:{src:n(399)("./".concat(t.img))}})]),t._v(" "),e("div",{staticClass:"m-programme-box"},[e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title u-scene"},[t._v("方案场景")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.scene))])]),t._v(" "),e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title"},[t._v("方案优势")]),t._v(" "),e("div",{staticClass:"m-list"},t._l(t.advantage,(function(c,i){return e("div",{key:i,staticClass:"u-item"},[e("img",{staticClass:"u-img",attrs:{src:n(432)}}),t._v(" "),e("div",{staticClass:"u-txt"},[e("span",{staticClass:"u-label"},[t._v(t._s(c.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(c.desc))])])])})),0)]),t._v(" "),e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title"},[t._v("推荐产品")]),t._v(" "),e("div",{staticClass:"m-product"},t._l(t.recommend,(function(c,i){return e("div",{key:i,staticClass:"u-product"},[e("img",{staticClass:"u-img",attrs:{src:n(399)("./".concat(c.icon))}}),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(c.name))])])})),0)])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);