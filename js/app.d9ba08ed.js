(function(e){function n(n){for(var a,l,p=n[0],i=n[1],d=n[2],c=0,u=[];c<p.length;c++)l=p[c],o[l]&&u.push(o[l][0]),o[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(n);while(u.length)u.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,p=1;p<t.length;p++){var i=t[p];0!==o[i]&&(a=!1)}a&&(r.splice(n--,1),e=l(l.s=t[0]))}return e}var a={},o={app:0},r=[];function l(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=a,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="https://lison16.github.io/v-org-tree/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],i=p.push.bind(p);p.push=n,p=p.slice();for(var d=0;d<p.length;d++)n(p[d]);var s=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var a=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"control-box"},[t("button",{on:{click:function(n){e.expandAll=!e.expandAll}}},[e._v(e._s(e.expandAll?"收起":"展开"))]),t("button",{on:{click:e.changeData}},[e._v("更新数据")])]),t("div",{staticClass:"tree-wrapper"},[t("org-tree",{attrs:{data:e.data,collapsable:"","node-render":e.nodeRender,"expand-all":e.expandAll,horizontal:!1,props:e.props},on:{"on-expand":e.onExpand,"on-node-click":e.onNodeClick}})],1)])},r=[],l=(t("7f7f"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"org-tree-container"},[t("div",{staticClass:"org-tree",class:{horizontal:e.horizontal,collapsable:e.collapsable}},[t("org-tree-node",{attrs:{data:e.dataCloned,props:e.props,horizontal:e.horizontal,"label-width":e.labelWidth,collapsable:e.collapsable,"node-render":e.nodeRender,"button-render":e.buttonRender,"label-class-name":e.labelClassName},on:{"on-expand":e.handleExpand,"on-node-click":e.handleNodeClick}})],1)])}),p=[],i=(t("ac6a"),t("c5f6"),function(e,n){return!(Array.isArray(e[n])&&e[n].length>0)}),d=function(e,n,t){var a=t.props,o=["org-tree-node"],r=[],l=n[a.props.children];return i(n,a.props.children)?o.push("is-leaf"):a.collapsable&&!n[a.props.expand]&&o.push("collapsed"),r.push(c(e,n,t)),a.collapsable&&!n[a.props.expand]||r.push(u(e,l,t)),e("div",{domProps:{className:o.join(" ")}},r)},s=function(e,n,t){var a=t.props,o=t.listeners["on-expand"],r=["org-tree-node-btn"];return n[a.props.expand]&&r.push("expanded"),e("span",{class:"org-tree-button-wrapper",on:{click:function(e){e.stopPropagation(),o&&o(n)}}},[a.buttonRender?a.buttonRender(e,n):e("span",{class:r.join(" ")})])},c=function(e,n,t){var a=t.props,o=n[a.props.label],r=a.nodeRender,l=t.listeners["on-node-click"],p=[];if("function"===typeof r){var d=r(e,n);d&&p.push(d)}else p.push(o);a.collapsable&&!i(n,a.props.children)&&p.push(s(e,n,t));var c=["org-tree-node-label-inner"],u=a.labelWidth,h=a.labelClassName;return"number"===typeof u&&(u+="px"),"function"===typeof h&&(h=h(n)),h&&c.push(h),e("div",{domProps:{className:"org-tree-node-label"}},[e("div",{domProps:{className:c.join(" ")},style:{width:u},on:{click:function(e){return l&&l(e,n)}}},p)])},u=function(e,n,t){if(Array.isArray(n)&&n.length){var a=n.map(function(n){return d(e,n,t)});return e("div",{domProps:{className:"org-tree-node-children"}},a)}return""},h=function(e,n){var t=n.props;return d(e,t.data,n)},f=h,_=t("da0a"),b=t.n(_),x={name:"VOrgTree",components:{OrgTreeNode:{render:f,functional:!0}},props:{data:{type:Object,required:!0},props:{type:Object,default:function(){return{id:"id",label:"label",expand:"expand",children:"children"}}},horizontal:Boolean,collapsable:Boolean,nodeRender:Function,buttonRender:Function,labelWidth:[String,Number],labelClassName:[Function,String],expandAll:{type:Boolean,default:!1}},data:function(){return{flatData:{},dataCloned:{}}},watch:{data:function(e){var n=this;this._handleData(e),this._mapData(this.dataCloned,function(e){var t=n.flatData[e[n.prop_id]].expand;t&&n.$set(e,n.prop_expand,!0)}),this._toggleExpand(this.dataCloned,this.expandAll)},expandAll:function(e){this._toggleExpand(this.dataCloned,e)}},computed:{prop_id:function(){return this.props.id},prop_label:function(){return this.props.label},prop_expand:function(){return this.props.expand},prop_children:function(){return this.props.children}},methods:{_handleData:function(e){this._cloneData(e)},_cloneData:function(e){this.dataCloned=b()(e)},_setFlatData:function(e){this.flatData[e[this.prop_id]]=e},_mapData:function(e,n){var t=this;n(e);var a=e[this.prop_children];a&&a.forEach(function(e){t._mapData(e,n)})},_updateExpandStatus:function(){this._mapData(this.dataCloned,this._setFlatData)},collapse:function(e){var n=this,t=this;e.forEach(function(e){e[n.prop_expand]&&(e[n.prop_expand]=!1);var a=e[n.prop_children];a&&t.collapse(a)})},handleExpand:function(e){if(this.prop_expand in e){e[this.prop_expand]=!e[this.prop_expand];var n=e[this.prop_children];!e[this.prop_expand]&&n&&this.collapse(n)}else this.$set(e,this.prop_expand,!0);this.$emit("on-expand",e,e[this.prop_expand]),this._updateExpandStatus()},_toggleExpand:function(e,n){var t=this,a=this;if(Array.isArray(e))e.forEach(function(e){a.$set(e,t.prop_expand,n);var o=e[t.prop_children];o&&a._toggleExpand(o,n)});else{a.$set(e,this.prop_expand,n);var o=e[this.prop_children];o&&a._toggleExpand(o,n)}},handleNodeClick:function(e,n){var t=this;this.$emit("on-node-click",e,n,function(){t.handleExpand(n)})},toggleExpand:function(){this._toggleExpand(this.dataCloned,this.expandAll),this._updateExpandStatus()}},mounted:function(){this._handleData(this.data),this._updateExpandStatus(),this._toggleExpand(this.dataCloned,this.expandAll)}},v=x,g=(t("fcc4"),t("2877")),m=Object(g["a"])(v,l,p,!1,null,null,null);m.options.__file="org-tree.vue";var y=m.exports,w=function e(n){e.installed||(e.installed=!0,n.component(y.name,y))};y.install=w,"undefined"!==typeof window&&window.Vue&&window.Vue.use(y);var E=y,C={dep_id:0,label:"XXX科技有限公司",dep_children:[{dep_id:2,label:"产品研发部",dep_children:[{dep_id:5,label:"研发-前端"},{dep_id:6,label:"研发-后端"},{dep_id:9,label:"UI设计"},{dep_id:10,label:"产品经理"}]},{dep_id:3,label:"销售部",dep_children:[{dep_id:7,label:"销售一部"},{dep_id:8,label:"销售二部"}]},{dep_id:4,label:"财务部"},{dep_id:11,label:"HR人事"}]},A={dep_id:0,label:"XXX科技有限公司",dep_children:[{dep_id:2,label:"产品研发部",dep_children:[{dep_id:5,label:"研发-前端"},{dep_id:6,label:"研发-后端"},{dep_id:9,label:"UI设计"}]},{dep_id:3,label:"销售部",dep_children:[{dep_id:7,label:"销售一部"}]},{dep_id:4,label:"财务部"},{dep_id:9,label:"HR人事"}]},k={name:"app",data:function(){return{data:C,expandAll:!1,props:{id:"dep_id",label:"title",expand:"expand",children:"dep_children"}}},components:{OrgTree:E},methods:{nodeRender:function(e,n){return e("span",[n.label])},onNodeClick:function(e,n){console.log(n)},onExpand:function(e,n){console.log(e,n)},buttonRender:function(e,n){return e("div",{style:{width:"20px",height:"20px",background:n.expand?"red":"yellow"}})},changeData:function(){this.data=A}}},D=k,O=(t("7c55"),Object(g["a"])(D,o,r,!1,null,null,null));O.options.__file="App.vue";var j=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c48":function(e,n,t){},"7c55":function(e,n,t){"use strict";var a=t("5c48"),o=t.n(a);o.a},bcfc:function(e,n,t){},fcc4:function(e,n,t){"use strict";var a=t("bcfc"),o=t.n(a);o.a}});