(window.webpackJsonp=window.webpackJsonp||[]).push([[59,24,27],{414:function(t,e,n){},437:function(t){t.exports=JSON.parse('{"industry":{"type":"industry","title":"行业应用场景专区","desc":"从电商、娱乐媒体、医疗行业维度出发，基于行业内的业务痛点，业务场景；为用户提供相应的爆款产品、产品组合购；更多行业持续更新中","link":""},"hot":{"type":"hot","title":"企业热门场景专区","desc":"我们为您的企业提供企业初创到营销、管理、业务拓展的全套上云解决方案，助力业务快速发展","link":""},"enterprise":{"type":"enterprise","title":"企业通用场景专区","desc":"我们为您的企业提供企业初创到营销、管理、业务拓展的全套上云解决方案，助力业务快速发展","link":""},"common":{"type":"common","title":"业务通用场景专区","desc":"为各个企业核心职能部门提供业务通用场景方案，助力开展云上业务，降本提效","link":""}}')},438:function(t,e,n){"use strict";n(414)},444:function(t,e,n){"use strict";n.r(e);n(251);var c=n(437),r={props:{bannerKey:{type:String,default:""}},computed:{data:function(){return c[this.bannerKey]||{}},title:function(){return this.data.title||""},desc:function(){return this.data.desc||""},link:function(){return this.data.link||""},type:function(){return this.data.type||""}}},l=(n(438),n(14)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-scene-header",class:"u-".concat(t.type)},[e("div",{staticClass:"wp m-header-content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:t.link,target:"_blank"}},[t._v("立即咨询")])])])}),[],!1,null,null,null);e.default=component.exports},454:function(t,e,n){},468:function(t,e,n){t.exports=n.p+"img/check.d835d2a.svg"},469:function(t,e,n){"use strict";n(454)},507:function(t,e,n){},516:function(t,e,n){"use strict";n.r(e);var c={props:["data"],computed:{service:function(){return this.data||null}}},r=(n(469),n(14)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return t.service?e("div",{staticClass:"m-scene-service"},[e("div",{staticClass:"m-box"},[e("span",{staticClass:"u-title"},[t._v(t._s(t.service.title))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.service.desc))]),t._v(" "),e("span",{staticClass:"m-price"},[e("span",[t._v("¥")]),t._v(" "),e("span",{staticClass:"u-number"},[t._v(t._s(t.service.price))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.service.label))])]),t._v(" "),e("span",{staticClass:"u-tag"},[e("span",{staticClass:"u-txt"},[t._v(t._s(t.service.tag))])])]),t._v(" "),e("a",{staticClass:"u-button",attrs:{href:"",target:"_blank"}},[t._v("立即咨询")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},935:function(t){t.exports=JSON.parse('{"info":[{"label":"30年","desc":"30年成熟ICT技术积累"},{"label":"220+","desc":"布局全球多个地理区域和可用区的云产品"},{"label":"80+","desc":"全球安全合规认证，助您上云无忧"}],"desc":"携手5,000+合作伙伴，提供丰富、安全、可靠的企业应用服务","tag":["一站选购，即开即用","高效灵活，细致服务","满足企业多场景需求"],"service":[{"title":"域名注册","desc":"适用于品牌保护、网站建设等业务场景","price":"1.00","label":"/件起","tag":"多种域名特惠1元起"},{"title":"商标智能注册","desc":"智能申报、由服务商代理递交注册申请","price":"271.00","label":"/件起","tag":"新用户专享价"},{"title":"IOT云通信联接短信套餐包","desc":"支持验证码、通知、会员营销短信","price":"640.00","label":"/2万条起","tag":"行业短信0.032元/条"},{"title":"云速邮箱","desc":"即开即用企业邮箱，无限邮箱容量","price":"0.40","label":"/天起","tag":"2年8折、4年6折"},{"title":"金蝶云星辰ERP","desc":"智能记账、智能取票、一键开票","price":"2800.00","label":"/年起","tag":"新用户专享价"},{"title":"SaaS Package初创版会员包","desc":"包含云速邮箱、石墨文档、快报税","price":"3240.00","label":"/年起","tag":"一站式购买"}]}')},936:function(t,e,n){"use strict";n(507)},971:function(t,e,n){"use strict";n.r(e);var c=n(935),header=n(444),r=n(516),l={components:{Header:header.default,Service:r.default},data:function(){return{}},computed:{info:function(){return c.info},tag:function(){return c.tag},desc:function(){return c.desc},service:function(){return c.service}}},o=(n(936),n(14)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-scene"},[e("common-header"),t._v(" "),e("div",{staticClass:"m-hot-scene"},[e("Header",{attrs:{"banner-key":"hot"}}),t._v(" "),e("div",{staticClass:"wp m-hot-content"},[e("div",{staticClass:"m-info"},t._l(t.info,(function(n,i){return e("div",{key:i,staticClass:"u-item"},[e("span",{staticClass:"u-label"},[t._v(t._s(n.label))]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(n.desc))])])})),0),t._v(" "),e("div",{staticClass:"m-shop"},[e("h2",[t._v("云商店")]),t._v(" "),e("span",{staticClass:"u-desc"},[t._v(t._s(t.desc))]),t._v(" "),e("div",{staticClass:"m-tag"},t._l(t.tag,(function(c,i){return e("div",{key:i,staticClass:"u-tag"},[e("img",{staticClass:"u-img",attrs:{src:n(468)}}),t._v(" "),e("span",[t._v(" "+t._s(c))])])})),0)]),t._v(" "),e("div",{staticClass:"m-service"},t._l(t.service,(function(t,i){return e("Service",{key:i,attrs:{data:t}})})),1)])],1),t._v(" "),e("products-pmService"),t._v(" "),e("common-footer")],1)}),[],!1,null,"02c9d8a0",null);e.default=component.exports;installComponents(component,{CommonHeader:n(252).default,CommonFooter:n(253).default})}}]);