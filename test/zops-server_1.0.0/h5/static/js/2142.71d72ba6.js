/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-08-28 11:15:16
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[2142],{16273:function(e,l,a){a.d(l,{Z:function(){return i}});var d=a(91232),o=(a(24549),a(70944),a(24319)),t=(a(25636),a(66252)),c=a(2262),u=a(3577),n=a(22201),s=(0,t.aZ)({__name:"index",props:{header:{type:String,default:""},bodyStyle:{type:Object,default:()=>({})},shadow:{type:String,default:""},skeleton:{type:Boolean,default:!1},skeletonRows:{type:Number,default:4}},setup(e){let l=null;const a=(0,c.iH)(!0);return l=setTimeout((()=>{a.value=!1}),500),(0,n.iS)(((e,a,d)=>{clearInterval(l),d()})),(l,n)=>{const s=o.vk,r=d.Kf;return(0,t.wg)(),(0,t.j4)(r,{"body-style":e.bodyStyle,class:"vab-card",shadow:e.shadow},(0,t.Nv)({default:(0,t.w5)((()=>[e.skeleton?((0,t.wg)(),(0,t.j4)(s,{key:0,animated:"",loading:(0,c.SU)(a),rows:e.skeletonRows},{default:(0,t.w5)((()=>[(0,t.WI)(l.$slots,"default",{class:"vab-card-transition"})])),_:3},8,["loading","rows"])):(0,t.WI)(l.$slots,"default",{key:1,class:"vab-card-transition"})])),_:2},[l.$slots.header||e.header?{name:"header",fn:(0,t.w5)((()=>[(0,t.WI)(l.$slots,"header",{},(()=>[(0,t.Uk)((0,u.zw)(e.header),1)]))])),key:"0"}:void 0]),1032,["body-style","shadow"])}}});function r(e){e.__source="library/components/VabCard/index.vue"}var h=a(83744);"function"===typeof r&&r(s);const m=(0,h.Z)(s,[["__scopeId","data-v-391150ea"]]);var i=m},61887:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var d=a(46538),o=(a(24549),a(92719),a(16273)),t=(a(20822),a(66252)),c=a(3577);const u=e=>((0,t.dD)("data-v-221ddeb9"),e=e(),(0,t.Cn)(),e),n={class:"checkbox-container"},s=u((()=>(0,t._)("span",null,"基础用法",-1))),r=u((()=>(0,t._)("span",null,"禁用状态",-1))),h=u((()=>(0,t._)("span",null,"多选框组",-1))),m=u((()=>(0,t._)("span",null,"可选项目数量的限制",-1))),i=u((()=>(0,t._)("span",null,"按钮样式",-1))),w=u((()=>(0,t._)("span",null,"带有边框",-1)));function k(e,l,a,u,k,b){const f=d.ElCheckbox,p=o.Z,_=d.z5,v=d.lm;return(0,t.wg)(),(0,t.iD)("div",n,[(0,t.Wm)(p,{shadow:"hover"},{header:(0,t.w5)((()=>[s])),default:(0,t.w5)((()=>[(0,t.Wm)(f,{modelValue:e.checked,"onUpdate:modelValue":l[0]||(l[0]=l=>e.checked=l)},{default:(0,t.w5)((()=>[(0,t.Uk)("备选项")])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{shadow:"hover"},{header:(0,t.w5)((()=>[r])),default:(0,t.w5)((()=>[(0,t.Wm)(f,{modelValue:e.checked1,"onUpdate:modelValue":l[1]||(l[1]=l=>e.checked1=l),disabled:""},{default:(0,t.w5)((()=>[(0,t.Uk)("备选项1")])),_:1},8,["modelValue"]),(0,t.Wm)(f,{modelValue:e.checked2,"onUpdate:modelValue":l[2]||(l[2]=l=>e.checked2=l),disabled:""},{default:(0,t.w5)((()=>[(0,t.Uk)("备选项")])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{shadow:"hover"},{header:(0,t.w5)((()=>[h])),default:(0,t.w5)((()=>[(0,t.Wm)(_,{modelValue:e.checkList,"onUpdate:modelValue":l[3]||(l[3]=l=>e.checkList=l)},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{label:"复选框 A"}),(0,t.Wm)(f,{label:"复选框 B"}),(0,t.Wm)(f,{label:"复选框 C"}),(0,t.Wm)(f,{disabled:"",label:"禁用"}),(0,t.Wm)(f,{disabled:"",label:"选中且禁用"})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{shadow:"hover"},{header:(0,t.w5)((()=>[m])),default:(0,t.w5)((()=>[(0,t.Wm)(_,{modelValue:e.checkedCities,"onUpdate:modelValue":l[4]||(l[4]=l=>e.checkedCities=l),max:2,min:1},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cities,(e=>((0,t.wg)(),(0,t.j4)(f,{key:e,label:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{shadow:"hover"},{header:(0,t.w5)((()=>[i])),default:(0,t.w5)((()=>[(0,t.Wm)(_,{modelValue:e.checkboxGroup1,"onUpdate:modelValue":l[5]||(l[5]=l=>e.checkboxGroup1=l)},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cities,(e=>((0,t.wg)(),(0,t.j4)(v,{key:e,label:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(p,{shadow:"hover"},{header:(0,t.w5)((()=>[w])),default:(0,t.w5)((()=>[(0,t.Wm)(f,{modelValue:e.checked3,"onUpdate:modelValue":l[6]||(l[6]=l=>e.checked3=l),border:"",label:"备选项1"},null,8,["modelValue"]),(0,t.Wm)(f,{modelValue:e.checked4,"onUpdate:modelValue":l[7]||(l[7]=l=>e.checked4=l),border:"",label:"备选项2"},null,8,["modelValue"])])),_:1})])}var b=a(2262),f=(0,t.aZ)({name:"Checkbox",setup(){const e=["上海","北京","广州","深圳"],l=(0,b.qj)({checked:!0,checked1:!1,checked2:!0,checkList:["选中且禁用","复选框 A"],checkedCities:["上海","北京"],cities:e,checkboxGroup1:["上海"],checked3:!0,checked4:!1});return{...(0,b.BK)(l)}}});function p(e){e.__source="src/views/vab/form/checkbox.vue"}var _=a(83744);"function"===typeof p&&p(f);const v=(0,_.Z)(f,[["render",k],["__scopeId","data-v-221ddeb9"]]);var V=v}}]);