(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),s=a(22),n=a.n(s),r=(a(36),a(37),a(38),a(39),a(12)),o=a(4),j=(a(40),a(0)),l=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.c,{to:"/hot",activeClassName:"active",children:"Hot"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.c,{to:"/regular",activeClassName:"active",children:"Regular"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.c,{to:"/upload",activeClassName:"active",children:"Upload"})})]})})},d=(a(49),function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Funny Animals"}),Object(j.jsx)("hr",{})]})}),u=(a(50),function(){return Object(j.jsxs)("footer",{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"social-media",children:[Object(j.jsx)("a",{href:"https://www.facebook.com/",children:Object(j.jsx)("i",{className:"fa fa-facebook-f",style:{color:"#005662",fontSize:"1.6rem",marginRight:"10px"}})}),Object(j.jsx)("a",{href:"https://twitter.com/",children:Object(j.jsx)("i",{className:"fa fa-twitter",style:{color:"#005662",fontSize:"1.6rem",marginRight:"10px"}})}),Object(j.jsx)("a",{href:"https://www.instagram.com/",children:Object(j.jsx)("i",{className:"fa fa-instagram",style:{color:"#005662",fontSize:"1.6rem"}})})]})]})}),b=a(23),h=a(13),p=a(14),m=a(20),O=a(16),g=a(15),v=a(11),x=function(e){return{type:"ADD_LIKE",payload:e}},f=function(e){return{type:"ADD_DISLIKE",payload:e}},I=function(e){return{type:"ADD_STAR",payload:e}},N=(a(52),function(e){Object(O.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).onImageAdd=function(t){if(t.target.files&&t.target.files[0]){var a=t.target.files[0];e.setState({image:URL.createObjectURL(a)})}},e.state={},e.onTitleAdd=e.onTitleAdd.bind(Object(m.a)(e)),e.onImageAdd=e.onImageAdd.bind(Object(m.a)(e)),e}return Object(p.a)(a,[{key:"onTitleAdd",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state.title,a=this.state.image,c={id:this.props.pictureList.length+1,title:t,upvotes:0,downvotes:0,hasStar:!1,img:a};return Object(j.jsxs)("div",{className:"uploadBox",children:[Object(j.jsx)("h4",{children:"UPLOAD IMAGE !"}),Object(j.jsx)("div",{className:"addImage",children:Object(j.jsxs)("div",{className:"inputsContainer",children:[Object(j.jsxs)("div",{className:"inputsName",children:[Object(j.jsx)("label",{htmlFor:"addTitle",children:Object(j.jsx)("p",{children:"Title:"})}),Object(j.jsx)("p",{children:"Source:"})]}),Object(j.jsxs)("div",{className:"inputsBox",children:[Object(j.jsx)("input",{id:"addTitle",name:"title",type:"text",placeholder:"Provide title...",value:this.state.newTitle,onChange:this.onTitleAdd}),Object(j.jsx)("div",{className:"btn",children:Object(j.jsx)("label",{htmlFor:"uploadImage",children:"Choose file"})}),Object(j.jsx)("input",{id:"uploadImage",type:"file",name:"image",style:{visibility:"hidden"},accept:"image/*",onChange:this.onImageAdd})]})]})}),Object(j.jsx)("div",{className:"buttonFlex",children:Object(j.jsxs)("button",{type:"submit",className:"uploadButton",onClick:function(){e.props.dispatch({type:"UPLOAD_IMAGE",payload:c})},children:["UPLOAD ",Object(j.jsx)("i",{className:"fa fa-upload",style:{fontSize:"1rem"}})]})})]})}}]),a}(c.Component)),S=Object(v.b)((function(e){return{pictureList:e.pictures}}),(function(e){return{dispatch:e}}))(N),y=a(10),w=a(17),A=a(18),C=a(24);y.b.add(w.a,A.a);var D=function(e){Object(O.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.regPictures,a=t.length?t.map((function(t){return Object(j.jsxs)("div",{className:"pictureBox",children:[Object(j.jsxs)("div",{className:"favorite",children:[Object(j.jsx)("h2",{children:t.title}),Object(j.jsx)(C.a,{className:"addStar",onClick:function(){var a=t.id;e.props.dispatch(I(a))},icon:t.hasStar?w.a:A.a})]}),Object(j.jsx)("img",{className:"imgAnimal",src:t.img,alt:t.title}),Object(j.jsxs)("div",{className:"voteContainer",children:[Object(j.jsxs)("button",{className:"voteButtons",onClick:function(){var a=t.id;e.props.dispatch(x(a))},children:[" ",Object(j.jsx)("i",{className:"fa fa-thumbs-up",style:{fontSize:20}})," ",t.upvotes]}),Object(j.jsxs)("button",{className:"voteButtons",onClick:function(){var a=t.id;e.props.dispatch(f(a))},children:[Object(j.jsx)("i",{className:"fa fa-thumbs-down",style:{fontSize:20}})," ",t.downvotes]})]})]},t.id)})):Object(j.jsx)("main",{children:Object(j.jsx)("h3",{children:"NO REGULAR PICTURES"})});return Object(j.jsx)("main",{children:a})}}]),a}(c.Component),T=Object(v.b)((function(e){return{regPictures:e.pictures.filter((function(e){return e.upvotes-e.downvotes<5}))}}),(function(e){return{dispatch:e}}))(D);y.b.add(w.a,A.a);var k=function(e){Object(O.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.hotPictures,a=t.length?t.map((function(t){return Object(j.jsxs)("div",{className:"pictureBox",children:[Object(j.jsxs)("div",{className:"favorite",children:[Object(j.jsx)("h2",{children:t.title}),Object(j.jsx)(C.a,{className:"addStar",onClick:function(){var a=t.id;e.props.dispatch(I(a))},icon:t.hasStar?w.a:A.a})]}),Object(j.jsx)("img",{className:"imgAnimal",src:t.img,alt:t.title}),Object(j.jsxs)("div",{className:"voteContainer",children:[Object(j.jsxs)("button",{className:"voteButtons",onClick:function(){var a=t.id;e.props.dispatch(x(a))},children:[" ",Object(j.jsx)("i",{className:"fa fa-thumbs-up",style:{fontSize:20}})," ",t.upvotes]}),Object(j.jsxs)("button",{className:"voteButtons",onClick:function(){var a=t.id;e.props.dispatch(f(a))},children:[" ",Object(j.jsx)("i",{className:"fa fa-thumbs-down",style:{fontSize:20}})," ",t.downvotes]})]})]},t.id)})):Object(j.jsx)("main",{children:Object(j.jsx)("h3",{children:"NO HOT PICTURES"})});return Object(j.jsx)("main",{children:a})}}]),a}(c.Component),L=Object(v.b)((function(e){return{hotPictures:e.pictures.filter((function(e){return e.upvotes-e.downvotes>=5}))}}),(function(e){return{dispatch:e}}))(k),P=(a(56),function(){return Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:"error",children:[Object(j.jsx)("h1",{children:"Oh no! It's 404!"}),Object(j.jsx)("p",{children:"The page you are looking for not avaible!"}),Object(j.jsx)(r.b,{to:"/regular",children:Object(j.jsx)("button",{children:"To home Page"})})]})})});var B=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(l,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/regular",children:Object(j.jsx)(T,{})}),Object(j.jsx)(o.b,{exact:!0,path:"/hot",children:Object(j.jsx)(L,{})}),Object(j.jsx)(o.b,{exact:!0,path:"/upload",children:Object(j.jsx)(S,{})}),Object(j.jsxs)(o.b,{path:"*",children:[Object(j.jsx)(o.a,{to:"/regular"}),Object(j.jsx)(P,{})]})]}),Object(j.jsx)(u,{})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))},R=a(30),U=a(31),z=a(5),F={pictures:[{id:1,title:"Image 1",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image1.jpg"},{id:2,title:"Image 2",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image2.jpg"},{id:3,title:"Image 3",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image3.jpg"},{id:4,title:"Image 4",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image4.jpg"},{id:5,title:"Image 5",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image5.jpg"},{id:6,title:"Image 6",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image6.jpg"},{id:7,title:"Image 7",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image7.jpg"},{id:8,title:"Image 8",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image8.jpg"},{id:9,title:"Image 9",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image9.jpg"},{id:10,title:"Image 10",upvotes:0,downvotes:0,hasStar:!1,img:"/Image/image10.jpg"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIKE":var a=e.pictures.map((function(e){return e.id===t.payload?Object(z.a)(Object(z.a)({},e),{},{upvotes:e.upvotes+1}):e}));return Object(z.a)(Object(z.a)({},e),{},{pictures:a});case"ADD_DISLIKE":var c=e.pictures.map((function(e){return e.id===t.payload?Object(z.a)(Object(z.a)({},e),{},{downvotes:e.downvotes+1}):e}));return Object(z.a)(Object(z.a)({},e),{},{pictures:c});case"ADD_STAR":var i=e.pictures.map((function(e){return e.id===t.payload?Object(z.a)(Object(z.a)({},e),{},{hasStar:!e.hasStar}):e}));return Object(z.a)(Object(z.a)({},e),{},{pictures:i});case"UPLOAD_IMAGE":return Object(z.a)(Object(z.a)({},e),{},{pictures:[].concat(Object(U.a)(e.pictures),[t.payload])});default:return Object(z.a)({},e)}},G=Object(R.a)(_);n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v.a,{store:G,children:Object(j.jsx)(B,{})})}),document.getElementById("root")),E()}},[[57,1,2]]]);
//# sourceMappingURL=main.ea26fb4d.chunk.js.map