(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{357:function(e,t,i){},380:function(e,t,i){},517:function(e,t,i){"use strict";var s=i(357);i.n(s).a},525:function(e,t,i){"use strict";i.r(t);i(356);var s={name:"hosjoyListPreView",props:{fileList:Array},data:function(){return{activeIndex:-1,previewSrcList:[]}},methods:{open:function(e){var t=this.fileList[e],i=JSON.parse(JSON.stringify(this.fileList));i.splice(e,1),i.unshift(t),this.previewSrcList=i.map((function(e){return e}));var s=this.$refs["preview_".concat(e)];s&&s[0]&&s[0].clickHandler()},remove:function(e){this.$emit("remove",e)}}},a=(i(517),i(16)),l=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"default-pre-view"},e._l(e.fileList,(function(t,s){return i("div",{key:s,staticClass:"default-pre-view-warp"},[i("div",{staticClass:"default-pre-view-mask"},[i("i",{staticClass:"el-icon-zoom-in",staticStyle:{color:"#fff"},on:{click:function(t){return e.open(s)}}}),e._v(" "),i("i",{staticClass:"el-icon-delete-solid",staticStyle:{color:"#fff"},on:{click:function(t){return e.remove(s)}}})]),e._v(" "),i("el-image",{ref:"preview_"+s,refInFor:!0,staticClass:"default-pre-view-image",attrs:{lazy:!0,fit:"contain",src:t,"preview-src-list":e.previewSrcList}})],1)})),0)}),[],!1,null,"67fac48b",null);t.default=l.exports},565:function(e,t,i){"use strict";var s=i(380);i.n(s).a},578:function(e,t,i){"use strict";i.r(t);i(366);var s=i(526),a=(i(356),i(522),i(575)),l=(i(379),i(525)),o={name:"HosJoyUpload",props:{value:Array,limit:{type:Number,default:1e3},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},uploadParameters:{type:Object,default:function(){return{}}},showPreView:{type:Boolean,default:!0},showFileList:{type:Boolean,default:!1},action:{type:String,default:""},fileSize:{type:Number,default:100},showAsFileName:{type:Boolean,default:!1}},components:{hosjoyListPreView:l.default},data:function(){return{isBeyond:!0,haveslot:!1,deleteVisible:!1,index:""}},computed:{fileList:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{handleSuccess:function(e,t,i){var l=this;if(this.showAsFileName){var o={name:e.data.fileName,url:e.data.accessUrl};if("object"===Object(a.a)(o)){var n=[];n.push(o),n.filter((function(e){return"object"===Object(a.a)(e)})),n.map((function(e){l.fileList.push(e)}))}}else this.fileList=[].concat(Object(s.a)(this.fileList),[e.data.accessUrl])},doRemove:function(){this.fileList.splice(this.index,1),this.$set(this,"fileList",this.fileList),this.deleteVisible=!1},remove:function(e){this.deleteVisible=!0,this.index=e},handleRemove:function(e,t){if(e.response&&e.response.data){var i=this.fileList.indexOf(e.response.data.accessUrl);this.doRemove(i)}},onExceed:function(e,t){this.$message.error("上传数量超出限制！")},handleCheckedSize:function(e,t){this.isBeyond=!0,e.size/1048576<this.fileSize?this.isBeyond=!1:this.isBeyond=!0},beforeAvatarUpload:function(e){if(this.isBeyond)return this.$message.error("建议不要超过".concat(this.fileSize,"M")),!1}},mounted:function(){this.$slots.default&&(this.haveslot=!0)}},n=(i(565),i(16)),c=Object(n.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"default-upload-warp"},[e.showPreView&&!e.showAsFileName?i("div",{staticClass:"default-pre-view"},[e.fileList.length>0?i("hosjoy-list-pre-view",{attrs:{fileList:e.fileList},on:{remove:e.remove}}):e._e()],1):e._e(),e._v(" "),e.showAsFileName?i("div",{staticClass:"filename"},e._l(e.fileList,(function(t,s){return i("span",{key:s,staticClass:"posrtv"},[t&&t.url?[i("i",{staticClass:"el-icon-document"}),e._v(" "),i("a",{attrs:{href:t.url,target:"_blank"}},[i("font",[e._v(e._s(t.name))])],1),e._v(" "),i("div",{staticClass:"abs"},[i("i",{staticClass:"el-icon-circle-close",on:{click:function(t){return e.remove(s)}}})])]:e._e()],2)})),0):e._e(),e._v(" "),i("div",{staticClass:"elupload",class:e.haveslot?"haveslot":""},[i("el-upload",e._g(e._b({ref:"elUpload",attrs:{drag:"",multiple:e.multiple,name:"multiFile",data:e.uploadParameters,showFileList:e.showFileList,disabled:e.disabled,action:e.action,limit:e.limit,"on-exceed":e.onExceed,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"on-change":e.handleCheckedSize,"before-upload":e.beforeAvatarUpload}},"el-upload",e.$attrs,!1),e.$listeners),[e._t("default",[i("div",{staticClass:"default-upload"},[i("div",{staticClass:"default-upload-icon"},[i("i",{staticClass:"el-icon-upload"}),e._v(" "),i("span",[e._v("点击或拖拽到这上传")]),e._v(" "),e.multiple?i("span",{staticStyle:{"margin-top":"3px"}},[e._v("（支持多图）")]):e._e()])])]),e._v(" "),e._t("tip")],2)],1),e._v(" "),i("el-dialog",{staticClass:"deldialog",attrs:{title:"提示",visible:e.deleteVisible,width:"500px"},on:{"update:visible":function(t){e.deleteVisible=t}}},[i("span",[e._v("您确定删除这一条数据吗？")]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.deleteVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.doRemove}},[e._v("确 定")])],1)])],1)}),[],!1,null,"4d37e0a3",null);t.default=c.exports},633:function(e,t,i){"use strict";i.r(t);var s={name:"HosJoyUpload",components:{hosjoyUpload:i(578).default},data:function(){return{action:"http://192.168.20.248:30000/tms/files/upload",fileList:["https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191017/e340708c-d4a8-4b69-a051-6e62b78e1fd4.png","https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191017/a9645dda-eb30-4304-8933-a542ed9a3396.png"],uploadParameters:{updateUid:"张功伟"},fileNameList:[{name:"x.pdf",url:"https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191023/c453f100-9414-4c52-8dba-08b35ed32cdd.pdf"},{name:"x2.pdf",url:"https://hosjoy-oss-test.oss-cn-hangzhou.aliyuncs.com/images/20191023/c453f100-9414-4c52-8dba-08b35ed32cdd.pdf"}]}}},a=i(16),l=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo-button"},[i("div",[e._v("\n        图片：\n        "),i("hosjoy-Upload",{staticStyle:{margin:"25px 0"},attrs:{action:e.action,uploadParameters:e.uploadParameters},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}}),e._v("\n        文件：\n        "),i("hosjoy-Upload",{staticStyle:{margin:"25px 0"},attrs:{showAsFileName:"",action:e.action,uploadParameters:e.uploadParameters},model:{value:e.fileNameList,callback:function(t){e.fileNameList=t},expression:"fileNameList"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)])}),[],!1,null,null,null);t.default=l.exports}}]);