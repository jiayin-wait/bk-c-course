(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{135:function(t,e,i){"use strict";i.r(e);var n=i(136);var a=i.n(n);for(var s in n)if(s!=="default")(function(t){i.d(e,t,function(){return n[t]})})(s);e["default"]=a.a},136:function(t,e,i){"use strict";var n=i(0);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var a=n(i(15));var s=n(i(16));var o=n(i(138));var r=n(i(139));var l=n(i(140));var u=n(i(141));var d=n(i(142));var p={components:{QuestionRadio:o.default,QuestionMulti:r.default,QuestionJudge:l.default,QuestionShort:u.default,QuestionFill:d.default},data:function t(){return{previewsetting:{visible:false,position:{top:25}},Dict:{SINGLE:"QuestionRadio",MULTIPLE:"QuestionMulti",COMPLETION:"QuestionFill",JUDGE:"QuestionJudge",SHORT_ANSWER:"QuestionShort"},editQuestion:{visable:false,Question:null},papertree:[{name:"试卷",title:"试卷",flag:0,expanded:true,openedIcon:"icon-folder-open",closedIcon:"icon-folder",id:1,children:[]}],questionlist:[],existlist:[],dragSort:true,dialogsetting:{visible:false,position:{top:100}},sidesliderSettings:{isShow:false,title:"大题信息"},pagination:{current:1,count:undefined,limit:15},questionparameter:{questiontype:undefined,score:0},append:{questiontitle:undefined},rules:{questiontitle:[{required:true,message:"大题名称不能为空！",trigger:"change"},{max:10,message:"不能多于10个字符",trigger:"change"}]},paperquestiontype:[],paperquestiontypeMap:{},typeFilters:[{text:"单选题",value:"单选题"},{text:"多选题",value:"多选题"},{text:"填空题",value:"填空题"},{text:"判断题",value:"判断题"},{text:"简答题",value:"简答题"}],statusFilters:[{text:"未录入",value:"未录入"},{text:"已录入",value:"已录入"}],titilevalue:undefined,firstrow:undefined,popbutton:true,moveoutbutton:true,isdiabled:true}},computed:{CourseId:function t(){return this.$store.state.currentCourseId}},watch:{firstrow:{handler:function t(){if(this.firstrow==="未录入"){this.popbutton=false;this.moveoutbutton=true}if(this.firstrow==="已录入"){this.popbutton=true;this.moveoutbutton=false}if(this.firstrow===undefined){this.popbutton=true;this.moveoutbutton=true}}},CourseId:{handler:function t(){this.$router.push({name:"displaypaper"})}}},created:function t(){this.getquestiontitle()},methods:{clicknode:function t(e){this.editQuestion.Question=e.dialogdata;this.editQuestion.visable=true},handleRowClick:function t(e,i,n,a,s){this.editQuestion.Question=e;this.editQuestion.visable=true},tpl:function t(e,i){var n=this;var a=this.$createElement;var s="node-title";if(e.flag===1){return a("span",[a("span",{class:"delete-button",on:{click:function t(){return n.deltitlenode(e)}}},["-"]),a("span",{class:s,domProps:{innerHTML:e.title},on:{click:function t(){return n.clicknode(e)}}})])}if(e.flag===0){return a("span",[a("span",{class:"add-button",on:{click:function t(){return n.addtitlenode()}}},["+"]),a("span",{class:s,domProps:{innerHTML:e.title}})])}},deltitlenode:function t(e){if(e.children.length===0){this.$refs.tree.delNode(e.parent,e)}else{for(var i=0;i<e.children.length;i++){this.$refs.tree.delNode(e.parent,e);this.delquestion(e.children[i].id)}}},delquestion:function t(e){var i=this;return(0,s.default)(a.default.mark(function t(){var n;return a.default.wrap(function t(s){while(1){switch(s.prev=s.next){case 0:s.t0=a.default.keys(i.questionlist);case 1:if((s.t1=s.t0()).done){s.next=8;break}n=s.t1.value;if(!(e===i.questionlist[n].QuestionId)){s.next=6;break}i.questionlist[n].status="未录入";return s.abrupt("break",8);case 6:s.next=1;break;case 8:case"end":return s.stop()}}},t)}))()},addtitlenode:function t(){this.dialogsetting.visible=true},confirmtitle:function t(){var e={val:""};for(var i in this.paperquestiontype){if(this.titilevalue===this.paperquestiontype[i].id){e.val=this.paperquestiontype[i].name;break}}this.papertree[0].children.push({name:e.val,title:e.val,flag:1,openedIcon:"icon-folder-open",closedIcon:"icon-folder",expanded:true,id:-this.titilevalue,Id:this.titilevalue,children:[]});this.titilevalue=undefined;this.papertree[0].expanded=true},judge:function t(){var e={value:0};for(var i in this.Selections){if(this.Selections[0].status!==this.Selections[i].status){e.value=1;break}}if(e.value===1){this.$refs.table.clearSelection();this.Selections=undefined;this.$bkMessage({message:"所选择题目状态不相同，已自动取消选择",theme:"warning"})}},selectEnable:function t(e,i){if(this.firstrow!==undefined){if(e.status!==this.firstrow){return false}else{return true}}else{return true}},clearFilter:function t(){this.$refs.table.clearFilter()},typeFilterMethod:function t(e,i,n){var a=n.property;return i[a]===e},statusFilterMethod:function t(e,i,n){var a=n.property;return i[a]===e},handleSelectionChange:function t(e){this.Selections=e;if(this.Selections.length>0){this.firstrow=this.Selections[0].status}else{this.firstrow=undefined}this.judge()},popquestion:function t(){var e={value:0};if(this.Selections.length>0){if(this.questionparameter.questiontype===undefined){this.$bkInfo({type:"warning",title:"请先选择所属题型"});e.value=1}else if(this.questionparameter.score===0){this.$bkInfo({type:"warning",title:"请设置分数"});e.value=1}}else{this.$bkInfo({type:"warning",title:"请先选择题目"})}if(e.value===0){this.confirmquestion()}},pushquestion:function t(){var e=this;this.$bkInfo({title:"确认要移出？",confirmFn:function t(){e.moveout()}})},moveout:function t(){var e={value:0};for(var i in this.Selections){e.value=0;for(var n in this.papertree[0].children){for(var a in this.papertree[0].children[n].children){if(this.papertree[0].children[n].children[a].id===this.Selections[i].QuestionId){this.papertree[0].children[n].children.splice(a,1);this.Selections[i].status="未录入";e.value=1;break}}if(e.value===1){break}}}this.firstrow=undefined;this.$refs.table.clearSelection()},confirmquestion:function t(){for(var e in this.papertree[0].children){if(this.questionparameter.questiontype===this.papertree[0].children[e].name){for(var i in this.Selections){this.Selections[i].status="已录入";if(this.Selections[i].question.length>14){var n=this.Selections[i].question.substr(0,13)+"...";this.papertree[0].children[e].children.push({id:this.Selections[i].QuestionId,title:n,name:this.Selections[i].question,flag:1,icon:"icon-file",score:this.questionparameter.score,dialogdata:{explain:this.Selections[i].explain,option_A:this.Selections[i].option_A,option_B:this.Selections[i].option_B,option_C:this.Selections[i].option_C,option_D:this.Selections[i].option_D,option_E:this.Selections[i].option_E,answer:this.Selections[i].answer,types:this.Selections[i].types,question:this.Selections[i].question}})}else{this.papertree[0].children[e].children.push({id:this.Selections[i].QuestionId,title:this.Selections[i].question,name:this.Selections[i].question,flag:1,icon:"icon-file",score:this.questionparameter.score,dialogdata:{explain:this.Selections[i].explain,option_A:this.Selections[i].option_A,option_B:this.Selections[i].option_B,option_C:this.Selections[i].option_C,option_D:this.Selections[i].option_D,option_E:this.Selections[i].option_E,answer:this.Selections[i].answer,types:this.Selections[i].types,question:this.Selections[i].question}})}}this.firstrow=undefined;this.$refs.table.clearSelection()}}},modifiytype:function t(){this.sidesliderSettings.isShow=true},tableRowClassName:function t(e){var i=e.row,n=e.rowIndex;if(i.status==="已录入"){return"success-row"}},addtitle:function t(){var e=this;this.$refs.appendSection.validate().then(function(t){e.savetitle()},function(t){e.$bkMessage({message:"输入有误",theme:"warning"})})},savepaper:function t(){var e=[];for(var i in this.papertree[0].children){var n=[];var a=[];var s={};for(var o in this.papertree[0].children[i].children){n.push(this.papertree[0].children[i].children[o].id);a.push(this.papertree[0].children[i].children[o].score)}this.$set(s,this.papertree[0].children[i].Id,[n,a]);e.push(s)}this.updatepaper(e)},getquetionlist:function t(){var e=this;return(0,s.default)(a.default.mark(function t(){return a.default.wrap(function t(i){while(1){switch(i.prev=i.next){case 0:e.$http.get("/course/get_question_list/",{params:{course_id:e.CourseId,chapter_id:e.$route.query.chapterid}}).then(function(t){e.questionlist=[];if(t.data.length!==0){var i={SINGLE:"单选题",MULTIPLE:"多选题",JUDGE:"判断题",COMPLETION:"填空题",SHORT_ANSWER:"简答题"};for(var n in t.data){if(e.existlist.indexOf(t.data[n].question_id)===-1){e.questionlist.push({explain:t.data[n].explain,option_A:t.data[n].option_A,option_B:t.data[n].option_B,option_C:t.data[n].option_C,option_D:t.data[n].option_D,option_E:t.data[n].option_E,answer:t.data[n].answer,types:t.data[n].types,question:t.data[n].question,QuestionId:t.data[n].question_id,type:i[t.data[n].types],status:"未录入"})}else{e.questionlist.push({explain:t.data[n].explain,option_A:t.data[n].option_A,option_B:t.data[n].option_B,option_C:t.data[n].option_C,option_D:t.data[n].option_D,option_E:t.data[n].option_E,answer:t.data[n].answer,types:t.data[n].types,QuestionId:t.data[n].question_id,question:t.data[n].question,type:i[t.data[n].types],status:"已录入"})}}}});case 1:case"end":return i.stop()}}},t)}))()},savetitle:function t(){var e=this;return(0,s.default)(a.default.mark(function t(){var i;return a.default.wrap(function t(n){while(1){switch(n.prev=n.next){case 0:i={course_id:e.CourseId,custom_type_info:[{custom_type_name:e.append.questiontitle}]};e.$http.post("/course/question_title/",i).then(function(t){if(t.result===true){e.$bkMessage({message:"添加成功",theme:"success"});e.$http.get("/course/question_title/",{params:{course_id:e.CourseId}}).then(function(t){if(t.result===true){e.paperquestiontype=[];for(var i in t.data.custom_types){e.$set(e.paperquestiontypeMap,t.data.custom_types[i].custom_type_name,t.data.custom_types[i].id);e.paperquestiontype.push({name:t.data.custom_types[i].custom_type_name,id:t.data.custom_types[i].id})}}})}});case 2:case"end":return n.stop()}}},t)}))()},getquestiontitle:function t(){var e=this;return(0,s.default)(a.default.mark(function t(){return a.default.wrap(function t(i){while(1){switch(i.prev=i.next){case 0:e.$http.get("/course/question_title/",{params:{course_id:e.CourseId}}).then(function(t){if(t.result===true){e.paperquestiontype=[];for(var i in t.data.custom_types){e.$set(e.paperquestiontypeMap,t.data.custom_types[i].custom_type_name,t.data.custom_types[i].id);e.paperquestiontype.push({name:t.data.custom_types[i].custom_type_name,id:t.data.custom_types[i].id})}}}).then(function(t){e.getpaperinfo()});case 1:case"end":return i.stop()}}},t)}))()},getpaperinfo:function t(){var e=this;return(0,s.default)(a.default.mark(function t(){return a.default.wrap(function t(i){while(1){switch(i.prev=i.next){case 0:e.$http.get("/course/manage_paper_question_contact/",{params:{paper_id:e.$route.query.paperid}}).then(function(t){if(t.result===true){var i={val:0};e.existlist=[];e.papertree[0].id=e.$route.query.paperid;for(var n in t.data){var a=[];for(var s in t.data[n]){e.$set(e.existlist,i.val++,t.data[n][s].question_id);if(t.data[n][s].question.length>14){var o=t.data[n][s].question.substr(0,13)+"...";a.push({id:t.data[n][s].question_id,title:o,name:t.data[n][s].question,flag:1,icon:"icon-file",score:t.data[n][s].score,dialogdata:{explain:t.data[n][s].explain,option_A:t.data[n][s].option_A,option_B:t.data[n][s].option_B,option_C:t.data[n][s].option_C,option_D:t.data[n][s].option_D,option_E:t.data[n][s].option_E,answer:t.data[n][s].answer,types:t.data[n][s].types,question:t.data[n][s].question}})}else{a.push({id:t.data[n][s].question_id,title:t.data[n][s].question,name:t.data[n][s].question,flag:1,icon:"icon-file",score:t.data[n][s].score,dialogdata:{explain:t.data[n][s].explain,option_A:t.data[n][s].option_A,option_B:t.data[n][s].option_B,option_C:t.data[n][s].option_C,option_D:t.data[n][s].option_D,option_E:t.data[n][s].option_E,answer:t.data[n][s].answer,types:t.data[n][s].types,question:t.data[n][s].question}})}}e.papertree[0].children.push({name:n,title:n,openedIcon:"icon-folder-open",closedIcon:"icon-folder",expanded:true,flag:1,id:-e.paperquestiontypeMap[n],Id:e.paperquestiontypeMap[n],children:a})}}else{if(t.message==="卷子没有题目"){e.$bkMessage({message:t.message,theme:"warning"})}else{e.$bkMessage({message:t.message,theme:"error"})}}}).then(function(t){e.getquetionlist()});case 1:case"end":return i.stop()}}},t)}))()},updatepaper:function t(e){var i=this;return(0,s.default)(a.default.mark(function t(){return a.default.wrap(function t(n){while(1){switch(n.prev=n.next){case 0:i.$http.post("/course/manage_paper_question_contact/",{paper_id:i.$route.query.paperid,paper_info:e}).then(function(t){if(t.result===true){i.$bkMessage({message:t.message,theme:"success"})}else{i.$bkMessage({message:t.message,theme:"error"})}});case 1:case"end":return n.stop()}}},t)}))()}}};e.default=p},137:function(t,e,i){},168:function(t,e,i){"use strict";var n=i(137);var a=i.n(n);var s=a.a},179:function(t,e,i){"use strict";var n=function(){var t=this;var e=t.$createElement;var i=t._self._c||e;return i("div",{staticStyle:{display:"flex"}},[i("bk-dialog",{attrs:{width:"1200",draggable:false,"show-footer":false},model:{value:t.editQuestion.visable,callback:function(e){t.$set(t.editQuestion,"visable",e)},expression:"editQuestion.visable"}},[t.editQuestion.visable?i(t.Dict[t.editQuestion.Question.types],{tag:"component",attrs:{info:t.editQuestion.Question,editable:true,readonly:true},on:{updateQuestion:t.updateQuestion}}):t._e()],1),t._v(" "),i("bk-dialog",{attrs:{width:"720",position:t.previewsetting.position,title:"试卷预览"},model:{value:t.previewsetting.visible,callback:function(e){t.$set(t.previewsetting,"visible",e)},expression:"previewsetting.visible"}},t._l(t.papertree[0].children,function(e){return i("div",{key:e.name},[i("h3",[t._v(t._s(e.name))]),t._v(" "),t._l(e.children,function(e,n){return i("bk-card",{key:n,staticClass:"radio-common",attrs:{title:n+1+"."+e.dialogdata.question+" （"+e.score+"分）",border:false}},[e.dialogdata.types==="SINGLE"?i("bk-radio-group",{staticClass:"radio-common"},[i("bk-radio",{attrs:{value:"A",disabled:true}},[t._v("\n                        A："+t._s(e.dialogdata.option_A)+"\n                    ")]),t._v(" "),i("bk-radio",{attrs:{value:"B",disabled:true}},[t._v("\n                        B："+t._s(e.dialogdata.option_B)+"\n                    ")]),t._v(" "),i("bk-radio",{attrs:{value:"C",disabled:true}},[t._v("\n                        C："+t._s(e.dialogdata.option_C)+"\n                    ")]),t._v(" "),i("bk-radio",{attrs:{value:"D",disabled:true}},[t._v("\n                        D："+t._s(e.dialogdata.option_D)+"\n                    ")])],1):t._e(),t._v(" "),e.dialogdata.types==="MULTIPLE"?i("bk-radio-group",{staticClass:"radio-common"},[i("bk-radio",{attrs:{value:"A",disabled:true}},[t._v("\n                        A："+t._s(e.dialogdata.option_A)+"\n                    ")]),t._v(" "),i("bk-radio",{attrs:{value:"B",disabled:true}},[t._v("\n                        B："+t._s(e.dialogdata.option_B)+"\n                    ")]),t._v(" "),i("bk-radio",{attrs:{value:"C",disabled:true}},[t._v("\n                        C："+t._s(e.dialogdata.option_C)+"\n                    ")]),t._v(" "),i("bk-radio",{attrs:{value:"D",disabled:true}},[t._v("\n                        D："+t._s(e.dialogdata.option_D)+"\n                    ")]),t._v(" "),i("bk-radio",{attrs:{value:"E",disabled:true}},[t._v("\n                        E："+t._s(e.dialogdata.option_E)+"\n                    ")])],1):t._e()],1)})],2)}),0),t._v(" "),i("bk-sideslider",{attrs:{"is-show":t.sidesliderSettings.isShow,"quick-close":true},on:{"update:isShow":function(e){t.$set(t.sidesliderSettings,"isShow",e)}}},[i("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.sidesliderSettings.title))]),t._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[i("bk-form",{ref:"appendSection",attrs:{rules:t.rules,model:t.append,"label-width":0}},[i("div",{staticStyle:{"margin-top":"5px","margin-bottom":"5px"}},[i("bk-form-item",{attrs:{"error-display-type":"normal",property:"questiontitle"}},[i("bk-input",{ref:"appendInput",staticStyle:{width:"231px"},attrs:{clearable:false},model:{value:t.append.questiontitle,callback:function(e){t.$set(t.append,"questiontitle",e)},expression:"append.questiontitle"}}),t._v(" "),i("bk-button",{staticClass:"mr10",staticStyle:{display:"inline-block"},attrs:{theme:"primary",title:"主要按钮",icon:"plus"},on:{click:t.addtitle}},[t._v("\n                            新增大题\n                        ")])],1)],1)]),t._v(" "),i("div",{staticClass:"sections"},[i("bk-table",{attrs:{data:t.paperquestiontype,size:t.size,"outer-border":true,"virtual-render":false,"show-header":false,height:"480"},on:{"row-dblclick":t.handleRowDbclick,"selection-change":t.handleSelectChange}},[i("bk-table-column",{attrs:{label:"章节",prop:"name",sortable:""},on:{"row-dblclick":t.handleRowDbclickSection},scopedSlots:t._u([{key:"default",fn:function(e){return[i("bk-input",{ref:"myinput",staticClass:"input",staticStyle:{display:"inline-block"},attrs:{readonly:""},model:{value:e.row.name,callback:function(i){t.$set(e.row,"name",i)},expression:"props.row.name"}})]}}])})],1)],1)],1)]),t._v(" "),i("bk-dialog",{attrs:{width:"300",position:t.dialogsetting.position,title:"添加大题"},on:{confirm:t.confirmtitle},model:{value:t.dialogsetting.visible,callback:function(e){t.$set(t.dialogsetting,"visible",e)},expression:"dialogsetting.visible"}},[i("bk-select",{staticStyle:{width:"250px"},attrs:{disabled:false,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},model:{value:t.titilevalue,callback:function(e){t.titilevalue=e},expression:"titilevalue"}},t._l(t.paperquestiontype,function(t){return i("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})}),1)],1),t._v(" "),i("div",{staticClass:"left"},[i("div",[i("span",{staticStyle:{display:"inline-block"}},[t._v("所属大题：")]),t._v(" "),i("bk-select",{staticClass:"type-select",attrs:{searchable:""},model:{value:t.questionparameter.questiontype,callback:function(e){t.$set(t.questionparameter,"questiontype",e)},expression:"questionparameter.questiontype"}},t._l(t.papertree[0].children,function(t){return i("bk-option",{key:t.id,attrs:{id:t.name,name:t.name}})}),1),t._v(" "),i("span",{staticStyle:{display:"inline-block"}},[t._v("请设置分数：")]),t._v(" "),i("bk-input",{staticStyle:{width:"200px"},attrs:{type:"number",max:100,min:0,precision:t.precision},model:{value:t.questionparameter.score,callback:function(e){t.$set(t.questionparameter,"score",e)},expression:"questionparameter.score"}}),t._v(" "),i("bk-button",{attrs:{theme:"primary",disabled:t.popbutton},on:{click:t.popquestion}},[t._v("录入卷子")]),t._v(" "),i("bk-button",{attrs:{theme:"primary",disabled:t.moveoutbutton},on:{click:t.moveout}},[t._v("移出卷子")])],1),t._v(" "),i("bk-table",{ref:"table",staticStyle:{width:"800px"},attrs:{height:480,data:t.questionlist,"row-class-name":t.tableRowClassName},on:{setCurrentRow:function(e){t.setCurrentRow(t.row)},"row-click":t.handleRowClick,"selection-change":t.handleSelectionChange}},[i("bk-table-column",{attrs:{selectable:t.selectEnable,type:"selection",width:"30"}}),t._v(" "),i("bk-table-column",{attrs:{label:"题目",prop:"question"}}),t._v(" "),i("bk-table-column",{attrs:{filters:t.typeFilters,"filter-method":t.typeFilterMethod,label:"题目类型",prop:"type"}}),t._v(" "),i("bk-table-column",{attrs:{filters:t.statusFilters,"filter-method":t.statusFilterMethod,label:"状态",prop:"status"}})],1)],1),t._v(" "),i("div",{staticClass:"right"},[i("bk-button",{attrs:{theme:"primary"},on:{click:t.modifiytype}},[t._v("新增大题")]),t._v(" "),i("bk-tree",{ref:"tree",attrs:{data:t.papertree,"node-key":"id",draggable:true,"drag-sort":t.dragSort,"has-border":true,tpl:t.tpl},on:{"on-click":t.clicknode}}),t._v(" "),i("bk-button",{staticStyle:{"margin-left":"10px","margin-right":"10px"},attrs:{theme:"primary"},on:{click:function(e){t.previewsetting.visible=true}}},[t._v("预览试卷")]),t._v(" "),i("bk-button",{attrs:{theme:"primary"},on:{click:t.savepaper}},[t._v("保存试卷")])],1)],1)};var a=[];i.d(e,"a",function(){return n});i.d(e,"b",function(){return a})},78:function(t,e,i){"use strict";i.r(e);var n=i(179);var a=i(135);for(var s in a)if(s!=="default")(function(t){i.d(e,t,function(){return a[t]})})(s);var o=i(168);var r=i(2);var l=Object(r["a"])(a["default"],n["a"],n["b"],false,null,null,null);e["default"]=l.exports}}]);