import{d as r,p as I,o as n,c as o,b as t,u as l,_,l as C,k as u,m as L,e as v,t as d,f as k,F as m,j as h,a as $,q as P,s as B,x as N}from"./index-51hXpe6c.js";/* empty css                                                                *//* empty css                                                                         */const D={class:"pal-avatar"},G={class:"pal-image"},S=["src"],V=r({__name:"PalAvatar",props:{pal:{},palId:{}},setup(e){const s=e,i=s.pal??I.find(c=>c.id===Number(s.palId)),a=i==null?void 0:i.name.split(" ").join("_").toLowerCase();return(c,p)=>(n(),o("div",D,[t("div",G,[t("img",{src:`/paldeck/icons/${l(a)}.webp`},null,8,S)])]))}}),y=_(V,[["__scopeId","data-v-a7f469fd"]]),j={class:"avatar"},A={class:"combination"},F=r({__name:"Lines",props:["line"],setup(e){const s=e,{palDeck:i}=k(),a=i.value.find(c=>c.id===s.line.target);return(c,p)=>{var g;const x=C("router-link");return n(),u(x,{tag:"div",to:`/pal/${(g=l(a))==null?void 0:g.id}`,class:"line"},{default:L(()=>{var f;return[t("div",j,[v(y,{pal:l(a)},null,8,["pal"])]),t("div",null,[t("div",null,d((f=l(a))==null?void 0:f.name),1),t("div",A,d(e.line.combinations.length)+" "+d(`combination${e.line.combinations.length>1?"s":""}`),1)])]}),_:1},8,["to"])}}}),b=_(F,[["__scopeId","data-v-6ef180cd"]]),w=e=>(P("data-v-0b6011e5"),e=e(),B(),e),q={class:"generation"},E={class:"generation-header"},z={class:"generation-container"},H={key:0},J=w(()=>t("div",{class:"line-header"},"Gender complete",-1)),K={class:"lines-container"},M={key:1},O=w(()=>t("div",{class:"line-header"},"New Pals",-1)),Q={class:"lines-container"},R=r({__name:"Generation",props:["generation","genid"],setup(e){return(s,i)=>(n(),o("div",q,[t("div",E,"Gen "+d(e.genid),1),t("div",z,[e.generation.genderComplete.length?(n(),o("div",H,[J,t("div",K,[(n(!0),o(m,null,h(e.generation.genderComplete,a=>(n(),u(b,{line:a},null,8,["line"]))),256))])])):$("",!0),e.generation.newPals.length?(n(),o("div",M,[O,t("div",Q,[(n(!0),o(m,null,h(e.generation.newPals,a=>(n(),u(b,{line:a},null,8,["line"]))),256))])])):$("",!0)])]))}}),T=_(R,[["__scopeId","data-v-0b6011e5"]]),U={class:"breed-lines"},W=r({__name:"BreedLines",setup(e){const{breedingLines:s}=k();return N(s,()=>console.log(s.value)),(i,a)=>(n(),o("div",U,[(n(!0),o(m,null,h(l(s),(c,p)=>(n(),o("div",null,[v(T,{generation:c,genid:p+1},null,8,["generation","genid"])]))),256))]))}}),X=_(W,[["__scopeId","data-v-460129ef"]]),Y={class:"planner page"},te=r({__name:"PlannerView",setup(e){return(s,i)=>(n(),o("div",Y,[v(X)]))}});export{te as default};
