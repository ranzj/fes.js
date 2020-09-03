(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{470:function(t,e,l){"use strict";l.r(e);l(10);var a={data:function(){return{value:!1}},methods:{confirm:function(){var t=this;return new Promise((function(e,l){t.$Message({title:"警告",template:"是否切换状态？"}).then((function(t){0==t&&e()}))}))}}},s=l(43),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"switch-开关"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#switch-开关"}},[t._v("#")]),t._v(" Switch 开关")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("需要表示开关状态/两种状态之间的切换时使用。")]),t._v(" "),l("h2",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[l("row",[l("cell",{staticClass:"pr-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/switch/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-switch",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("在组件中绑定v-model控制开关状态")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"文字和图标",template:"ui/templates/switch/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-switch",[l("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),t._v(" "),l("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])]),t._v(" "),l("Wb-switch",[l("Icon",{attrs:{slot:"open",type:"md-checkmark"},slot:"open"}),t._v(" "),l("Icon",{attrs:{slot:"close",type:"md-close"},slot:"close"})],1)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("自定义内容，slot为open的文字或者图标在on为true时显示，反之依然。")])]},proxy:!0}])})],1),t._v(" "),l("cell",{staticClass:"pl-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"切换前询问",template:"ui/templates/switch/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-switch",{attrs:{confirm:t.confirm}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("点击切换时，弹出confirm询问，点击确定之后才发生切换。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"只读和禁用",template:"ui/templates/switch/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-switch",{attrs:{readonly:""}}),t._v(" "),l("Wb-switch",{attrs:{disabled:""}})]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置readonly为只读，设置disabled为禁用")])]},proxy:!0}])})],1)],1)],1),t._v(" "),l("h2",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("h3",{attrs:{id:"wbswitch-props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#wbswitch-props"}},[t._v("#")]),t._v(" WbSwitch Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("日期的值，可以使用v-model实现数据的双向绑定")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("readonly")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否只读")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("confirm")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("状态切换前的询问，函数返回promise，当promise的状态为resolve时执行切换")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])]),t._v(" "),l("h3",{attrs:{id:"wbswitch-events"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#wbswitch-events"}},[t._v("#")]),t._v(" WbSwitch Events")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-change")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("切换后触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(value) => void")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);