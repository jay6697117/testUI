webpackJsonp([18],{"1IOV":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("KR00"),i={name:"yd-progressbar",data:function(){return{viewBox:"0 0 100 100",show:!1,stroke:{dasharray:"",dashoffset:""}}},props:{type:{validator:function(t){return["circle","line"].indexOf(t)>-1},default:"circle"},fillColor:{validator:function(t){return!t||Object(s.c)(t)}},strokeWidth:{validator:function(t){return/^\d*$/.test(t)},default:0},strokeColor:{validator:function(t){return!t||Object(s.c)(t)},default:"#E5E5E5"},trailWidth:{validator:function(t){return/^\d*$/.test(t)},default:0,required:!0},trailColor:{validator:function(t){return!t||Object(s.c)(t)},default:"#646464"},progress:{validator:function(t){return/^(0(.\d+)?|1(\.0+)?)$/.test(t)},default:0}},methods:{init:function(){var t=this,e=this.length=this.$refs.trailPath.getTotalLength();this.stroke.dashoffset=e,this.stroke.dasharray=e+","+e,this.scrollview=Object(s.b)(this.$el),this.show=!0,"line"===this.type&&(this.viewBox="0 0 100 "+(this.strokeWidth?this.strokeWidth:this.trailWidth)),this.$nextTick(function(){t.scrollHandler()}),this.bindEvent()},scrollHandler:function(){Object(s.a)(this.scrollview,this.$el)&&(this.stroke.dashoffset=this.length-this.progress*this.length)},bindEvent:function(){this.scrollview.addEventListener("scroll",this.scrollHandler),window.addEventListener("resize",this.scrollHandler)},unbindEvent:function(){this.scrollview.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.scrollHandler)}},watch:{progress:function(t){this.stroke.dashoffset=this.length-t*this.length}},computed:{getPathString:function(){if("line"===this.type)return"M 0,{R} L 100,{R}".replace(/\{R\}/g,this.trailWidth/2);var t=50-(this.strokeWidth?this.strokeWidth:this.trailWidth)/2;return"M 50,50 m 0,-{R} a {R},{R} 0 1 1 0,{2R} a {R},{R} 0 1 1 0,-{2R}".replace(/\{R\}/g,t).replace(/\{2R\}/g,2*t)}},mounted:function(){this.init()},destoryed:function(){this.unbindEvent()}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"yd-progressbar"},["line"!=t.type?r("div",{staticClass:"yd-progressbar-content"},[t._t("default")],2):t._e(),t._v(" "),r("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{viewBox:t.viewBox,preserveAspectRatio:"line"==t.type?"none":""}},[r("path",{attrs:{"fill-opacity":t.fillColor?1:0,d:t.getPathString,fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.trailWidth}}),t._v(" "),r("path",{ref:"trailPath",style:{strokeDasharray:t.stroke.dasharray,strokeDashoffset:t.stroke.dashoffset},attrs:{"fill-opacity":"0",d:t.getPathString,stroke:t.trailColor,"stroke-width":t.strokeWidth?t.strokeWidth:t.trailWidth}})])])},staticRenderFns:[]};var n=r("VU/8")(i,o,!1,function(t){r("5jNf")},null,null).exports,a={data:function(){return{progress1:.4,progress2:.8,progress3:.6}},components:{ydProgressbar:n}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{title:"ProgressBar"}},[r("div",{staticClass:"demo-progressbar demo-pitch"},[r("div",{staticClass:"demo-progress-cricle"},[r("yd-progressbar",{attrs:{progress:t.progress1,trailWidth:"4"}},[r("span",{staticClass:"Num",staticStyle:{"font-size":"28px"}},[t._v(t._s(100*t.progress1)+"%")])])],1),t._v(" "),r("div",{staticClass:"demo-progress-cricle"},[r("yd-progressbar",{attrs:{progress:t.progress2,trailWidth:"10",strokeWidth:"10",strokeColor:"#B2B2B2",trailColor:"#FE5D51",fillColor:"#FFF"}},[r("span",{staticClass:"Num",staticStyle:{"font-size":"28px"}},[t._v(t._s(100*t.progress2)+"%")])])],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-progressbar demo-pitch"},[e("div",{staticClass:"demo-progress-line"})])}]},d=r("VU/8")(a,l,!1,null,null,null);e.default=d.exports},"5jNf":function(t,e){},KR00:function(t,e,r){"use strict";r.d(e,"d",function(){return o}),r.d(e,"c",function(){return n}),r.d(e,"b",function(){return a}),r.d(e,"a",function(){return l});var s,i,o=(s=function(t){t.preventDefault(),t.stopPropagation()},i=!1,{lock:function(t){i||(i=!0,(t||document).addEventListener("touchmove",s))},unlock:function(t){i=!1,(t||document).removeEventListener("touchmove",s)}}),n=((window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),function(t){return/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/.test(t)||/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/.test(t)||/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/.test(t)}),a=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var r=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===r||"auto"===r)return e;e=e.parentNode}return window},l=function(t,e){var r=t===window?document.body.offsetHeight:t.offsetHeight,s=t===window?0:t.getBoundingClientRect().top,i=e.getBoundingClientRect().top-s,o=i+e.offsetHeight;return i>=0&&i<r||o>0&&o<=r}}});