(window.webpackJsonp=window.webpackJsonp||[]).push([[41,12,17,28],{1064:function(t,e,c){"use strict";c(556)},1065:function(t,e,c){"use strict";c(557)},1111:function(t,e,c){"use strict";c.r(e);c(187);var n=c(464),r=c(471),data=c(138),l={name:"ProductsPage",components:{banner:r.default,IconText:n.default},data:function(){return{index:0}},computed:{list:function(){return data.c},children:function(){return this.list[this.index].children},label:function(){return this.list[this.index].label}},methods:{change:function(i){this.index=i}}},o=(c(1064),c(1065),c(16)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-page-index"},[e("common-header"),t._v(" "),e("banner",{attrs:{bannerKey:"products",search:!0}}),t._v(" "),e("div",{staticClass:"m-page-content"},[e("IconText",{attrs:{textKey:"hot"}}),t._v(" "),e("div",{staticClass:"m-page-all"},[e("h2",[t._v("了解所有产品")]),t._v(" "),e("div",{staticClass:"wp"},[e("div",{staticClass:"m-tabs"},t._l(t.list,(function(c,i){return e("div",{key:i,staticClass:"m-item",class:{active:i==t.index},on:{click:function(e){return t.change(i)}}},[e("img",{staticClass:"u-img",attrs:{src:c.src}}),t._v(" "),e("span",{staticClass:"u-label"},[t._v(t._s(c.label))])])})),0),t._v(" "),e("div",{staticClass:"m-children"},[e("span",{staticClass:"m-children-label"},[t._v(t._s(t.label))]),t._v(" "),t._l(t.children,(function(c,i){return e("a",{key:i,staticClass:"u-child",attrs:{href:c.link,target:"_blank"}},[e("span",{staticClass:"u-title"},[e("span",{staticClass:"u-child-title"},[t._v(t._s(c.title))]),t._v(" "),c.sign?e("span",{staticClass:"u-sign"},[t._v(t._s(c.sign))]):t._e()]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(c.desc))]),t._v(" "),e("div",{staticClass:"u-tags"},t._l(c.tag,(function(c,n){return e("span",{key:n,staticClass:"u-tag"},[t._v(t._s(c))])})),0)])}))],2)])])],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonHeader:c(273).default,CommonFooter:c(274).default})},441:function(t,e,c){},442:function(t,e,c){},444:function(t,e,c){},454:function(t,e,c){t.exports=c.p+"img/hot.32a0f29.svg"},455:function(t,e,c){"use strict";c(441)},456:function(t){t.exports=JSON.parse('{"cloud":{"title":"为什么要构建云上ERP系统","desc":"随着移动互联网、云计算、大数据等新一代技术的发展，ERP系统向云端转型成为必然，为企业客户提供灵活、方便、低成本的ERP系统上云解决方案","list":[{"icon":"programme/cloud/1-1.svg","title":"成本降50%","desc":"只需按照实际业务量按需扩容，节省投入成本超过50%"},{"icon":"programme/cloud/1-2.svg","title":"网络更稳定","desc":"采用动态BGP有效避免因单运营商线路故障导致访问中断问题"},{"icon":"programme/cloud/1-3.svg","title":"最新技术","desc":"企业可直接运用5G、AI等最新技术实现业务突破"},{"icon":"programme/cloud/1-4.svg","title":"安全容灾","desc":"提供专业的云上容灾方案，企业无需自建容灾机房实现安全容"}]},"finance":{"title":"部署方式","type":"card","list":[{"title":"金融专区","desc":"金融专区在北上深A类机房规划建设，通过等保四认证、符合JR/T 0071-2012等权威认证，与非金融行业物理隔离，满足金融合规监管要求、遵循行业规范，为金融行业构筑安全合规可靠的业务基座"},{"title":"专属云","desc":"全栈专属云为大中型金融机构提供计算、存储、网络和云服务管控平台完全物理隔离的专属云服务，满足大中型金融建构全业务云上部署，满足金融行业严监管要求"},{"title":"标准公有云","desc":"公有云满足金融行业弱监管类业务云上部署需求，满足业务云上资源按需开通，端到端降低使用成本，通过高可用架构和全方位的安全防护，保障金融业务的高可用部署和业务的安全防护>"}]},"government":{"title":"产品技术","list":[{"icon":"programme/government/1-1.svg","title":"城市视觉智能引擎","desc":"利用先进的视频图像处理技术和学习算法，赋能交通、商业等场景。"},{"icon":"programme/government/1-2.svg","title":"数据资源平台","desc":"为企业构建汇、通、管、用、评大数据体系，提供数据应用研发能力。"},{"icon":"programme/government/1-3.svg","title":"区块链","desc":"打造业界易用稳健的区块链产品，激发信任商业时代的潜力。"},{"icon":"programme/government/1-4.svg","title":"全息技术","desc":"通过三维视觉技术实现数字化真实还原，实现对数字空间的运营。"}]},"education":{"title":"方案优势","type":"card","background":true,"list":[{"title":"ICT领域优秀实践及完善的认证体系，助力产教融合","desc":"为校企提供100+真实的企业实践案例及ICT认证体系，结合企业级实践平台、专业课程体系、师资培养体系、1+X证书等，培养符合产业需求的数字化人才，助力区域经济发展"},{"title":"多元架构+最佳通信体验，均衡教育资源","desc":"通过鲲鹏云服务等多元架构和最佳实时音视频体验，匹配多样教育场景下的算力、部署方式和实时音视频等需求，助力教育资源均衡"},{"title":"大数据+AI，提升教学质量、科学决策","desc":"提供大数据和AI平台、视频识别、语音识别、内容审核等多种AI服务，联合伙伴打造教育大数据+AI应用，帮助学生减负增效、个性化学习，助力管理者更好地科学决策"}]},"transport":{"title":"方案优势","type":"card","background":true,"list":[{"title":"Stack混合云降低交通管理运作成本","desc":"“终端”+“网络”+“边缘计算”+“云服务”的组合，符合交通物流行业数据分散、管理分散、数据实时性高等特点，实现智能分析分层处理，数据集中管理"},{"title":"云边端业务统一协同，实现交通态势感知","desc":"基于云边端协同，将交通态势和人员行为感知，高速收费稽核应用，交通设备实时监控等业务延伸到边缘，降低业务处理时延，实现任务、数据、管理、安全的协同，使用和运维成本降低80%以上"},{"title":"全栈全场景AI，实现数据智能和业务创新","desc":"基于交通智能体，实现交通事件监测、交通状态的全息感知，交通预测/分析/仿真，交通资源全局调度与管控，提升交通的运行安全、管理效率、出行体验，促进物流的降本增效"}]},"cloud_services":{"title":"上云实施","list":[{"icon":"page/services/1-1.svg","title":"上云迁移","desc":"为客户提供专业的迁移方案和专属迁移工具支持"},{"icon":"page/services/1-2.svg","title":"鲲鹏移植专家服务","desc":"协助客户业务到鲲鹏云服务的“一站式”咨询、移植迁移、售后保障等服务，实现业务系统快速改造"},{"icon":"page/services/1-3.svg","title":"SAP上云专业服务","desc":"资深SAP解决方案架构师提供专家级SAP系统上云咨询及IaaS交付实施服务"}]},"services":{"title":"专家服务","list":[{"icon":"page/services/3-1.svg","title":"云原生专家服务","desc":"覆盖容器技术培训，业务分析，容器化源码改造、交付、运维的全方位专业咨询服务"},{"icon":"page/services/3-2.svg","title":"管理检测与响应","desc":"提供“专家式”人工服务，帮助客户预防、监测、发现主机站点及系统的安全风险"},{"icon":"page/services/3-3.svg","title":"企业上云网络规划设计服务","desc":"为企业上云提供完整网络方案咨询与规划服务"},{"icon":"page/services/3-4.svg","title":"高级人工智能专家服务","desc":"为客户提供人工智能模型配套的调研、设计及原型开发等专业服务"},{"icon":"page/services/3-5.svg","title":"CSS专家服务","desc":"为客户提供云搜索服务的专家咨询，规划设计与实施，迁移支持与开发支持服务"},{"icon":"page/services/3-6.svg","title":"数据管理实施专业服务","desc":"一站式数据全生命周期管理的实施服务"}]},"sales":{"title":"售后服务","list":[{"icon":"page/contact/2-1.svg","title":"极速工单","desc":"云产品技术问题、云业务问题 专业工程师为您即时解答"},{"icon":"page/contact/2-2.svg","title":"智能客服","desc":"智能诊断，极速解答，为您极速定位问题、解答问题"},{"icon":"page/contact/2-3.svg","title":"专业服务","desc":"为您提供上云实施、云上管理、专家服务、职业培训的全流程专业服务，加速实现您的业务价值"},{"icon":"page/contact/2-4.svg","title":"自助服务","desc":"TOP问题解决方案、高效便捷工具 助您高效完成产品运维"},{"icon":"page/contact/2-5.svg","title":"建议反馈","desc":"您的宝贵建议，使我们提供更完美的产品与服务"},{"icon":"page/contact/2-6.svg","title":"联系方式","desc":"热线电话：025-86702988，邮件服务：sdsf@xcron.cn"}]},"hot":{"title":"热门产品推荐","type":"card","list":[{"icon":"page/products/1-1.svg","title":"弹性云服务器","desc":"一种云上可随时自助获取、可弹性伸缩的计算服务，可帮助您打造安全、可靠、灵活、高效的应用环境。"},{"icon":"page/products/1-2.svg","title":"全球加速","desc":"提供专属的云上物理服务器，具备传统物理服务器高性能，且兼具云上高安全可靠、灵活快速发放等特点。"},{"icon":"page/products/1-3.svg","title":"智能AI边缘盒子","desc":"采用嵌入式设计原理，搭载AI处理芯片，内嵌基于深度学习的算法，提供识别、抓拍、比对、报警等服务。"}]}}')},457:function(t,e,c){"use strict";c(442)},463:function(t,e,c){"use strict";c.r(e);c(22),c(98),c(187);var n=[function(){var t=this,e=t._self._c;return e("h3",[e("img",{staticClass:"u-icon",attrs:{src:c(454)}}),t._v(" "),e("span",[t._v("热门推荐")])])}],r=(c(60),c(39),c(15),c(45),c(61),c(188),c(189),c(138)),l=c(491),o={props:{textKey:{type:String,default:""}},data:function(){return{search:"",searchList:[]}},computed:{data:function(){return"programme"==this.textKey?r.e.map((function(t){return t.children})):Object(l.flatten)(r.c.map((function(t){return t.children})))},list:function(){var t=Object(l.slice)(this.data,0,3);return this.searchList.length?this.searchList:t}},watch:{search:function(t){t&&this.onSearch()}},methods:{onSearch:function(){var t=this.search,e=Object(l.cloneDeep)(this.data);this.searchList=e.filter((function(e){return e.hasKey=!1,e.title.includes(t)&&(e.title=e.title.split(t).join("<b>".concat(t,"</b>")),e.hasKey=!0),e.desc.includes(t)&&(e.desc=e.desc.split(t).join("<b>".concat(t,"</b>")),e.hasKey=!0),e})).filter((function(t){return t.hasKey}))}}},d=(c(455),c(16)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-page-search"},[e("div",{staticClass:"wp"},[e("div",{staticClass:"m-box"},[e("div",{staticClass:"m-input"},[e("img",{staticClass:"u-img",attrs:{src:c(275)}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"u-input",attrs:{placeholder:"搜索"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),t.search?e("div",{staticClass:"m-list"},[t.searchList.length?t._l(t.list,(function(c,i){return e("a",{key:i,staticClass:"u-item",attrs:{href:c.link}},[e("span",{staticClass:"u-title",domProps:{innerHTML:t._s(c.title)}}),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(c.desc)}})])})):[e("span",{staticClass:"u-none"},[t._v("未找到对应结果，请重新输入")]),t._v(" "),t._m(0),t._v(" "),t._l(t.list,(function(c,i){return e("a",{key:i,staticClass:"u-item",attrs:{href:c.link}},[e("span",{staticClass:"u-title",domProps:{innerHTML:t._s(c.title)}}),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(c.desc)}})])}))]],2):t._e()]),t._v(" "),e("span",{staticClass:"u-search-button",on:{click:t.onSearch}},[t._v("搜索")])]),t._v(" "),e("div",{staticClass:"m-mark"})])}),n,!1,null,null,null);e.default=component.exports},464:function(t,e,c){"use strict";c.r(e);var n=c(456),r={props:{textKey:{type:String,default:""}},computed:{data:function(){return n[this.textKey]||""},title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},list:function(){return this.data.list||[]},type:function(){return this.data.type||""}},methods:{background:function(t){if(t)return t.background?{backgroundColor:"#f8f8f8"}:""}}},l=(c(457),c(16)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.data?e("div",{staticClass:"m-icon-text",style:t.background(t.data)},[e("h2",[t._v(t._s(t.title))]),t._v(" "),t.desc?e("div",{staticClass:"m-desc wp"},[e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))])]):t._e(),t._v(" "),e("div",{staticClass:"m-list wp",class:t.type?"u-".concat(t.type):""},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[n.icon?e("img",{staticClass:"u-img",attrs:{src:c(436)("./".concat(n.icon))}}):t._e(),t._v(" "),e("span",{staticClass:"u-title"},[t._v(t._s(n.title))]),t._v(" "),e("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(n.desc)}})])})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports},466:function(t){t.exports=JSON.parse('{"products":{"key":"products","img":"/images/page/products/img.jpg","title":"定制云产品","desc":"云与企业深入融合，创造数字化未来","link":"1"},"programme":{"key":"programme","img":"/images/page/programme/img.jpg","title":"云+端+智能 一站式解决方案","desc":"全面的业务场景，结合技术创新能力，提供云原生、数据智能、零售、金融、制造等多个领域的解决方案。","link":"1"},"partner":{"key":"partner","img":"/images/page/partner/img.jpg","title":"优秀伙伴展示","desc":"汇聚优秀伙伴，共筑繁荣云生态"},"services":{"key":"services","img":"/images/page/services/img.jpg","title":"专业服务","desc":"各领域专家使用专业工具，提供卓越的全流程专业服务，加速实现您的业务价值"},"contact":{"key":"contact","img":"/images/page/contact/img.jpg","title":"联系我们","desc":"专业的服务团队，致力于为您提供专业的售前购买咨询服务，及完善的售后技术服务，助您云上无忧"},"about":{"key":"about","img":"/images/page/about/img.jpg","title":"关于我们","desc":"与行业圈层共同探讨行业数字化转型、行业创新技术的发展方向和未来机遇，分享企业成功实践，共创行业新价值！"}}')},467:function(t,e,c){"use strict";c(444)},471:function(t,e,c){"use strict";c.r(e);c(187),c(22),c(98);var n=c(466),r=c(463),l={props:{bannerKey:{type:String,default:""},search:{type:Boolean,default:!1}},components:{Search:r.default},computed:{data:function(){return n[this.bannerKey]||{}}}},o=(c(467),c(16)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-page-banner",class:"u-".concat(t.data.key),style:"backgroundImage: url(".concat(t.data.img,")")},[e("div",{staticClass:"m-content wp"},[e("h2",{staticClass:"u-title"},[t._v(t._s(t.data.title))]),t._v(" "),e("p",{staticClass:"u-desc"},[t._v(t._s(t.data.desc))]),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.data.link,expression:"data.link"}],staticClass:"u-button",attrs:{href:t.data.link,target:"_blank"}},[t._v("联系我们")])]),t._v(" "),t.search?e("Search",{attrs:{textKey:t.bannerKey}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},556:function(t,e,c){},557:function(t,e,c){}}]);