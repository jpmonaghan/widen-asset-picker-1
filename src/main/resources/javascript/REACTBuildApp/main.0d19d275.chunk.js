(this["webpackJsonpwiden-picker"]=this["webpackJsonpwiden-picker"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/loader_4.a6ec563b.gif"},27:function(e,t,a){e.exports=a(59)},32:function(e,t,a){},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(0),c=a.n(r),o=a(22),i=a.n(o),s=(a(32),a(6)),u=a(9),l=a.n(u),d=a(12),f=a(7),m=a(23),h=a.n(m),p=(a(34),a(24)),v=a.n(p),g=a(61),b=a(62),w=a(63),E=a(66),j=a(65),y=a(64),O=a(25),x=a.n(O),k=(a(53),v.a.create({baseURL:"https://api.widencollective.com/v2",headers:{Authorization:"Bearer virbac/ba4d0a71907a17aff9ebddc1fc91fd3a"},responseType:"json",timeout:2500})),S=function(e){var t=c.a.useState(),a=Object(f.a)(t,2),n=a[0],r=a[1],o=c.a.useState([]),i=Object(f.a)(o,2),u=i[0],m=i[1],p=c.a.useState(),v=Object(f.a)(p,2),O=v[0],S=v[1],A=c.a.useState({url:"/integrations/url",params:{hideSearchBar:!0,query:n}}),_=Object(f.a)(A,2),B=_[0],q=_[1],C=c.a.useState(!1),W=Object(f.a)(C,2),I=W[0],J=W[1],L=c.a.useState(!1),P=Object(f.a)(L,2),z=P[0],D=P[1];c.a.useEffect((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/categories");case 2:t=e.sent,console.log("categories : ",t),m(x()(t,"data.items",[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.useEffect((function(){B.params.query&&function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!1),D(!1),J(!0),e.prev=3,e.next=6,k.get(B.url,{params:B.params});case 6:t=e.sent,console.log("instantSearch : ",t.data),S(t.data.url),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),D(!0);case 14:J(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}()()}),[B]),window.addEventListener("message",(function(e){}));return c.a.createElement(g.a,{fluid:!0},c.a.createElement(b.a,null,c.a.createElement(w.a,null,c.a.createElement("ul",null,u.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("a",{href:"#",onClick:function(t){return function(e,t){console.log("handleCategory category : ",t),e.preventDefault();var a=Object(s.a)(Object(s.a)({},B.params),{},{assetcategory:t.id});q(Object(s.a)(Object(s.a)({},B),{},{params:a}))}(t,e)}},e.name))})))),c.a.createElement(w.a,{xs:10},z&&c.a.createElement("div",null,"Something went wrong ..."),c.a.createElement(E.a,{className:"mb-3"},c.a.createElement(j.a,{placeholder:"Search text",onChange:function(e){var t=e.target.value;console.log("value : ",t),r(t)}}),c.a.createElement(E.a.Append,null,c.a.createElement(y.a,{variant:"outline-secondary",onClick:function(){console.log("handleSearch query : ",n);var e=Object(s.a)(Object(s.a)({},B.params),{},{query:n});q(Object(s.a)(Object(s.a)({},B),{},{params:e}))}},"Search"))),I&&c.a.createElement("img",{src:h.a}),O&&c.a.createElement("iframe",{frameBorder:"0",src:O,width:"100%",height:"700px"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A={_context:{},_data:[],get context(){return this._context},get data(){return this._data},set context(e){this._context=e},set data(e){this._data=e},load:function(e){console.log(e.d),void 0!==e.d&&Array.isArray(e.d)&&(A.data=Array.from(e.d))},add:function(e,t){return this.data=[].concat(Object(n.a)(this.data),[e]),this.data},remove:function(e){this.data=this.data.filter((function(t){return!t.endsWith(e)}))},removeAt:function(e){return-1!==e?(this.data=this.data.splice(e,1),this.data):null},removeAll:function(){A.data=[]}};window.widenPicker=function(e,t){i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById(e))},window.widenPickerInterface=A,"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.0d19d275.chunk.js.map