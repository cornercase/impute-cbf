(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var l=t(4),r=t(5),n=t(2),s=t(8),i=t(7),c=t(1),o=t(0),u=t.n(o),N=t(6),m=t.n(N);t(15);var v=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).state={rica:"",lica:"",rva:"",lva:"",cbf:0,model:"1"},console.log("ran constructor"),r.calcCBF=r.calcCBF.bind(Object(n.a)(r)),r}return Object(r.a)(t,[{key:"calcCBF",value:function(e){e.preventDefault();var a=0,t=parseFloat(this.state.rica),l=parseFloat(this.state.lica),r=parseFloat(this.state.rva),n=parseFloat(this.state.lva);switch(this.state.model){case"0":a=t+l+r+n;break;case"1":if(isNaN(r)&&!isNaN(n)||!isNaN(r)&&isNaN(n))a=function(e,a,t,l){var r=isNaN(t)?l:t;console.log("kva = "+r);var n=1.2259*(e+a)+.9334*r;return console.log(n),{flow:n}}(t,l,r,n).flow;else alert("clear either RVA or LVA");break;case"2":if(console.log("rva = "+r),console.log("lva = "+n),isNaN(r)&&isNaN(n))a=function(e,a){return{flow:1.4236*(e+a)}}(t,l).flow;else alert("Both RVA and LVA must be empty for model 2");break;case"3":if(isNaN(t)&&!isNaN(l)||!isNaN(t)&&isNaN(l)){var s=r+n,i=0;isNaN(l)&&(i=t),isNaN(t)&&(i=l),a=1.8662*i+1.1451*s}else alert("clear either RICA or LICA");break;case"4":if(isNaN(t)&&!isNaN(l)||!isNaN(t)&&isNaN(l))if(isNaN(r)&&!isNaN(n)||!isNaN(r)&&isNaN(n)){var c=isNaN(r)?n:r;a=2.4194*(isNaN(t)?l:t)+.9825*c}else alert("clear either RVA or LVA");else alert("clear either RICA or LICA");break;case"5":var o=0;isNaN(t)&&!isNaN(l)||!isNaN(t)&&isNaN(l)?(isNaN(r)||isNaN(n)?o=isNaN(t)?l:t:alert("clear  both RVA and LVA"),a=2.8414*o):alert("clear either RICA or LICA");break;case"6":if(isNaN(t)||isNaN(l))a=3.2193*(r+n);else alert("clear both RICA and LICA");break;case"7":if(isNaN(t)||isNaN(l))if(isNaN(r)&&!isNaN(n)||!isNaN(r)&&isNaN(n)){a=5.8164*(isNaN(r)?n:r)}else alert("clear either RVA or LVA");else alert("clear both RICA and LICA");break;case"8":isNaN(t)||isNaN(l)||isNaN(r)||isNaN(n)?a=933.6563:alert("clear ALL vessel flow values");break;default:alert("model "+this.state.model+" not implemented")}this.setState({cbf:a})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("h1",null,"CBF Imputation"),u.a.createElement("form",null,u.a.createElement("label",null,"        Model:        ",u.a.createElement("select",{name:"model",value:this.state.model,onChange:function(a){return e.setState(Object(c.a)({},a.target.name,a.target.value))}},u.a.createElement("option",{value:"0"},"0 - Sum 4 Vessels"),u.a.createElement("option",{value:"1"},"1 - Impute from 2 ICAs and 1 VA"),u.a.createElement("option",{value:"2"},"2 - Impute from 2 ICAs"),u.a.createElement("option",{value:"3"},"3 - Impute from 1 ICA and 2 VAs"),u.a.createElement("option",{value:"4"},"4 - Impute from 1 ICA and 1 VA"),u.a.createElement("option",{value:"5"},"5 - Impute from 1 ICA"),u.a.createElement("option",{value:"6"},"6 - Impute from 2 VAs"),u.a.createElement("option",{value:"7"},"7 - Impute from 1 VA"),u.a.createElement("option",{value:"8"},"8 - All corrupted vessels - population mean flow"))),u.a.createElement("br",null),u.a.createElement("label",null,"RICA:"," ",u.a.createElement("input",{type:"number",value:this.state.rica,name:"rica",onChange:function(a){return e.setState(Object(c.a)({},a.target.name,a.target.value))}}),"        "),u.a.createElement("br",null),u.a.createElement("label",null,"LICA:"," ",u.a.createElement("input",{type:"number",value:this.state.lica,name:"lica",onChange:function(a){return e.setState(Object(c.a)({},a.target.name,a.target.value))}}),"        "),u.a.createElement("br",null),u.a.createElement("label",null,"RVA:"," ",u.a.createElement("input",{type:"number",value:this.state.rva,name:"rva",onChange:function(a){return e.setState(Object(c.a)({},a.target.name,a.target.value))}}),"        "),u.a.createElement("br",null),u.a.createElement("label",null,"LVA:"," ",u.a.createElement("input",{type:"number",value:this.state.lva,name:"lva",onChange:function(a){return e.setState(Object(c.a)({},a.target.name,a.target.value))}}),"        "),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("button",{onClick:function(a){e.calcCBF(a)}},"Compute")," ",u.a.createElement("button",null,"Clear")),u.a.createElement("h5",null,"Total CBF: ",this.state.cbf))}}]),t}(u.a.Component);m.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(v,null)),document.getElementById("root"))},15:function(e,a,t){},9:function(e,a,t){e.exports=t(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.33b73ad8.chunk.js.map