(window.webpackJsonp=window.webpackJsonp||[]).push([[56,18,19,20,21,22,28],{396:function(t,e,n){},397:function(t,e,n){},398:function(t,e,n){},399:function(t,e,n){"use strict";n(396)},400:function(t,e,n){},401:function(t,e,n){},404:function(t,e,n){},406:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},type:function(){return this.data.type||""}}},r=(n(399),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-programme-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])])])}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){"use strict";n(397)},408:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""}},methods:{background:function(img){return{backgroundImage:"url(".concat(img,")")}}}},r=(n(407),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-all-text"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-list wp",class:t.type?"u-".concat(t.type):""},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",style:n.img?t.background(n.img):""},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){"use strict";n(398)},411:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""},direction:function(){return this.data.direction?this.data.direction:"top"}},methods:{style:function(t){var e={};return t.bgImg&&(e.backgroundImage="url(".concat(t.bgImg,")")),t.position&&(e.backgroundPosition="center ".concat(t.position)),e}}},r=(n(409),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-picture-text",class:"u-".concat(t.direction)},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-list wp"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",class:t.type?"u-".concat(t.type):"",style:t.style(n)},[n.img?e("img",{staticClass:"u-img",attrs:{src:n.img}}):t._e(),t._v(" "),e("div",{staticClass:"m-text"},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])])})),0)])}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,n){"use strict";n(400)},413:function(t,e,n){"use strict";n(401)},415:function(t,e,n){"use strict";n(404)},418:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""}},methods:{background:function(t){if(t)return t.background?{backgroundColor:"#f8f8f8"}:""}}},r=(n(412),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-icon-text",style:t.background(t.data)},[e("h2",[t._v(t._s(t.title))]),t._v(" "),t.desc?e("div",{staticClass:"m-desc wp"},[e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])]):t._e(),t._v(" "),e("div",{staticClass:"m-list wp",class:t.type?"u-".concat(t.type):""},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[n.icon?e("img",{staticClass:"u-img",attrs:{src:n.icon}}):t._e(),t._v(" "),e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0)])}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{title:function(){return this.data.title||""},img:function(){return this.data.img||""},list:function(){return this.data.list||[]}}},r=(n(413),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-text-picture"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-cont wp"},[e("div",{staticClass:"m-list"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0),t._v(" "),e("img",{staticClass:"u-img",attrs:{src:t.img}})])])}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.r(e);var c={props:["data","index"],emits:["change"],computed:{list:function(){return this.data||[]}},methods:{change:function(i){this.$emit("change",i)},active:function(i){return this.index===i?"active":""}}},r=(n(415),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-tabs"},[e("div",{staticClass:"wp m-tabs-content"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item",class:t.active(i),on:{click:function(e){return t.change(i)}}},[t._v("\n            "+t._s(n)+"\n        ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){},556:function(t,e,n){"use strict";var c=n(2),r=n(92).findIndex,l=n(179),d="findIndex",o=!0;d in[]&&Array(1).findIndex((function(){o=!1})),c({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(d)},557:function(t,e,n){t.exports=n.p+"img/energy.075cb0d.png"},558:function(t,e,n){t.exports=n.p+"img/e3-1.2854f7b.svg"},559:function(t,e,n){t.exports=n.p+"img/e3-2.5474e84.svg"},560:function(t,e,n){t.exports=n.p+"img/e3-3.0a0a716.svg"},561:function(t,e,n){t.exports=n.p+"img/health.d6e82c5.jpg"},562:function(t,e,n){t.exports=n.p+"img/h3-1.1ccedc0.svg"},563:function(t,e,n){t.exports=n.p+"img/h3-2.5f68170.svg"},564:function(t,e,n){t.exports=n.p+"img/h3-3.a2500fc.svg"},565:function(t,e,n){t.exports=n.p+"img/education.170b5b0.jpg"},566:function(t,e,n){t.exports=n.p+"img/edu3-1.15080c5.svg"},567:function(t,e,n){t.exports=n.p+"img/edu3-2.4e59110.svg"},568:function(t,e,n){t.exports=n.p+"img/edu3-3.bc43edd.svg"},569:function(t,e,n){t.exports=n.p+"img/transport.8e496cf.jpg"},570:function(t,e,n){t.exports=n.p+"img/t3-1.bc96a1e.svg"},571:function(t,e,n){t.exports=n.p+"img/t3-2.689d7a3.svg"},572:function(t,e,n){t.exports=n.p+"img/t3-3.d28a845.svg"},573:function(t,e,n){"use strict";n(476)},664:function(t,e,n){"use strict";n.r(e);n(556),n(15),n(32);var header=n(406),c=n(421),r=n(419),l=n(408),d=n(411),o=n(418),f={components:{Header:header.default,Tabs:c.default,TextPicture:r.default,AllText:l.default,PictureText:d.default,IconText:o.default},data:function(){return{tabs:["能源","医疗健康","教育","交通物流"],keys:["energy","health","education","transport"],tabsIndex:0,headerList:[{type:"energy",title:"能源行业解决方案",desc:"能源企业逐步将云、大数据和人工智能技术广泛应用于生产、运输、配送和消费等环节，实现数据采集、业务监控、大数据处理分析、智能化的生产和运营。为能源企业提供端到端解决方案，通过云、AI、5G、IoT，助力能源企业实现高效生产，降本增效。"},{type:"health",title:"医疗健康行业解决方案",desc:"响应国家号召《健康中国2030规划纲要》，依托自身云服务能力，基于高性能、高可靠、高安全的数字化底座与业内顶级医疗合作伙伴一起，为医疗行业客户提供完善的医疗应用和服务体系。"},{type:"education",title:"教育行业解决方案",desc:"人工智能、大数据、区块链等技术迅猛发展，正在改变人才需求和教育形态。通过云计算、大数据、物联网、人工智能、实时音视频、VR等技术重构教育体系，面向高校、K12院校、政府机构、培训机构等客户提供人才培养、科研创新、智慧校园、在线教育等场景化解决方案，加快实现教育行业智能化转型，提升教育质量，促进教育公平公正。"},{type:"transport",title:"交通物流解决方案",desc:"以《交通强国建设纲要》为指引，依托云-边-端优势，面向交通物流行业中的城市交通、高速、物流、航空、港口等领域，构建“出行一张脸、运行一张图”的全程互联大交通体系，协同各种交通方式，提升运营服务效率，最终实现“人悦于行、物优其流”。"}],content:[{trend:{title:"行业趋势",img:n(557),list:[{title:"能源行业对算力要求不断提升",desc:"在能源行业积累大量的历史数据，如何从数据中挖掘价值，通过数据建模、3D可视化等方式对外提供服务，成为能源行业客户的普遍诉求"},{title:"人工智能技术逐步应用",desc:"传统能源行业属于劳动密集型行业，众多重复性工作场景需要投入大量人力，AI已逐步被越来越多的能源企业接受，逐步应用在能源业务生产环节中"},{title:"技术创新驱动能源发展",desc:"能源发展正在由主要依靠资源投入向创新驱动转变。科技、体制和发展模式创新将进一步推动能源清洁化、智能化发展，培育形成新产业和新业态"}]},advantages:{title:"方案优势",type:"half",list:[{title:"多种算力保证业务高效运行",desc:"针对能源行业数据量大，分析需求高的特点，提供鲲鹏等业界多种算力，满足能源行业处理软件的高效运行要求，助力业务数字化转型。"},{title:"服务租赁方式，降低初期投入成本",desc:"通过云服务租赁方式获取基础设施，降低初期投入成本，解决资源重复配置，业务得以快速开展，提高业务运行效率、收益回报率、助力业务成功。"},{title:"支持亿级海量连接，业务可靠性达99.9%",desc:"通过物联网平台，支持亿级海量连接，业务可靠性达99.9%，满足能源互联网海量连接需求，快速触达业务，为用户提供安全可靠的数据保障。"},{title:"云+AI提供设计、生产、物流、销售、服务全链式智能服务",desc:"基于AI、大数据等资源，加速能源行业数字化转型，打造行业智能化新引擎，加快工业的变革升级，创新业务模式，提升业务在能源行业的市场竞争力。"}]},scene:{title:"方案全景图",list:[{bgImg:n(558),title:"光伏云网",desc:"实现分布式电站的集中化、集约化，助力托管业务开展，提供从电站设备到智能运维的全系统智能化光伏云网解决方案，为客户带来更高收益、安全可靠的价值"},{bgImg:n(559),title:"智慧充电",desc:"为充电桩或电动汽车运营商提供建站选址、高效运维、自助充电和车辆分时租赁解决方案，支持运营商快速搭建车桩一体管理平台，完成资源的创建、配置和上线"},{bgImg:n(560),title:"电力数据平台",desc:"联合电力行业先进的软件服务商，为电力行业提供“微应用”+“大中台”+“强后台”电力数据平台解决方案，满足电力行业横向跨系统、纵向不同层级间数据共享、分析挖掘"}]}},{trend:{title:"行业趋势",img:n(561),list:[{title:"新技术加速行业进入精准医疗时代",desc:"医疗作为重要的民生支柱工程，历来受到国家领导和主要负责部委的高度关注，随着新技术的广泛应用，大健康产业正在快速进入精准医疗时代"},{title:"从传统诊疗到大健康服务的转变",desc:"随着分级诊疗、电子病历互联互通评级、智慧医院评级、全民健康平台、医保控费等政策的逐步落地，使医院的数据共享、双向转诊成为可能，为精准医疗提供了宝贵的数据资产"},{title:"从以医院为中心到以患者为中心的转变",desc:"借助移动智能终端的兴起，患者依靠移动医疗应用，可随时随地的自助进行自我健康管理，医疗机构也可以实时掌握患者健康状况，并且给出有针对性的健康建议，大幅提升患者就医体验的同时，也降低社会整体医疗支出"},{title:"从以治疗为主向预防为主转变",desc:"医疗服务从过去以疾病、治疗为中心向以预防为中心转变，随着国家卫生健康委员会和医保局的组建，优化了健康预防方面的资源配置和服务供给，为健康中国目标达成提供有力支撑"}]},advantages:{title:"方案优势",type:"half",list:[{title:"AI使能健康数据处理，构建精准医疗",desc:"基于语音识别、人脸识别、知识图谱等人工智能技术，帮助医疗企业构建智能化体系，基于医疗健康大数据分析，为患者提供精准就医、为医生提高就诊效率、为管理者提供决策支持。"},{title:"携手合作伙伴，共建智慧医疗云生态",desc:"联合医疗大健康领域主流软件厂家，通过严选解决方案、严选产品等模式，为医疗客户提供全场景、一站式解决方案，满足政府机构、医疗机构、医药企业、创新型医疗科技服务公司等不同客户的需求。"},{title:"基于多元化架构，满足医疗国产自主可控需求",desc:"基于鲲鹏处理器，推出鲲鹏云服务和解决方案，开启云上的多元新架构，为医疗企业提供更加多元化的云服务和解决方案，更好地满足医疗客户产业智能化和移动化的转型需求。"},{title:"全栈安全服务，满足医疗合规上云要求",desc:"从“芯”出发，打造全栈安全、合规的数字化医院平台，该平台通过等保四级备案和测评；公共云平台通过等保三级备案和测评，保障数字化医院的安全可信。"}]},scene:{title:"方案全景图",list:[{bgImg:n(562),title:"数字化医院解决方案",desc:"依托云计算、大数据等先进技术，助力医疗机构进行IT云化改造，打通数据底座，提升安全可靠性，实现医疗机构数字化转型和能力提升\t"},{bgImg:n(563),title:"医疗影像解决方案",desc:"影像医生紧缺，以中国为例影像医生缺口约90%，同时影像科工作量以20%左右的速度增加。提供一站式医疗影像解决方案，通过云、大数据、人工智能、物联网等技术帮助医生提高诊断效率、帮助患者提升就诊体验\t"},{bgImg:n(564),title:"医药云解决方案",desc:"医药云解决方案以“合规+医药AI”为基础，贯穿医药研发到配送的全流程，聚焦场景化方案，助力医药行业转型升级"}]}},{trend:{title:"行业趋势",img:n(565),list:[{title:"教育信息化2.0，教育优质均衡、教育体制创新",desc:"教育信息化2.0行动计划提出到2022年基本实现“三全两高一大”的发展目标，即教学应用覆盖全体教师、学习应用覆盖全体适龄学生、数字校园建设覆盖全体学校，信息化应用水平和师生信息素养普遍提高，建成“互联网+教育”大平台"},{title:"由基本均衡走向优质均衡",desc:"随着教育信息化建设和“三全两高一大”目标逐渐实现，教育质量提高和优质教育均衡发展成为当前教育最重要的目标，而教育质量的提高是为全体人民提供更均衡更充分的教育，使每个学生都能享受优质和个性化的教育"},{title:"智能引领教育创新",desc:"大数据、人工智能等技术的发展，正在重构传统课堂教学，改变学校形态、教学方式和学习方式：如借助大数据探索教育教学规律和学习者成长规律，用大数据支撑教育科学决策；借助人工智能等技术为学习者推荐个性化的学习资源，实现学习者的个性化学习等"},{title:"人才培养产学研深度融合",desc:"发展以职业需求为导向，以实践能力培养为重点，深化产教融合，校企合作及育训结合的多元化人才培养格局，推动企业深度参与协同育人"}]},mode:{title:"方案优势",type:"card",background:!0,list:[{title:"ICT领域优秀实践及完善的认证体系，助力产教融合",desc:"为校企提供100+真实的企业实践案例及ICT认证体系，结合企业级实践平台、专业课程体系、师资培养体系、1+X证书等，培养符合产业需求的数字化人才，助力区域经济发展"},{title:"多元架构+最佳通信体验，均衡教育资源",desc:"通过鲲鹏云服务等多元架构和最佳实时音视频体验，匹配多样教育场景下的算力、部署方式和实时音视频等需求，助力教育资源均衡"},{title:"大数据+AI，提升教学质量、科学决策",desc:"提供大数据和AI平台、视频识别、语音识别、内容审核等多种AI服务，联合伙伴打造教育大数据+AI应用，帮助学生减负增效、个性化学习，助力管理者更好地科学决策"}]},scene:{title:"方案全景图",list:[{bgImg:n(566),title:"高等教育",desc:"高教云中校园解决方案<br />人才培养云解决方案<br />高性能计算解决方案"},{bgImg:n(567),title:"基础教育",desc:"普教云中校园解决方案<br />区域教育云解决方案"},{bgImg:n(568),title:"线上教育",desc:"在线教育解决方案"}]}},{trend:{title:"行业趋势",img:n(569),list:[{title:"交通物流行业资讯",desc:"数字交通作为交通强国建设的支持关键，通过数据和人工智能驱动构建，驱动构建数字采集及网络传输的体系、交通基础设施全要素全周期数字化、天地一体交通智能控制网和智能出行服务按需获取的能力，支撑全国出行123交通圈、全球123快货物流圈"},{title:"交通强国建设纲要",desc:"建设世界前列的交通强国，基础设施布局完善，立体互联；交通装备先进/适用/可控；运输服务更便捷，舒适，经济，高效；安全保障更完善，可靠，反应快速；开放合作面向全球，互利共赢；绿色发展实现更节约/集约，低碳，环保；科技创新；治理体系更加完善"},{title:"数字交通发展建设纲要",desc:"主要包括三方面举措，一、数字化采集：交通基础设施全要素数字化；构建交通控制网基础云平台；推动自动驾驶，车路协同技术发展，园区/港口自动驾驶技术。二、网络化传输：交通基础设施与信息基础设施一体化建设，交通专网与天网，公网融合。三、智能化应用：打造数字化出行助手，物流全程数字化，打造国家总体交通运输信息平台"}]},mode:{title:"方案优势",type:"card",background:!0,list:[{title:"Stack混合云降低交通管理运作成本",desc:"“终端”+“网络”+“边缘计算”+“云服务”的组合，符合交通物流行业数据分散、管理分散、数据实时性高等特点，实现智能分析分层处理，数据集中管理"},{title:"云边端业务统一协同，实现交通态势感知",desc:"基于云边端协同，将交通态势和人员行为感知，高速收费稽核应用，交通设备实时监控等业务延伸到边缘，降低业务处理时延，实现任务、数据、管理、安全的协同，使用和运维成本降低80%以上"},{title:"全栈全场景AI，实现数据智能和业务创新",desc:"基于交通智能体，实现交通事件监测、交通状态的全息感知，交通预测/分析/仿真，交通资源全局调度与管控，提升交通的运行安全、管理效率、出行体验，促进物流的降本增效"}]},scene:{title:"方案全景图",list:[{bgImg:n(570),title:"智慧物流",desc:"结合大数据、物联网和人工智能等技术，优化生产、配送、仓储等供应链信息流，降低各环节物流成本和提高物流效率"},{bgImg:n(571),title:"车路协同",desc:"基于端云协同技术，将道路、行人、机动车等数字化，实现人-车-路-云高效协同，支持未来向网联式自动驾驶演进"},{bgImg:n(572),title:"智慧停车",desc:"基于云计算、物联网、互联网+等技术，实现智慧停车互联互通，全面提升交通管理效率和服务水平"}]}}]}},computed:{current:function(){return this.content[this.tabsIndex]},header:function(){return this.headerList[this.tabsIndex]}},watch:{$route:{immediate:!0,handler:function(t){t.query.key&&(this.tabsIndex=this.keys.findIndex((function(e){return e==t.query.key}))||0)}}},methods:{changeTab:function(i){this.$router.push({path:"/programme/other",query:{key:this.keys[i]}})}}},m=(n(573),n(14)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-programme"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-programme-content"},[e("Header",{attrs:{data:t.header}}),t._v(" "),e("Tabs",{attrs:{data:t.tabs,index:t.tabsIndex},on:{change:t.changeTab}}),t._v(" "),t.current.trend?e("TextPicture",{attrs:{data:t.current.trend}}):t._e(),t._v(" "),t.current.mode?e("IconText",{attrs:{data:t.current.mode}}):t._e(),t._v(" "),t.current.advantages?e("AllText",{attrs:{data:t.current.advantages}}):t._e(),t._v(" "),t.current.scene?e("PictureText",{attrs:{data:t.current.scene}}):t._e()],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:n(251).default,CommonFooter:n(252).default})}}]);