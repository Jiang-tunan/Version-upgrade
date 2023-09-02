/*!
 *  build: Vue  Admin Plus
 *  copyright: vue-admin-beautiful.com
 *  time: 2023-08-28 11:15:16
 */
"use strict";(self["webpackChunkadmin_plus"]=self["webpackChunkadmin_plus"]||[]).push([[5528,9527,5377],{83954:function(e,t,n){n.d(t,{$C:function(){return d},AX:function(){return o},C$:function(){return f},QB:function(){return u},Rg:function(){return i},UX:function(){return l},VZ:function(){return r},g4:function(){return c},tE:function(){return m},yj:function(){return p}});var a=n(52806);function r(e){return(0,a.Z)({params:{method:"template.get",data:e}})}function u(e){return(0,a.Z)({params:{method:"template.update",data:e}})}function l(e){return(0,a.Z)({params:{method:"trigger.get",data:e}})}function o(e){return(0,a.Z)({params:{method:"trigger.update",data:e}})}function i(e){return(0,a.Z)({params:{method:"trigger.enabletrigger",data:e}})}function m(e){return(0,a.Z)({params:{method:"trigger.recover",data:e}})}function d(e){return(0,a.Z)({params:{method:"item.get",data:e}})}function c(e){return(0,a.Z)({params:{method:"item.update",data:e}})}function p(e){return(0,a.Z)({params:{method:"item.enable",data:e}})}function f(e){return(0,a.Z)({params:{method:"item.interfacelist",data:e}})}},75979:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(49530),r=(n(24549),n(80773),n(21211)),u=(n(12791),n(6715),n(57847)),l=(n(43872),n(66252)),o=n(2262),i=n(49963),m=n(39049),d=n(83954),c={__name:"TemplateInfo",props:{templateData:{type:Object,default:()=>({})},title:{type:String,default:"模板信息"},visible:{type:Boolean,default:!1}},emits:["cancel","confirm"],setup(e,{emit:t}){const n=e,c=(0,l.f3)("$baseMessage"),p=(0,o.iH)(null),{title:f,visible:s,templateData:g}=(0,o.BK)(n);function h(){t("cancel")}function v(){p.value.validate((e=>{if(e){const e={templateid:g.value.templateid,description:g.value.description};(0,d.QB)(e).then((()=>{c("更新成功","success"),t("cancel"),t("confirm")})).catch((e=>{console.log("err :>> ",e)}))}}))}return(0,l.bv)((()=>{})),(e,t)=>{const n=u.EZ,d=r.nH,c=r.ly,b=a.ElButton;return(0,l.wg)(),(0,l.j4)((0,o.SU)(m["default"]),{modelValue:(0,o.SU)(s),"onUpdate:modelValue":[t[3]||(t[3]=e=>(0,o.dq)(s)?s.value=e:null),h],title:(0,o.SU)(f),width:"30rem"},{footer:(0,l.w5)((()=>[(0,l.Wm)(b,{onClick:h},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1}),(0,l.Wm)(b,{type:"primary",onClick:v},{default:(0,l.w5)((()=>[(0,l.Uk)("确定")])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(c,{ref_key:"templateFormRef",ref:p,"label-position":"top",model:(0,o.SU)(g),onSubmit:t[2]||(t[2]=(0,i.iM)((()=>{}),["prevent"]))},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"模板名称",prop:"name"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:(0,o.SU)(g).name,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.SU)(g).name=e),maxlength:"100",disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(d,{label:"描述信息",prop:"description"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:(0,o.SU)(g).description,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,o.SU)(g).description=e),placeholder:"请输入备注",clearable:"",rows:3,maxlength:"255",type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])}}};function p(e){e.__source="src/views/system/template-management/components/TemplateInfo.vue"}var f=n(83744);"function"===typeof p&&p(c);const s=(0,f.Z)(c,[["__scopeId","data-v-a1db93f2"]]);var g=s}}]);