(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){e.exports=a(443)},377:function(e,t,a){},379:function(e,t,a){},401:function(e,t,a){},413:function(e,t,a){},420:function(e,t,a){},421:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},441:function(e,t,a){},442:function(e,t,a){},443:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(30),s=a.n(c),r=a(182),i=a.n(r),o=a(6),m=a(7),u=a(9),h=a(8),d=a(10),p=a(183),E=a.n(p),b=(a(376),a(377),a(22)),f=a.n(b),v=a(31),N=a(81),g=a.n(N),y=(a(379),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={completed:0,windowHeight:0,domHeight:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setHeights(),window.addEventListener("scroll",this.handleScroll.bind(this));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"setHeights",value:function(){this.setState({domHeight:g()("body").height(),windowHeight:g()(window).height()})}},{key:"handleScroll",value:function(){var e=g()("body").scrollTop(),t=Math.round(e/this.state.domHeight*100);t>98&&(t=100),this.setState({completed:t+"%"})}},{key:"render",value:function(){var e=this.state.completed;return l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",style:{width:e}}))}}]),t}(n.Component)),k=a(184),j=a.n(k),w=a(79),O=a.n(w),S=(a(401),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=!!document.documentMode,a=!t&&!!window.StyleMedia,(t||a)&&this.setState({open:!0});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[l.a.createElement(O.a,{label:"Close",primary:!0,onTouchTap:this.handleClose})];return l.a.createElement("div",{className:"browser-detect"},l.a.createElement(j.a,{title:"I hate your browser.",actions:e,modal:!0,open:this.state.open},"Internet Explorer and Edge are not supported. Same for Safari :)"))}}]),t}(n.Component)),C=a(80),I=a.n(C),x=a(185),M=a.n(x),A=(a(413),a(180)),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={height:e.height,scrollTo:e.height},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"updateDimensions",value:function(){this.setState({height:window.innerHeight+"px",scrollTo:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.addEventListener("resize",this.updateDimensions.bind(this)),this.updateDimensions();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"onScrollToIntro",value:function(){A(0,this.state.scrollTo,{ease:"out-bounce",duration:1500})}},{key:"render",value:function(){return l.a.createElement("div",{className:"header-wrapper",style:{height:this.state.height}},l.a.createElement("div",{className:"header"},l.a.createElement("h3",null,l.a.createElement("b",null,"Mahesh ")),l.a.createElement("h6",null,l.a.createElement("b",null,"Software Developer"))),l.a.createElement("div",{className:"scroll-down-btn"},l.a.createElement(I.a,{mini:!0,backgroundColor:"#A80202",onClick:this.onScrollToIntro.bind(this)},l.a.createElement(M.a,null))))}}]),t}(n.Component),D=a(186),L=a.n(D),F=(a(419),a(187)),H=(a(420),new F.Howl({src:[]}),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dark-voice"},l.a.createElement("p",{className:"text-center"},l.a.createElement("b",{className:"dark-voice-tag"},"<voice> "),l.a.createElement("br",null),"Ready for hard work and serious responsibilities. Teamwork, respect, honesty, professionalism and eagerness for success are necessary attributes for every job and I believe that I posses them.",l.a.createElement("br",null),l.a.createElement("b",{className:"dark-voice-tag"},"</voice>")),l.a.createElement("div",{className:"microphone-action"},l.a.createElement(I.a,{backgroundColor:"#A80202"},l.a.createElement(L.a,null))))}}]),t}(n.Component)),U=(a(421),a(188)),J=a.n(U),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"introduction"},l.a.createElement(J.a,{src:"avatar.jpg",size:150}),l.a.createElement("p",{className:"introduction-text"},"Hi, My name is Mahesh. I mainly write code for web applictions and Mobile apps."))}}]),t}(n.Component),q=a(57),P=a.n(q),z=(a(423),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"programming"},l.a.createElement("p",{className:"headline"}," Programming skills"),l.a.createElement("div",{className:"programming-console"},l.a.createElement(P.a,{zDepth:3,style:{width:"100%",display:"inline-block",background:"#263238"}},l.a.createElement("div",{className:"console-header"},l.a.createElement("div",{className:"console-buttons"},l.a.createElement("div",{className:"console-button btn-1"}),l.a.createElement("div",{className:"console-button btn-2"}),l.a.createElement("div",{className:"console-button btn-3"}))),l.a.createElement("div",{className:"console-content"},l.a.createElement("ul",null,l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"html"),">"),l.a.createElement("li",null,l.a.createElement("ul",{className:"no-top-padding"},l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"head"),"> </",l.a.createElement("span",{className:"html-1"},"head"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"body"),">"),l.a.createElement("li",null,l.a.createElement("ul",{className:"no-top-padding"},l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"ul"),">"),l.a.createElement("ul",{className:"no-top-padding"},l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"React JS"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"JavaScript"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"ES-6"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Redux"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Angular"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"TypeScript"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Mongo DB"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Express JS"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Node JS"),"</",l.a.createElement("span",{className:"html-1"},"li"),">"),l.a.createElement("li",null,"<",l.a.createElement("span",{className:"html-1"},"li"),">",l.a.createElement("span",{className:"html-2"},"Material UI"),"</",l.a.createElement("span",{className:"html-1"},"li"),">")),l.a.createElement("li",null,"</",l.a.createElement("span",{className:"html-1"},"ul"),">"))),l.a.createElement("li",null,"</",l.a.createElement("span",{className:"html-1"},"body"),">"))),l.a.createElement("li",null,"</",l.a.createElement("span",{className:"html-1"},"html"),">"))))))}}]),t}(n.Component)),R=(a(424),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"agile-quote"},l.a.createElement("p",{className:"quote"},l.a.createElement("span",{className:"quote-marks"},"\u201c"),l.a.createElement("span",{className:"quote-content"},"I have looked in the mirror every morning and asked myself: \u2018If today were the last day of my life, would I want to do what I am about to do today?\u2019 And whenever the answer has been \u2018No\u2019 for too many days in a row, I know I need to change something."),l.a.createElement("span",{className:"quote-author"})))}}]),t}(n.Component)),Y=(a(425),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"agile"},l.a.createElement("p",{className:"headline"},l.a.createElement("p",{className:"text-justify"},"I am a developer, so I know how to create your website to run across devices using the latest technologies available.")))}}]),t}(n.Component)),W=a(58),_=a.n(W),G=a(59),K=a.n(G),Q=a(60),V=a.n(Q),X=(a(430),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"design"},l.a.createElement("p",{className:"headline"},"I love to work as."),l.a.createElement("p",{className:"text-justify"}),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(_.a,{checkedIcon:l.a.createElement(K.a,null),uncheckedIcon:l.a.createElement(V.a,null),iconStyle:{fill:"#A80202"},label:"UI-Developer"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(_.a,{checkedIcon:l.a.createElement(K.a,null),uncheckedIcon:l.a.createElement(V.a,null),iconStyle:{fill:"#A80202"},label:"MERN stack developer"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(_.a,{checkedIcon:l.a.createElement(K.a,null),uncheckedIcon:l.a.createElement(V.a,null),iconStyle:{fill:"#A80202"},label:"MEAN stack developer"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(_.a,{checkedIcon:l.a.createElement(K.a,null),uncheckedIcon:l.a.createElement(V.a,null),iconStyle:{fill:"#A80202"},label:"Full-stack Develepor"})),l.a.createElement("div",{className:"design-checkbox"},l.a.createElement(_.a,{checkedIcon:l.a.createElement(K.a,null),uncheckedIcon:l.a.createElement(V.a,null),iconStyle:{fill:"#A80202"},label:"Front-end engineer"})))}}]),t}(n.Component)),Z=(a(431),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"code-github"})}}]),t}(n.Component)),$=a(189),ee=a(82),te=a.n(ee),ae=a(190),ne=a.n(ae),le=a(191),ce=a.n(le),se=a(192),re=a.n(se),ie=(a(441),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={name:"",message:"",email:"",errorMessage:null,successMessage:null,messageAlreadySent:!1,loading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){}},{key:"validateString",value:function(e){return!(!e||e<1)}},{key:"validateForm",value:function(){if(!this.validateString(this.state.name))throw new Error("Please enter your name.");if(!ce()(this.state.email))throw new Error("Please enter a valid e-mail address.");if(!this.validateString(this.state.message))throw new Error("Please enter a message.")}},{key:"onSubmit",value:function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({successMessage:null}),this.setState({errorMessage:null}),this.displayLoadingBar(),e.prev=3,!this.state.messageAlreadySent){e.next=6;break}throw new Error("Your message has been already sent.");case 6:return this.validateForm(),e.next=9,this.submitData();case 9:this.setState({successMessage:"Your message has been sent."}),this.setState({messageAlreadySent:!0}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),this.setState({errorMessage:e.t0.toString()}),this.setState({successMessage:null});case 17:this.displayLoadingBar(!1);case 18:case"end":return e.stop()}},e,this,[[3,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"submitData",value:function(){return fetch("",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,email:this.state.email,message:this.state.message})}).then(function(e){return console.dir(e)}).catch(function(e){return console.dir(e)})}},{key:"onUpdateField",value:function(e,t){this.setState(Object($.a)({},e,t.target.value))}},{key:"displayLoadingBar",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setState({loading:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"contact"},l.a.createElement("p",{className:"headline"},"Contact"),l.a.createElement("p",null,"Are you nosy? Then write me a message:"),l.a.createElement(te.a,{hintText:"Name",floatingLabelText:"Name",style:{width:"100%"},floatingLabelFocusStyle:{color:"#A80202"},underlineFocusStyle:{borderColor:"#A80202"},onChange:function(t){return e.onUpdateField("name",t)}}),l.a.createElement(te.a,{hintText:"E-mail",floatingLabelText:"E-mail",type:"email",style:{width:"100%"},floatingLabelFocusStyle:{color:"#A80202"},underlineFocusStyle:{borderColor:"#A80202"},onChange:function(t){return e.onUpdateField("email",t)}}),l.a.createElement(te.a,{hintText:"Your message",floatingLabelText:"Your message",style:{width:"100%"},multiLine:!0,rows:2,floatingLabelFocusStyle:{color:"#A80202"},underlineFocusStyle:{borderColor:"#A80202"},onChange:function(t){return e.onUpdateField("message",t)}})," ",null!=this.state.errorMessage&&l.a.createElement("p",{className:"error-message message"},this.state.errorMessage),null!=this.state.successMessage&&l.a.createElement("p",{className:"success-message message"},this.state.successMessage),this.state.loading&&l.a.createElement(re.a,{mode:"indeterminate",color:"#A80202"}),l.a.createElement("div",{className:"contact-btn"},l.a.createElement(ne.a,{label:"Send message",onClick:this.onSubmit.bind(this),backgroundColor:"#A80202",labelColor:"#ffffff"})))}}]),t}(n.Component)),oe=(a(442),a(180)),me=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onScrollToTop",value:function(){oe(0,0,{ease:"out-bounce",duration:2e3})}},{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"link-list"},l.a.createElement("a",{target:"_blank",href:"https://github.com/maheshdeploy"},"Github"),"/",l.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/mahesh-reedy-react"},"LinkedIn")),l.a.createElement(O.a,{labelStyle:{color:"rgba(0, 0, 0, 0.65)"},label:"Back to top",onClick:this.onScrollToTop}))}}]),t}(n.Component),ue=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(S,null),l.a.createElement(y,null),l.a.createElement("div",{className:"section header-section"},l.a.createElement("div",{className:"section-container header-component"},l.a.createElement(T,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container"},l.a.createElement(B,null))),l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:""},l.a.createElement(Z,null))),l.a.createElement("div",{className:"section dark"},l.a.createElement("div",{className:"section-container"},l.a.createElement(H,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container"},l.a.createElement(z,null))),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"section-container"},l.a.createElement(X,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container"},l.a.createElement(Y,null))),l.a.createElement("div",{className:"section dark"},l.a.createElement("div",{className:"section-container"},l.a.createElement(R,null))),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"section-container"},l.a.createElement(ie,null))),l.a.createElement("div",{className:"section colored"},l.a.createElement("div",{className:"section-container footer-component"},l.a.createElement(me,null)))))}}]),t}(n.Component);i()(),s.a.render(l.a.createElement(ue,null),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.11746067.chunk.js.map