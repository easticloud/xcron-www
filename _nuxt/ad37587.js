(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{423:function(t,n,c){},437:function(t,n,c){"use strict";c(423)},448:function(t,n,c){"use strict";c.r(n);var e={props:["data"],computed:{title:function(){return this.data.title||""},list:function(){return this.data.list||[]},direction:function(){return this.data.direction?this.data.direction:"top"}},methods:{background:function(img){return{backgroundImage:"url(".concat(img,")")}}}},r=(c(437),c(51)),component=Object(r.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m-picture-text",class:"u-".concat(t.direction)},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"m-list wp"},t._l(t.list,(function(c,i){return n("div",{key:i,staticClass:"u-item",style:c.bgImg?t.background(c.bgImg):""},[c.img?n("img",{staticClass:"u-img",attrs:{src:c.img}}):t._e(),t._v(" "),n("div",{staticClass:"m-text"},[n("span",{staticClass:"u-title"},[t._v(t._s(c.title))]),t._v(" "),n("span",{staticClass:"u-desc",domProps:{innerHTML:t._s(c.desc)}})])])})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);