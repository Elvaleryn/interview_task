(function(t){function e(e){for(var s,l,r=e[0],i=e[1],c=e[2],d=0,m=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(s=!1)}s&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},o=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Albums"),a("Footer")],1)},o=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("a",{staticClass:"navbar-brand",attrs:{href:"https://pngimage.net/dummy-logo-png-1/"}},[s("img",{attrs:{src:a("cf05"),alt:""}})])]),s("span",{staticClass:"navbar-text"},[t._v(" Welcome back, John Doe ")])])])}],i={name:"Header"},c=i,u=a("2877"),d=Object(u["a"])(c,l,r,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer d-flex align-items-center justify-content-center mt-5"},[s("a",{staticClass:"mr-5",attrs:{href:"#"}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":a("8a78")+"#icon-twitter"}})])]),s("a",{staticClass:"mr-5",attrs:{href:"#"}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":a("8a78")+"#icon-facebook2"}})])]),s("a",{attrs:{href:"#"}},[s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":a("8a78")+"#icon-instagram"}})])])])},b=[],f={name:"Footer"},h=f,g=Object(u["a"])(h,p,b,!1,null,null,null),v=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container album mt-5"},[a("div",{staticClass:"row"},t._l(t.albums,(function(t){return a("Album",{key:t.id,attrs:{title:t.title,id:t.id}})})),1),a("scroll-loader",{attrs:{"loader-method":t.getAlbums,"loader-disable":t.disable}})],1)},_=[],x=(a("99af"),a("2909")),y=a("bc3a"),j=a.n(y),A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-3 col-md-6 col-sm-12 mt-3 d-flex"},[s("div",{staticClass:"card mb-3 flex-fill",on:{click:t.triggerModal}},[s("img",{staticClass:"card-img-top",attrs:{src:t.albumThumbNail,alt:"Card image cap"}}),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.title)+" ")])]),s("div",{staticClass:"card-footer text-muted bg-white"},[s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v(" See the album "),s("svg",{staticClass:"icon"},[s("use",{attrs:{"xlink:href":a("8a78")+"#icon-eye"}})])])])])]),s("AlbumModal",{attrs:{id:t.id,photos:t.photos,comments:t.comments}})],1)},O=[],P=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{tabindex:"-1",id:t.id,role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("PhotoCarousel",{attrs:{id:t.id,photos:t.photos}}),t.imagesAreVisible?a("div",{staticClass:"modal-body px-0 d-flex flex-wrap align-items-center justify-content-center"},t._l(t.photos,(function(t){return a("ThumbnailPhoto",{key:t.id,attrs:{src:t.thumbnailUrl}})})),1):a("div",{staticClass:"modal-body px-0"},t._l(t.comments,(function(t){return a("Comment",{key:t.id,attrs:{name:t.name,body:t.body,email:t.email}})})),1),a("div",{staticClass:"modal-footer d-flex justify-content-between"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.imagesAreVisible=!t.imagesAreVisible}}},[t.imagesAreVisible?a("span",[t._v("See all comments")]):a("span",[t._v("See all photos")])]),a("button",{staticClass:"btn btn-secondary px-5",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")])])],1)])])}),w=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment pb-3 pt-3 px-3"},[a("p",[a("span",{staticClass:"comment-name"},[t._v(t._s(t.name)+" ")]),a("span",{staticClass:"text-muted"},[t._v(t._s("("+t.email+")"))])]),a("p",[t._v(t._s(t.body))])])},S=[],T={name:"Comment",props:{name:String,email:String,body:String}},$=T,E=Object(u["a"])($,k,S,!1,null,null,null),M=E.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:t.src,target:"_blank",rel:"noopener noreferrer"}},[a("img",{staticClass:"m-3 album-image",attrs:{src:t.src,alt:"image"}})])},F=[],V={name:"ThumbnailPhoto",props:{src:String}},H=V,I=Object(u["a"])(H,N,F,!1,null,null,null),J=I.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel slide carousel-fade",class:"carousel"+t.id,attrs:{id:"carousel"+t.id}},[a("div",{staticClass:"carousel-inner"},t._l(t.photos,(function(t,e){return a("div",{key:t.id,staticClass:"carousel-item",class:{active:0==e}},[a("img",{staticClass:"d-block w-100",attrs:{src:t.url,alt:""}})])})),0),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel"+t.id,role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel"+t.id,role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])])},U=[],z={name:"PhotoCarousel",props:{photos:Array,id:Number}},W=z,q=Object(u["a"])(W,D,U,!1,null,null,null),B=q.exports,G={name:"AlbumModal",props:{comments:Array,photos:Array,id:Number},components:{Comment:M,ThumbnailPhoto:J,PhotoCarousel:B},data:function(){return{imagesAreVisible:!1}}},K=G,L=Object(u["a"])(K,P,w,!1,null,null,null),Q=L.exports,R=a("1157"),X=a.n(R),Y={name:"Album",props:{title:String,id:Number},components:{AlbumModal:Q},data:function(){return{albumThumbNail:"",photos:[],comments:[]}},methods:{triggerModal:function(){X()("#".concat(this.id)).modal("show"),0===this.photos.length&&0===this.comments.length&&(this.getAllComments(),this.getAllPhotos())},getAllComments:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(this.id)).then((function(e){t.comments=e.data}))},getAllPhotos:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/photos?albumId=".concat(this.id)).then((function(e){t.photos=e.data,X()(".carousel".concat(t.id)).carousel()}))},getFirstPhoto:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/photos",{params:{albumId:this.id,_page:1,_limit:1}}).then((function(e){t.albumThumbNail=e.data[0].thumbnailUrl,t.firstPhoto=e.data[0].url}))}},beforeDestroy:function(){X()("#".concat(this.id)).destroy()},mounted:function(){this.getFirstPhoto()}},Z=Y,tt=Object(u["a"])(Z,A,O,!1,null,null,null),et=tt.exports,at={name:"App",components:{Album:et},data:function(){return{albums:[],page:1,perPage:12,disable:!1}},methods:{getAlbums:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/albums",{params:{_page:this.page++,_limit:this.perPage}}).then((function(e){t.albums=[].concat(Object(x["a"])(t.albums),Object(x["a"])(e.data)),t.disable=e.data.length<t.pageSize||0===e.data.length}))}},mounted:function(){this.getAlbums()}},st=at,nt=Object(u["a"])(st,C,_,!1,null,null,null),ot=nt.exports,lt={name:"App",components:{Header:m,Footer:v,Albums:ot}},rt=lt,it=Object(u["a"])(rt,n,o,!1,null,null,null),ct=it.exports,ut=a("87f4"),dt=a.n(ut);a("9299"),a("079c"),a("01d7"),a("f102"),a("3ec5"),a("9e2f");s["a"].config.productionTip=!1,s["a"].use(dt.a),new s["a"]({render:function(t){return t(ct)}}).$mount("#app")},"8a78":function(t,e,a){t.exports=a.p+"img/sprite.3b2b061b.svg"},9299:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.b9d8137e.png"}});
//# sourceMappingURL=app.4b74b2a8.js.map