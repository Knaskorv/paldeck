import{d as p,o as s,c as i,a as h,n as C,b as a,e as v,A as V,w as _,u as m,f as P,_ as g,r as f,g as $,h as u,v as b,i as w,F as k,j as D,k as M}from"./index-51hXpe6c.js";/* empty css                                                                */const y={key:0,class:"male",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"800px",height:"800px",viewBox:"0 0 393.739 393.739","xml:space":"preserve"},B=a("g",null,[a("path",{d:`M370.907,0h-93.048c-9.091,0-16.455,7.365-16.455,16.45c0,9.085,7.364,16.453,16.455,16.453h43.19L217.25,136.704\r
		c-21.049-12.879-45.768-20.318-72.194-20.318c-76.468,0-138.679,62.208-138.679,138.676c0,76.474,62.211,138.678,138.679,138.678\r
		s138.678-62.204,138.678-138.678c0-33.07-11.655-63.455-31.037-87.314L354.462,65.985v49.231c0,9.085,7.365,16.452,16.444,16.452\r
		c9.09,0,16.455-7.367,16.455-16.452V16.45C387.362,7.365,379.997,0,370.907,0z M145.056,346.737\r
		c-50.546,0-91.673-41.127-91.673-91.676c0-50.543,41.121-91.667,91.673-91.667c50.546,0,91.664,41.124,91.664,91.667\r
		C236.72,305.61,195.602,346.737,145.056,346.737z`})],-1),z=[B],I={key:1,class:"female",fill:"#000000",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"800px",height:"800px",viewBox:"0 0 477.141 477.141","xml:space":"preserve"},L=a("g",null,[a("path",{d:`M326.711,341.99h-64.628v-64.634c0-0.686-0.142-1.323-0.213-1.997c65.409-11.119,115.378-68.161,115.378-136.681\r
		C377.249,62.208,315.044,0,238.571,0C162.103,0,99.892,62.208,99.892,138.678c0,68.521,49.973,125.562,115.375,136.681\r
		c-0.059,0.674-0.204,1.312-0.204,1.997v64.634h-64.631c-12.983,0-23.501,10.527-23.501,23.502c0,12.98,10.518,23.507,23.501,23.507\r
		h64.637v64.64c0,12.98,10.524,23.502,23.501,23.502c12.979,0,23.513-10.527,23.513-23.502v-64.64h64.628\r
		c12.986,0,23.508-10.526,23.508-23.507C350.219,352.518,339.698,341.99,326.711,341.99z M146.904,138.678\r
		c0-50.546,41.121-91.673,91.667-91.673c50.549,0,91.676,41.122,91.676,91.673s-41.127,91.667-91.676,91.667\r
		C188.031,230.346,146.904,189.224,146.904,138.678z`})],-1),U=[L],x=p({__name:"GenderIcon",props:["gender","active"],setup(e){return(o,c)=>(s(),i("div",{class:C(["gender-icon",{active:e.active}])},[e.gender===1?(s(),i("svg",y,z)):h("",!0),e.gender===0?(s(),i("svg",I,U)):h("",!0)],2))}}),F={class:"pal-info"},N=p({__name:"PalCard",props:["pal"],setup(e){const{toggleGender:o,newPals:c}=P();return(t,r)=>(s(),i("div",{class:C(["pal-card",{full:e.pal.m&&e.pal.f,partial:e.pal.m!==e.pal.f,breedable:m(c).includes(e.pal.id)}])},[v(V,{pal:e.pal,"show-name":"","show-number":"","show-breeding-power":"",link:"",animate:""},null,8,["pal"]),a("div",F,[v(x,{class:"gender-icon female",onClick:r[0]||(r[0]=_(d=>m(o)(e.pal.id,"f"),["prevent"])),gender:0,active:e.pal.f},null,8,["active"]),v(x,{class:"gender-icon male",onClick:r[1]||(r[1]=_(d=>m(o)(e.pal.id,"m"),["prevent"])),gender:1,active:e.pal.m},null,8,["active"])])],2))}}),A=g(N,[["__scopeId","data-v-59a6dbcd"]]),G={class:"controls"},j={class:"pal-deck"},E=p({__name:"PalDeck",setup(e){const{palDeck:o}=P(),c=f(""),t=f("id"),r=$(()=>[...o.value].sort((d,l)=>d[t.value]>l[t.value]?1:-1).filter(d=>d.name.toLowerCase().includes(c.value)));return(d,l)=>(s(),i(k,null,[a("div",G,[u(a("input",{"onUpdate:modelValue":l[0]||(l[0]=n=>c.value=n),placeholder:"Filter"},null,512),[[b,c.value]]),a("div",null,[u(a("input",{type:"radio","onUpdate:modelValue":l[1]||(l[1]=n=>t.value=n),value:"id"},null,512),[[w,t.value]]),u(a("input",{type:"radio","onUpdate:modelValue":l[2]||(l[2]=n=>t.value=n),value:"breedingPower"},null,512),[[w,t.value]]),u(a("input",{type:"radio","onUpdate:modelValue":l[3]||(l[3]=n=>t.value=n),value:"name"},null,512),[[w,t.value]])])]),a("div",j,[(s(!0),i(k,null,D(r.value,n=>(s(),M(A,{key:n.id,pal:n},null,8,["pal"]))),128))])],64))}}),R=g(E,[["__scopeId","data-v-37d3e7ce"]]),T={class:"pal-deck-view page"},q=p({__name:"PalDeckView",setup(e){return(o,c)=>(s(),i("div",T,[v(R)]))}}),K=g(q,[["__scopeId","data-v-4eeba142"]]);export{K as default};
