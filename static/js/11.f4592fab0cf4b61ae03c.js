webpackJsonp([11],{"7jn7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("DAYN"),i=n.n(o),r=(i.a,{data:function(){return{list:[{name:"for",order:4,fixed:!1},{name:"vue.js 2.0",order:5,fixed:!1},{name:"on",order:7,fixed:!1},{name:"draggable",order:2,fixed:!1},{name:"vue.draggable",order:1,fixed:!1},{name:"component",order:3,fixed:!1},{name:"based",order:6,fixed:!1},{name:"Sortablejs",order:8,fixed:!1}]}},components:{draggable:i.a},methods:{getdata:function(t){console.log(t.draggedContext.element.order)},datadragEnd:function(t){console.log("拖动前的索引 :"+t.oldIndex),console.log("拖动后的索引 :"+t.newIndex),console.log(this.list)}}}),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("draggable",{attrs:{move:t.getdata},on:{update:t.datadragEnd},model:{value:t.list,callback:function(e){t.list=e},expression:"list"}},[n("transition-group",t._l(t.list,function(e,o){return n("div",{key:o,staticClass:"listItem"},[t._v(t._s(e.name)+"\n        "),n("div",{staticClass:"bb1"})])}))],1)],1)},staticRenderFns:[]};var s=n("VU/8")(r,a,!1,function(t){n("AjZB")},"data-v-bfdb8e56",null);e.default=s.exports},AjZB:function(t,e){},DAYN:function(t,e,n){"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var o=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,o)}function r(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}var a=["Start","Add","Remove","Update","End"],s=["Choose","Sort","Filter","Clone"],l=["Move"].concat(a,s).map(function(t){return"on"+t}),c=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var o=e,r=this.$slots.footer;r&&(o=e?[].concat(i(e),i(r)):[].concat(i(r)));var a=null,s=function(t,e){a=function(t,e,n){return void 0==n?t:((t=null==t?{}:t)[e]=n,t)}(a,t,e)};if(s("attrs",this.$attrs),this.componentData){var l=this.componentData,c=l.on,d=l.props;s("on",c),s("props",d)}return t(this.element,a,o)},mounted:function(){var e=this;if(this.noneFunctionalComponentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};a.forEach(function(t){n["on"+t]=function(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),r.call(e,t,n)}}.call(e,t)}),s.forEach(function(t){n["on"+t]=r.bind(e,t)});var i=o({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in i)&&(i.draggable=">*"),this._sortable=new t(this.rootContainer,i),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==l.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var o=t.map(function(t){return t.elm}),r=[].concat(i(e)).map(function(t){return o.indexOf(t)});return n?r.filter(function(t){return-1!==t}):r}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=function(t,e){return t.map(function(t){return t.elm}).indexOf(e)}(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(i(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var r=i.realList,a={list:r,component:i};if(e!==n&&r&&i.getUnderlyingVm){var s=i.getUnderlyingVm(n);if(s)return o(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),c=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var o=this.getVmIndex(t.newIndex);this.spliceList(o,0,n),this.computeIndexes();var i={element:n,newIndex:o};this.emitChanges({added:i})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var o=this.context.index;this.spliceList(o,1);var i={element:this.context.element,oldIndex:o};this.resetTransitionData(o),this.emitChanges({removed:i})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var o=this.context.index,i=this.getVmIndex(t.newIndex);this.updatePosition(o,i);var r={element:this.context.element,oldIndex:o,newIndex:i};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(i(e.to.children)).filter(function(t){return"none"!==t.style.display}),o=n.indexOf(e.related),r=t.component.getVmIndex(o);return-1!=n.indexOf(c)||!e.willInsertAfter?r:r+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var i=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(i,t);return o(r,{futureIndex:a}),o(t,{relatedContext:i,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),c=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var r=n("Lokx");t.exports=e(r)}()},Lokx:function(t,e,n){var o,i;
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(r){"use strict";void 0===(i="function"==typeof(o=r)?o.call(e,n,e,t):o)||(t.exports=i)}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var t,e,n,o,i,r,a,s,l,c,d,u,h,f,p,g,v,m,b,_,y,D={},x=/\s+/g,C=/left|right|inline/,w="Sortable"+(new Date).getTime(),T=window,E=T.document,S=T.parseInt,I=T.setTimeout,k=T.jQuery||T.Zepto,M=T.Polymer,N=!1,O="draggable"in E.createElement("div"),A=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((y=E.createElement("x")).style.cssText="pointer-events:auto","auto"===y.style.pointerEvents),P=!1,B=Math.abs,L=Math.min,Y=[],F=[],R=ot(function(t,e,n){if(n&&e.scroll){var o,i,r,a,d,u,h=n[w],f=e.scrollSensitivity,p=e.scrollSpeed,g=t.clientX,v=t.clientY,m=window.innerWidth,b=window.innerHeight;if(l!==n&&(s=e.scroll,l=n,c=e.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(o=s,i=s.getBoundingClientRect(),r=(B(i.right-g)<=f)-(B(i.left-g)<=f),a=(B(i.bottom-v)<=f)-(B(i.top-v)<=f)),r||a||(a=(b-v<=f)-(v<=f),((r=(m-g<=f)-(g<=f))||a)&&(o=T)),D.vx===r&&D.vy===a&&D.el===o||(D.el=o,D.vx=r,D.vy=a,clearInterval(D.pid),o&&(D.pid=setInterval(function(){if(u=a?a*p:0,d=r?r*p:0,"function"==typeof c)return c.call(h,d,u,t);o===T?T.scrollTo(T.pageXOffset+d,T.pageYOffset+u):(o.scrollTop+=u,o.scrollLeft+=d)},24)))}},30),$=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,o){var i=o.options.group.name;return e?t:t&&(t.join?t.indexOf(i)>-1:i==t)}}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){N={capture:!1,passive:!1}}}))}catch(t){}function X(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=it({},e),t[w]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==X.supportPointer};for(var o in n)!(o in e)&&(e[o]=n[o]);for(var i in $(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&O,H(t,"mousedown",this._onTapStart),H(t,"touchstart",this._onTapStart),e.supportPointer&&H(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(H(t,"dragover",this),H(t,"dragenter",this)),F.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function j(e,n){"clone"!==e.lastPullMode&&(n=!0),o&&o.state!==n&&(Z(o,"display",n?"none":""),n||o.state&&(e.options.group.revertClone?(i.insertBefore(o,r),e._animate(t,o)):i.insertBefore(o,t)),o.state=n)}function U(t,e,n){if(t){n=n||E;do{if(">*"===e&&t.parentNode===n||nt(t,e))return t}while(t=V(t))}return null}function V(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function H(t,e,n){t.addEventListener(e,n,N)}function W(t,e,n){t.removeEventListener(e,n,N)}function q(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(x," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(x," ")}}function Z(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return E.defaultView&&E.defaultView.getComputedStyle?n=E.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function z(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function G(t,e,n,i,r,a,s,l){t=t||e[w];var c=E.createEvent("Event"),d=t.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);c.initEvent(n,!0,!0),c.to=r||e,c.from=a||e,c.item=i||e,c.clone=o,c.oldIndex=s,c.newIndex=l,e.dispatchEvent(c),d[u]&&d[u].call(t,c)}function J(t,e,n,o,i,r,a,s){var l,c,d=t[w],u=d.options.onMove;return(l=E.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=o,l.related=i||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function Q(t){t.draggable=!1}function K(){P=!1}function tt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function et(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!nt(t,e)||n++;return n}function nt(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(o)||[]).length!=e.length)}return!1}function ot(t,e){var n,o;return function(){void 0===n&&(n=arguments,o=this,I(function(){1===n.length?t.call(o,n[0]):t.apply(o,n),n=void 0},e))}}function it(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function rt(t){return M&&M.dom?M.dom(t).cloneNode(!0):k?k(t).clone(!0)[0]:t.cloneNode(!0)}function at(t){return I(t,0)}function st(t){return clearTimeout(t)}return X.prototype={constructor:X,_onTapStart:function(e){var n,o=this,i=this.el,r=this.options,s=r.preventOnFilter,l=e.type,c=e.touches&&e.touches[0],d=(c||e).target,u=e.target.shadowRoot&&e.path&&e.path[0]||d,h=r.filter;if(function(t){var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Y.push(o)}}(i),!t&&!(/mousedown|pointerdown/.test(l)&&0!==e.button||r.disabled)&&!u.isContentEditable&&(d=U(d,r.draggable,i))&&a!==d){if(n=et(d,r.draggable),"function"==typeof h){if(h.call(this,e,d,this))return G(o,u,"filter",d,i,i,n),void(s&&e.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=U(u,t.trim(),i))return G(o,t,"filter",d,i,i,n),!0})))return void(s&&e.preventDefault());r.handle&&!U(u,r.handle,i)||this._prepareDragStart(e,c,d,n)}},_prepareDragStart:function(n,o,s,l){var c,d=this,u=d.el,h=d.options,p=u.ownerDocument;s&&!t&&s.parentNode===u&&(m=n,i=u,e=(t=s).parentNode,r=t.nextSibling,a=s,g=h.group,f=l,this._lastX=(o||n).clientX,this._lastY=(o||n).clientY,t.style["will-change"]="all",c=function(){d._disableDelayedDrag(),t.draggable=d.nativeDraggable,q(t,h.chosenClass,!0),d._triggerDragStart(n,o),G(d,i,"choose",t,i,i,f)},h.ignore.split(",").forEach(function(e){z(t,e.trim(),Q)}),H(p,"mouseup",d._onDrop),H(p,"touchend",d._onDrop),H(p,"touchcancel",d._onDrop),H(p,"selectstart",d),h.supportPointer&&H(p,"pointercancel",d._onDrop),h.delay?(H(p,"mouseup",d._disableDelayedDrag),H(p,"touchend",d._disableDelayedDrag),H(p,"touchcancel",d._disableDelayedDrag),H(p,"mousemove",d._disableDelayedDrag),H(p,"touchmove",d._disableDelayedDrag),h.supportPointer&&H(p,"pointermove",d._disableDelayedDrag),d._dragStartTimer=I(c,h.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),W(t,"mouseup",this._disableDelayedDrag),W(t,"touchend",this._disableDelayedDrag),W(t,"touchcancel",this._disableDelayedDrag),W(t,"mousemove",this._disableDelayedDrag),W(t,"touchmove",this._disableDelayedDrag),W(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(m={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(H(t,"dragend",this),H(i,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{E.selection?at(function(){E.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(i&&t){var e=this.options;q(t,e.ghostClass,!0),q(t,e.dragClass,!1),X.active=this,G(this,i,"start",t,i,i,f)}else this._nulling()},_emulateDragOver:function(){if(b){if(this._lastX===b.clientX&&this._lastY===b.clientY)return;this._lastX=b.clientX,this._lastY=b.clientY,A||Z(n,"display","none");var t=E.elementFromPoint(b.clientX,b.clientY),e=t,o=F.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(b.clientX,b.clientY)),e)do{if(e[w]){for(;o--;)F[o]({clientX:b.clientX,clientY:b.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);A||Z(n,"display","")}},_onTouchMove:function(t){if(m){var e=this.options,o=e.fallbackTolerance,i=e.fallbackOffset,r=t.touches?t.touches[0]:t,a=r.clientX-m.clientX+i.x,s=r.clientY-m.clientY+i.y,l=t.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!X.active){if(o&&L(B(r.clientX-this._lastX),B(r.clientY-this._lastY))<o)return;this._dragStarted()}this._appendGhost(),_=!0,b=r,Z(n,"webkitTransform",l),Z(n,"mozTransform",l),Z(n,"msTransform",l),Z(n,"transform",l),t.preventDefault()}},_appendGhost:function(){if(!n){var e,o=t.getBoundingClientRect(),r=Z(t),a=this.options;q(n=t.cloneNode(!0),a.ghostClass,!1),q(n,a.fallbackClass,!0),q(n,a.dragClass,!0),Z(n,"top",o.top-S(r.marginTop,10)),Z(n,"left",o.left-S(r.marginLeft,10)),Z(n,"width",o.width),Z(n,"height",o.height),Z(n,"opacity","0.8"),Z(n,"position","fixed"),Z(n,"zIndex","100000"),Z(n,"pointerEvents","none"),a.fallbackOnBody&&E.body.appendChild(n)||i.appendChild(n),e=n.getBoundingClientRect(),Z(n,"width",2*o.width-e.width),Z(n,"height",2*o.height-e.height)}},_onDragStart:function(e,n){var r=this,a=e.dataTransfer,s=r.options;r._offUpEvents(),g.checkPull(r,r,t,e)&&((o=rt(t)).draggable=!1,o.style["will-change"]="",Z(o,"display","none"),q(o,r.options.chosenClass,!1),r._cloneId=at(function(){i.insertBefore(o,t),G(r,i,"clone",t)})),q(t,s.dragClass,!0),n?("touch"===n?(H(E,"touchmove",r._onTouchMove),H(E,"touchend",r._onDrop),H(E,"touchcancel",r._onDrop),s.supportPointer&&(H(E,"pointermove",r._onTouchMove),H(E,"pointerup",r._onDrop))):(H(E,"mousemove",r._onTouchMove),H(E,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50)):(a&&(a.effectAllowed="move",s.setData&&s.setData.call(r,a,t)),H(E,"drop",r),r._dragStartId=at(r._dragStarted))},_onDragOver:function(a){var s,l,c,f,p=this.el,m=this.options,b=m.group,y=X.active,D=g===b,x=!1,T=m.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!m.dragoverBubble&&a.stopPropagation()),!t.animated&&(_=!0,y&&!m.disabled&&(D?T||(f=!i.contains(t)):v===this||(y.lastPullMode=g.checkPull(this,y,t,a))&&b.checkPut(this,y,t,a))&&(void 0===a.rootEl||a.rootEl===this.el))){if(R(a,m,this.el),P)return;if(s=U(a.target,m.draggable,p),l=t.getBoundingClientRect(),v!==this&&(v=this,x=!0),f)return j(y,!0),e=i,void(o||r?i.insertBefore(t,o||r):T||i.appendChild(t));if(0===p.children.length||p.children[0]===n||p===a.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(p,a)){if(0!==p.children.length&&p.children[0]!==n&&p===a.target&&(s=p.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}j(y,D),!1!==J(i,p,t,l,s,c,a)&&(t.contains(p)||(p.appendChild(t),e=p),this._animate(l,t),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==t&&void 0!==s.parentNode[w]){d!==s&&(d=s,u=Z(s),h=Z(s.parentNode));var E=(c=s.getBoundingClientRect()).right-c.left,S=c.bottom-c.top,k=C.test(u.cssFloat+u.display)||"flex"==h.display&&0===h["flex-direction"].indexOf("row"),M=s.offsetWidth>t.offsetWidth,N=s.offsetHeight>t.offsetHeight,O=(k?(a.clientX-c.left)/E:(a.clientY-c.top)/S)>.5,A=s.nextElementSibling,B=!1;if(k){var L=t.offsetTop,Y=s.offsetTop;B=L===Y?s.previousElementSibling===t&&!M||O&&M:s.previousElementSibling===t||t.previousElementSibling===s?(a.clientY-c.top)/S>.5:Y>L}else x||(B=A!==t&&!N||O&&N);var F=J(i,p,t,l,s,c,a,B);!1!==F&&(1!==F&&-1!==F||(B=1===F),P=!0,I(K,30),j(y,D),t.contains(p)||(B&&!A?p.appendChild(t):s.parentNode.insertBefore(t,B?A:s)),e=t.parentNode,this._animate(l,t),this._animate(c,s))}}},_animate:function(t,e){var n=this.options.animation;if(n){var o=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),Z(e,"transition","none"),Z(e,"transform","translate3d("+(t.left-o.left)+"px,"+(t.top-o.top)+"px,0)"),e.offsetWidth,Z(e,"transition","all "+n+"ms"),Z(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=I(function(){Z(e,"transition",""),Z(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;W(E,"touchmove",this._onTouchMove),W(E,"pointermove",this._onTouchMove),W(t,"mouseup",this._onDrop),W(t,"touchend",this._onDrop),W(t,"pointerup",this._onDrop),W(t,"touchcancel",this._onDrop),W(t,"pointercancel",this._onDrop),W(t,"selectstart",this)},_onDrop:function(a){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(D.pid),clearTimeout(this._dragStartTimer),st(this._cloneId),st(this._dragStartId),W(E,"mouseover",this),W(E,"mousemove",this._onTouchMove),this.nativeDraggable&&(W(E,"drop",this),W(s,"dragstart",this._onDragStart)),this._offUpEvents(),a&&(_&&(a.preventDefault(),!l.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),i!==e&&"clone"===X.active.lastPullMode||o&&o.parentNode&&o.parentNode.removeChild(o),t&&(this.nativeDraggable&&W(t,"dragend",this),Q(t),t.style["will-change"]="",q(t,this.options.ghostClass,!1),q(t,this.options.chosenClass,!1),G(this,i,"unchoose",t,e,i,f),i!==e?(p=et(t,l.draggable))>=0&&(G(null,e,"add",t,e,i,f,p),G(this,i,"remove",t,e,i,f,p),G(null,e,"sort",t,e,i,f,p),G(this,i,"sort",t,e,i,f,p)):t.nextSibling!==r&&(p=et(t,l.draggable))>=0&&(G(this,i,"update",t,e,i,f,p),G(this,i,"sort",t,e,i,f,p)),X.active&&(null!=p&&-1!==p||(p=f),G(this,i,"end",t,e,i,f,p),this.save()))),this._nulling()},_nulling:function(){i=t=e=n=r=o=a=s=l=m=b=_=p=d=u=v=g=X.active=null,Y.forEach(function(t){t.checked=!0}),Y.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.preventDefault()}(e));break;case"mouseover":this._onDrop(e);break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)U(t=n[o],r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||tt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,o){var i=n.children[o];U(i,this.options.draggable,n)&&(e[t]=i)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return U(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&$(n)},destroy:function(){var t=this.el;t[w]=null,W(t,"mousedown",this._onTapStart),W(t,"touchstart",this._onTapStart),W(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(W(t,"dragover",this),W(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),F.splice(F.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},H(E,"touchmove",function(t){X.active&&t.preventDefault()}),X.utils={on:H,off:W,css:Z,find:z,is:function(t,e){return!!U(t,e,t)},extend:it,throttle:ot,closest:U,toggleClass:q,clone:rt,index:et,nextTick:at,cancelNextTick:st},X.create=function(t,e){return new X(t,e)},X.version="1.7.0",X})}});