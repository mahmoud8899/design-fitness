(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("@babel/runtime/helpers/asyncToGenerator");var s=e.n(t);const a=require("@babel/runtime/regenerator");var i=e.n(a);const r=require("express");var n=e.n(r);const l=require("morgan");var o=e.n(l);const d=require("body-parser");var c=e.n(d);const m=require("cors");var f=e.n(m);const u=require("react"),x=require("react-dom/server");var h="/image/person.08ae8ead77063bebb0b54850bc2281c7.png",g="/image/bg.0a20974d94e3fd5e0ae47f5ae0cd839b.jpg",p="/image/fitness.3fd5c301daad81908b7620ea8a528a35.svg",b={title:"Raise your fitness",title2:"routine to the",title3:"professional",title4:"standards",des:" Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n    sed do eiusmod tempor incididunt ut labore et dolore\n    magna aliqua. Quis ipsum suspendisse ultrices.",image:h,firstbuttom:"Join Us",lastbuttom:"Know More"},j={image:"/image/about.2991dc8be5c851acba0343d4c28760b0.jpg",title:"10 Years Experience",des:"Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum",text:[{_id:1,title:"Certified GYM Center",des:"Ipsum sanctu dolor ipsum dolore sit et kasd duo",image:"/image/Certified.588710f102ce0df43e33280c2e23e3c7.png"},{_id:2,title:"Award Winning",des:"Ipsum sanctu dolor ipsum dolore sit et kasd duo",image:"/image/Award.3a0b4fdf0a5ab979d7c7f50f6772d103.png"}],buttom:"Learn More"},v=[{_id:1,name:"Trainer Name",des:"Trainer",image:"/image/team-1.c4f6917d535271d8b07a0bc564476782.jpg"},{_id:2,name:"Trainer Name",des:"Trainer",image:"/image/team-2.a0d09479245f6d6e7c12d7e2578febf6.jpg"},{_id:3,name:"Trainer Name",des:"Trainer",image:"/image/team-3.b0bd46474de48dfb4c2cd05fbe8e1b0e.jpg"},{_id:4,name:"Trainer Name",des:"Trainer",image:"/image/team-4.d39c66f0a436a891d062267b1895b171.jpg"}],y={title:"Our Blog",des:"Latest Article From Blog",data:[{_id:1,title:"Lorem ipsum dolor sit amet",image:"/image/blog-1.d59cafa4cb90b2bec71b03fd13049f74.jpg",buttom:"read more",des:" Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam"},{_id:2,title:"Lorem ipsum dolor sit amet",image:"/image/blog-2.95c0ce6983c4d8089332be33db5e5217.jpg",buttom:"read more",des:" Eos kasd et sea labore. Et sed amet magna elitr amet, stet et amet erat nonumy labore lorem ut eos, sed ut at tempor diam no. Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed dolore eirmod vero dolor sed kasd accusam"}]},N={title:"fitness",icon:p,Listnavbar:[{_id:5,name:"home",link:"#home"},{_id:1,name:"blog",link:"#blog"},{_id:2,name:"trainers",link:"#trainers"},{_id:3,name:"experience",link:"#experience"},{_id:4,name:"subscribe",link:"#subscribe"}]},w={title:"Subscribe Our Newsletter",des:"Subscribe and get Our latest article in your inbox",image:g,input:"your email",buttom:"Subscribe"};const _=require("react-lazy-load-image-component"),k=require("react/jsx-runtime");var O=function(e){var t=e.alt,s=e.image,a=e.width,i=e.height;return(0,k.jsx)(_.LazyLoadImage,{alt:t,height:i,src:s,width:a})},T=function(){return(0,k.jsxs)("div",{className:"width flexwrap flex justify-content",children:[(0,k.jsx)("div",{className:"box padding ",children:(0,k.jsx)("div",{className:"SizeImage",children:(0,k.jsx)(O,{image:j.image,width:"100%",alt:"the Experience"})})}),(0,k.jsxs)("div",{className:"box padding flex flex-column content align-items",children:[(0,k.jsx)("h2",{className:"title font-family-title screencolor text-transform",children:j.title}),(0,k.jsx)("div",{className:"margin-top",children:(0,k.jsx)("p",{className:"white des font-family-des ext-align text-transform",children:j.des})}),(0,k.jsx)("div",{className:"width flexwrap flex justify-content margin-top ",children:j.text.map((function(e,t){return(0,k.jsxs)("div",{className:"flex flex-column align-items box",children:[(0,k.jsx)(O,{image:e.image,width:"100px",height:"100px",alt:""}),(0,k.jsx)("h2",{className:"name font-family-title screencolor text-transform",children:e.title}),(0,k.jsx)("div",{className:"",children:(0,k.jsx)("p",{className:"white des font-family-des ext-align text-transform",children:e.des})})]},t)}))}),(0,k.jsx)("div",{className:"backgroundscreen padding border-radiusscreen margin-top  cursor opacity",children:(0,k.jsx)("span",{className:"whitecolor des font-family-des ext-align text-transform ",children:j.buttom})})]})]})},C=function(){return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:"__margin__top_bootom",children:[(0,k.jsx)("h2",{className:"titlename font-family-title white text-transform ext-align ",children:y.title}),(0,k.jsx)("h2",{className:"title font-family-title screencolor text-transform ext-align ",children:y.des})]}),(0,k.jsx)("div",{className:"flexwrap flex justify-content align-items",children:y.data.map((function(e,t){return(0,k.jsxs)("div",{className:"box margin- ",children:[(0,k.jsx)(O,{image:e.image,width:"100%",height:"300px",className:"border-radiusscreen",alt:"our blog"}),(0,k.jsxs)("div",{className:"",children:[(0,k.jsx)("h2",{className:"name font-family-title screencolor text-transform",children:e.title}),(0,k.jsx)("div",{className:"",children:(0,k.jsx)("p",{className:"white des font-family-des  text-transform",children:e.des})})]}),(0,k.jsx)("div",{className:"widthhund backgroundscreen padding border-radiusscreen margin-top  cursor opacity",children:(0,k.jsx)("span",{className:"whitecolor des font-family-des ext-align text-transform ",children:e.buttom})})]},t)}))})]})},S=function(e){var t=e.Title,s=e.Classname;return(0,k.jsx)("button",{className:s,children:t})},q=function(){return(0,k.jsxs)("div",{className:"width flexwrap flex justify-content ",children:[(0,k.jsx)("div",{className:"box padding ",children:(0,k.jsx)("div",{className:"SizeImage ",children:(0,k.jsx)(O,{image:b.image,width:"100%",className:"border-radius backgroundscreen heightImage ",alt:"Our Trainers"})})}),(0,k.jsxs)("div",{className:"box padding flex flex-column content align-items",children:[(0,k.jsx)("h2",{className:"title font-family-title screencolor text-transform",children:b.title}),(0,k.jsx)("h2",{className:"titlename font-family-title white text-transform",children:b.title2}),(0,k.jsx)("h2",{className:"title font-family-title screencolor text-transform",children:b.title3}),(0,k.jsx)("h2",{className:"titlename font-family-title white text-transform",children:b.title4}),(0,k.jsx)("div",{className:"margin-top",children:(0,k.jsx)("p",{className:"white des font-family-des ext-align text-transform",children:b.des})}),(0,k.jsxs)("div",{className:"flex flex-row align-items content flexwrap  padding",children:[(0,k.jsx)(S,{Title:b.firstbuttom,Classname:"buttom  border-radiusscreen bordersloid  margin- cursor opacity white des font-family-des"}),(0,k.jsx)(S,{Title:b.lastbuttom,Classname:"outline buttom  border-radiusscreen backgroundscreen  margin- cursor opacity whitecolor des font-family-des  text-transform"})]})]})]})},P=function(e){var t=e.placeholder,s=e.ClassName;return(0,k.jsx)("input",{placeholder:t,className:s})},E={title:"Subscribe Our Newsletter",des:"Subscribe and get Our latest article in your inbox",image:g,input:"your email",buttom:"Subscribe"},L=function(){return(0,k.jsxs)("div",{className:"position flex flexwrap",children:[(0,k.jsx)(O,{image:E.image,width:"100%",height:"500px",alt:"Subscribe"}),(0,k.jsxs)("div",{className:"_postion_center flex flexwrap ",children:[(0,k.jsx)("h2",{className:"title font-family-title screencolor text-transform",children:E.title}),(0,k.jsx)("div",{className:"__margin__top_bootom",children:(0,k.jsx)("p",{className:"whitecolor des font-family-des  text-transform",children:E.des})}),(0,k.jsxs)("div",{className:"__Card flex flex-row align-items flexwrap content flex-row",children:[(0,k.jsx)(P,{placeholder:E.input,ClassName:"box input font-family-des  text-transform border-radiusscreen padding__left"}),(0,k.jsx)("div",{className:"margin-"}),(0,k.jsx)(S,{Title:E.buttom,Classname:"box input backgroundscreen whitecolor des font-family-des  text-transform border-radiusscreen cursor opacity"})]})]})]})},A=function(){return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("h2",{className:"titlename font-family-title white text-transform ext-align ",children:"Our Trainers"}),(0,k.jsx)("h2",{className:"title font-family-title screencolor text-transform ext-align ",children:" Meet Our Expert Trainers"})]}),(0,k.jsx)("div",{className:"flexwrap flex justify-content",children:null==v?void 0:v.map((function(e,t){return(0,k.jsxs)("div",{className:"__Card whitebackground border-radiusscreen overflow margin-",children:[(0,k.jsx)(O,{image:e.image,width:"100%",height:"300px",alt:e.name}),(0,k.jsxs)("div",{className:"flex flex-column align-items padding",children:[(0,k.jsx)("h2",{className:"name font-family-title screencolor text-transform",children:e.name}),(0,k.jsx)("div",{className:"",children:(0,k.jsx)("p",{className:"des font-family-des  text-transform",children:e.des})})]})]},t)}))})]})},D=function(){return(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"padding",id:"home",children:(0,k.jsx)(q,{})}),(0,k.jsx)("div",{id:"subscribe",children:(0,k.jsx)(L,{})}),(0,k.jsx)("div",{className:"margin-top padding",id:"experience",children:(0,k.jsx)(T,{})}),(0,k.jsx)("div",{className:"padding",id:"trainers",children:(0,k.jsx)(A,{})}),(0,k.jsx)("div",{className:"padding",id:"blog",children:(0,k.jsx)(C,{})})]})};const I=require("@babel/runtime/helpers/defineProperty");var M=e.n(I);const z=require("@babel/runtime/helpers/slicedToArray");var B=e.n(z),F=function(){return(0,k.jsxs)("div",{className:"iconwidth",children:[(0,k.jsx)("div",{className:"heart margin-l"}),(0,k.jsx)("img",{src:p,className:"Svg"})]})};const G=require("react-icons/bi");var K=function(e){var t=e.AddStyle;return(0,k.jsxs)("ul",{className:t||"flex align-items justify-content Ex",children:[N.Listnavbar.map((function(e,t){return(0,k.jsx)("a",{href:e.link,className:"",children:(0,k.jsx)("li",{className:"name font-family font-family-title cursor white extra",children:e.name})},t)})),(0,k.jsx)("div",{className:"flex align-items justify-content Ex",children:(0,k.jsx)("div",{className:"_width margin-l",children:(0,k.jsx)(G.BiSearch,{className:"font-icon white"})})})]})};function R(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function U(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?R(Object(s),!0).forEach((function(t){M()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):R(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var Y=function(e){e.tilte;var t=(0,u.useState)({menubar:"menu-btn",hidden:"hidden"}),s=B()(t,2),a=s[0],i=s[1];return(0,k.jsxs)("nav",{className:"overflow flex align-items flexwrap ",children:[(0,k.jsxs)("div",{className:"box flex align-items padding",children:[(0,k.jsx)(F,{}),(0,k.jsx)("h1",{className:"title font-family font-family-title white",children:N.title}),(0,k.jsx)("div",{onClick:function(){"menu-btn"===a.menubar?i(U(U({},a),{},{menubar:"menu-btn open",hidden:"hidden open"})):i(U(U({},a),{},{menubar:"menu-btn",hidden:"hidden"}))},className:"icons___",children:(0,k.jsx)("div",{className:a.menubar,children:(0,k.jsx)("div",{className:"menu-btn__burger"})})})]}),(0,k.jsx)("div",{className:"box padding",children:(0,k.jsx)("div",{className:a.hidden,children:(0,k.jsx)(K,{})})})]})},H=function(){return(0,k.jsx)("footer",{className:"blackBackgroun",children:(0,k.jsxs)("div",{className:"flex justify-content flex-row  flexwrap align-items padding",children:[(0,k.jsx)("div",{className:"__Card",children:(0,k.jsx)("div",{className:"padding",children:(0,k.jsx)(F,{})})}),(0,k.jsx)("div",{className:"__Card",children:(0,k.jsx)(K,{AddStyle:"flex flex-column"})}),(0,k.jsxs)("div",{className:"__Card padding",children:[(0,k.jsx)("h2",{className:"title font-family-title screencolor text-transform",children:w.title}),(0,k.jsx)("div",{className:"__margin__top_bootom",children:(0,k.jsx)("p",{className:"white des font-family-des  text-transform",children:w.des})}),(0,k.jsxs)("div",{className:"flex flex-row align-items flexwrap content flex-row",children:[(0,k.jsx)(P,{placeholder:null==w?void 0:w.input,ClassName:"box input font-family-des  text-transform border-radiusscreen padding__left"}),(0,k.jsx)("div",{className:"margin-"}),(0,k.jsx)(S,{Title:w.buttom,Classname:"box input backgroundscreen whitecolor des font-family-des  text-transform border-radiusscreen cursor opacity"})]})]})]})})};const W=function(){return(0,k.jsxs)(u.Fragment,{children:[(0,k.jsx)(Y,{}),(0,k.jsx)(D,{}),(0,k.jsx)(H,{})]})};var J=n()(),Q=process.env.PORT||4e3;J.use([n().json(),c().urlencoded({extended:!0}),o()("dev"),f()({origin:"*",credentials:!0})]),J.use("/*",(function(e,t,s){t.header("Access-Control-Allow-Origin","*"),t.setHeader("Last-Modified",(new Date).toUTCString()),s()})),J.use(n().static("build")),J.get("/*",function(){var e=s()(i().mark((function e(t,s){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0,t=(0,x.renderToString)((0,k.jsx)(W,{})),a='<!DOCTYPE html>\n    <html lang="en-us" >\n    <head>\n    <title>Fitness</title>         \n    <meta property="og:description" content=" Här finns även tjejgym. Gymmet i Uppsala har, som alla våra andra gym, öppet dygnet runt för alla våra medlemmar, så att du kan träna när det passar dig." />\n    <meta property="og:image" content='.concat(h,'  />\n    <meta property="og:image:url"  content=').concat(h,'  />\n    <meta property="twitter:image" content=').concat(h,'  />\n    <link href="https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap" rel="stylesheet">\n    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">\n    <link rel="stylesheet" type="text/css" href="/css/main.css" />\n    <link rel="icon" type="image/x-icon" href=').concat(p,'>\n    <link rel="canonical" href="/" />\n   </head>\n\n    <body >\n     <div id="fitness">\n         ').concat(t,'\n      </div>\n      <script src="./client/bundle.js" defer ><\/script>\n    </body>\n  </html>\n    '),s.contentType("text/html"),s.send(a);case 3:case"end":return e.stop()}var t}),e)})));return function(t,s){return e.apply(this,arguments)}}()),J.listen(Q,(function(){return console.log("server is runing...".concat(Q))}))})();