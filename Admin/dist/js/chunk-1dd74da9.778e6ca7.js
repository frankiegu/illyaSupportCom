(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dd74da9"],{"25f8":function(t,e,o){"use strict";var a=o("77f7"),i=o.n(a);i.a},"77f7":function(t,e,o){},fbee:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",{staticClass:"common rwoh"},[o("el-upload",{staticClass:"upload-demo",attrs:{"show-file-list":!1,drag:"",action:"","http-request":t.upLoad,multiple:""}},[t.loadcover?o("img",{staticClass:"avatar",attrs:{src:t.loadcover}}):t._e(),o("i",{staticClass:"el-icon-upload"}),o("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),o("em",[t._v("点击上传")])])])],1),o("el-row",{staticClass:"common rwoh"},[t._v(" 文章类目 "),o("el-radio-group",{staticStyle:{"margin-right":"15px"},model:{value:t.classification,callback:function(e){t.classification=e},expression:"classification"}},[o("el-radio-button",{attrs:{label:1}},[t._v("官方资讯")]),o("el-radio-button",{attrs:{label:2}},[t._v("手办")])],1)],1),o("el-row",{staticClass:"common rwoh"},[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[o("template",{slot:"prepend"},[t._v("文章名")])],2)],1),o("el-row",{staticClass:"common rwoh"},[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.introduce,callback:function(e){t.introduce=e},expression:"introduce"}},[o("template",{slot:"prepend"},[t._v("介绍")])],2)],1),o("el-row",{staticClass:"common rwoh"},[o("editor",{staticClass:"editor",attrs:{content:t.content},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),o("el-row",{staticClass:"common rwoh"},[o("el-button",{on:{click:function(e){return t.save()}}},[t._v("确定")])],1)],1)},i=[],c=o("ceb0"),n={name:"edit",data:function(){return{id:"",title:"",classification:"",introduce:"",content:"",cover:"",loadcover:""}},methods:{save:function(){var t=this,e={id:this.id,title:this.title,classification:this.classification,introduce:this.introduce,content:this.content,cover:this.cover};this.$http.ArticleAddoredit(e).then((function(e){200==e.code&&t.$message({message:e.msg,type:"success"})})).catch((function(t){console.log("error",t)}))},upLoad:function(t){var e=this,o=new FormData;o.append("file",t.file),o.append("uploadKey","bangumicover"),console.log(t),this.$http.upload(o).then((function(t){console.log(t),console.log("上传成功"),200===t.code&&(e.cover=t.data.filename,e.loadcover=t.data.lodpath)}))},query:function(t){var e=this;this.$http.ArticleInfo(t).then((function(t){200==t.code&&(e.id=t.data.id,e.content=t.data.content,e.loadcover=t.data.cover,e.title=t.data.title,e.classification=t.data.classification,e.introduce=t.data.introduce,e.cover=t.data.file)})).catch((function(t){console.log("error",t)}))}},components:{editor:c["a"]},created:function(){this.query(this.$route.query.id)}},l=n,s=(o("25f8"),o("2877")),r=Object(s["a"])(l,a,i,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-1dd74da9.778e6ca7.js.map