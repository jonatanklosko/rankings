(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){e.exports=n(364)},163:function(e,t,n){},246:function(e,t,n){},356:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=(n(163),n(18)),l=n(19),s=n(21),u=n(20),m=n(22),d=n(23),p=n(154),h=n.n(p),f=n(17),g=n.n(f),v=n(49),b=n(152),E=n.n(b),w=n(153),k=n.n(w),y=n(142),j=n.n(y),O=n(144),C=n.n(O),x=n(26),P=n.n(x),S=n(28),R=n.n(S),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{position:"static",color:"primary"},r.a.createElement(C.a,null,r.a.createElement(P.a,{variant:"h6",color:"inherit",style:{flexGrow:1}},r.a.createElement(d.b,{to:"/"},"Rankings")),r.a.createElement(R.a,{component:"a",href:"https://github.com/jonatanklosko/rankings",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://png.icons8.com/ios-glyphs/32/ffffff/github.png",alt:"GitHub"}))))}}]),t}(a.Component),D=n(50),A=n.n(D),N=n(68),B=function(e){var t=new Date(null);return t.setMilliseconds(10*e),t.toISOString().substr(11,11).replace(/^[0:]*(?!\.)/g,"")},F=function(e){return new Promise(function(t,n){var a=new FileReader;a.onload=function(e){var n=e.target.result;t(n.match(/\d{4}[A-Za-z]{4}\d{2}/g)||[])},a.onerror=n,a.readAsText(e)})},U=function(e){var t,n=new URLSearchParams(e);return{wcaIds:n.get("wcaids")?(t=n.get("wcaids").split(","),Object(N.a)(new Set(t))):[],name:n.get("name")||""}},W=function(e){var t=e.name,n=e.wcaIds;return new URLSearchParams({name:t,wcaids:n.join(",")}).toString()},M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={redirectPath:null},n.importPeople=function(){n.fileInput.click()},n.handleFileChange=function(e){e.target.files.length>0&&F(e.target.files[0]).then(function(e){return n.setState({redirectPath:"/edit?"+W({name:"",wcaIds:e})})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.redirectPath;return t?r.a.createElement(d.c,{to:t}):r.a.createElement(g.a,{container:!0,spacing:24,justify:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement(P.a,{variant:"h4"},"What is it?")),r.a.createElement(g.a,{item:!0},r.a.createElement(P.a,{variant:"subtitle1"},r.a.createElement("a",{href:"https://www.worldcubeassociation.org/results/events.php",target:"_blank",rel:"noopener noreferrer"},"WCA"),"-like rankings created by you! Select a group of people and see how they are doing compared to each other.")),r.a.createElement(g.a,{item:!0},r.a.createElement(g.a,{container:!0,spacing:8},r.a.createElement(g.a,{item:!0},r.a.createElement(A.a,{variant:"outlined",component:d.b,to:"/edit"},"Go ahead and create one!")),r.a.createElement("input",{type:"file",style:{display:"none"},ref:function(t){return e.fileInput=t},onChange:this.handleFileChange}),r.a.createElement(g.a,{item:!0},r.a.createElement(A.a,{variant:"outlined",onClick:this.importPeople},"Import people from file")))))}}]),t}(a.Component),T=n(69),L=n(64),q=n.n(L),_=n(67),z=n.n(_),H=n(8),J=n.n(H),G=n(157),K=n(156),V=function(e){return Q("/search/users?persons_table=true&q=".concat(e)).then(function(e){return e.result})},Z=new Map,$=function(e){var t=J.a.partition(e,function(e){return Z.has(e)}),n=Object(K.a)(t,2),a=n[0],r=n[1],o=J.a.map(a,function(e){return Z.get(e)}),c=J.a.map(J.a.chunk(r,100),function(e){return Q("/persons?per_page=100&wca_ids=".concat(e.join(",")))});return Promise.all(c).then(J.a.flatten).then(function(e){return e.map(function(e){var t=e.personalRecords,n=Object(G.a)(e,["personalRecords"]);return Object(T.a)({},n,{personalRecords:J.a.mapKeys(t,function(e,t){return J.a.toLower(t)})})})}).then(function(e){return J.a.each(e,function(e){return Z.set(e.person.wcaId,e)}),e.concat(o)})},Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat("https://www.worldcubeassociation.org/api/v0").concat(e),t).then(function(e){return e.json()}).then(X)},X=function e(t){return J.a.isArray(t)?J.a.map(t,e):J.a.mapValues(J.a.mapKeys(t,function(e,t){return J.a.camelCase(t)}),function(t){return J.a.isObject(t)?e(t):t})},Y=n(90),ee=n.n(Y),te=n(91),ne=n.n(te),ae=n(146),re=n.n(ae),oe=n(66),ce=n.n(oe),ie=n(65),le=n.n(ie),se=n(40),ue=n.n(se),me=n(32),de=n.n(me),pe=n(145),he=n.n(pe),fe=n(155),ge=(n(246),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={peopleFound:[]},n.findPeople=function(e){e?V(e).then(function(e){return n.setState({peopleFound:e})}):n.setState({peopleFound:[]})},n.handleChange=function(e,t){var a=t.clearSelection,r=n.props,o=r.onChange,c=r.clearOnChange;e&&o(e),c&&a()},n.findPeopleDebounced=J.a.debounce(n.findPeople,300),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.fullWidth,a=t.label;return r.a.createElement(fe.a,{onChange:this.handleChange,itemToString:function(e){return J.a.get(e,"name","")},onInputValueChange:this.findPeopleDebounced},function(t){var o=t.getInputProps,c=t.getItemProps,i=t.isOpen,l=(t.inputValue,t.highlightedIndex);return r.a.createElement("div",{className:"wca-person-select"},r.a.createElement(q.a,o({fullWidth:n,label:a})),i&&r.a.createElement(de.a,{square:!0,className:"options-list"},e.state.peopleFound.map(function(e,t){return r.a.createElement(he.a,c({item:e,selected:l===t,key:e.id}),r.a.createElement(le.a,{src:e.avatar.thumbUrl}),r.a.createElement(ce.a,{primary:e.name,secondary:e.wcaId}))})))})}}]),t}(a.Component)),ve=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onPersonAdded",value:function(e){this.props.onChange(J.a.uniqBy(Object(N.a)(this.props.people).concat([e]),"wcaId"))}},{key:"onPersonRemoved",value:function(e){this.props.onChange(J.a.reject(this.props.people,{wcaId:e.wcaId}))}},{key:"render",value:function(){var e=this;return r.a.createElement(de.a,{elevation:1,style:{padding:8}},r.a.createElement(g.a,{container:!0,spacing:8},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(ge,{fullWidth:!0,label:"Add person",clearOnChange:!0,onChange:function(t){return e.onPersonAdded(t)}})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(ee.a,{dense:!0,style:{maxHeight:200,overflow:"auto"}},J.a.sortBy(this.props.people,"name").map(function(t){return r.a.createElement(ne.a,{key:t.wcaId},r.a.createElement(le.a,{src:t.avatar.thumbUrl}),r.a.createElement(ce.a,{primary:t.name}),r.a.createElement(re.a,null,r.a.createElement(R.a,{onClick:function(){return e.onPersonRemoved(t)}},r.a.createElement(ue.a,null,"delete"))))})))))}}]),t}(a.PureComponent),be=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.ranking,r=t.people;n.setState({redirectPath:"/show?"+W({name:a.name,wcaIds:J.a.map(r,"wcaId")})})},n.handleNameChange=function(e){var t=n.state.ranking;n.setState({ranking:Object(T.a)({},t,{name:e.target.value})})},n.handlePeopleChange=function(e){n.setState({people:e})},n.state={ranking:U(e.location.search),people:[],redirectPath:null,loading:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;$(this.state.ranking.wcaIds).then(function(t){return e.setState({loading:!1,people:J.a.map(t,"person")})})}},{key:"render",value:function(){var e=this.state,t=e.redirectPath,n=e.ranking,a=e.people,o=e.loading;return t?r.a.createElement(d.c,{to:t}):r.a.createElement("div",null,r.a.createElement(P.a,{variant:"h5"},"Edit ranking"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(g.a,{container:!0,direction:"column",spacing:16},r.a.createElement(g.a,{item:!0},r.a.createElement(q.a,{fullWidth:!0,label:"Ranking name",value:n.name,onChange:this.handleNameChange})),r.a.createElement(g.a,{item:!0},r.a.createElement(P.a,{variant:"subtitle2",style:{marginBottom:8}},"People"),o?r.a.createElement(z.a,null):r.a.createElement(ve,{people:a,onChange:this.handlePeopleChange})),r.a.createElement(g.a,{item:!0},r.a.createElement(A.a,{type:"submit",variant:"outlined"},"Done")))))}}]),t}(a.Component),Ee=n(41),we=n.n(Ee),ke=n(147),ye=n.n(ke),je=n(148),Oe=n.n(je),Ce=[{id:"333",name:"Rubik's Cube",icon:"event-333"},{id:"222",name:"2x2x2 Cube",icon:"event-222"},{id:"444",name:"4x4x4 Cube",icon:"event-444"},{id:"555",name:"5x5x5 Cube",icon:"event-555"},{id:"666",name:"6x6x6 Cube",icon:"event-666"},{id:"777",name:"7x7x7 Cube",icon:"event-777"},{id:"333bf",name:"3x3x3 Blindfolded",icon:"event-333bf"},{id:"333fm",name:"3x3x3 Fewest Moves",icon:"event-333fm"},{id:"333oh",name:"3x3x3 One-Handed",icon:"event-333oh"},{id:"333ft",name:"3x3x3 With Feet",icon:"event-333ft"},{id:"minx",name:"Megaminx",icon:"event-minx"},{id:"pyram",name:"Pyraminx",icon:"event-pyram"},{id:"clock",name:"Rubik's Clock",icon:"event-clock"},{id:"skewb",name:"Skewb",icon:"event-skewb"},{id:"sq1",name:"Square-1",icon:"event-sq1"},{id:"444bf",name:"4x4x4 Blindfolded",icon:"event-444bf"},{id:"555bf",name:"5x5x5 Blindfolded",icon:"event-555bf"},{id:"333mbf",name:"3x3x3 Multi-Blind",icon:"event-333mbf"}],xe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,Ce.map(function(t){return r.a.createElement(we.a,{title:t.name,placement:"top",key:t.id},r.a.createElement(R.a,{onClick:function(){return e.props.onChange(t)}},r.a.createElement("span",{className:"cubing-icon ".concat(t.icon),style:{opacity:t.id===e.props.value.id?1:.3}})))}))}}]),t}(a.Component),Pe=n(149),Se=n.n(Pe),Re=n(151),Ie=n.n(Re),De=n(29),Ae=n.n(De),Ne=n(150),Be=n.n(Ne),Fe=n(92),Ue=n.n(Fe),We=(n(356),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={format:"single"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setFormat",value:function(e){this.setState({format:e})}},{key:"formattedPersonalBest",value:function(e,t){var n=this.props.event,a=J.a.get(e,"personalRecords.".concat(n.id,".").concat(t,".best"));return a?function(e,t,n){if("333fm"!==t){if("333mbf"===t){var a=e%100,r=(e=Math.floor(e/100))%1e5,o=99-(e=Math.floor(e/1e5))%100+a,c=o+a,i=B(100*r).replace(/\.00$/,"");return"".concat(o,"/").concat(c," ").concat(i)}return B(e)}switch(n){case"single":return e;case"average":return(e/100).toFixed(2);default:throw new Error("Unrecognized format type: ".concat(n))}}(a,n.id,t):""}},{key:"peopleDataForEvent",value:function(){var e=this.props,t=e.event,n=e.peopleData,a=this.state.format;return J()(n).filter("personalRecords.".concat(t.id,".").concat(a)).orderBy(["personalRecords.".concat(t.id,".").concat(a,".localRank")]).value()}},{key:"render",value:function(){var e=this,t=this.state.format;return r.a.createElement("div",{className:"ranking-table-container"},r.a.createElement(Se.a,{className:"sort-by-".concat(t)},r.a.createElement(Be.a,{className:"ranking-table-head"},r.a.createElement(Ue.a,null,r.a.createElement(Ae.a,{padding:"dense"}),r.a.createElement(Ae.a,null,"Name"),r.a.createElement(Ae.a,{numeric:!0,className:"single",onClick:function(){return e.setFormat("single")}},"Single"),r.a.createElement(Ae.a,{numeric:!0,className:"average",onClick:function(){return e.setFormat("average")}},"Average"))),r.a.createElement(Ie.a,null,this.peopleDataForEvent().map(function(n){return r.a.createElement(Ue.a,{key:n.person.wcaId},r.a.createElement(Ae.a,{padding:"dense"},n.personalRecords[e.props.event.id][t].localRank),r.a.createElement(Ae.a,null,r.a.createElement("a",{href:n.person.url,target:"_blank",rel:"noopener noreferrer"},n.person.name)),r.a.createElement(Ae.a,{numeric:!0,className:"single"},e.formattedPersonalBest(n,"single")),r.a.createElement(Ae.a,{numeric:!0,className:"average"},e.formattedPersonalBest(n,"average")))}))))}}]),t}(a.Component)),Me=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleEventChange=function(e){n.setState({event:e})},n.copyUrl=function(){ye.a.writeText(n.state.shortUrl)},n.edit=function(){var e=n.state,t=e.ranking,a=e.peopleData;n.setState({redirectPath:"/edit?"+W({name:t.name,wcaIds:J.a.map(a,"person.wcaId")})})},n.downloadImage=function(){var e=n.state,t=e.event,a=e.ranking.name.toLowerCase().replace(/\s+/,"-"),r="rankings-".concat(a,"-").concat(t.id,".png");Oe()(n.imageArea,{logging:!1}).then(function(e){var t=document.createElement("a");t.download=r,t.href=e.toDataURL(),t.click()})},n.state={ranking:U(e.location.search),peopleData:[],event:Ce[0],shortUrl:window.location.href,redirectPath:null,loading:!0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;$(this.state.ranking.wcaIds).then(function(e){return t.setState({loading:!1,peopleData:t.withLocalRanks(e)})}),(e=window.location.href,fetch("https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCgOHkmUMcWKJ0tRlwEs-rzBZ1WA7sTZTI",{method:"POST",body:JSON.stringify({longUrl:e}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.error?Promise.reject(e.error):e.id})).then(function(e){return t.setState({shortUrl:e})})}},{key:"withLocalRanks",value:function(e){return J.a.each(Ce,function(t){J.a.each(["single","average"],function(n){var a=J.a.filter(e,"personalRecords.".concat(t.id,".").concat(n)),r=J.a.sortBy(J.a.map(a,"personalRecords.".concat(t.id,".").concat(n,".worldRank")));J.a.each(a,function(e){var a=e.personalRecords[t.id][n];a.localRank=J.a.indexOf(r,a.worldRank)+1})})}),e}},{key:"render",value:function(){var e=this,t=this.state,n=t.redirectPath,a=t.ranking,o=t.peopleData,c=t.event,i=t.loading;return n?r.a.createElement(d.c,{to:n}):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(P.a,{variant:"h5"},a.name,r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement(we.a,{title:"Copy URL",placement:"right"},r.a.createElement(R.a,{onClick:this.copyUrl},r.a.createElement(ue.a,null,"link"))),r.a.createElement(we.a,{title:"Edit",placement:"right"},r.a.createElement(R.a,{onClick:this.edit},r.a.createElement(ue.a,null,"edit"))),r.a.createElement(we.a,{title:"Download image",placement:"right"},r.a.createElement(R.a,{onClick:this.downloadImage},r.a.createElement(ue.a,null,"photo"))))),r.a.createElement(xe,{value:c,onChange:this.handleEventChange}),r.a.createElement("div",{ref:function(t){return e.imageArea=t}},r.a.createElement(de.a,null,r.a.createElement(We,{peopleData:o,event:c}),i&&r.a.createElement(z.a,null))))}}]),t}(a.Component),Te=Object(v.createMuiTheme)({palette:{primary:E.a,secondary:k.a}}),Le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/rankings"},r.a.createElement(v.MuiThemeProvider,{theme:Te},r.a.createElement(h.a,null),r.a.createElement(I,null),r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,xs:12,md:8,style:{padding:16}},r.a.createElement(d.d,{exact:!0,path:"/",component:M}),r.a.createElement(d.d,{path:"/edit",component:be}),r.a.createElement(d.d,{path:"/show",component:Me})))))}}]),t}(a.Component),qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(Le,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rankings",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/rankings","/service-worker.js");qe?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_e(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):_e(e)})}}()}},[[158,2,1]]]);
//# sourceMappingURL=main.42b0f1ca.chunk.js.map