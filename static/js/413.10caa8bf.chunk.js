"use strict";(self.webpackChunkwheels=self.webpackChunkwheels||[]).push([[413],{6583:(e,a,s)=>{s.d(a,{Z:()=>_});var t=s(2791),o=s(7621),n=s(9504),r=s(2169),l=s(2880),i=s(4164);const c={overlay:"Modal_overlay__r63M6",modal:"Modal_modal__DJDMv",modalCarsItemInfo:"Modal_modalCarsItemInfo__1Xws5",modalModelInfo:"Modal_modalModelInfo__3d5Zs",modalCarsItemDetailsMore:"Modal_modalCarsItemDetailsMore__RMTKu",modalCarsItemDescription:"Modal_modalCarsItemDescription__h-sWG",modalCarsItemAccesories:"Modal_modalCarsItemAccesories__qVjb7",modalAccesoriesList:"Modal_modalAccesoriesList__apZ2K",modalRentalConditionsList:"Modal_modalRentalConditionsList__pz2Tb",modalRentalConditionsTitle:"Modal_modalRentalConditionsTitle__S8cLA",modalRentalConditionsListItem:"Modal_modalRentalConditionsListItem__bsBUP",closeButton:"Modal_closeButton__Ya+Ev",modalCloseBtn:"Modal_modalCloseBtn__+it9y",modalCloseSvg:"Modal_modalCloseSvg__9aDNJ"};const d=s.p+"static/media/sprite.170e9339d7ab1cd7be81153866c652e9.svg";var m=s(3329);const C=e=>{let{car:a,city:s,country:C,setIsModalOpen:p}=e;const u=(0,t.useRef)(null);if((0,t.useEffect)((()=>{const e=e=>{"Escape"===e.key&&p(!1)},a=e=>{e.target===u.current&&p(!1)};return document.addEventListener("keydown",e),document.addEventListener("click",a),()=>{document.removeEventListener("keydown",e),document.removeEventListener("click",a)}}),[p]),!a)return null;const{id:g,img:I,make:x,model:h,year:_,fuelConsumption:j,engineSize:f,description:v,rentalPrice:M,type:N,mileage:Z,accessories:b,functionalities:y,rentalConditions:R}=a,L=y,w=b.concat(L),S=R.split("\n");return i.createPortal((0,m.jsx)("div",{className:c.overlay,role:"dialog","aria-modal":"true",ref:u,children:(0,m.jsxs)("div",{className:c.modal,children:[(0,m.jsxs)(o.Z,{sx:{boxShadow:"none",width:461},children:[(0,m.jsx)(r.Z,{sx:{position:"relative",height:248,borderRadius:4,"&::before":{content:'""',position:"absolute",borderRadius:4,top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%)",zIndex:2}},image:I,title:x,alt:"Image of ".concat(x)}),(0,m.jsx)("div",{className:c.modalCarsItemDetails,children:(0,m.jsxs)("div",{className:c.modalCarsItemInfo,children:[(0,m.jsx)("p",{className:c.modalCarInfo,children:x}),(0,m.jsxs)("p",{className:c.modalModelInfo,children:[h,(0,m.jsx)("span",{children:","})]}),(0,m.jsx)("p",{className:c.modalCarInfoYear,children:_})]})}),(0,m.jsxs)(n.Z,{sx:{margin:0,padding:0},children:[(0,m.jsxs)("div",{className:c.modalCarsItemDetails,children:[(0,m.jsxs)("p",{className:c.modalCarsItemDetailsMore,children:[s,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),C,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),"Id:",g,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),"Year:",_,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),"Type:",N]}),(0,m.jsxs)("p",{className:c.modalCarsItemDetailsMore,children:["Fuel Consumption:",j,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),"Engine Size: ",f]})]}),(0,m.jsx)("p",{className:c.modalCarsItemDescription,children:v}),(0,m.jsxs)("div",{className:c.modalCarsItemAccesoriesDetails,children:[(0,m.jsx)("p",{className:c.modalCarsItemAccesories,children:"Accessories and functionalities:"}),(0,m.jsx)("ul",{className:c.modalAccesoriesList,children:w.map(((e,a)=>(0,m.jsxs)("li",{children:[e,a!==w.length-1&&(0,m.jsx)("span",{children:"|"})]},a)))})]}),(0,m.jsxs)("div",{className:c.modalCarsRentalConditions,children:[(0,m.jsx)("p",{className:c.modalRentalConditionsTitle,children:"Rental Conditions:"}),(0,m.jsxs)("ul",{className:c.modalRentalConditionsList,children:[S.map((e=>(0,m.jsx)("li",{className:c.modalRentalConditionsListItem,dangerouslySetInnerHTML:{__html:e.replace(/(\d+)/g,((e,a)=>"<span>".concat(a,"</span>")))}},e))),(0,m.jsxs)("li",{className:c.modalRentalConditionsListItem,children:["Mileage: ",(0,m.jsx)("span",{children:Z})]}),(0,m.jsxs)("li",{className:c.modalRentalConditionsListItem,children:["Price:",(0,m.jsx)("span",{children:M})]})]})]})]})]}),(0,m.jsx)(l.Z,{variant:"contained",onClick:()=>{(()=>{const e=JSON.parse(localStorage.getItem("cars"))||[];e.some((e=>e.id===a.id))||(e.push(a),localStorage.setItem("cars",JSON.stringify(e))),p(!1)})()},className:c.rentCarButton,style:{float:"left"},children:"Rental Car"}),(0,m.jsx)("button",{className:c.modalCloseBtn,type:"button",onClick:()=>{p(!1)},children:(0,m.jsx)("svg",{className:c.modalCloseSvg,children:(0,m.jsx)("use",{href:d+"#icon-modal-close"})})})]})}),document.getElementById("modal"))},p={catalogCarsItem:"CarItem_catalogCarsItem__dKc1v",catalogCarsItemDetails:"CarItem_catalogCarsItemDetails__E-uPC",catalogCarsItemInfo:"CarItem_catalogCarsItemInfo__ufP5q",carInfo:"CarItem_carInfo__YLDFQ",carInfoYear:"CarItem_carInfoYear__Gzfri",modelInfo:"CarItem_modelInfo__i6N1+",catalogCarsItemDetailsMore:"CarItem_catalogCarsItemDetailsMore__wCEn8",button:"CarItem_button__1DvIv",carItemHeartButton:"CarItem_carItemHeartButton__rdaam",heartSvg:"CarItem_heartSvg__g0hze"};var u=s(9434),g=s(6351),I=s(5440);const x=e=>{let{car:a}=e;const s=(0,u.I0)(),[c,x]=(0,t.useState)(!1),[h,_]=(0,t.useState)(!1),j=(0,u.v9)(g.Tc);(0,t.useEffect)((()=>{j.find((e=>e.id===a.id))&&_(!0)}),[j,a.id]);const{address:f,img:v,make:M,model:N,year:Z,rentalPrice:b,rentalCompany:y,type:R,mileage:L,accessories:w}=a,S=f.split(", ");let k="",D="";return S.length>=3&&(k=S[1],D=S[2]),(0,m.jsxs)("li",{className:p.catalogCarsItem,children:[(0,m.jsxs)(o.Z,{sx:{boxShadow:"none",width:274},children:[(0,m.jsx)("button",{className:p.carItemHeartButton,type:"button","aria-label":"Toggle favorite",onClick:()=>{h?(s((0,I.Ni)(a)),_(!1)):(s((0,I.a3)(a)),_(!0))},children:(0,m.jsx)("svg",{className:p.heartSvg,style:{fill:h?"#3470FF":"none",stroke:h?"#3470FF":"#ffffffcc"},"aria-hidden":"true",children:(0,m.jsx)("use",{href:d+"#icon-heart"})})}),(0,m.jsx)(r.Z,{sx:{position:"relative",width:274,height:268,borderRadius:4,"&::before":{content:'""',position:"absolute",borderRadius:4,top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%)",zIndex:2}},image:v,title:M,alt:"Image of ".concat(M)}),(0,m.jsxs)("div",{className:p.catalogCarsItemDetails,children:[(0,m.jsxs)("div",{className:p.catalogCarsItemInfo,children:[(0,m.jsx)("p",{className:p.carInfo,children:M}),(0,m.jsxs)("p",{className:p.modelInfo,children:[N,", "]}),(0,m.jsx)("p",{className:p.carInfoYear,children:Z})]}),(0,m.jsx)("div",{className:p.catalogCarsIntro,children:b})]}),(0,m.jsxs)(n.Z,{sx:{margin:0,padding:0},children:[(0,m.jsxs)("p",{className:p.catalogCarsItemDetailsMore,children:[k,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),D,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),y,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),"Premium"]}),(0,m.jsxs)("p",{className:p.catalogCarsItemDetailsMore,children:[R,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),N,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),L,(0,m.jsx)("span",{}),"|",(0,m.jsx)("span",{}),w[0]]})]})]}),(0,m.jsx)(l.Z,{className:p.button,variant:"contained",onClick:()=>x(!0),children:"Learn More"}),c&&document.getElementById("modal")&&(0,i.createPortal)((0,m.jsx)(C,{car:a,city:k,country:D,setIsModalOpen:x}),document.getElementById("modal"))]})},h={catalogCarsList:"CarList_catalogCarsList__pS52o",catalogCarsItem:"CarList_catalogCarsItem__zvY1Y",catalogCarsItemImg:"CarList_catalogCarsItemImg__MTJrm"},_=e=>{let{cars:a}=e;return(0,m.jsx)("div",{className:h.carList,children:(0,m.jsx)("ul",{className:h.catalogCarsList,children:null===a||void 0===a?void 0:a.map(((e,a)=>(0,m.jsx)(x,{car:e},a)))})})}},4413:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});s(2791);var t=s(9434),o=s(6351),n=s(6583),r=s(3329);const l=()=>{const e=(0,t.v9)(o.Tc);return(0,r.jsx)("section",{className:"container",children:(0,r.jsx)(n.Z,{cars:e})})}},6351:(e,a,s)=>{s.d(a,{OG:()=>t,Tc:()=>n,f8:()=>r,rN:()=>o,xU:()=>l,zh:()=>i});const t=e=>e.cars.adverts,o=e=>e.cars.allAdverts,n=e=>e.cars.favorites,r=e=>e.cars.isMount,l=e=>e.cars.isLoading,i=e=>e.cars.error},7621:(e,a,s)=>{s.d(a,{Z:()=>x});var t=s(7462),o=s(3366),n=s(2791),r=s(3733),l=s(4419),i=s(7630),c=s(1046),d=s(5527),m=s(5878),C=s(1217);function p(e){return(0,C.ZP)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var u=s(3329);const g=["className","raised"],I=(0,i.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})((()=>({overflow:"hidden"}))),x=n.forwardRef((function(e,a){const s=(0,c.Z)({props:e,name:"MuiCard"}),{className:n,raised:i=!1}=s,d=(0,o.Z)(s,g),m=(0,t.Z)({},s,{raised:i}),C=(e=>{const{classes:a}=e;return(0,l.Z)({root:["root"]},p,a)})(m);return(0,u.jsx)(I,(0,t.Z)({className:(0,r.Z)(C.root,n),elevation:i?8:void 0,ref:a,ownerState:m},d))}))},9504:(e,a,s)=>{s.d(a,{Z:()=>I});var t=s(7462),o=s(3366),n=s(2791),r=s(3733),l=s(4419),i=s(7630),c=s(1046),d=s(5878),m=s(1217);function C(e){return(0,m.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var p=s(3329);const u=["className","component"],g=(0,i.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),I=n.forwardRef((function(e,a){const s=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:n,component:i="div"}=s,d=(0,o.Z)(s,u),m=(0,t.Z)({},s,{component:i}),I=(e=>{const{classes:a}=e;return(0,l.Z)({root:["root"]},C,a)})(m);return(0,p.jsx)(g,(0,t.Z)({as:i,className:(0,r.Z)(I.root,n),ownerState:m,ref:a},d))}))},2169:(e,a,s)=>{s.d(a,{Z:()=>h});var t=s(3366),o=s(7462),n=s(2791),r=s(3733),l=s(4419),i=s(1046),c=s(7630),d=s(5878),m=s(1217);function C(e){return(0,m.ZP)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var p=s(3329);const u=["children","className","component","image","src","style"],g=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e,{isMediaComponent:t,isImageComponent:o}=s;return[a.root,t&&a.media,o&&a.img]}})((e=>{let{ownerState:a}=e;return(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},a.isMediaComponent&&{width:"100%"},a.isImageComponent&&{objectFit:"cover"})})),I=["video","audio","picture","iframe","img"],x=["picture","img"],h=n.forwardRef((function(e,a){const s=(0,i.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:c,component:d="div",image:m,src:h,style:_}=s,j=(0,t.Z)(s,u),f=-1!==I.indexOf(d),v=!f&&m?(0,o.Z)({backgroundImage:'url("'.concat(m,'")')},_):_,M=(0,o.Z)({},s,{component:d,isMediaComponent:f,isImageComponent:-1!==x.indexOf(d)}),N=(e=>{const{classes:a,isMediaComponent:s,isImageComponent:t}=e,o={root:["root",s&&"media",t&&"img"]};return(0,l.Z)(o,C,a)})(M);return(0,p.jsx)(g,(0,o.Z)({className:(0,r.Z)(N.root,c),as:d,role:!f&&m?"img":void 0,ref:a,style:v,ownerState:M,src:f?m||h:void 0},j,{children:n}))}))}}]);
//# sourceMappingURL=413.10caa8bf.chunk.js.map