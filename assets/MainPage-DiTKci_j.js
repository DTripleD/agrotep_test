import{c as v,g as O,r,j as e,u as S,d as R,a as E,b as I,e as M,f as D}from"./index-fz_C3G1i.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=v("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=v("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=v("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),B="_link_r535w_20",V="_new_office__button_r535w_36",Y="_modal_button_r535w_37",H="_page_container_r535w_56",U="_section_r535w_64",X="_container_r535w_106",A="_dark_theme_r535w_112",G="_backdrop_r535w_125",J="_is_hidden_r535w_137",K="_modal_r535w_37",Q="_close_icon_r535w_162",Z="_modal__close_r535w_166",ee="_modal__article_r535w_185",te="_modal__input_r535w_207",ae="_modal__icon_r535w_226",ne="_modal__label_r535w_238",se="_modal__message_r535w_256",_e="_agreement_r535w_279",oe="_agreement__label_r535w_287",ce="_agreement__checkbox_r535w_305",re="_agreement__icon_uncheck_r535w_311",le="_agreement__icon_r535w_311",ie="_agreement__icon_check_r535w_319",de="_agreement__link_r535w_327",me="_modal__btn_r535w_332",s={link:B,new_office__button:V,modal_button:Y,page_container:H,section:U,container:X,dark_theme:A,backdrop:G,is_hidden:J,modal:K,close_icon:Q,modal__close:Z,modal__article:ee,"modal-list":"_modal-list_r535w_203",modal__input:te,modal__icon:ae,modal__label:ne,modal__message:se,agreement:_e,agreement__label:oe,agreement__checkbox:ce,agreement__icon_uncheck:re,agreement__icon:le,agreement__icon_check:ie,agreement__link:de,modal__btn:me};var T={exports:{}},pe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ue=pe,he=ue;function q(){}function z(){}z.resetWarningCache=q;var be=function(){function t(u,m,h,p,b,c){if(c!==he){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}t.isRequired=t;function _(){return t}var l={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:_,element:t,elementType:t,instanceOf:_,node:t,objectOf:_,oneOf:_,oneOfType:_,shape:_,exact:_,checkPropTypes:z,resetWarningCache:q};return l.PropTypes=l,l};T.exports=be();var fe=T.exports;const g=O(fe),N=new Date,j=N.getFullYear(),y=(N.getMonth()+1).toString().padStart(2,"0"),k=N.getDate().toString().padStart(2,"0"),ge=["Мейкун","Персидська","Сіамська","Бенгальська","Абіссінська","Дворова","Шотландська вислоуха","Турецька ангора","Манчкін","Сфінкс","Британська короткошерста","Орієнтальна","Бірманська","Бурманська","Норвезька лісова","Селькірк-рекс","Корніш-рекс","Гайленд-фолд","Тонкінез","Тайгер","Бомбейська","Єгипетська мау","Чаузі","Корат","Серенгеті","Бурміла","Курлін","Девон-рекс","Тіфані"],F=({isHidden:t,setIsHidden:_,addCatFunc:l})=>{const[u,m]=r.useState(""),[h,p]=r.useState(""),[b,c]=r.useState(""),[i,x]=r.useState(""),[w,f]=r.useState(""),a=n=>{n.preventDefault(),l({catName:u,breed:h,years:b,receiving:i,fact:w}),_(!0),o()};r.useEffect(()=>{o(),t||fetch("https://catfact.ninja/fact").then(n=>n.json()).then(n=>f(n.fact)).catch(n=>console.log(n))},[t]);const o=()=>{m(""),p(""),c(""),x(""),f("")};return e.jsx("div",{className:`${s.backdrop} ${t?s.is_hidden:""}`,children:e.jsxs("div",{className:s.modal,children:[e.jsx("button",{className:s.modal__close,onClick:()=>_(!t),children:e.jsx(L,{className:s.close_icon})}),e.jsx("p",{className:s.modal__article,children:"Додати котика"}),e.jsxs("form",{name:"modal-form",className:s.modal__group,onSubmit:a,children:[e.jsxs("label",{className:s.modal__label,children:["Ім`я",e.jsx("input",{required:!0,value:u,type:"text",id:"user_name",name:"user_name",className:s.modal__input,onChange:n=>m(n.target.value)})]}),e.jsxs("label",{className:s.modal__label,children:["Порода",e.jsxs("select",{required:!0,value:h,type:"text",id:"user_phone",name:"user_phone",className:s.modal__input,onChange:n=>p(n.target.value),children:[e.jsx("option",{value:"",children:"--Виберіть породу--"}),ge.map(n=>e.jsx("option",{value:n,children:n},n))]})]}),e.jsxs("label",{className:s.modal__label,children:["Вік",e.jsx("input",{required:!0,value:b,type:"number",min:.1,max:50,step:.1,id:"user_mail",name:"user_mail",className:s.modal__input,onChange:n=>c(n.target.value)})]}),e.jsxs("label",{htmlFor:"user_mail",className:s.modal__label,children:["Дата запису",e.jsx("input",{required:!0,value:i,type:"date",min:`${j}-${y}-${k}`,id:"user_mail",name:"user_mail",className:s.modal__input,onChange:n=>x(n.target.value)})]}),e.jsxs("label",{className:s.modal__label,htmlFor:"user_message",children:["Факт",e.jsx("textarea",{required:!0,value:w,className:s.modal__message,name:"user_message",id:"user_message",placeholder:"Введіть текст",onChange:n=>f(n.target.value)})]}),e.jsx("button",{type:"submit",className:s.modal_button,children:"Відправити"})]})]})})};F.propTypes={isHidden:g.bool,setIsHidden:g.func,addCatFunc:g.func};const xe="_link_10zse_20",we="_new_office__button_10zse_36",je="_modal_button_10zse_37",ye="_page_container_10zse_56",ke="_section_10zse_64",ve="_container_10zse_106",Ne="_dark_theme_10zse_112",$e="_main_wrapper_10zse_125",Se="_table_head_10zse_130",Ce="_table_wrapper_10zse_136",Te="_plus_button_10zse_142",qe="_filter_wrapper_10zse_151",ze="_filter_label_10zse_158",d={link:xe,new_office__button:we,modal_button:je,page_container:ye,section:ke,container:ve,dark_theme:Ne,main_wrapper:$e,table_head:Se,table_wrapper:Ce,plus_button:Te,filter_wrapper:qe,filter_label:ze},Fe="_link_1wqd0_20",Pe="_new_office__button_1wqd0_36",Oe="_modal_button_1wqd0_37",Re="_page_container_1wqd0_56",Ee="_section_1wqd0_64",Ie="_container_1wqd0_106",Me="_dark_theme_1wqd0_112",De="_delete_button_1wqd0_125",We={link:Fe,new_office__button:Pe,modal_button:Oe,page_container:Re,section:Ee,container:Ie,dark_theme:Me,delete_button:De},P=({data:t,index:_})=>{const l=S();return e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:`${_+1}. ${t.catName}`}),e.jsx("td",{children:t.breed}),e.jsxs("td",{children:[t.years," рік/років"]}),e.jsx("td",{children:t.receiving}),e.jsx("td",{title:t.fact,children:t.fact}),e.jsx("td",{children:e.jsx("button",{type:"button",className:We.delete_button,onClick:()=>l(R(t.id)),children:e.jsx(C,{})})})]})})};P.propTypes={data:g.object,index:g.number};const Le=t=>t.cats.offices,Ve=()=>{const[t,_]=r.useState(!0),[l,u]=r.useState(null),[m,h]=r.useState(!1),[p,b]=r.useState(!1),c=E(Le),i=S(),x=()=>{if(!m&&!p)return c;if(m&&p)return c.map(a=>({...a,data:a.data.filter(o=>o.years<=2)})).map(a=>({...a,data:a.data.filter(o=>o.receiving===`${j}-${y}-${k}`)}));if(p&&!m)return c.map(a=>({...a,data:a.data.filter(o=>o.years<=2)}));if(m&&!p)return c.map(a=>({...a,data:a.data.filter(o=>o.receiving===`${j}-${y}-${k}`)}))},w=()=>{i(M({officeName:"Кабінет",data:[{catName:"Мурзик",breed:"Мейкун",years:1,receiving:"03.01.2024",fact:"Fdfdsfdfggdggd",id:"dsfsdfsdfsdf"}],id:c.length}))},f=async a=>{await i(D({data:a,selectedItem:l}))};return e.jsxs("main",{className:d.main_wrapper,children:[e.jsxs("div",{className:d.filter_wrapper,children:[e.jsx("button",{onClick:w,className:d.new_office__button,children:"Новий кабінет"}),e.jsxs("label",{className:d.filter_label,children:[e.jsx("input",{type:"checkbox",onClick:a=>h(a.target.checked)}),"сьогодні"]}),e.jsxs("label",{className:d.filter_label,children:[e.jsx("input",{type:"checkbox",onClick:a=>b(a.target.checked)}),"Котенята"]})]}),e.jsx("div",{className:d.table_wrapper,children:x().map((a,o)=>e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:"6",children:e.jsxs("div",{className:d.table_head,children:[e.jsxs("div",{children:[a.officeName,o+1]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:d.plus_button,"data-modal-open":!0,onClick:n=>{u(a.id),_(!n)},children:e.jsx(W,{})}),e.jsx("button",{type:"button",className:d.plus_button,onClick:()=>i(I(a.id)),children:e.jsx(C,{})})]})]})})})}),a.data.map((n,$)=>e.jsx(P,{data:n,index:$},$))]},a.id))}),e.jsx(F,{isHidden:t,setIsHidden:_,addCatFunc:f})]})};export{Ve as default};