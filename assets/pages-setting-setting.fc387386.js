import{u as t,z as e,y as i,o,c as s,w as a,i as n,a as r,e as l,f as c}from"./index-de2112c1.js";import{_ as u,a as p}from"./uni-list.f5e6bf99.js";import{_ as d,r as m}from"./uni-app.es.f5d8e4b4.js";import{_ as f}from"./uni-card.a08da529.js";import{_ as w}from"./uni-section.dcfaee0c.js";import{B as h}from"./index.276a57a3.js";import"./uni-icons.c5d1a199.js";import"./uni-title.660fef64.js";const b=d({components:{Banner:h},data:()=>({href:"https://uniapp.dcloud.io/component/README?id=uniui"}),methods:{clear(){t({title:"操作提醒",content:"确认清除本地所有数据吗？该操作无法撤回，您的所有数据将丢失！",success(t){t.confirm&&(e(),i({title:"本地数据已清除",mask:!0}))}})}}},[["render",function(t,e,i,d,h,b){const j=l("Banner"),k=m(c("uni-list-item"),u),_=m(c("uni-list"),p),x=m(c("uni-card"),f),A=m(c("uni-section"),w),g=n;return o(),s(g,null,{default:a((()=>[r(j),r(A,{title:"设置与选项","sub-title":"管理个人数据及偏好设置",type:"line",class:"mt-16 over-hide shadow br-8"},{default:a((()=>[r(x,{"is-full":"",border:!1,"is-shadow":!1,padding:"0"},{default:a((()=>[r(_,null,{default:a((()=>[r(k,{title:"数据导入与导出",note:"将本地数据导出或从外导入数据到本地",showArrow:"",clickable:"",to:"/pages/importexport/importexport"}),r(k,{title:"软件更新与反馈建议",note:"查询软件版本信息以及发送反馈和建议",showArrow:"",clickable:"",to:"/pages/updatefeedback/updatefeedback"}),r(k,{title:"清除本地所有数据",note:"所有数据均被存储在本地, 清除后将无法找回",showArrow:"",clickable:"",onClick:b.clear},null,8,["onClick"]),r(k,{title:"使用协议及隐私政策",note:"使用本软件的协议, 用户隐私, 个人数据等",showArrow:"",clickable:"",to:"/pages/policy/policy"})])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{b as default};
