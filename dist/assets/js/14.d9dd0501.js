(window.webpackJsonp=window.webpackJsonp||[]).push([[14,16],{580:function(t,n,o){"use strict";o.r(n);var i={name:"hosJoyButton",data:function(){return{loading:!1}},methods:{onClick:function(){if(this.loading)return!1;this.loading=!0,this.$emit("click",this.done)},done:function(){this.loading=!1}},mounted:function(){}},s=o(16),c=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("el-button",this._b({attrs:{loading:this.loading},on:{click:this.onClick}},"el-button",this.$attrs,!1),[this._t("default",[this._v("提 交")])],2)}),[],!1,null,"7063f22a",null);n.default=c.exports},632:function(t,n,o){"use strict";o.r(n);var i={name:"hosJoyButton",components:{hosjoyButton:o(580).default},methods:{buttonClick:function(t){setTimeout((function(){t()}),3e3)}}},s=o(16),c=Object(s.a)(i,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"demo-button"},[o("div",[o("hosjoy-button",{on:{click:t.buttonClick}},[t._v("默认按钮")]),t._v(" "),o("hosjoy-button",{attrs:{type:"primary"},on:{click:t.buttonClick}},[t._v("主要按钮")]),t._v(" "),o("hosjoy-button",{attrs:{type:"success"},on:{click:t.buttonClick}},[t._v("成功按钮")]),t._v(" "),o("hosjoy-button",{attrs:{type:"info"},on:{click:t.buttonClick}},[t._v("信息按钮")]),t._v(" "),o("hosjoy-button",{attrs:{type:"warning"},on:{click:t.buttonClick}},[t._v("警告按钮")]),t._v(" "),o("hosjoy-button",{attrs:{type:"danger"},on:{click:t.buttonClick}},[t._v("危险按钮")])],1)])}),[],!1,null,null,null);n.default=c.exports}}]);