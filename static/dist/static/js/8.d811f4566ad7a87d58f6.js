(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{125:function(e,t,s){"use strict";s.r(t);var a=s(126);var i=s.n(a);for(var n in a)if(n!=="default")(function(e){s.d(t,e,function(){return a[e]})})(n);t["default"]=i.a},126:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a={name:"course_number",data:function e(){return{addType:false,value:"",studentList:[],addList:[],student_id:[],course_id:"",formData:{name:"",class_number:"",professional_class:""},studentInfo:{},file:{},data:[],page:{current:1,limit:10,count:30,location:"left",align:"right",showLimit:true,limitList:[10,20,30]},visible:{addstudent:{isshow:false},addexcel:{isshow:false},deletestudent:{isshow:false},deleteall:{isshow:false}}}},watch:{"$store.state.currentCourseId":function e(t){this.course_id=this.$store.state.currentCourseId;this.getList()}},created:function e(){this.course_id=this.$store.state.currentCourseId;this.getList()},methods:{getList:function e(){var t=this;var s={};s.page_size=this.page.limit;s.course_id=this.course_id;s.page=this.page.current;this.$http.get("/course/search_course_student/",{params:s}).then(function(e){if(e.result){t.page.count=e.count;t.data=e.data;console.info(t.data)}else{t.$bkMessage({message:"页面加载出错，请刷新重试！",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}});this.$http.get("/course/search_member_info/?member_identify=STUDENT").then(function(e){if(e.result){t.studentList=e.data}else{t.$bkMessage({message:"页面加载出错，请刷新重试！",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},addStudent:function e(){var t=this;if(this.addType){if(this.formData.name===""||this.formData.class_number===""||this.formData.professional_class===""){this.$bkMessage({message:"请补全内容",delay:1e3,theme:"error",affsetY:60,ellipsisLine:2})}else{this.formData.course_id=this.course_id;this.$http.post("/course/add_course_member/",this.formData).then(function(e){if(e.result){t.$bkMessage({message:"增加成功",delay:1e3,theme:"success",offsetY:60,ellipsisLine:2});t.getList()}else{t.$bkMessage({message:"增加失败，请重新尝试",delay:1e3,theme:"success",affsetY:60,ellipsisLine:2})}})}}else{var s={};s.student_id=this.addList;s.course_id=this.course_id;this.$http.post("/course/add_course_student/",s).then(function(e){if(e.result){t.getList();t.$bkMessage({message:"增加成功",delay:1e3,theme:"success",offsetY:60,ellipsisLine:2});t.getList()}else{t.$bkMessage({message:"添加失败，请重新尝试",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}});this.addList=[]}},addExcel:function e(t){var s=this;console.info(t);var a=new FormData;a.append("excel_file",t.fileList[0].origin);a.append("course_id",this.course_id);var i={headers:{"Content-Type":"multipart/form-data"}};this.$http.post("/course/import_student_excel/",a,i).then(function(e){if(e.result){s.getList();s.$bkMessage({message:"导入成功",delay:1e3,theme:"success",offsetY:60,ellipsisLine:2})}else{s.$bkMessage({message:e.message,delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},handleRes:function e(t){if(t.result){return true}return false},downtemplete:function e(){var t=this;var s=document.createElement("a");this.$http.get("/course/download_student_excel_template_url/").then(function(e){if(e.result){s.href=e.url;s.click()}else{t.$bkMessage({message:"下载失败请重新尝试",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},handleSelect:function e(t){var s=this;this.student_id=[];t.forEach(function(e){s.student_id.push(e.id)})},beforRemove:function e(t){this.student_id=[];this.studentInfo=t;this.student_id.push(t.id);this.visible.deletestudent.isshow=true},removeStudent:function e(t){var s=this;this.$http.delete("/course/delete_student_course_contact/",{params:{course_id:this.course_id,student_id:JSON.stringify(t)}}).then(function(e){if(e.result){s.getList();s.$bkMessage({message:"删除成功",delay:1e3,theme:"success",offsetY:60,ellipsisLine:2})}else{s.$bkMessage({message:"删除失败",delay:1e3,theme:"error",offsetY:60,ellipsisLine:2})}})},pageChange:function e(){this.getList()},limitChange:function e(){this.page.current=1;this.getList()}}};t.default=a},127:function(e,t,s){},152:function(e,t,s){"use strict";var a=s(127);var i=s.n(a);var n=i.a},162:function(e,t,s){"use strict";var a=function(){var e=this;var t=e.$createElement;var s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"wrapper1"},[s("div",{staticClass:"wrapper-head"},[s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(t){e.visible.addstudent.isshow=true}}},[e._v("增加学生")]),e._v(" "),s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(t){e.visible.addexcel.isshow=true}}},[e._v("导入成员")]),e._v(" "),s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:e.downtemplete}},[e._v("下载点名册模板")]),e._v(" "),s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(t){e.visible.deleteall.isshow=true}}},[e._v("批量删除")])],1),e._v(" "),s("div",{staticClass:"wrapper-body"},[s("bk-table",{staticStyle:{"margin-top":"15px"},attrs:{size:"small",data:e.data},on:{"selection-change":e.handleSelect,"row-mouse-enter":e.handleRowMouseEnter,"row-mouse-leave":e.handleRowMouseLeave,"page-change":e.handlePageChange,"page-limit-change":e.handlePageLimitChange}},[s("bk-table-column",{attrs:{type:"selection",width:"60",align:"center","header-align":"center"}}),e._v(" "),s("bk-table-column",{attrs:{type:"index",label:"序列",align:"center","header-align":"center",width:"60"}}),e._v(" "),s("bk-table-column",{attrs:{label:"姓名",prop:"name",align:"center","header-align":"center"}}),e._v(" "),s("bk-table-column",{attrs:{label:"学号",prop:"class_number",align:"center","header-align":"center"}}),e._v(" "),s("bk-table-column",{attrs:{label:"专业班级",prop:"professional_class",align:"center","header-align":"center"}}),e._v(" "),s("bk-table-column",{attrs:{label:"身份",prop:"identify",align:"center","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.identify==="STUDENT"?s("span",[e._v("学生")]):e._e(),e._v(" "),t.row.identify==="TEACHER"?s("span",[e._v("老师")]):e._e(),e._v(" "),t.row.identify==="NOT_CERTIFIED"?s("span",[e._v("未认证")]):e._e()]}}])}),e._v(" "),s("bk-table-column",{attrs:{label:"操作",width:"150",align:"center","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",disabled:t.row.identify==="TEACHER",text:""},on:{click:function(s){e.beforRemove(t.row)}}},[e._v("移除")])]}}])})],1),e._v(" "),s("div",{staticStyle:{"padding-top":"10px"}},[s("bk-pagination",{attrs:{size:"small",current:e.page.current,limit:e.page.limit,count:e.page.count,location:e.page.location,align:e.page.align,"show-limit":e.page.showLimit,"limit-list":e.page.limitList},on:{"update:current":function(t){e.$set(e.page,"current",t)},"update:limit":function(t){e.$set(e.page,"limit",t)},change:e.pageChange,"limit-change":e.limitChange}})],1)],1),e._v(" "),s("div",{attrs:{id:"dialog"}},[s("bk-dialog",{attrs:{theme:"primary","mask-close":false,title:"删除学生"},on:{confirm:function(t){e.removeStudent(e.student_id)}},model:{value:e.visible.deletestudent.isshow,callback:function(t){e.$set(e.visible.deletestudent,"isshow",t)},expression:"visible.deletestudent.isshow"}},[s("div",{staticClass:"dialog-body"},[e._v("\n                    你确定要删除"+e._s(e.studentInfo.name)+"同学吗?\n                ")])]),e._v(" "),s("bk-dialog",{attrs:{width:"530",position:"'top'","mask-close":false},on:{confirm:function(t){e.removeStudent(e.student_id)}},model:{value:e.visible.deleteall.isshow,callback:function(t){e.$set(e.visible.deleteall,"isshow",t)},expression:"visible.deleteall.isshow"}},[s("div",{staticClass:"dialog-body"},[s("p",[e._v("确定要删除"+e._s(e.student_id.length)+"项内容吗？")])])]),e._v(" "),s("bk-dialog",{attrs:{theme:"primary",width:"530","mask-close":false,title:"增加学生"},on:{confirm:e.addStudent},model:{value:e.visible.addstudent.isshow,callback:function(t){e.$set(e.visible.addstudent,"isshow",t)},expression:"visible.addstudent.isshow"}},[e.addType===false?s("div",{staticStyle:{"text-align":"center"}},[s("div",{staticClass:"dialog-body"},[s("bk-select",{staticStyle:{width:"250px","margin-top":"10px"},attrs:{searchable:"",multiple:"","display-tag":""},model:{value:e.addList,callback:function(t){e.addList=t},expression:"addList"}},e._l(e.studentList,function(e){return s("bk-option",{key:e.member_id,attrs:{id:e.member_id,name:e.member_display_name}})}),1)],1),e._v(" "),s("bk-button",{attrs:{theme:"primary",text:""},on:{click:function(t){e.addType=true}}},[e._v("学生未认证，点此添加")])],1):e._e(),e._v(" "),e.addType===true?s("div",[s("bk-form",{ref:"validateForm",attrs:{model:e.formData}},[s("bk-form-item",{attrs:{label:"姓名",required:true,property:"name","error-display-type":"normal"}},[s("bk-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入课程名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),s("bk-form-item",{attrs:{label:"学号",required:true,property:"class_number","error-display-type":"normal"}},[s("bk-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入课程名称"},model:{value:e.formData.class_number,callback:function(t){e.$set(e.formData,"class_number",t)},expression:"formData.class_number"}})],1),e._v(" "),s("bk-form-item",{attrs:{label:"班级",required:true,property:"professional_class","error-display-type":"normal"}},[s("bk-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入课程名称"},model:{value:e.formData.professional_class,callback:function(t){e.$set(e.formData,"professional_class",t)},expression:"formData.professional_class"}})],1)],1),e._v(" "),s("bk-button",{staticStyle:{"margin-left":"90px","margin-top":"20px"},attrs:{theme:"primary",text:""},on:{click:function(t){e.addType=false}}},[e._v("学生已认证，点此添加")])],1):e._e()]),e._v(" "),s("bk-dialog",{attrs:{theme:"primary","mask-close":false,"show-footer":false,title:"导入学生名单"},model:{value:e.visible.addexcel.isshow,callback:function(t){e.$set(e.visible.addexcel,"isshow",t)},expression:"visible.addexcel.isshow"}},[s("div",{staticClass:"excel-dialog-body"},[s("div",{staticStyle:{width:"350px"}},[s("bk-upload",{attrs:{"with-credentials":true,"custom-request":e.addExcel,"handle-res-code":e.handleRes,limit:1,tip:"只限上传.xls文件",accept:".xls","delay-time":0},on:{"on-exceed":e.testExceed}})],1)])])],1)])])};var i=[];s.d(t,"a",function(){return a});s.d(t,"b",function(){return i})},75:function(e,t,s){"use strict";s.r(t);var a=s(162);var i=s(125);for(var n in i)if(n!=="default")(function(e){s.d(t,e,function(){return i[e]})})(n);var r=s(152);var l=s(2);var o=Object(l["a"])(i["default"],a["a"],a["b"],false,null,"7cc04849",null);t["default"]=o.exports}}]);