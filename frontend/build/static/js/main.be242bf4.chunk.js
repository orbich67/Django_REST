(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(25),a=n.n(r),o=(n(30),n(7)),i=n(8),j=n(10),h=n(9),l=n(2),u=n(5),d=n(0),b=function(e){var t=e.user;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.username}),Object(d.jsx)("td",{children:t.first_name}),Object(d.jsx)("td",{children:t.last_name}),Object(d.jsx)("td",{children:t.email})]})},p=function(e){var t=e.users;return Object(d.jsxs)("table",{border:"1",children:[Object(d.jsx)("th",{children:"Username"}),Object(d.jsx)("th",{children:"First name"}),Object(d.jsx)("th",{children:"Last name"}),Object(d.jsx)("th",{children:"E-mail"}),t.map((function(e){return Object(d.jsx)(b,{user:e})}))]})},O=function(e){var t=e.project,n=e.delete_project;return Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:[Object(d.jsx)(u.b,{to:"/projects/".concat(t.id),children:t.name})," "]}),Object(d.jsx)("td",{children:t.repository_link}),Object(d.jsx)("td",{children:t.users+""}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return n(t.id)},type:"button",children:"Delete"})})]})},x=function(e){var t=e.projects,n=e.delete_project;return Object(d.jsxs)("table",{border:"1",children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Repository link"}),Object(d.jsx)("th",{children:"Users"}),Object(d.jsx)("th",{children:"Delete"}),t.map((function(e){return Object(d.jsx)(O,{project:e,delete_project:n})}))]})},f=function(e){var t=e.todo,n=e.delete_todo;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.project_name}),Object(d.jsx)("td",{children:t.text}),Object(d.jsx)("td",{children:t.created}),Object(d.jsx)("td",{children:t.updated}),Object(d.jsx)("td",{children:t.user}),Object(d.jsx)("td",{children:t.is_done}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return n(t.id)},type:"button",children:"Delete"})})]})},g=function(e){var t=e.todos,n=e.delete_todo;return Object(d.jsxs)("table",{border:"1",children:[Object(d.jsx)("th",{children:"Project name"}),Object(d.jsx)("th",{children:"Text"}),Object(d.jsx)("th",{children:"Created"}),Object(d.jsx)("th",{children:"Updated"}),Object(d.jsx)("th",{children:"User"}),Object(d.jsx)("th",{children:"Is done"}),t.map((function(e){return Object(d.jsx)(f,{todo:e,delete_todo:n})}))]})},m=function(e){var t=e.todo;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.project_name}),Object(d.jsx)("td",{children:t.text}),Object(d.jsx)("td",{children:t.created}),Object(d.jsx)("td",{children:t.updated}),Object(d.jsx)("td",{children:t.user}),Object(d.jsx)("td",{children:t.is_done})]})},v=function(e){var t=e.todos,n=Object(l.h)().id,s=t.filter((function(e){return e.project_name==n}));return Object(d.jsxs)("table",{children:[Object(d.jsx)("th",{children:"Project name"}),Object(d.jsx)("th",{children:"Text"}),Object(d.jsx)("th",{children:"Created"}),Object(d.jsx)("th",{children:"Updated"}),Object(d.jsx)("th",{children:"User"}),Object(d.jsx)("th",{children:"Is done"}),s.map((function(e){return Object(d.jsx)(m,{todo:e})}))]})},_=n(12),k=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={login:"",password:""},s}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.get_token(this.state.login,this.state.password),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsx)("input",{type:"text",name:"login",placeholder:"login",value:this.state.login,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("input",{type:"submit",value:"Login"})]})}}]),n}(c.a.Component),y=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={name:"",repository_link:"",users:[]},s}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"handleUsersChange",value:function(e){if(e.target.selectedOptions){for(var t=[],n=0;n<e.target.selectedOptions.length;n++)t.push(parseInt(e.target.selectedOptions.item(n).value));this.setState({users:t})}}},{key:"handleSubmit",value:function(e){this.props.create_project(this.state.name,this.state.repository_link,this.state.users),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsx)("input",{type:"text",name:"name",placeholder:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("input",{type:"url",name:"repository_link",placeholder:"repository link",value:this.state.repository_link,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("select",{multiple:!0,name:"users",onChange:function(t){return e.handleUsersChange(t)},children:this.props.users.map((function(e){return Object(d.jsxs)("option",{value:e.id,children:[e.first_name," ",e.last_name]})}))}),Object(d.jsx)("input",{type:"submit",value:"Create"})]})}}]),n}(c.a.Component),C=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={project:"",text:"",user:""},s}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(_.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.create_todo(this.state.project,this.state.text,this.state.user),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsx)("select",{name:"project",onChange:function(t){return e.handleChange(t)},children:this.props.project.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name})}))}),Object(d.jsx)("input",{type:"text",name:"text",placeholder:"text",value:this.state.text,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("select",{name:"user",onChange:function(t){return e.handleChange(t)},children:this.props.user.map((function(e){return Object(d.jsxs)("option",{value:e.id,children:[e.first_name," ",e.last_name]})}))}),Object(d.jsx)("input",{type:"submit",value:"Create"})]})}}]),n}(c.a.Component),S=function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)(u.b,{to:"/",children:"Users"})," "]}),Object(d.jsxs)("li",{children:[Object(d.jsx)(u.b,{to:"/projects",children:"Projects"})," "]}),Object(d.jsxs)("li",{children:[Object(d.jsx)(u.b,{to:"/todos",children:"ToDos"})," "]})]})})},w=new Date,D=function(){return Object(d.jsxs)("div",{children:["Copyring \xa9 ",w.getFullYear()," orbich67"]})},I=n(6),U=n.n(I),P=function(){var e=Object(l.f)();return Object(d.jsxs)("div",{children:["Page ",Object(d.jsx)("b",{children:e.pathname})," not found"]})},T=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={users:[],projects:[],todos:[]},s}return Object(i.a)(n,[{key:"get_token",value:function(e,t){var n=this;U.a.post("http://127.0.0.1:8080/api-token-auth/",{username:e,password:t}).then((function(t){var s=t.data.token;localStorage.setItem("token",s),localStorage.setItem("user",e),n.setState({token:s,user:e},n.get_data)})).catch((function(e){return console.log(e)}))}},{key:"logout",value:function(){localStorage.setItem("token",""),localStorage.setItem("user",""),this.setState({token:"",user:""},this.get_data)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");this.setState({token:e},this.get_data)}},{key:"is_auth",value:function(){return!!this.state.token}},{key:"get_headers",value:function(){return this.is_auth()?{Authorization:"Token "+this.state.token}:{}}},{key:"get_data",value:function(){var e=this,t=this.get_headers();U.a.get("http://127.0.0.1:8080/api/users/",{headers:t}).then((function(t){var n=t.data;e.setState({users:n})})).catch((function(t){e.setState({users:[]}),console.log(t)})),U.a.get("http://127.0.0.1:8080/api/projects/",{headers:t}).then((function(t){var n=t.data;e.setState({projects:n})})).catch((function(t){e.setState({projects:[]}),console.log(t)})),U.a.get("http://127.0.0.1:8080/api/todos/",{headers:t}).then((function(t){var n=t.data;e.setState({todos:n})})).catch((function(t){e.setState({todos:[]}),console.log(t)}))}},{key:"create_project",value:function(e,t,n){var s=this,c=this.get_headers();U.a.post("http://127.0.0.1:8080/api/projects/",{name:e,repository_link:t,users:n},{headers:c}).then((function(e){s.get_data()})).catch((function(e){console.log(e)}))}},{key:"delete_project",value:function(e){var t=this,n=this.get_headers();U.a.delete("http://127.0.0.1:8080/api/projects/".concat(e),{headers:n}).then((function(n){t.setState({projects:t.state.projects.filter((function(t){return t.id!==e}))})})).catch((function(e){console.log(e)}))}},{key:"delete_todo",value:function(e){var t=this,n=this.get_headers();U.a.delete("http://127.0.0.1:8080/api/todos/".concat(e),{headers:n}).then((function(n){t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})})).then((function(e){t.get_data()})).catch((function(e){console.log(e)}))}},{key:"create_todo",value:function(e,t,n){var s=this,c=this.get_headers();U.a.post("http://127.0.0.1:8080/api/todos/",{project_name:e,text:t,user:n},{headers:c}).then((function(e){s.get_data()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{}),Object(d.jsxs)("ul",{children:[this.is_auth()&&Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/projects/create",children:"Projects (new)"})}),this.is_auth()&&Object(d.jsxs)("li",{children:[Object(d.jsx)(u.b,{to:"/todos/create",children:"ToDo (new)"})," "]}),this.is_auth()&&Object(d.jsxs)("p",{children:["\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",Object(d.jsx)("b",{children:localStorage.getItem("user")})]}),Object(d.jsx)("li",{children:this.is_auth()?Object(d.jsx)("button",{onClick:function(){return e.logout()},children:" Logout"}):Object(d.jsx)(u.b,{to:"/login",children:"Login"})})]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/",element:Object(d.jsx)(p,{users:this.state.users})}),Object(d.jsx)(l.b,{exact:!0,path:"/projects",element:Object(d.jsx)(x,{projects:this.state.projects,delete_project:function(t){return e.delete_project(t)}})}),Object(d.jsx)(l.b,{exact:!0,path:"/projects/create",element:Object(d.jsx)(y,{users:this.state.users,create_project:function(t,n,s){return e.create_project(t,n,s)}})}),Object(d.jsx)(l.b,{exact:!0,path:"/todos",element:Object(d.jsx)(g,{todos:this.state.todos,delete_todo:function(t){return e.delete_todo(t)}})}),Object(d.jsx)(l.b,{exact:!0,path:"/todos/create",element:Object(d.jsx)(C,{user:this.state.users,project:this.state.projects,create_todo:function(t,n,s){return e.create_todo(t,n,s)}})}),Object(d.jsx)(l.b,{exact:!0,path:"/login",element:Object(d.jsx)(k,{get_token:function(t,n){return e.get_token(t,n)}})}),Object(d.jsx)(l.b,{path:"/users",element:Object(d.jsx)(l.a,{to:"/"})}),Object(d.jsx)(l.b,{path:"/projects/:id",element:Object(d.jsx)(v,{todos:this.state.todos})}),Object(d.jsx)(l.b,{path:"*",element:Object(d.jsx)(P,{})})]})}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{})})]})})}}]),n}(c.a.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),F()}},[[50,1,2]]]);
//# sourceMappingURL=main.be242bf4.chunk.js.map