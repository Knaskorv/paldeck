import{d as k,o as t,c as d,b as a,e as m,u as e,P as v,t as p,f as $,p as N,m as P,_ as B,s as x,x as h,y as D,F as b,k as f,a as I,l as C}from"./index-rN9ZsBKr.js";/* empty css                                                                         */const V=n=>(N("data-v-47a3d7f5"),n=n(),P(),n),S={class:"combination"},w={class:"parent"},y={class:"avatar"},A=V(()=>a("div",null,"+",-1)),F={class:"parent"},L={class:"avatar"},E=k({__name:"BreedCombination",props:["parents"],setup(n){const{palDeck:c}=$(),_=n,o=c.value.find(s=>s.id===_.parents[0]),i=c.value.find(s=>s.id===_.parents[1]);return(s,r)=>{var u,l;return t(),d("div",S,[a("div",w,[a("div",y,[m(v,{pal:e(o)},null,8,["pal"])]),a("div",null,p((u=e(o))==null?void 0:u.name),1)]),A,a("div",F,[a("div",L,[m(v,{pal:e(i)},null,8,["pal"])]),a("div",null,p((l=e(i))==null?void 0:l.name),1)])])}}}),g=B(E,[["__scopeId","data-v-47a3d7f5"]]),R={class:"page"},j={key:0},q={class:"header"},z={class:"pal"},G={class:"header"},H={class:"pal"},J=k({__name:"PalView",setup(n){const{palDeck:c,breedingLines:_}=$(),o=x();c.value.find(r=>r.id===Number(o.params.id));const i=h(Number(o.params.id),D.map(r=>({...r,m:!0,f:!0}))),s=h(Number(o.params.id),c.value);return(r,u)=>(t(),d("div",R,[e(s).length?(t(),d("div",j,[a("div",q,"Combinations Available ("+p(e(s).length)+")",1),a("div",z,[(t(!0),d(b,null,f(e(s),l=>(t(),C(g,{parents:l},null,8,["parents"]))),256))])])):I("",!0),a("div",G,"All Combinations ("+p(e(i).length)+")",1),a("div",H,[(t(!0),d(b,null,f(e(i),l=>(t(),C(g,{parents:l},null,8,["parents"]))),256))])]))}}),O=B(J,[["__scopeId","data-v-062ca51f"]]);export{O as default};