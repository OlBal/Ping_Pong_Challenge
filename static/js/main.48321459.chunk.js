(this["webpackJsonpping-pong"]=this["webpackJsonpping-pong"]||[]).push([[0],{15:function(e,t,n){},30:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),s=n(18),i=n(14),u=n(3),o={players:[],pairs:[],roundWinners:[],round:0},d=function(e,t){for(var n=[],a=0;a<e.length;a+=t){var r=e.slice(a,a+t);n.push(r)}return n},m=function(e){for(var t,n,a=e.length;a;)n=Math.floor(Math.random()*a--),t=e[a],e[a]=e[n],e[n]=t;return e},b=function(e,t){var n=t.playerName;return Object(u.a)(Object(u.a)({},e),{},{players:[].concat(Object(i.a)(e.players),[n])})},h=function(e){return Object(u.a)(Object(u.a)({},e),{},{players:m(Object(i.a)(e.players))})},p=function(e){return Object(u.a)(Object(u.a)({},e),{},{pairs:d(Object(i.a)(e.players),2)})},f=function(e){return Object(u.a)(Object(u.a)({},e),{},{round:e.round+1})},E=function(e){return Object(u.a)(Object(u.a)({},e),{},{round:e.round+1})},O=function(e,t){var n=t.winningPlayers;return Object(u.a)(Object(u.a)({},e),{},{roundWinners:[].concat(Object(i.a)(e.roundWinners),[n])})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLAYER":return b(e,t);case"START":return f(p(h(e)));case"NEXT_ROUND":return E(O(e,t));case"CLEAR":return o;default:return e}},_=n(28),j=n.n(_),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.b,N=Object(s.c)(v,o,y(j()())),g=n(4),C=n(5),A=n(8),k=n(7),R=n(11),W=(Object(R.b)(),n(17)),S=n(2),P=(n(15),n(6)),w=function(e){return Object(u.a)({type:"NEXT_ROUND"},e)},x=n(9),T=function(e){Object(A.a)(n,e);var t=Object(k.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props.players;return r.a.createElement("ul",{className:"listGroup"},e.map((function(e,t){return r.a.createElement("div",{className:"list-item__edit"},r.a.createElement("li",{className:"list-item list-item--fade list-item--show",key:t},e))})))}}]),n}(a.Component),F=Object(P.b)((function(e){return{players:e.players}}))(T),D=function(e){var t=e.type,n=e.handleClick,a=e.buttonClass,l=e.label,c=e.disabled,s=e.value;return r.a.createElement("button",{label:l,onClick:n,type:t,className:a,disabled:c,value:s},l)},M=function(e){Object(A.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({playerName:e.target.value})},a.handleAddName=function(e){e.preventDefault(),a.setState({playerName:a.state.playerName}),a.props.handleAdd(a.state)},a.handleStart=function(){a.props.handleStart(a.state)},a.state={playerName:""},a.handleChange=a.handleChange.bind(Object(x.a)(a)),a.handleStart=a.handleStart.bind(Object(x.a)(a)),a.handleAddName=a.handleAddName.bind(Object(x.a)(a)),a}return Object(C.a)(n,[{key:"render",value:function(){var e=this.state.playerName,t=this.props,n=t.players,a=t.handleClear,l=8===n.length;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title__app title__app__settings"}," PING PONG"),r.a.createElement("div",{className:"textBlock"},r.a.createElement("p",{className:"playerForm"},"Enter Your Player's Names Here!",r.a.createElement("br",null),r.a.createElement("span",{className:"subtext"},"Make sure you enter 8 names for a tournament"))),r.a.createElement("form",{className:"form ",onSubmit:this.handleAddName},r.a.createElement("input",{required:!0,id:"playerForm",maxlength:"15",name:"playerForm",className:"form-control",type:"text",value:e,onChange:this.handleChange,disabled:l}),r.a.createElement(D,{buttonClass:"button button__form",label:"Add A Player",type:"submit",disabled:l})),r.a.createElement(W.b,{to:"/Tournament",className:"nav nav__settings grid-child1"},r.a.createElement(D,{buttonClass:"button grid-child1--colour ",label:"Start",handleClick:this.handleStart,disabled:8!==n.length})),r.a.createElement(D,{buttonClass:"button grid-child2",label:"Reset",handleClick:a}),r.a.createElement("article",{className:"player-list"},r.a.createElement("h1",{className:"title__app title__app__settings"},"Players"),r.a.createElement(F,null)),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"circle--red"}))}}]),n}(a.Component),L=Object(P.b)((function(e){return{players:e.players,pairs:e.pairs}}),(function(e){return{handleAdd:function(t){return e(function(e){return Object(u.a)({type:"ADD_PLAYER"},e)}(t))},handleClear:function(t){return e({type:"CLEAR"})},handleStart:function(t){return e(function(e){return Object(u.a)({type:"START"},e)}(t))}}}))(M),X=function(e){Object(A.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handleAddWinners=function(e){var t=e.target.value;a.setState({winningPlayers:[].concat(Object(i.a)(a.state.winningPlayers),[t])})},a.handleRound=function(){a.props.handleNextRound(a.state)},a.state={winningPlayers:[]},a.handleAddWinners=a.handleAddWinners.bind(Object(x.a)(a)),a.handleRound=a.handleRound.bind(Object(x.a)(a)),a}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.roundWinners,a=t.round,l=this.state.winningPlayers;return r.a.createElement(r.a.Fragment,null,n.map((function(t,n){return r.a.createElement("div",{className:"pairs container__roster__list",key:n},t.map((function(t,n){return r.a.createElement(D,{key:n,handleClick:function(t){return e.handleAddWinners(t,"value")},label:t,buttonClass:"button player",value:t})})))})),r.a.createElement(D,{buttonClass:"button ".concat(2!==a?"button__notActive":null),label:"Next Round",handleClick:this.handleRound,disabled:2!==l.length}))}}]),n}(a.Component),G=Object(P.b)((function(e){return{roundWinners:e.roundWinners,round:e.round}}),(function(e){return{handleNextRound:function(t){return e(w(t))}}}))(X),I=function(e){Object(A.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handleAddWinners=function(e){var t=e.target.value;a.setState({champion:t}),console.log(t)},a.state={champion:[]},a.handleAddWinners=a.handleAddWinners.bind(Object(x.a)(a)),a}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.roundWinners,a=t.round,l=this.state.champion;return r.a.createElement(r.a.Fragment,null,n.map((function(t,n){return r.a.createElement("div",{className:"pairs container__roster__list",key:n},t.map((function(t,n){return r.a.createElement(D,{key:n,handleClick:function(t){return e.handleAddWinners(t,"value")},label:t,buttonClass:"button player",value:t})})))})),r.a.createElement(D,{buttonClass:"button  ".concat(3!==a?"button__notActive":null),label:"Next Round",handleClick:this.handleRound,disabled:1!==l.length}))}}]),n}(a.Component),U=Object(P.b)((function(e){return{roundWinners:e.roundWinners,round:e.round}}))(I),Y=function(e){Object(A.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handleAddWinners=function(e){var t=e.target.value;a.setState({selected:!a.state.selected,winningPlayers:[].concat(Object(i.a)(a.state.winningPlayers),[t])})},a.handleRound=function(){a.props.handleNextRound(a.state)},a.state={winningPlayers:[],selected:!1},a.handleAddWinners=a.handleAddWinners.bind(Object(x.a)(a)),a.handleRound=a.handleRound.bind(Object(x.a)(a)),a}return Object(C.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.pairs,a=t.round,l=this.state,c=l.winningPlayers;l.selected;return r.a.createElement(r.a.Fragment,null,n.map((function(t,n){return r.a.createElement("div",{className:"pairs container__roster__list",key:n},t.map((function(t,n){return r.a.createElement(D,{key:n,handleClick:function(t){return e.handleAddWinners(t,"value")},label:t,buttonClass:"button player",value:t})})))})),r.a.createElement(D,{buttonClass:"button\n          ".concat(1!==a?"button__notActive":null),label:"Next Round",handleClick:this.handleRound,disabled:4!==c.length}))}}]),n}(a.Component),B=Object(P.b)((function(e){return{pairs:e.pairs,round:e.round}}),(function(e){return{handleNextRound:function(t){return e(w(t))}}}))(Y),J=function(e){Object(A.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={selected:!1},a}return Object(C.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleClear,n=e.round;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{classname:"container__wrapper"},r.a.createElement("div",{className:"container__tournament"},r.a.createElement("h2",{className:" title__tournament"},1===n?"Quarter Finals":2===n?"Semi-Finals":3===n?"Final":"Welcome To The Tournament"),r.a.createElement("h3",{className:"title__match1"},"Match 1"),r.a.createElement("h3",{className:"title__match2 "},"Match 2"),r.a.createElement("h3",{className:"title__match3 "},"Match 3"),r.a.createElement("h3",{className:"title__match4 "},"Match 4"),r.a.createElement("section",{className:"container__roster round-one"},r.a.createElement(B,null)),r.a.createElement("section",{className:"container__roster semi-final"},r.a.createElement("h2",{className:"round__title"}),r.a.createElement(G,null)),r.a.createElement("section",{className:"container__roster final"},r.a.createElement(U,null)),r.a.createElement(W.b,{to:"/",className:"nav-link nav__tournament"},r.a.createElement(D,{buttonClass:"button settings",handleClick:t,label:"Reset"})))))}}]),n}(a.Component),q=Object(P.b)((function(e){return{pairs:e.pairs,round:e.round}}),(function(e){return{handleClear:function(t){return e({type:"CLEAR"})}}}))(J),H=function(e){Object(A.a)(n,e);var t=Object(k.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"render",value:function(){return r.a.createElement(W.a,{basename:"/"},r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/"},r.a.createElement(L,null)),r.a.createElement(S.a,{exact:!0,path:"/Tournament"},r.a.createElement(q,null),r.a.createElement("div",{className:"nav"}))))}}]),n}(a.Component);c.a.render(r.a.createElement(P.a,{store:N},r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.48321459.chunk.js.map