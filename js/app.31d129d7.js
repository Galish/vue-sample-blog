(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-sample-blog/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},1591:function(t,e,s){},1677:function(t,e,s){},"178f":function(t,e,s){},"1d21":function(t,e,s){"use strict";var a=s("c009"),n=s.n(a);n.a},"1d94":function(t,e,s){"use strict";var a=s("47af"),n=s.n(a);n.a},"1e4a":function(t,e,s){},"1edc":function(t,e,s){},"47af":function(t,e,s){},"49e3":function(t,e,s){"use strict";var a=s("1edc"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("3f08"),i=(s("c4ca"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" Vue sample app ")]},proxy:!0},{key:"footer",fn:function(){return[t._v(" © 2020 Some footer text ")]},proxy:!0}])},[s("router-view")],1)}),r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container"},[t.hasHeaderSlot?s("layout-header",[t._t("header")],2):t._e(),s("main-menu",{attrs:{items:t.menuItems}}),t._t("default"),t.hasFooterSlot?s("layout-footer",[t._t("footer")],2):t._e()],2)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui centered grid"},[a("div",{staticClass:"center aligned column"},[a("h2",{staticClass:"ui header"},[a("img",{staticClass:"ui centered mini image",attrs:{alt:"Vue logo",src:s("cf05")}}),a("div",{staticClass:"content"},[t._t("default")],2)])])])},l=[],d={name:"LayoutHeader"},p=d,f=(s("90b6"),s("2877")),m=Object(f["a"])(p,u,l,!1,null,"1d17a603",null),h=m.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"ui divider"}),t._t("default")],2)},b=[],g={name:"LayoutFooter"},_=g,C=(s("7c4d"),Object(f["a"])(_,v,b,!1,null,"7b098a32",null)),y=C.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui labeled icon menu"},t._l(t.menuItems,(function(e){return s("router-link",{key:e.id,staticClass:"item",class:{active:e.isActive},attrs:{to:e.path}},[s("i",{staticClass:"icon",class:e.icon}),t._v(" "+t._s(e.label)+" ")])})),1)},j=[],O=(s("d81d"),s("5530")),P={name:"MainMenu",props:{items:{type:Array,default:function(){return[]}}},computed:{menuItems:function(){var t=this;return this.items.map((function(e){return Object(O["a"])(Object(O["a"])({},e),{},{isActive:e.path===t.$route.path})}))}},mounted:function(){console.info("App currentRoute:",this.$route.path)}},S=P,k=(s("1d94"),Object(f["a"])(S,w,j,!1,null,"1b8c021a",null)),x=k.exports,E={name:"Layout",components:{LayoutHeader:h,LayoutFooter:y,MainMenu:x},data:function(){return{menuItems:[{id:"home",label:"Home",path:"/",icon:"home"},{id:"feed",label:"Feed",path:"/feed",icon:"newspaper outline"},{id:"users",label:"Users",path:"/users",icon:"users"}]}},computed:{hasHeaderSlot:function(){return!!this.$slots.header},hasFooterSlot:function(){return!!this.$slots.footer}}},U=E,$=Object(f["a"])(U,o,c,!1,null,null,null),A=$.exports,D={name:"App",components:{Layout:A}},I=D,T=(s("034f"),Object(f["a"])(I,i,r,!1,null,null,null)),z=T.exports,L=s("8c4f"),M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page-navigation",{attrs:{"page-size":t.PAGE_SIZE,"total-count":t.postsTotalCount},on:{fetchData:t.fetchData}},[s("post-list",{attrs:{posts:t.postsWithAutorData}})],1)},N=[],G=s("2f62"),R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("default"),t.pagesCount>1?s("div",{staticClass:"ui centered grid"},[s("div",{staticClass:"center aligned column"},[s("div",{staticClass:"ui pagination menu"},t._l(t.pagesCount,(function(e,a){return s("div",{key:a,staticClass:"item",class:{active:t.activePage===e},on:{click:function(s){return t.onSelect(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])]):t._e()],2)},Z=[],q=(s("a9e3"),{name:"PageNavigation",props:{totalCount:{type:Number,default:0},pageSize:{type:Number,default:0}},data:function(){return{activePage:1}},computed:{pagesCount:function(){return Math.ceil(this.totalCount/this.pageSize)}},watch:{activePage:function(t){this.$emit("fetchData",t)}},created:function(){this.$emit("fetchData")},methods:{onSelect:function(t){this.activePage=t}}}),F=q,V=(s("1d21"),Object(f["a"])(F,R,Z,!1,null,"101bf255",null)),H=V.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui stackable grid"},[t.hasSlot?s("fragment",t._l(["center aligned sixteen wide column tablet mobile only","eight wide column tablet or lower hidden"],(function(e){return s("div",{key:e,class:e},[t._t("default")],2)})),0):t._e(),t.posts?s("fragment",t._l(t.posts,(function(e,a){return s("post-item",{key:e.id,attrs:{index:a,post:e,view:t.view}})})),1):s("fragment",t._l(t.skeletonsCount,(function(e){return s("post-skeleton",{key:e,attrs:{view:t.view}})})),1)],1)},W=[],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"eight wide tablet four wide computer column"},[s("div",{staticClass:"ui raised card unstackable"},[s("div",{staticClass:"content",class:{"center aligned":"short"===t.view}},[s("div",{staticClass:"header"},[s(t.hideLink?"fragment":"router-link",{tag:"router-link",attrs:{to:"/feed/"+t.post.id}},[t._v(" "+t._s(t.capitalize(t.post.title))+" ")])],1),"short"!==t.view?s("div",{staticClass:"meta"},[s("span",{staticClass:"category"},[t._v(" "+t._s(t.dateStamp)+" ")])]):t._e(),s("div",{staticClass:"description"},[t._v(" "+t._s(t.capitalize(t.postBody))+" ")])]),t.post.author?s("div",{staticClass:"extra content",class:{center:"short"===t.view}},[s("div",{staticClass:"author",class:{"right floated":"full"===t.view,"center aligned":"short"===t.view}},[s("img",{staticClass:"ui avatar image",attrs:{src:t.avatarSrc}}),t._v(" "+t._s(t.post.author.name)+" ")])]):t._e()])])},K=[],Q=(s("a15b"),s("fb6a"),s("ac1f"),s("1276"),["https://semantic-ui.com/images/avatar/large/stevie.jpg","https://semantic-ui.com/images/avatar/large/jenny.jpg","https://semantic-ui.com/images/avatar2/large/elyse.png","https://semantic-ui.com/images/avatar2/large/kristy.png","https://semantic-ui.com/images/avatar2/large/matthew.png"]),X=function(t){return"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)},Y=function(t){return Q[t%Q.length]},tt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return"".concat(t.slice(0,e).split(" ").slice(0,-1).join(" "),"...")},et={name:"PostItem",props:{dateStamp:{type:String,default:"2 days ago"},hideLink:{type:Boolean,default:!1},post:{type:Object,required:!0},view:{type:String,default:"full"}},computed:{avatarSrc:function(){return this.getUserAvatar(this.post.author.id)},postBody:function(){return"short"===this.view?tt(this.post.body):this.post.body}},methods:{capitalize:X,getUserAvatar:Y,truncate:tt}},st=et,at=(s("c5e5"),Object(f["a"])(st,J,K,!1,null,"135cf826",null)),nt=at.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"eight wide tablet four wide computer column"},[s("div",{staticClass:"ui raised card unstackable"},[s("div",{staticClass:"content center aligned"},[s("div",{staticClass:"ui fluid placeholder"},[s("div",{staticClass:"header"},[s("div",{staticClass:"line"}),s("div",{staticClass:"line mobile or lower hidden"}),"short"!==t.view?s("div",{staticClass:"line tablet or lower hidden"}):t._e()]),"short"!==t.view?s("div",{staticClass:"paragraph"},[s("div",{staticClass:"short line"})]):t._e(),s("div",{staticClass:"paragraph"},[s("div",{staticClass:"line"}),"short"!==t.view?s("div",{staticClass:"line mobile or lower hidden"}):t._e(),"short"!==t.view?s("div",{staticClass:"line tablet or lower hidden"}):t._e(),s("div",{staticClass:"short line"})])])]),s("div",{staticClass:"extra content"},[s("div",{staticClass:"author",class:{"right floated":"full"===t.view,"center aligned":"short"===t.view}},[s("div",{staticClass:"ui avatar image placeholder"}),t._m(0)])])])])},rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui fluid placeholder"},[s("div",{staticClass:"line"})])}],ot={name:"PostSkeleton",props:{view:{type:String,default:"full"}}},ct=ot,ut=(s("b32a"),Object(f["a"])(ct,it,rt,!1,null,"ca5ee5e6",null)),lt=ut.exports,dt={name:"PostList",components:{PostItem:nt,PostSkeleton:lt},props:{posts:{type:Array,default:function(){return[]}},skeletonsCount:{type:Number,default:10},view:{type:String,default:"full"}},computed:{hasSlot:function(){return!!this.$slots.default}}},pt=dt,ft=Object(f["a"])(pt,B,W,!1,null,null,null),mt=ft.exports,ht=(s("a623"),s("4de4"),s("4160"),s("caad"),s("13d5"),s("d3b7"),s("6062"),s("2532"),s("3ca3"),s("159b"),s("ddb0"),s("15fd")),vt=s("ade3"),bt=s("2909"),gt={computed:Object(O["a"])(Object(O["a"])({},Object(G["c"])(["users"])),{},{authorIDs:function(){var t=new Set;return(this.posts||[]).forEach((function(e){var s=e.userId;return t.add(s)})),Object(bt["a"])(t)},authorsMap:function(){var t=this;return(this.users||[]).filter((function(e){var s=e.id;return t.authorIDs.includes(s)})).reduce((function(t,e){return Object(O["a"])(Object(O["a"])({},t),{},Object(vt["a"])({},e.id,e))}),{})},postsWithAutorData:function(){var t=this;return this.posts&&this.posts.every((function(e){var s=e.userId;return t.authorsMap[s]}))?this.posts.map((function(e){var s=e.userId,a=Object(ht["a"])(e,["userId"]);return Object(O["a"])(Object(O["a"])({},a),{},{author:t.authorsMap[s]})})):null}}),watch:{posts:function(){this.fetchAuthors()}},beforeDestroy:function(){this.clearUsers()},methods:Object(O["a"])(Object(O["a"])({},Object(G["b"])(["fetchUser","clearUsers"])),{},{fetchAuthors:function(){var t=this,e=(this.users||[]).map((function(t){var e=t.id;return e})),s=this.authorIDs.filter((function(t){return!e.includes(t)})),a=s.map((function(e){return t.fetchUser({id:e})}));return Promise.all(a)}})},_t=gt,Ct=12,yt={name:"FeedView",components:{PageNavigation:H,PostList:mt},mixins:[_t],computed:Object(G["c"])(["posts","postsTotalCount"]),created:function(){this.PAGE_SIZE=Ct},beforeDestroy:function(){this.clearPosts()},methods:Object(O["a"])(Object(O["a"])({},Object(G["b"])(["fetchPosts","clearPosts"])),{},{fetchData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.fetchPosts({limit:this.PAGE_SIZE,page:t})}})},wt=yt,jt=Object(f["a"])(wt,M,N,!1,null,null,null),Ot=jt.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("post-list",{attrs:{posts:t.postsWithAutorData,skeletonsCount:t.PAGE_SIZE,view:"short"}},[s("h1",{staticClass:"ui header"},[t._v(" Welcome to our dummy blog! ")]),s("p",[t._v(" The application implemented using "),s("a",{attrs:{target:"_blank",href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" JavaScript Framework. ")]),s("p",[t._v(" Styling done with "),s("a",{attrs:{target:"_blank",href:"https://semantic-ui.com/"}},[t._v("Semantic UI")]),t._v(" CSS framework. ")])])},St=[],kt=6,xt={name:"HomeView",components:{PostList:mt},mixins:[_t],computed:Object(G["c"])(["posts","postsTotalCount"]),created:function(){this.PAGE_SIZE=kt,this.fetchData()},beforeDestroy:function(){this.clearPosts()},methods:Object(O["a"])(Object(O["a"])({},Object(G["b"])(["fetchPosts","clearPosts"])),{},{fetchData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.fetchPosts({limit:this.PAGE_SIZE,page:t})}})},Et=xt,Ut=Object(f["a"])(Et,Pt,St,!1,null,null,null),$t=Ut.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.post?s("PostDetail",t._b({},"PostDetail",t.post,!1)):t._e()},Dt=[],It=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui text container"},[s("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.capitalize(t.title))+" "),s("div",{staticClass:"sub header"},[t._v(" "+t._s(t.dateStamp)+" ")])]),s("p",[t._v(t._s(t.capitalize(t.body)))]),s("p",[t._v(t._s(t.capitalize(t.body)))]),s("p",[t._v(t._s(t.capitalize(t.body)))]),s("p",[t._v(t._s(t.capitalize(t.body)))]),s("p",[t._v(t._s(t.capitalize(t.body)))])])},Tt=[],zt={name:"PostDetail",props:{id:{type:Number,required:!0},title:{type:String,default:"-title-"},body:{type:String,default:"-body-"},dateStamp:{type:String,default:"2 days ago"}},methods:{capitalize:X}},Lt=zt,Mt=(s("49e3"),Object(f["a"])(Lt,It,Tt,!1,null,"fc5a509a",null)),Nt=Mt.exports,Gt={name:"PostView",components:{PostDetail:Nt},computed:Object(G["c"])(["post"]),created:function(){this.fetchPost(this.$route.params.id)},beforeDestroy:function(){this.clearPost()},methods:Object(G["b"])(["clearPost","fetchPost"])},Rt=Gt,Zt=Object(f["a"])(Rt,At,Dt,!1,null,null,null),qt=Zt.exports,Ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page-navigation",{attrs:{"page-size":t.PAGE_SIZE,"total-count":t.usersTotalCount},on:{fetchData:t.fetchData}},[s("users-list",{attrs:{users:t.users}})],1)},Vt=[],Ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.users?s("div",{staticClass:"ui stackable grid"},t._l(t.users,(function(e,a){return s("user-card",t._b({key:e.id,attrs:{index:a}},"user-card",e,!1))})),1):s("div",{staticClass:"ui stackable grid"},t._l(t.skeletonsCount,(function(t){return s("user-skeleton",{key:t})})),1)},Bt=[],Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"eight wide computer column"},[s("div",{staticClass:"ui items unstackable"},[s("div",{staticClass:"item unstackable"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:t.avatarSrc}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[t._v(" "+t._s(t.name)+" ")]),t.company?[t.company.name?s("div",{staticClass:"meta"},[s("span",[t._v(t._s(t.company.name))])]):t._e()]:t._e(),t.phone||t.email||t.website?s("div",{staticClass:"description"},[t.phone?s("p",[s("i",{staticClass:"phone square icon"}),t._v(" "+t._s(t.phone)+" ")]):t._e(),t.email?s("p",[s("i",{staticClass:"mail square icon"}),t._v(" "+t._s(t.email)+" ")]):t._e(),t.website?s("p",[s("i",{staticClass:"external square icon"}),t._v(" "+t._s(t.website)+" ")]):t._e()]):t._e()],2)])])])},Jt=[],Kt={name:"UserCard",props:{avatar:{type:String,default:""},index:{type:Number,default:0},id:{type:Number,required:!0},name:{type:String,required:!0,default:""},company:{type:Object,default:function(){return{}}},phone:{type:String,default:""},email:{type:String,default:""},website:{type:String,default:""}},computed:{avatarSrc:function(){return this.avatar||this.getUserAvatar(this.id)}},methods:{getUserAvatar:Y}},Qt=Kt,Xt=Object(f["a"])(Qt,Wt,Jt,!1,null,null,null),Yt=Xt.exports,te=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ee=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"eight wide computer column"},[s("div",{staticClass:"ui items unstackable"},[s("div",{staticClass:"item unstackable"},[s("div",{staticClass:"image"},[s("div",{staticClass:"ui placeholder"},[s("div",{staticClass:"image"})])]),s("div",{staticClass:"content"},[s("div",{staticClass:"ui placeholder"},[s("div",{staticClass:"header"},[s("div",{staticClass:"line"})]),s("div",{staticClass:"paragraph"},[s("div",{staticClass:"short line"}),s("div",{staticClass:"medium line"}),s("div",{staticClass:"medium line"}),s("div",{staticClass:"short line"})])])])])])])}],se={name:"UserSkeleton"},ae=se,ne=(s("6c79"),Object(f["a"])(ae,te,ee,!1,null,"4a9d58b8",null)),ie=ne.exports,re={name:"UsersList",components:{UserCard:Yt,UserSkeleton:ie},props:{users:{type:Array,default:function(){return[]}},skeletonsCount:{type:Number,default:5}}},oe=re,ce=Object(f["a"])(oe,Ht,Bt,!1,null,"48257736",null),ue=ce.exports,le=6,de={name:"UsersView",components:{PageNavigation:H,UsersList:ue},computed:Object(G["c"])(["users","usersTotalCount"]),created:function(){this.PAGE_SIZE=le},beforeDestroy:function(){this.clearUsers()},methods:Object(O["a"])(Object(O["a"])({},Object(G["b"])(["fetchUsers","clearUsers"])),{},{fetchData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.fetchUsers({limit:this.PAGE_SIZE,page:t})}})},pe=de,fe=Object(f["a"])(pe,Ft,Vt,!1,null,null,null),me=fe.exports;a["a"].use(L["a"]);var he=new L["a"]({routes:[{path:"/",name:"home",component:$t},{path:"/feed",name:"feed",component:Ot},{path:"/feed/:id",name:"post",component:qt},{path:"/users",name:"users",component:me}]}),ve=(s("96cf"),s("1da1")),be=s("bc3a"),ge=s.n(be),_e=s("72bf"),Ce=s.n(_e),ye="https://jsonplaceholder.typicode.com/posts",we=function(){return{post:null,posts:null,postsTotalCount:0}},je={post:function(t){return t.post},posts:function(t){return t.posts},postsTotalCount:function(t){return t.postsTotalCount}},Oe={fetchPost:function(t,e){return Object(ve["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.commit,s.next=3,ge.a.get("".concat(ye,"/").concat(e));case 3:n=s.sent,a("setPost",n.data);case 5:case"end":return s.stop()}}),s)})))()},fetchPosts:function(t,e){return Object(ve["a"])(regeneratorRuntime.mark((function s(){var a,n,i,r,o,c,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.commit,n=e.limit,i=void 0===n?10:n,r=e.page,o=void 0===r?0:r,c=Ce.a.stringify({_limit:i,_page:o}),s.next=5,ge.a.get("".concat(ye,"?").concat(c));case 5:u=s.sent,a("setPosts",u.data),a("setPostsTotalCount",u.headers["x-total-count"]);case 8:case"end":return s.stop()}}),s)})))()},clearPost:function(t){var e=t.commit;e("setPost",we().post)},clearPosts:function(t){var e=t.commit;e("setPosts",we().posts)}},Pe={setPost:function(t,e){return t.post=e},setPosts:function(t,e){return t.posts=e},setPostsTotalCount:function(t,e){return t.postsTotalCount=parseInt(e)}},Se={state:we(),getters:je,actions:Oe,mutations:Pe},ke=(s("99af"),"https://jsonplaceholder.typicode.com/users"),xe=function(){return{users:null,usersTotalCount:0}},Ee={users:function(t){return t.users},usersByID:function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(t.users||[]).filter((function(t){var s=t.id;return e.includes(s)}))}},usersTotalCount:function(t){return t.usersTotalCount}},Ue={fetchUsers:function(t,e){return Object(ve["a"])(regeneratorRuntime.mark((function s(){var a,n,i,r,o,c,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.commit,n=e.limit,i=void 0===n?10:n,r=e.page,o=void 0===r?0:r,c=Ce.a.stringify({_limit:i,_page:o}),s.next=5,ge.a.get("".concat(ke,"?").concat(c));case 5:u=s.sent,a("setUsers",u.data),a("setUsersTotalCount",u.headers["x-total-count"]);case 8:case"end":return s.stop()}}),s)})))()},fetchUser:function(t,e){return Object(ve["a"])(regeneratorRuntime.mark((function s(){var a,n,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.commit,n=e.id,s.next=4,ge.a.get("".concat(ke,"/").concat(n));case 4:i=s.sent,a("appendUser",i.data);case 6:case"end":return s.stop()}}),s)})))()},clearUsers:function(t){var e=t.commit;e("setUsers",xe().users)}},$e={appendUser:function(t,e){return t.users=[].concat(Object(bt["a"])(t.users||[]),[e])},setUsers:function(t,e){return t.users=e},setUsersTotalCount:function(t,e){return t.usersTotalCount=parseInt(e)}},Ae={state:xe(),getters:Ee,actions:Ue,mutations:$e};a["a"].use(G["a"]);var De=new G["a"].Store({modules:{feed:Se,users:Ae}});s("1677");a["a"].config.productionTip=!1,a["a"].use(n["a"]),new a["a"]({router:he,store:De,render:function(t){return t(z)}}).$mount("#app")},"6c79":function(t,e,s){"use strict";var a=s("1e4a"),n=s.n(a);n.a},"7c4d":function(t,e,s){"use strict";var a=s("f701"),n=s.n(a);n.a},"7fb2":function(t,e,s){},"85ec":function(t,e,s){},"90b6":function(t,e,s){"use strict";var a=s("7fb2"),n=s.n(a);n.a},b32a:function(t,e,s){"use strict";var a=s("1591"),n=s.n(a);n.a},c009:function(t,e,s){},c5e5:function(t,e,s){"use strict";var a=s("178f"),n=s.n(a);n.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},f701:function(t,e,s){}});
//# sourceMappingURL=app.31d129d7.js.map