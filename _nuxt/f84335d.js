(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{378:function(t,e,n){"use strict";var r=n(2),l=n(379);r({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return l(this,"a","href",t)}})},379:function(t,e,n){var r=n(4),l=n(23),c=n(13),o=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var m=c(l(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+d(c(r),o,"&quot;")+'"'),h+">"+m+"</"+e+">"}},380:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},446:function(t,e,n){},455:function(t,e,n){"use strict";n(446)},502:function(t,e,n){"use strict";n.r(e);n(378);var r=n(11),l=(n(74),{data:function(){return{index:0,list:[{label:"新零售",src:"/images/index/solution/icon-1.png",children:{title:"新零售行业解决方案",link:"/programme/new_retail",desc:"通过云计算、大数据、人工智能等技术，蒋零售场景中要素进行整合，达到精准营销，高效运营。",src:"/images/index/solution/01.svg",tag:["数据驱动","数字赋能","AI加持"]}},{label:"运营商",src:"/images/index/solution/icon-2.png",children:{title:"运营商行业解决方案",link:"/programme/operators",desc:"提供更适合运营商的业务云化转型方案以及面向运营商企业客户的行业数字化方案，帮助运营商加速网络变现，业务创新，运营敏捷，取得新增长。",src:"/images/index/solution/02.jpeg",tag:["网络变现","业务创新","运营敏捷"]}},{label:"数字政府",src:"/images/index/solution/icon-3.png",children:{title:"数字政府解决方案",link:"/programme/government",desc:"通过全栈专属云，人工智能和微服务等服务，帮助政府及公共事业的服务能力向移动化和智能化发展。",src:"/images/index/solution/03.jpeg",tag:["协同共享","智能精准","简单易用"]}},{label:"金融",src:"/images/index/solution/icon-4.png",children:{title:"金融行业解决方案",link:"/programme/finance",desc:"通过金融专区、专属云安全合规部署和全栈技术创新，助力金融客户业务敏捷创新、智能升级等数字化转型目标。",src:"/images/index/solution/04.jpeg",tag:["全新趋势","转型升级","业务创新"]}},{label:"上云与迁移",src:"/images/index/solution/icon-5.png",children:{title:"迁移上云解决方案",link:"/programme/cloud",desc:"提供ERP系统上云一站式服务，为您完成数字化时代的企业管理工具转型。",src:"/images/index/solution/05.jpeg",tag:["降低成本","安全稳定","最新技术"]}},{label:"媒体应用",src:"/images/index/solution/icon-6.png",children:{title:"TIk Tok解决方案",link:"/programme/media",desc:"抖音国际版Tiktok在全球深受欢迎，成为国际上下载量最多的APP之一。由简入深，针对浏览客户、运营客户以及企业高端客户都有完整配套解决方案，解决个人/企业Tiktok问题。",src:"/images/index/solution/06.jpeg",tag:["全案定制","高速转化","精准匹配"]}},{label:"其他",src:"/images/index/solution/icon-7.png",children:{title:"",link:"",desc:"",src:"",tag:[],other:[{title:"能源行业解决方案",link:"/programme/other"},{title:"医疗健康行业解决方案",link:"/programme/other"},{title:"教育行业解决方案",link:"/programme/other"},{title:"交通物流解决方案",link:"/programme/other"}]}}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,e.abrupt("return",{});case 2:case"end":return e.stop()}}),e)})))()},computed:{children:function(){return this.list[this.index].children}},methods:{change:function(i){this.index=i}}}),c=(n(455),n(51)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index-item m-index-solution"},[e("div",{staticClass:"wp"},[t._m(0),t._v(" "),e("div",{staticClass:"m-tabs"},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"m-item",class:{active:t.index==i},on:{click:function(e){return t.change(i)}}},[e("img",{staticClass:"u-img",attrs:{src:n.src}}),t._v(" "),e("span",{staticClass:"u-label"},[t._v(t._s(n.label))])])})),0),t._v(" "),e("div",{staticClass:"m-content",style:"backgroundImage: url(".concat(t.children.src,")")},[e("div",{staticClass:"m-item"},[e("a",{staticClass:"u-title",attrs:{href:t.children.link,target:"_blank"}},[t._v(t._s(t.children.title))]),t._v(" "),t.children.desc?e("span",{staticClass:"u-desc"},[t._v(t._s(t.children.desc))]):t._e(),t._v(" "),e("div",{staticClass:"u-tags"},[t.children.tag.length?t._l(t.children.tag,(function(n,i){return e("span",{key:i,staticClass:"u-tag"},[t._v(t._s(n))])})):t._e()],2)]),t._v(" "),t.children.other?e("div",{staticClass:"u-others"},[t.children.other.length?t._l(t.children.other,(function(n,i){return e("a",{key:i,staticClass:"u-other",attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.title))])})):t._e()],2):t._e()])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-title"},[e("h2",[t._v("全面、专业、智能的解决方案")]),t._v(" "),e("a",{staticClass:"u-desc",attrs:{href:"",target:"_blank"}},[t._v("查看全部解决方案 >")])])}],!1,null,null,null);e.default=component.exports}}]);