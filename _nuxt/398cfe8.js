(window.webpackJsonp=window.webpackJsonp||[]).push([[37,12,15,17,30],{1056:function(t,e,n){"use strict";n(549)},1057:function(t,e,n){"use strict";n(550)},1108:function(t,e,n){"use strict";n.r(e);var r=n(471),o=n(526),l=n(482),c={name:"AboutPage",components:{banner:r.default,partner:o.default,TextPicture:l.default}},m=(n(1056),n(1057),n(16)),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-page-index"},[e("common-header"),t._v(" "),e("banner",{attrs:{bannerKey:"about"}}),t._v(" "),e("div",{staticClass:"m-page-content"},[e("TextPicture",{attrs:{textKey:"info"}}),t._v(" "),e("partner",{staticClass:"u-bg",attrs:{textKey:"honors"}}),t._v(" "),t._m(0)],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"m-concept"},[t("h2",[this._v("品牌理念")])])}],!1,null,"20b57e64",null);e.default=component.exports;installComponents(component,{CommonHeader:n(273).default,CommonFooter:n(274).default})},441:function(t,e,n){},444:function(t,e,n){},450:function(t,e,n){},454:function(t,e,n){t.exports=n.p+"img/hot.32a0f29.svg"},455:function(t,e,n){"use strict";n(441)},463:function(t,e,n){"use strict";n.r(e);n(22),n(98),n(187);var r=[function(){var t=this,e=t._self._c;return e("h3",[e("img",{staticClass:"u-icon",attrs:{src:n(454)}}),t._v(" "),e("span",[t._v("热门推荐")])])}],o=(n(60),n(39),n(15),n(45),n(61),n(188),n(189),n(138)),l=n(491),c={props:{textKey:{type:String,default:""}},data:function(){return{search:"",searchList:[]}},computed:{data:function(){return"programme"==this.textKey?o.e.map((function(t){return t.children})):Object(l.flatten)(o.c.map((function(t){return t.children})))},list:function(){var t=Object(l.slice)(this.data,0,3);return this.searchList.length?this.searchList:t}},watch:{search:function(t){t&&this.onSearch()}},methods:{onSearch:function(){var t=this.search,e=Object(l.cloneDeep)(this.data);this.searchList=e.filter((function(e){return e.hasKey=!1,e.title.includes(t)&&(e.title=e.title.split(t).join("<b>".concat(t,"</b>")),e.hasKey=!0),e.desc.includes(t)&&(e.desc=e.desc.split(t).join("<b>".concat(t,"</b>")),e.hasKey=!0),e})).filter((function(t){return t.hasKey}))}}},m=(n(455),n(16)),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-page-search"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-box"},[e("div",{staticClass:"m-input"},[e("img",{staticClass:"u-img",attrs:{src:n(275)}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"u-input",attrs:{placeholder:"搜索"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),t.search?e("div",{staticClass:"m-list"},[t.searchList.length?t._l(t.list,(function(n,i){return e("a",{key:i,staticClass:"u-item",attrs:{href:n.link}},[e("span",{staticClass:"u-title",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})):[e("span",{staticClass:"u-none"},[t._v("未找到对应结果，请重新输入")]),t._v(" "),t._m(0),t._v(" "),t._l(t.list,(function(n,i){return e("a",{key:i,staticClass:"u-item",attrs:{href:n.link}},[e("span",{staticClass:"u-title",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])}))]],2):t._e()]),t._v(" "),e("span",{staticClass:"u-search-button",on:{click:t.onSearch}},[t._v("搜索")])]),t._v(" "),e("div",{staticClass:"m-mark"})])}),r,!1,null,null,null);e.default=component.exports},466:function(t){t.exports=JSON.parse('{"products":{"key":"products","img":"/images/page/products/img.jpg","title":"定制云产品","desc":"云与企业深入融合，创造数字化未来","link":"1"},"programme":{"key":"programme","img":"/images/page/programme/img.jpg","title":"云+端+智能 一站式解决方案","desc":"全面的业务场景，结合技术创新能力，提供云原生、数据智能、零售、金融、制造等多个领域的解决方案。","link":"1"},"partner":{"key":"partner","img":"/images/page/partner/img.jpg","title":"优秀伙伴展示","desc":"汇聚优秀伙伴，共筑繁荣云生态"},"services":{"key":"services","img":"/images/page/services/img.jpg","title":"专业服务","desc":"各领域专家使用专业工具，提供卓越的全流程专业服务，加速实现您的业务价值"},"contact":{"key":"contact","img":"/images/page/contact/img.jpg","title":"联系我们","desc":"专业的服务团队，致力于为您提供专业的售前购买咨询服务，及完善的售后技术服务，助您云上无忧"},"about":{"key":"about","img":"/images/page/about/img.jpg","title":"关于我们","desc":"与行业圈层共同探讨行业数字化转型、行业创新技术的发展方向和未来机遇，分享企业成功实践，共创行业新价值！"}}')},467:function(t,e,n){"use strict";n(444)},471:function(t,e,n){"use strict";n.r(e);n(187),n(22),n(98);var r=n(466),o=n(463),l={props:{bannerKey:{type:String,default:""},search:{type:Boolean,default:!1}},components:{Search:o.default},computed:{data:function(){return r[this.bannerKey]||{}}}},c=(n(467),n(16)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-page-banner",class:"u-".concat(t.data.key),style:"backgroundImage: url(".concat(t.data.img,")")},[e("div",{staticClass:"m-content wp"},[e("h2",{staticClass:"u-title"},[t._v(t._s(t.data.title))]),t._v(" "),e("p",{staticClass:"u-desc"},[t._v(t._s(t.data.desc))]),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.data.link,expression:"data.link"}],staticClass:"u-button",attrs:{href:t.data.link,target:"_blank"}},[t._v("联系我们")])]),t._v(" "),t.search?e("Search",{attrs:{textKey:t.bannerKey}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},474:function(t){t.exports=JSON.parse('{"finance":{"title":"行业趋势","img":"programme/finance/img.png","list":[{"title":"金融行业趋势","desc":"近年来，随着云计算、大数据、物联网、人工智能的快速发展，推动着传统金融行业进行深刻的业务变革，金融科技对传统金融进行着全业务流程的重塑，将会极大改变行业格局，为用户带来全新的业务体验"},{"title":"金融监管趋严","desc":"金融行业强监管的一个重要原因是要保障金融业务的安全、稳定运行，保障业务的连续性，所以从监管的角度，对承载业务的IT基础设施将会有更严格的要求"},{"title":"业务创新驱动","desc":"随着移动互联网技术的发展，互联网金融模式表现出很强的创新性和竞争力，导致传统金融行业越来越面临来自互联网金融的压力，传统金融要想在竞争中赢得胜利，必须进行快速的业务创新，通过创新提升竞争力"}]},"media":{"title":"行业趋势","img":"programme/media/img.png","list":[{"title":"媒体文娱业务同质化较严重，亟需新体验新玩法，开辟新赛道","desc":"各类视频都在加快往互动化发展，超高清、VR依赖边缘、AI、渲染、5G的实时生产实时分发网络来支撑智能、实时、高质量的交互"},{"title":"业务规模增长、创新增多带来资源诉求增多，成本压力随之增大","desc":"端云交互及3D渲染规模增大，带宽、渲染算例、AI算力、通用算力成本同比增高，媒体娱乐业务对结构化综合降成本的诉求越来越强烈"},{"title":"人工智能逐渐作用于媒体娱乐全生命周期，保障产业健康效率发展","desc":"EI使能媒体娱乐全生命周期，内容监管，自动化审核。大规模存储诉求内容感知，识别并支持更丰富的存储增值能力"}]},"operators":{"title":"行业趋势","img":"programme/operators/img.svg","list":[{"title":"CT与IT融合","desc":"电信行业的云转型已进入深水区，机遇和挑战加速来临。只有建设并运营高效敏捷的ICT基础设施，运营商才能提供有竞争力的业务，抓住新市场、实现新增长<br />运营商的云化转型应该是基于CT，以云为辅助。要从电信行业自身优势出发，利用云化转型来放大电信网络和电信业务的价值，释放联接红利"},{"title":"云网融合","desc":"运营商在提供云网协同服务方面具有领先优势，能够为toB客户提供更好的业务体验、更全面的服务组合，从而提升toB业务收入规模、扩大在垂直行业中的影响力、打开新的增长空间"}]},"energy":{"title":"行业趋势","img":"programme/other/energy.png","list":[{"title":"能源行业对算力要求不断提升","desc":"在能源行业积累大量的历史数据，如何从数据中挖掘价值，通过数据建模、3D可视化等方式对外提供服务，成为能源行业客户的普遍诉求"},{"title":"人工智能技术逐步应用","desc":"传统能源行业属于劳动密集型行业，众多重复性工作场景需要投入大量人力，AI已逐步被越来越多的能源企业接受，逐步应用在能源业务生产环节中"},{"title":"技术创新驱动能源发展","desc":"能源发展正在由主要依靠资源投入向创新驱动转变。科技、体制和发展模式创新将进一步推动能源清洁化、智能化发展，培育形成新产业和新业态"}]},"health":{"title":"行业趋势","img":"programme/other/health.jpg","list":[{"title":"新技术加速行业进入精准医疗时代","desc":"医疗作为重要的民生支柱工程，历来受到国家领导和主要负责部委的高度关注，随着新技术的广泛应用，大健康产业正在快速进入精准医疗时代"},{"title":"从传统诊疗到大健康服务的转变","desc":"随着分级诊疗、电子病历互联互通评级、智慧医院评级、全民健康平台、医保控费等政策的逐步落地，使医院的数据共享、双向转诊成为可能，为精准医疗提供了宝贵的数据资产"},{"title":"从以医院为中心到以患者为中心的转变","desc":"借助移动智能终端的兴起，患者依靠移动医疗应用，可随时随地的自助进行自我健康管理，医疗机构也可以实时掌握患者健康状况，并且给出有针对性的健康建议，大幅提升患者就医体验的同时，也降低社会整体医疗支出"},{"title":"从以治疗为主向预防为主转变","desc":"医疗服务从过去以疾病、治疗为中心向以预防为中心转变，随着国家卫生健康委员会和医保局的组建，优化了健康预防方面的资源配置和服务供给，为健康中国目标达成提供有力支撑"}]},"education":{"title":"行业趋势","img":"programme/other/education.jpg","list":[{"title":"教育信息化2.0，教育优质均衡、教育体制创新","desc":"教育信息化2.0行动计划提出到2022年基本实现“三全两高一大”的发展目标，即教学应用覆盖全体教师、学习应用覆盖全体适龄学生、数字校园建设覆盖全体学校，信息化应用水平和师生信息素养普遍提高，建成“互联网+教育”大平台"},{"title":"由基本均衡走向优质均衡","desc":"随着教育信息化建设和“三全两高一大”目标逐渐实现，教育质量提高和优质教育均衡发展成为当前教育最重要的目标，而教育质量的提高是为全体人民提供更均衡更充分的教育，使每个学生都能享受优质和个性化的教育"},{"title":"智能引领教育创新","desc":"大数据、人工智能等技术的发展，正在重构传统课堂教学，改变学校形态、教学方式和学习方式：如借助大数据探索教育教学规律和学习者成长规律，用大数据支撑教育科学决策；借助人工智能等技术为学习者推荐个性化的学习资源，实现学习者的个性化学习等"},{"title":"人才培养产学研深度融合","desc":"发展以职业需求为导向，以实践能力培养为重点，深化产教融合，校企合作及育训结合的多元化人才培养格局，推动企业深度参与协同育人"}]},"transport":{"title":"行业趋势","img":"programme/other/transport.jpg","list":[{"title":"交通物流行业资讯","desc":"数字交通作为交通强国建设的支持关键，通过数据和人工智能驱动构建，驱动构建数字采集及网络传输的体系、交通基础设施全要素全周期数字化、天地一体交通智能控制网和智能出行服务按需获取的能力，支撑全国出行123交通圈、全球123快货物流圈"},{"title":"交通强国建设纲要","desc":"建设世界前列的交通强国，基础设施布局完善，立体互联；交通装备先进/适用/可控；运输服务更便捷，舒适，经济，高效；安全保障更完善，可靠，反应快速；开放合作面向全球，互利共赢；绿色发展实现更节约/集约，低碳，环保；科技创新；治理体系更加完善"},{"title":"数字交通发展建设纲要","desc":"主要包括三方面举措，一、数字化采集：交通基础设施全要素数字化；构建交通控制网基础云平台；推动自动驾驶，车路协同技术发展，园区/港口自动驾驶技术。二、网络化传输：交通基础设施与信息基础设施一体化建设，交通专网与天网，公网融合。三、智能化应用：打造数字化出行助手，物流全程数字化，打造国家总体交通运输信息平台"}]},"info":{"title":"公司简介","img":"page/about/info.jpg","list":[{"title":"江苏实点实分网络科技有限公司","desc":"我司成立于2014年，注册资本为1000万元，经营地址为南京市建邺区江东中路359号国睿大厦1号楼B座16层。主要从事信息技术领域内的Internet网络服务和网络商业应用研究，面向政府机构、企事业单位和广大个人用户提供Internet服务、电信增值服务及云计算服务。我司拥有江苏移动、江苏电信、江苏联通三家运营商核心合作资质，同时也是华为云、亚马逊云核心合作商，是国内为数不多具有互联网数据中心业务、互联网接入业务、固定网国内传输业务等运营资质的专业云计算服务商。为用户提供云主机、云存储、云备份、桌面云、专享云、混合云、大数据等全线产品，同时为政府、医疗、教育、金融等行业打造定制化云解决方案，是政府机构、企事业单位等用户首选云服务商。助力客户商业价值提升。我们将借助技术的创新，不断提升计算能力与规模效益，将云计算变成真正意义上的公共服务。"}]}}')},475:function(t,e,n){"use strict";n(450)},482:function(t,e,n){"use strict";n.r(e);var r=n(474),o={props:{textKey:{type:String,default:""}},computed:{data:function(){return r[this.textKey]||""},title:function(){return this.data.title||""},img:function(){return this.data.img||""},list:function(){return this.data.list||[]}}},l=(n(475),n(16)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.data?e("div",{staticClass:"m-text-picture"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-cont wp"},[e("div",{staticClass:"m-list"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0),t._v(" "),e("img",{staticClass:"u-img",attrs:{src:n(436)("./".concat(t.img))}})])]):t._e()}),[],!1,null,null,null);e.default=component.exports},492:function(t,e,n){},504:function(t){t.exports=JSON.parse('{"partner":{"title":"同舟共济伙伴","list":[{"name":"中软国际科技服务有限公司","logo":"page/partner/partner/1.svg"},{"name":"用友网络科技股份有限公司","logo":"page/partner/partner/2.svg"},{"name":"北京博海迪信息科技有限公司","logo":"page/partner/partner/3.svg"},{"name":"广州赛意信息科技股份有限公司","logo":"page/partner/partner/4.svg"},{"name":"软通动力信息技术(集团)股份有限公司","logo":"page/partner/partner/5.svg"},{"name":"金蝶软件（中国）有限公司","logo":"page/partner/partner/6.svg"}]},"ability":{"title":"伙伴能力中心","list":[{"name":"广州爱云信息技术有限公司","logo":"page/partner/ability/1.svg"},{"name":"北京一森科技有限公司","logo":"page/partner/ability/2.svg"},{"name":"合肥城市云数据中心股份有限公司","logo":"page/partner/ability/3.svg"},{"name":"河南众诚信息科技股份有限公司","logo":"page/partner/ability/4.svg"},{"name":"河北阮鸿科技有限公司","logo":"page/partner/ability/5.svg"},{"name":"杭州远石科技有限公司","logo":"page/partner/ability/6.svg"}]},"cloud":{"title":"云市场严选伙伴","list":[{"name":"杭州远石科技有限公司","logo":"page/partner/cloud/1.svg"},{"name":"深圳市讯方技术股份有限公司","logo":"page/partner/cloud/2.svg"},{"name":"北京超图软件股份有限公司","logo":"page/partner/cloud/3.svg"},{"name":"帆软软件有限公司","logo":"page/partner/cloud/4.svg"},{"name":"万洲嘉智信息科技有限公司","logo":"page/partner/cloud/5.svg"},{"name":"树根互联股份有限公司","logo":"page/partner/cloud/6.svg"}]},"solution":{"title":"解决方案伙伴","list":[{"name":"深圳市腾讯计算机系统有限公司","logo":"page/partner/solution/1.svg"},{"name":"华为云计算技术有限公司","logo":"page/partner/solution/2.svg"},{"name":"网宿科技股份有限公司","logo":"page/partner/solution/3.svg"},{"name":"武汉斗鱼网络科技有限公司","logo":"page/partner/solution/4.svg"},{"name":"北京字节跳动科技有限公司","logo":"page/partner/solution/5.svg"},{"name":"南京硅基智能科技有限公司","logo":"page/partner/solution/6.svg"},{"name":"南京擎盾信息科技有限公司","logo":"page/partner/solution/7.svg"},{"name":"上海思栈网络有限公司","logo":"page/partner/solution/8.svg"},{"name":"深圳易信科技股份有限公司","logo":"page/partner/solution/9.svg"},{"name":"速丰电信科技（上海）有限公司","logo":"page/partner/solution/10.svg"},{"name":"北京创世云数据科技有限公司","logo":"page/partner/solution/11.svg"},{"name":"北京数据家科技股份有限公司","logo":"page/partner/solution/12.svg"},{"name":"烽火云科技有限公司","logo":"page/partner/solution/13.svg"},{"name":"杭州安恒信息技术股份有限公司","logo":"page/partner/solution/14.svg"},{"name":"江苏驰速信息科技有限公司","logo":"page/partner/solution/15.svg"}]},"honors":{"title":"荣誉资质","list":[{"name":"中软国际科技服务有限公司","logo":"page/about/2-1.svg"},{"name":"用友网络科技股份有限公司","logo":"page/about/2-2.svg"},{"name":"北京博海迪信息科技有限公司","logo":"page/about/2-3.svg"}]}}')},505:function(t,e,n){"use strict";n(492)},526:function(t,e,n){"use strict";n.r(e);n(38);var r=n(504),o={props:{textKey:{type:String,default:""}},computed:{data:function(){return r[this.textKey]||""},title:function(){return this.data.title||""},list:function(){return this.data.list||[]}}},l=(n(505),n(16)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-page-partner"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"m-list wp"},t._l(t.list,(function(r,i){return e("div",{key:i,staticClass:"u-item"},[e("img",{staticClass:"u-img",attrs:{src:n(436)("./".concat(r.logo)),alt:r.name}}),t._v(" "),e("span",{staticClass:"u-title"},[t._v(t._s(r.name))])])})),0)])}),[],!1,null,null,null);e.default=component.exports},549:function(t,e,n){},550:function(t,e,n){}}]);