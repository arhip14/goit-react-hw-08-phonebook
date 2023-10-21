"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[450],{6450:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t,i,o,a,c,d,s,u,l,x,f,p,m,b,h,g,Z,j,v,k=r(168),P=r(2791),y=r(9434),w=r(8178),C=r(5861),N=r(7757),z=r.n(N),L=r(5705),_=r(6727),A=r(6916),q=function(n){return n.contacts.items},D=function(n){return n.contacts.items},E=function(n){return n.filter},F=(0,A.P1)([q,E],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),I=((0,A.P1)([q,function(n,e){return e.id}],(function(n,e){return n.find((function(n){return n.id===e}))})),r(5867)),S=r(184),B=I.ZP.div(t||(t=(0,k.Z)(["\n  background-color: #4169E1; /* Royal blue */\n  color: #FFDAB9; /* Peach */\n  padding: 40px;\n  border-radius: 20px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n  text-align: center;\n"]))),R=I.ZP.h1(i||(i=(0,k.Z)(["\n  font-size: 2.5rem;\n  margin-bottom: 20px;\n"]))),Y=I.ZP.div(o||(o=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),$=I.ZP.div(a||(a=(0,k.Z)(["\n  margin: 10px 0;\n"]))),J=(0,I.ZP)(L.gN)(c||(c=(0,k.Z)(["\n  background-color: #f0f0f0; /* Light gray input background */\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 16px;\n  width: 100%;\n"]))),O=(0,I.ZP)(L.Bc)(d||(d=(0,k.Z)(["\n  color: red;\n"]))),Q=I.ZP.button(s||(s=(0,k.Z)(["\n  background-color: #ff5733; /* Orange */\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  font-size: 16px;\n"]))),T=_.Ry({name:_.Z_().matches(/^[A-Za-z\s]+$/,"Name is not valid").required("Name is required"),number:_.Z_().matches(/^\d+$/,"Number is not valid").required("Number is required")}),V=function(){var n=(0,y.I0)(),e=(0,y.v9)(D),r=function(){var r=(0,C.Z)(z().mark((function r(t,i){var o,a,c;return z().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=i.resetForm,a=t.name,c=t.number,!a||!c){r.next=18;break}if(!e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))){r.next=7;break}return alert("Contact with the same name already exists."),r.abrupt("return");case 7:return r.prev=7,r.next=10,n((0,w.ky)({name:a,number:c}));case 10:o(),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(7),alert("An error occurred while adding the contact.");case 16:r.next=19;break;case 18:alert("Enter a valid Name and Number.");case 19:case"end":return r.stop()}}),r,null,[[7,13]])})));return function(n,e){return r.apply(this,arguments)}}();return(0,S.jsxs)(B,{children:[(0,S.jsx)(R,{children:"Contact Editor"}),(0,S.jsx)(L.J9,{initialValues:{name:"",number:""},validationSchema:T,onSubmit:r,children:function(n){var e=n.isSubmitting;return(0,S.jsx)(Y,{children:(0,S.jsxs)(L.l0,{children:[(0,S.jsxs)($,{children:[(0,S.jsx)("label",{children:"Name"}),(0,S.jsx)(J,{type:"text",name:"name",placeholder:"Name"}),(0,S.jsx)(O,{name:"name"})]}),(0,S.jsxs)($,{children:[(0,S.jsx)("label",{children:"Number"}),(0,S.jsx)(J,{type:"text",name:"number",placeholder:"Number"}),(0,S.jsx)(O,{name:"number"})]}),(0,S.jsx)(Q,{type:"submit",disabled:e,children:e?"Adding...":"Add Contact"})]})})}})]})},X=I.ZP.ul(u||(u=(0,k.Z)(["\n  list-style-type: none;\n  padding: 0;\n  max-width: 400px;\n  margin: 0 auto;\n"]))),G=I.ZP.li(l||(l=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #333; /* \u0422\u0435\u043c\u043d\u0438\u0439 \u0441\u0456\u0440\u0438\u0439 \u0444\u043e\u043d */\n  color: #fff; /* \u0411\u0456\u043b\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 */\n  padding: 10px;\n  border: 1px solid #444; /* \u0422\u0435\u043c\u043d\u043e-\u0441\u0456\u0440\u0438\u0439 \u0431\u043e\u0440\u0434\u044e\u0440 */\n  border-radius: 5px;\n  margin-bottom: 10px;\n  transition: background-color 0.3s;\n  &:hover {\n    background: #444; /* \u0417\u043c\u0456\u043d\u044e\u0439\u0442\u0435 \u043a\u043e\u043b\u0456\u0440 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n  }\n"]))),H=I.ZP.div(x||(x=(0,k.Z)(["\n  flex: 1;\n"]))),K=I.ZP.p(f||(f=(0,k.Z)(["\n  font-weight: bold;\n  margin: 0;\n"]))),M=I.ZP.p(p||(p=(0,k.Z)(["\n  margin: 0;\n"]))),U=I.ZP.button(m||(m=(0,k.Z)(["\n  background-color: #ff5733;\n  color: #fff; /* \u0411\u0456\u043b\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 */\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  &:hover {\n    background: #ff4500; /* \u0417\u043c\u0456\u043d\u044e\u0439\u0442\u0435 \u043a\u043e\u043b\u0456\u0440 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043d\u0456 */\n  }\n"]))),W=function(){var n=(0,y.v9)(F),e=(0,y.I0)();return(0,S.jsx)(X,{children:n.map((function(n){var r=n.id,t=n.name,i=n.number;return(0,S.jsxs)(G,{children:[(0,S.jsxs)(H,{children:[(0,S.jsx)(K,{children:t}),(0,S.jsx)(M,{children:i})]}),(0,S.jsx)(U,{onClick:function(){return function(n){e((0,w.zY)(n))}(r)},children:"Delete"})]},r)}))})},nn=r(4808),en=I.ZP.div(b||(b=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  background-color: #f5f5f5; /* Light gray background */\n  border-radius: 8px;\n  padding: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n"]))),rn=I.ZP.label(h||(h=(0,k.Z)(["\n  margin-right: 10px;\n  color: #333; /* Dark gray text */\n  font-weight: bold;\n  font-size: 14px;\n"]))),tn=I.ZP.input(g||(g=(0,k.Z)(["\n  flex: 1;\n  border: none;\n  border-radius: 5px;\n  padding: 8px;\n  font-size: 16px;\n  color: #333; /* Dark gray text */\n"]))),on=I.ZP.span(Z||(Z=(0,k.Z)(["\n  font-size: 24px;\n  color: #007bff; /* Blue color */\n  cursor: pointer;\n"]))),an=function(){var n=(0,y.v9)(E),e=(0,y.I0)();return(0,S.jsxs)(en,{children:[(0,S.jsx)(rn,{children:"Filter by Name:"}),(0,S.jsx)(tn,{placeholder:"Search...",name:"filter",value:n,onChange:function(n){e((0,nn.p)(n.currentTarget.value))}}),n&&(0,S.jsx)(on,{onClick:function(){e((0,nn.p)(""))},children:"\u2715"})]})},cn=I.ZP.div(j||(j=(0,k.Z)(["\n  background: #28211c;\n  color: #c2bf98;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),dn=I.ZP.h1(v||(v=(0,k.Z)(["\n  font-size: 36px;\n  margin: 20px 0;\n"])));function sn(){var n=(0,y.I0)();return(0,P.useEffect)((function(){n((0,w.XQ)())}),[n]),(0,S.jsxs)(cn,{children:[(0,S.jsx)(dn,{children:"Your contacts"}),(0,S.jsx)(an,{}),(0,S.jsx)(V,{}),(0,S.jsx)(W,{})]})}}}]);
//# sourceMappingURL=450.a346deaf.chunk.js.map