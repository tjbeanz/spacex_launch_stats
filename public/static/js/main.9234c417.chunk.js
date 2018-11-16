(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,a,n){e.exports=n(76)},56:function(e,a,n){},67:function(e,a,n){},76:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(41),l=n.n(r),s=(n(56),n(10)),m=n(11),u=n(18),o=n(12),i=n(19),h=n(49),p=n(13),E=n(80),d=n(81),b=n(24),g=n(9),f=n.n(g),_=n(25),y=n.n(_),N=n(28),v=n.n(N),k=n(79);function j(e){var a=e.launch,n=a.flight_number,t=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:y()({"text-success":l,"text-danger":!l})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k.a,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))}function O(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function w(){var e=Object(b.a)(["\n    query LaunchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n        }\n    }\n"]);return w=function(){return e},e}var x=f()(w()),L=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(t.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(O,null),c.a.createElement(p.Query,{query:x},function(e){var a=e.loading,n=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),c.a.createElement(t.Fragment,null,r.launches.map(function(e){return c.a.createElement(j,{key:e.flight_number,launch:e})})))}))}}]),a}(t.Component);function D(){var e=Object(b.a)(["\n    query LaunchQuery($flight_number: Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return D=function(){return e},e}var Y=f()(D()),q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(t.Fragment,null,c.a.createElement(p.Query,{query:Y,variables:{flight_number:e}},function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var r=t.launch,l=r.mission_name,s=r.flight_number,m=r.launch_year,u=r.launch_success,o=r.rocket,i=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",l),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful: ",c.a.createElement("span",{className:y()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",i),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(k.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(t.Component),F=(n(67),new h.a({uri:"/graphql"})),I=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.ApolloProvider,{client:F},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"SpaceX"),c.a.createElement(d.a,{exact:!0,path:"/",component:L}),c.a.createElement(d.a,{exact:!0,path:"/launch/:flight_number",component:q}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,2,1]]]);
//# sourceMappingURL=main.9234c417.chunk.js.map