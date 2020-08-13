(this.webpackJsonpemployeedirectoryapp=this.webpackJsonpemployeedirectoryapp||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(11),o=a.n(n);a(23),a(24),a(25);var l=function(){return s.a.createElement("div",{className:"jumbotron jumbotron-fluid"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"display-4"},"Employee Tracker"),s.a.createElement("p",{className:"lead"},"View All Our Employees")))},c=a(12),i=a(13),f=a(14),m=a(17),u=a(16),d=a(15),p=a.n(d),h=function(){return p.a.get("https://randomuser.me/api/?results=20")};a(43);var w=function(e){return s.a.createElement("table",{className:"table table-dark"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"Image"),s.a.createElement("th",{scope:"col"},"Name",s.a.createElement("span",{onClick:e.sortedUsers},s.a.createElement("i",{className:e.className,id:"name"}))),s.a.createElement("th",{scope:"col"},"Phone",s.a.createElement("span",{onClick:e.sortedUsers},s.a.createElement("i",{className:e.className,id:"phone"}))),s.a.createElement("th",{scope:"col"},"Email",s.a.createElement("span",{onClick:e.sortedUsers},s.a.createElement("i",{className:e.className,id:"email"}))),s.a.createElement("th",{scope:"col"},"Country",s.a.createElement("span",{onClick:e.sortedUsers},s.a.createElement("i",{className:e.className,id:"country"}))))),s.a.createElement("tbody",null,e.users.map((function(e){return s.a.createElement("tr",{key:e.phone},s.a.createElement("td",null,s.a.createElement("img",{src:e.picture.medium,alt:"user profile"})),s.a.createElement("td",null,e.name.first," ",e.name.last),s.a.createElement("td",null,e.phone),s.a.createElement("td",null,e.email),s.a.createElement("td",null,e.location.country))}))))};a(44);var E=function(e){return s.a.createElement("nav",{className:"navbar navbar-collapse"},s.a.createElement("form",{className:"form-inline"},s.a.createElement("input",{onChange:e.filteredUsers,value:e.search,className:"form-control mr-sm-2",type:"text",name:"search",placeholder:"Search Users","aria-label":"Search"})))},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",original:[],filtered:[],filteredUsers:[],className:"fa fa-fw fa-sort up"},e.searchUsers=function(){h().then((function(t){return e.setState({original:t.data.results,filtered:t.data.results})})).catch((function(e){return console.log(e)}))},e.filteredUsers=function(t){var a=t.target,r=a.name,s=a.value;if(e.setState(Object(c.a)({},r,s)),""===s)e.setState({filtered:e.state.original});else if(""!==s){var n=e.state.original.filter((function(e){return e.name.first.toLowerCase().startsWith(s.toLowerCase())||e.name.last.toLowerCase().startsWith(s.toLowerCase())||"".concat(e.name.first," ").concat(e.name.last).toLowerCase().startsWith(s.toLowerCase())}));e.setState({filtered:n})}},e.className=function(t){"fa fa-fw fa-sort up"===t?e.setState({className:"fa fa-fw fa-sort down"}):"fa fa-fw fa-sort down"===t&&e.setState({className:"fa fa-fw fa-sort up"})},e.sortedUsers=function(t){var a=t.target,r=a.className,s=a.id;if("fa fa-fw fa-sort up"===r&&"name"===s){var n=e.state.filtered.sort((function(e,t){return e.name.first.toLowerCase()>t.name.first.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:n})}else if("fa fa-fw fa-sort down"===r&&"name"===s){var o=e.state.filtered.sort((function(e,t){return e.name.first.toLowerCase()<t.name.first.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:o})}else if("fa fa-fw fa-sort up"===r&&"phone"===s){var l=e.state.filtered.sort((function(e,t){return e.phone>t.phone?1:-1}));e.className(r),e.setState({filteredUsers:l})}else if("fa fa-fw fa-sort down"===r&&"phone"===s){var c=e.state.filtered.sort((function(e,t){return e.phone<t.phone?1:-1}));e.className(r),e.setState({filteredUsers:c})}else if("fa fa-fw fa-sort up"===r&&"email"===s){var i=e.state.filtered.sort((function(e,t){return e.email.toLowerCase()>t.email.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:i})}else if("fa fa-fw fa-sort down"===r&&"email"===s){var f=e.state.filtered.sort((function(e,t){return e.email.toLowerCase()<t.email.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:f})}else if("fa fa-fw fa-sort up"===r&&"country"===s){var m=e.state.filtered.sort((function(e,t){return e.location.country.toLowerCase()>t.location.country.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:m})}else if("fa fa-fw fa-sort down"===r&&"country"===s){var u=e.state.filtered.sort((function(e,t){return e.location.country.toLowerCase()<t.location.country.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:u})}},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.searchUsers()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E,{search:this.state.search,filteredUsers:this.filteredUsers}),s.a.createElement(w,{users:this.state.filtered,sortedUsers:this.sortedUsers,className:this.state.className}))}}]),a}(r.Component);var N=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(l,null),s.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8bbb211d.chunk.js.map