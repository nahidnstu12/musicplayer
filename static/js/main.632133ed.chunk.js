(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{105:function(e,t,a){e.exports=a(167)},110:function(e,t,a){},111:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),l=(a(110),a(111),a(101)),o=a(214),u=a(52),s=a(12),m=Object(n.createContext)(),d={id:"Ys7-6_t7OEQ",title:"Justin Bieber - Beauty And A Beat ft. Nicki Minaj (Official Music Video)",channelTitle:"JustinBieberVEVO",maxThumbnail:"https://img.youtube.com/vi/Ys7-6_t7OEQ/maxresdefault.jpg",hqThumbnail:"https://img.youtube.com/vi/Ys7-6_t7OEQ/hqdefault.jpg"};var p=function(e){var t=Object(n.useState)("home"),a=Object(s.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(null),o=Object(s.a)(l,2),u=o[0],p=o[1],h=Object(n.useState)({}),f=Object(s.a)(h,2),b=f[0],g=f[1],E=Object(n.useState)(!1),v=Object(s.a)(E,2),y=v[0],x=v[1];return Object(n.useEffect)((function(){g(d)}),[b]),r.a.createElement(m.Provider,{value:{searchState:i,setSearchState:c,searchResult:u,setSearchResult:p,currentVideoSnippet:b,setCurrentVideoSnippet:g,menuOpen:y,setMenuOpen:x}},e.children)},h=a(31),f=a(202),b=a(203),g=a(204),E=a(200),v=a(53),y=a(205),x=a(206),O=a(80),j=a.n(O),S=a(81),w=a.n(S),k=a(32),C=a.n(k),F=a(42),I=a(196),R=a(199),T=a(217),B=a(201),M=a(78),V=a.n(M),L=a(43),N=a.n(L),A=N.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3",params:{part:"snippet",videoCategoryId:"10",type:"video",key:"AIzaSyBCqukaH8emuZ33VWrD6LmaJI7TFClqutY"}});var H=function(){var e=Object(n.useContext)(m),t=e.searchState,a=e.setSearchResult,i=e.setSearchState,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],u=l[1],d=Object(n.useState)(null),p=Object(s.a)(d,2),h=p[0],f=p[1],b=Object(n.useState)(!0),g=Object(s.a)(b,2),v=g[0],y=g[1];Object(n.useEffect)((function(){h&&""!==h&&function(){var e=Object(F.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("/search",{params:{q:t}});case 2:n=e.sent,a(n.data.items),i("completed");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(h)}),[h,a,i]);var x=function(){switch(t){case"searching":return r.a.createElement(I.a,{style:{height:"100vh"},container:!0,justify:"center",alignItems:"center"},r.a.createElement(R.a,null));case"completed":y(!1)}};return r.a.createElement("div",null,r.a.createElement(E.a,{onClick:function(){return i("home")},color:"inherit","aria-label":"Menu"},r.a.createElement(V.a,null)),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),e.target.lastChild.lastChild.blur(),i("searching"),f(o)}(e)},style:{width:"100%"}},r.a.createElement(T.a,{fullWidth:!0,placeholder:"Search...",autoFocus:!0,style:{color:"#fff",paddingLeft:"16px"},value:o,onChange:function(e){u(e.target.value)},onClick:function(){i("clicked"),y(!0)}})),r.a.createElement(B.a,{style:{width:"100%",height:"100%",background:"#fff"},open:v,placement:"bottom",anchorEl:document.getElementById("navbar")},x))},P=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(h.a)({flexGrow:1,display:"none",textAlign:"center"},e.breakpoints.up("sm"),{display:"block"})}}));function W(e){var t=e.children,a=Object(b.a)();return r.a.createElement(g.a,{appear:!1,direction:"down",in:!a},t)}var Y=function(e){var t=P(),a=Object(n.useContext)(m),i=a.searchState,c=a.setSearchState,l=a.setMenuOpen,o=function(){l(!0)};return r.a.createElement("div",{className:t.root},r.a.createElement(W,e,r.a.createElement(y.a,{position:"sticky",id:"navbar"},r.a.createElement(x.a,null,"home"===i?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:o},r.a.createElement(j.a,null)),r.a.createElement(v.a,{className:t.title,variant:"h6",noWrap:!0},"Ylight Music"),r.a.createElement(E.a,{color:"inherit","aria-level":"Search",onClick:function(){return c("clicked")}},r.a.createElement(w.a,null))):r.a.createElement(H,null)))))},q=a(207),z=a(82),J=a.n(z),D=a(50),Q=a.n(D),_={background:"url('".concat(J.a,"') no-repeat"),backgroundPositionX:"50%",marginTop:"50px",width:"100vw",height:"55vh"},G={fontFamily:"Vibur, cursive",fontSize:"24px",width:"100%",textAlign:"center",letterSpacing:0,marginTop:"40px"};var U=function(){var e={display:Object(n.useContext)(m).isSearchOpen?"none":"block"};return r.a.createElement("div",{style:e},r.a.createElement("div",{style:_}),r.a.createElement(I.a,{container:!0,justify:"center"},r.a.createElement(q.a,{variant:"outlined",color:"primary"},r.a.createElement("img",{src:Q.a,height:"25px",style:{marginRight:"px"},alt:"Home"}),"Sign In to Personalize")),r.a.createElement(v.a,{variant:"h5",color:"primary",style:{padding:"10px"}},"Listen to unilimited songs without any ads for free only on Ylight Music"),r.a.createElement(v.a,{variant:"body1",color:"primary",style:G},"HandCrafted by Nahid"))},X=a(219),$=a(208),Z=a(220),K=a(209),ee=a(210),te=a(211),ae=new(0,a(134).XmlEntities);var ne=function(e){var t,a=e.videos,i=Object(n.useContext)(m),c=(i.currentVideoSnippet,i.setCurrentVideoSnippet);return t=a.map((function(e){e.snippet;return r.a.createElement("div",{key:e.id.videoId},r.a.createElement(X.a,{alignItems:"flex-start",button:!0,onClick:function(){return function(e){c({id:e.id.videoId,title:ae.decode(e.snippet.title),channelTitle:ae.decode(e.snippet.channelTitle),maxThumbnail:"https://img.youtube.com/vi/".concat(e.id.videoId,"/maxresdefault.jpg"),sdThumbnail:"https://img.youtube.com/vi/".concat(e.id.videoId,"/sddefault.jpg")})}(e)}},r.a.createElement($.a,null,r.a.createElement(Z.a,{style:{width:"60px",height:"60px"},alt:e.snippet.title,src:e.snippet.thumbnails.high.url})),r.a.createElement(K.a,{style:{marginLeft:"10px"},primary:e.snippet.title,secondary:r.a.createElement(v.a,{component:"span",variant:"body2",color:"textPrimary"},e.snippet.channelTitle)})),r.a.createElement(ee.a,null))})),r.a.createElement(te.a,null,t)},re=a(83),ie=a.n(re),ce=a(5),le=a(216),oe=a(212),ue=a(84),se=a.n(ue),me=a(85),de=a.n(me),pe=a(86),he=a.n(pe),fe=Object(ce.a)({root:{background:"#e91e663",position:"fixed",bottom:"0",width:"100%",zIndex:"1300"},indicator:{display:"none"}})(le.a),be=Object(ce.a)({root:{color:"#FFB2C1","&:hover":{color:"#ffffffed",opacity:1},"&$selected":{color:"#fff"},"&:focus":{color:"#FFFFFF"}},selected:{}})(oe.a);var ge=function(){var e=Object(n.useContext)(m),t=e.searchState,a=e.searchResult,i=Object(n.useState)(0),c=Object(s.a)(i,2),l=c[0],o=c[1];return r.a.createElement("div",null,function(){if("completed"===t)return r.a.createElement(ne,{videos:a})}(),r.a.createElement(ie.a,{index:l,onChangeIndex:function(e){o(e)}},r.a.createElement("div",null,r.a.createElement(U,null)),r.a.createElement("div",null,"This is not your home"),r.a.createElement("div",null,"History")),r.a.createElement(fe,{value:l,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},r.a.createElement(be,{icon:r.a.createElement(se.a,null),"aria-label":"Home"}),r.a.createElement(be,{icon:r.a.createElement(de.a,null),"aria-label":"Favorite"}),r.a.createElement(be,{icon:r.a.createElement(he.a,null),"aria-label":"History"})))};a(87),a(155),a(54),a(92),a(90),a(91);a(93);a(94);a(95);var Ee=a(218);Object(ce.a)({root:{height:6},thumb:{height:16,width:16,marginTop:-5.3,marginLeft:-8,"&::before":{content:"''",height:"inherit",width:"inherit",position:"absolute",transform:"scale(1.6)",borderRadius:"50px",border:"1px solid"}},track:{height:6,borderRadius:4},rail:{height:6,borderRadius:4}})(Ee.a),Object(ce.a)({root:{height:4,position:"relative",bottom:"-6px",color:"#FFFDFD",padding:0},thumb:{display:"none"},track:{height:4,borderRadius:0},rail:{height:4,borderRadius:0}})(Ee.a);a(96),a(97);N.a.create({baseURL:"http://localhost:8800"});var ve=a(215),ye=a(213),xe=a(98),Oe=a.n(xe),je=a(99),Se=a.n(je),we=a(100),ke=a.n(we);var Ce=function(){var e=Object(n.useContext)(m),t=e.menuOpen,a=e.setMenuOpen;return r.a.createElement(ve.a,{open:t,onClose:function(){return a(!1)},onOpen:function(){return a(!0)}},r.a.createElement("div",{style:{width:"300px"}},r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement(Z.a,{style:{largeAvatar:{width:"50px",height:"50px",margin:"25px 0",background:"#e91e63"}}},r.a.createElement(Oe.a,{fontSize:"large"}),r.a.createElement(q.a,{variant:"outlined",color:"primary"},r.a.createElement("img",{src:Q.a,height:"25px",alt:"test sign"}),"Sign In"))),r.a.createElement(ee.a,null),r.a.createElement(te.a,{component:"nav",className:"pinkLists"},r.a.createElement(X.a,{button:!0},r.a.createElement(ye.a,null,r.a.createElement(Se.a,null)),r.a.createElement(K.a,{primary:"Feedback"})),r.a.createElement(X.a,{button:!0},r.a.createElement(ye.a,null,r.a.createElement(ke.a,null)),r.a.createElement(K.a,{primary:"Privacy & Policy"})))))};var Fe=function(){var e=Object(l.a)({palette:{primary:u.a},typography:{useNextVariants:!0}});return r.a.createElement(p,null,r.a.createElement(o.a,{theme:e},r.a.createElement(Y,null),r.a.createElement(ge,null),r.a.createElement(Ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){e.exports=a.p+"static/media/google.8fb2bc7a.svg"},82:function(e,t,a){e.exports=a.p+"static/media/music-bg.2a54ea04.svg"},95:function(e,t,a){e.exports=a.p+"static/media/dottedCircle.c96ca893.svg"}},[[105,1,2]]]);
//# sourceMappingURL=main.632133ed.chunk.js.map