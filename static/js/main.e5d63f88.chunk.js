(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,a){e.exports=a(435)},370:function(e,t,a){},372:function(e,t,a){},394:function(e,t,a){},406:function(e,t,a){},412:function(e,t,a){},413:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},433:function(e,t,a){},434:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(30),s=a.n(c),r=a(6),i=a(7),o=a(9),m=a(8),u=a(10),h=a(181),d=a.n(h),p=(a(369),a(370),a(22)),E=a.n(p),b=a(31),f=a(80),v=a.n(f),N=(a(372),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={completed:0,windowHeight:0,domHeight:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setHeights(),window.addEventListener("scroll",this.handleScroll.bind(this));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"setHeights",value:function(){this.setState({domHeight:v()("body").height(),windowHeight:v()(window).height()})}},{key:"handleScroll",value:function(){var e=v()("body").scrollTop(),t=Math.round(e/this.state.domHeight*100);t>98&&(t=100),this.setState({completed:t+"%"})}},{key:"render",value:function(){var e=this.state.completed;return l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",style:{width:e}}))}}]),t}(n.Component)),g=a(182),y=a.n(g),k=a(78),j=a.n(k),O=(a(394),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=!!document.documentMode,a=!t&&!!window.StyleMedia,(t||a)&&this.setState({open:!0});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[l.a.createElement(j.a,{label:"Close",primary:!0,onTouchTap:this.handleClose})];return l.a.createElement("div",{className:"browser-detect"},l.a.createElement(y.a,{title:"I hate your browser.",actions:e,modal:!0,open:this.state.open},"Internet Explorer and Edge are not supported. Same for Safari :)"))}}]),t}(n.Component)),w=a(79),S=a.n(w),C=a(183),I=a.n(C),x=(a(406),a(179)),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={height:e.height,scrollTo:e.height},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"updateDimensions",value:function(){this.setState({height:window.innerHeight+"px",scrollTo:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.addEventListener("resize",this.updateDimensions.bind(this)),this.updateDimensions();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"onScrollToIntro",value:function(){x(0,this.state.scrollTo,{ease:"out-bounce",duration:1500})}},{key:"render",value:function(){return l.a.createElement("div",{className:"header-wrapper",style:{height:this.state.height}},l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,l.a.createElement("b",null,"Mahesh ")),l.a.createElement("h6",null,l.a.createElement("b",null,"Software Developer"))),l.a.createElement("div",{className:"scroll-down-btn"},l.a.createElement(S.a,{mini:!0,backgroundColor:"#A80202",onClick:this.onScrollToIntro.bind(this)},l.a.createElement(I.a,null))))}}]),t}(n.Component),A=a(184),T=a.n(A),D=(a(412),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dark-voice"},l.a.createElement("p",{className:"text-center"},l.a.createElement("b",{className:"dark-voice-tag"},"<voice> "),l.a.createElement("br",null),"Ready for hard work and serious responsibilities. Teamwork, respect, honesty, professionalism and eagerness for success are necessary attributes for every job and I believe that I posses them.",l.a.createElement("br",null),l.a.createElement("b",{className:"dark-voice-tag"},"</voice>")),l.a.createElement("div",{className:"microphone-action"},l.a.createElement(S.a,{backgroundColor:"#A80202"},l.a.createElement(T.a,null))))}}]),t}(n.Component)),L=(a(413),a(185)),F=a.n(L),H=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"introduction"},l.a.createElement(F.a,{src:"avatar.jpg",size:150}),l.a.createElement("p",{className:"introduction-text"},"Hi, My name is Mahesh. I mainly write code for web applictions and Mobile apps."))}}]),t}(n.Component),U=a(54),J=a.n(U),B=(a(415),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"programming"},l.a.createElement("p",{className:"headline"}," Programming skills"),l.a.createElement("div",{className:"programming-console"},l.a.createElement(J.a,{zDepth:3,style:{width:"100%",display:"inline-block",background:"#263238"}},l.a.createElement("div",{className:"console-header"},l.a.createElement("div",{className:"console-buttons"},l.a.createElement("div",{className:"console-button btn-1"}),l.a.createElement("div",{className:"console-button btn-2"}),l.a.createElement("div",{className:"console-button btn-3"}))),l.a.createElement("div",{className:"console-content"},l.a.createElement("ul",null,l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"html"),">"),l.a.createElement("li",null,l.a.createElement("ul",{className:"no-top-padding"},l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"head"),"> </",l.a.createElement("span",{className:"html-1"},"head"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"body"),">"),l.a.createElement("li",null,l.a.createElement("ul",{className:"no-top-padding"},l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"ul"),">"),l.a.createElement("ul",{className:"no-top-padding"},l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"React JS"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"JavaScript"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"ES-6"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Redux"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Angular"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"TypeScript"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Mongo DB"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Express JS"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Node JS"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Material UI"),"</",l.a.createElement("span",{className:"html-1"},"li"),">")),l.a.createElement("li",null,"</",l.a.createElement("span",{className:"html-1"},"ul"),">"))),l.a.createElement("li",null,"</",l.a.createElement("span",{className:"html-1"},"body"),">"))),l.a.createElement("li",null,"</",l.a.createElement("span",{className:"html-1"},"html"),">"))))))}}]),t}(n.Component)),q=(a(416),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"agile-quote"},l.a.createElement("p",{className:"quote"},l.a.createElement("span",{className:"quote-marks"},"\u201c"),l.a.createElement("span",{className:"quote-content"},"I have looked in the mirror every morning and asked myself: \u2018If today were the last day of my life, would I want to do what I am about to do today?\u2019 And whenever the answer has been \u2018No\u2019 for too many days in a row, I know I need to change something."),l.a.createElement("span",{className:"quote-author"})))}}]),t}(n.Component)),P=(a(417),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"agile"},l.a.createElement("p",{className:"headline"},l.a.createElement("p",{className:"text-justify"},"I am a developer, so I know how to create your website to run across devices using the latest technologies available.")))}}]),t}(n.Component)),z=a(55),R=a.n(z),Y=a(56),W=a.n(Y),G=a(57),_=a.n(G),K=(a(422),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"design"},l.a.createElement("p",{className:"headline"},"I love to work as."),l.a.createElement("p",{className:"text-justify"}),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(R.a,{checkedIcon:l.a.createElement(W.a,null),uncheckedIcon:l.a.createElement(_.a,null),iconStyle:{fill:"#A80202"},label:"UI-Developer"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(R.a,{checkedIcon:l.a.createElement(W.a,null),uncheckedIcon:l.a.createElement(_.a,null),iconStyle:{fill:"#A80202"},label:"MERN stack developer"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(R.a,{checkedIcon:l.a.createElement(W.a,null),uncheckedIcon:l.a.createElement(_.a,null),iconStyle:{fill:"#A80202"},label:"MEAN stack developer"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(R.a,{checkedIcon:l.a.createElement(W.a,null),uncheckedIcon:l.a.createElement(_.a,null),iconStyle:{fill:"#A80202"},label:"Full-stack Develepor"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(R.a,{checkedIcon:l.a.createElement(W.a,null),uncheckedIcon:l.a.createElement(_.a,null),iconStyle:{fill:"#A80202"},label:"Front-end engineer"})))}}]),t}(n.Component)),Q=(a(423),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"code-github"})}}]),t}(n.Component)),V=a(186),X=a(81),Z=a.n(X),$=a(187),ee=a.n($),te=a(188),ae=a.n(te),ne=a(189),le=a.n(ne),ce=(a(433),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:"",message:"",email:"",errorMessage:null,successMessage:null,messageAlreadySent:!1,loading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){}},{key:"validateString",value:function(e){return!(!e||e<1)}},{key:"validateForm",value:function(){if(!this.validateString(this.state.name))throw new Error("Please enter your name.");if(!ae()(this.state.email))throw new Error("Please enter a valid e-mail address.");if(!this.validateString(this.state.message))throw new Error("Please enter a message.")}},{key:"onSubmit",value:function(){var e=Object(b.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({successMessage:null}),this.setState({errorMessage:null}),this.displayLoadingBar(),e.prev=3,!this.state.messageAlreadySent){e.next=6;break}throw new Error("Your message has been already sent.");case 6:return this.validateForm(),e.next=9,this.submitData();case 9:this.setState({successMessage:"Your message has been sent."}),this.setState({messageAlreadySent:!0}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),this.setState({errorMessage:e.t0.toString()}),this.setState({successMessage:null});case 17:this.displayLoadingBar(!1);case 18:case"end":return e.stop()}},e,this,[[3,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"submitData",value:function(){return fetch("",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,email:this.state.email,message:this.state.message})}).then(function(e){return console.dir(e)}).catch(function(e){return console.dir(e)})}},{key:"onUpdateField",value:function(e,t){this.setState(Object(V.a)({},e,t.target.value))}},{key:"displayLoadingBar",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({loading:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"contact"},l.a.createElement("p",{className:"headline"},"Contact"),l.a.createElement("p",null,"Are you nosy? Then write me a message:"),l.a.createElement(Z.a,{hintText:"Name",floatingLabelText:"Name",style:{width:"100%"},floatingLabelFocusStyle:{color:"#A80202"},underlineFocusStyle:{borderColor:"#A80202"},onChange:function(t){return e.onUpdateField("name",t)}}),l.a.createElement(Z.a,{hintText:"E-mail",floatingLabelText:"E-mail",type:"email",style:{width:"100%"},floatingLabelFocusStyle:{color:"#A80202"},underlineFocusStyle:{borderColor:"#A80202"},onChange:function(t){return e.onUpdateField("email",t)}}),l.a.createElement(Z.a,{hintText:"Your message",floatingLabelText:"Your message",style:{width:"100%"},multiLine:!0,rows:2,floatingLabelFocusStyle:{color:"#A80202"},underlineFocusStyle:{borderColor:"#A80202"},onChange:function(t){return e.onUpdateField("message",t)}})," ",null!=this.state.errorMessage&&l.a.createElement("p",{className:"error-message message"},this.state.errorMessage),null!=this.state.successMessage&&l.a.createElement("p",{className:"success-message message"},this.state.successMessage),this.state.loading&&l.a.createElement(le.a,{mode:"indeterminate",color:"#A80202"}),l.a.createElement("div",{className:"contact-btn"},l.a.createElement(ee.a,{label:"Send message",onClick:this.onSubmit.bind(this),backgroundColor:"#A80202",labelColor:"#ffffff"})))}}]),t}(n.Component)),se=(a(434),a(179)),re=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onScrollToTop",value:function(){se(0,0,{ease:"out-bounce",duration:2e3})}},{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"link-list"},l.a.createElement("a",{target:"_blank",href:"https://github.com/maheshdeploy"},"Github"),"/",l.a.createElement("a",{href:"#"},"LinkedIn")),l.a.createElement(j.a,{labelStyle:{color:"rgba(0, 0, 0, 0.65)"},label:"Back to top",onClick:this.onScrollToTop}))}}]),t}(n.Component),ie=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(O,null),l.a.createElement(N,null),l.a.createElement("div",{className:"section header-section"},l.a.createElement("div",{className:"section-container header-component"},l.a.createElement(M,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container"},l.a.createElement(H,null))),l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:""},l.a.createElement(Q,null))),l.a.createElement("div",{className:"section dark"},l.a.createElement("div",{className:"section-container"},l.a.createElement(D,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container"},l.a.createElement(B,null))),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"section-container"},l.a.createElement(K,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container"},l.a.createElement(P,null))),l.a.createElement("div",{className:"section dark"},l.a.createElement("div",{className:"section-container"},l.a.createElement(q,null))),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"section-container"},l.a.createElement(ce,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container footer-component"},l.a.createElement(re,null)))))}}]),t}(n.Component);s.a.render(l.a.createElement(ie,null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.e5d63f88.chunk.js.map