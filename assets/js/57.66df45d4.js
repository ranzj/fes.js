(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{469:function(t,e,l){"use strict";l.r(e);var a={data:function(){return{current:1}},methods:{next:function(){this.current+=1,this.current>4&&(this.current=1)}}},n=l(43),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"step-步骤条"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#step-步骤条"}},[t._v("#")]),t._v(" Step 步骤条")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("拆分某项流程的步骤，引导用户按流程完成任务。")]),t._v(" "),l("h2",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[l("row",[l("cell",{staticClass:"pr-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/step/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Steps",{attrs:{current:2}},[l("Step",{attrs:{title:"已完成",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"进行中",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}})],1)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("基本用法，组件会根据current自动判断各步骤状态。。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"垂直方向",template:"ui/templates/step/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Steps",{attrs:{current:2,direction:"vertical"}},[l("Step",{attrs:{title:"已完成",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"进行中",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}})],1)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置属性direction为vertical在垂直方向展示。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"自定义节点标志",template:"ui/templates/step/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Steps",{attrs:{current:t.current,direction:"vertical"}},[l("Step",{attrs:{title:"已完成",content:"这里是该步骤的描述信息"}},[l("Icon",{attrs:{type:"md-done-all"}})],1),t._v(" "),l("Step",{attrs:{title:"进行中",content:"这里是该步骤的描述信息"}},[l("Icon",{attrs:{type:"md-done-all"}})],1),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}},[l("Icon",{attrs:{type:"md-done-all"}})],1),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}},[l("Icon",{attrs:{type:"md-done-all"}})],1)],1),t._v(" "),l("Wb-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步")])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("通过slot配置Step的节点标志")])]},proxy:!0}])})],1),t._v(" "),l("cell",{staticClass:"pl-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"迷你版",template:"ui/templates/step/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Steps",{attrs:{current:2,size:"small"}},[l("Step",{attrs:{title:"已完成",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"进行中",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}})],1)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置属性size为small启用迷你版。")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"切换步骤",template:"ui/templates/step/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Steps",{attrs:{current:t.current,direction:"vertical"}},[l("Step",{attrs:{title:"已完成",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"进行中",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}}),t._v(" "),l("Step",{attrs:{title:"待进行",content:"这里是该步骤的描述信息"}})],1),t._v(" "),l("Wb-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步")])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("点击下一步改变current的值。")])]},proxy:!0}])})],1)],1)],1),t._v(" "),l("h2",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("h3",{attrs:{id:"steps-props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#steps-props"}},[t._v("#")]),t._v(" Steps Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("current")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示当前步骤，从1开始")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条的尺寸，可选值为"),l("code",[t._v("small")]),t._v("或者不写")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("direction")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤条的方向，可选值为"),l("code",[t._v("horizontal")]),t._v("（水平）或"),l("code",[t._v("vertical")]),t._v("（垂直）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("horizontal")])])])]),t._v(" "),l("h3",{attrs:{id:"step-props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#step-props"}},[t._v("#")]),t._v(" Step Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("标题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("content")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("步骤的描述内容，可选")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])]),t._v(" "),l("h3",{attrs:{id:"step-solts"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#step-solts"}},[t._v("#")]),t._v(" Step Solts")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("default")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("更换节点的默认图标")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);