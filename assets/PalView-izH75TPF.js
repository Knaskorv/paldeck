import{d as k,o as p,c as _,b as a,e as m,u as s,P as v,t as l,f as C,p as $,m as w,_ as g,s as x,h as b,x as f,y,F as D,k as I,l as N,n as S}from"./index-E1H3QRBa.js";/* empty css                                                                         */const V=t=>($("data-v-47a3d7f5"),t=t(),w(),t),F={class:"combination"},z={class:"parent"},A={class:"avatar"},E=V(()=>a("div",null,"+",-1)),L={class:"parent"},R={class:"avatar"},T=k({__name:"BreedCombination",props:["parents"],setup(t){const{palDeck:c}=C(),n=t,e=c.value.find(o=>o.id===n.parents[0]),i=c.value.find(o=>o.id===n.parents[1]);return(o,d)=>{var u,r;return p(),_("div",F,[a("div",z,[a("div",A,[m(v,{pal:s(e)},null,8,["pal"])]),a("div",null,l((u=s(e))==null?void 0:u.name),1)]),E,a("div",L,[a("div",R,[m(v,{pal:s(i)},null,8,["pal"])]),a("div",null,l((r=s(i))==null?void 0:r.name),1)])])}}}),W=g(T,[["__scopeId","data-v-47a3d7f5"]]),j={key:0,class:"missing"},q={key:1,class:"page"},G={class:"pal-info"},H={class:"header"},J={class:"pal"},K=k({__name:"PalView",setup(t){const{palDeck:c}=C(),n=x(),e=c.value.find(d=>d.id===Number(n.params.id)),i=b(()=>f(Number(n.params.id),y.map(d=>({...d,m:!0,f:!0})))),o=b(()=>f(Number(n.params.id),c.value));return(d,u)=>{var r;return s(e)?(p(),_("div",q,[a("div",G,[m(v,{pal:s(e)},null,8,["pal"]),a("div",null,"#"+l(s(e).number)+" "+l((r=s(e))==null?void 0:r.name)+" ("+l(s(e).breedingPower)+")",1)]),a("div",H,"Combinations ("+l(i.value.length)+")",1),a("div",J,[(p(!0),_(D,null,I(i.value,h=>(p(),N(W,{parents:h,class:S({available:o.value.some(P=>h.every(B=>P.includes(B)))})},null,8,["parents","class"]))),256))])])):(p(),_("div",j,"What the fauck! There's no pal with this id :("))}}}),Q=g(K,[["__scopeId","data-v-010e32de"]]);export{Q as default};
