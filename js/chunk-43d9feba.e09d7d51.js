(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43d9feba","chunk-70e610cc"],{"02f4":function(t,e,a){var s=a("4588"),r=a("be13");t.exports=function(t){return function(e,a){var i,n,o=String(r(e)),l=s(a),c=o.length;return l<0||l>=c?t?"":void 0:(i=o.charCodeAt(l),i<55296||i>56319||l+1===c||(n=o.charCodeAt(l+1))<56320||n>57343?t?o.charAt(l):i:t?o.slice(l,l+2):n-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var s=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var s=a("2aba"),r=a("32e9"),i=a("79e5"),n=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),d=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=o(t),m=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),f=m?!i((function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!e})):void 0;if(!m||!f||"replace"===t&&!d||"split"===t&&!u){var v=/./[p],h=a(n,p,""[t],(function(t,e,a,s,r){return e.exec===l?m&&!r?{done:!0,value:v.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}})),g=h[0],b=h[1];s(String.prototype,t,g),r(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},4917:function(t,e,a){"use strict";var s=a("cb7c"),r=a("9def"),i=a("0390"),n=a("5f1b");a("214f")("match",1,(function(t,e,a,o){return[function(a){var s=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,s):new RegExp(a)[e](String(s))},function(t){var e=o(a,t,this);if(e.done)return e.value;var l=s(t),c=String(this);if(!l.global)return n(l,c);var d=l.unicode;l.lastIndex=0;var u,p=[],m=0;while(null!==(u=n(l,c))){var f=String(u[0]);p[m]=f,""===f&&(l.lastIndex=i(c,r(l.lastIndex),d)),m++}return 0===m?null:p}]}))},"520a":function(t,e,a){"use strict";var s=a("0bfb"),r=RegExp.prototype.exec,i=String.prototype.replace,n=r,o="lastIndex",l=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],d=l||c;d&&(n=function(t){var e,a,n,d,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",s.call(u))),l&&(e=u[o]),n=r.call(u,t),l&&n&&(u[o]=u.global?n.index+n[0].length:e),c&&n&&n.length>1&&i.call(n[0],a,(function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(n[d]=void 0)})),n}),t.exports=n},5265:function(t,e,a){},"584a":function(t,e){var a=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=a)},"5f1b":function(t,e,a){"use strict";var s=a("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"662c":function(t,e,a){"use strict";var s=a("5265"),r=a.n(s);r.a},"7f17":function(t,e,a){},"7f4b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("Sidebar"),a("div",{staticClass:"main"},[a("Header"),a("router-view"),a("Footer")],1)],1)},r=[],i=a("f499"),n=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"sidebar",attrs:{id:"sidebar"}},[a("div",{staticClass:"sidebar-content"},[t._m(0),a("ul",{ref:"myul",staticClass:"tree",staticStyle:{height:"calc(100vh - 70.8px)",overflow:"auto","background-color":"#f5f9fc"}})])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"sidebar-brand",attrs:{href:"/"}},[a("i",{staticClass:"align-middle",attrs:{"data-feather":"box"}}),a("span",{staticClass:"align-middle"},[t._v("UGES Kurulum Takip")])])}],c=a("bd9f"),d=a("1aa2"),u={data:function(){return{html:"",tree:[],Usttanim:"",FirstName:"",LastName:""}},created:function(){c["a"].$on("contentsave",(function(t){var e=document.querySelector('i[data-id="'+t.selectedid+'"]');e.style.color="green";var a=document.querySelector('a[data-id="'+t.selectedid+'"]');console.log(a),a.dataset.serino=t.seritext,a.dataset.ipaddress=t.ipaddress}))},mounted:function(){var t=this;this.FirstName=JSON.parse(localStorage.getItem("user")).FirstName,this.LastName=JSON.parse(localStorage.getItem("user")).LastName;var e=this;this.$http.get("".concat(d["a"].ip,"/api/users/getprojectsbom")).then((function(a){console.log(a),t.progressHesapla(a.data[0]),t.html=t.drawelements(a.data),t.tree=a.data,t.$refs["myul"].innerHTML=t.html,c["a"].$emit("sidebarok");for(var s=document.querySelectorAll(".tree-control"),r=0;r<s.length;r++)s[r].addEventListener("click",(function(t){t.target.nextElementSibling.classList.contains("closed")?(t.target.nextElementSibling.classList.remove("closed"),t.target.classList.add("tree-control-open")):(t.target.nextElementSibling.classList.add("closed"),t.target.classList.remove("tree-control-open")),c["a"].$emit("closecontent")}));for(var i=document.querySelectorAll("a[name='dallink']"),n=0;n<i.length;n++)i[n].addEventListener("click",(function(t){e.Usttanim="",e.searchenust(t.target.dataset.stok),t.target.dataset["UstTanim"]=e.Usttanim;for(var a=0;a<i.length;a++)i[a].style.backgroundColor="#f5f9fc";t.target.style.backgroundColor="#f1e7296e",e.$router.push({path:"/user/data/"+t.target.dataset.id,params:{id:t.target.dataset.id}}).catch((function(t){})),c["a"].$emit("leftclicksidebar",t.target.dataset)}))}))},methods:{drawelements:function(t){for(var e="",a=0;a<t.length;a++)t[a].nodes.length>0?e+='<li class="has-child"><i class="fas fa-folder fa-lg" style="color:'.concat(t[a].work.count!==t[a].progress.count?"red":"green",'"></i> <a>').concat(t[a].Tanim,'</a>\n             <span class="tree-control"></span> <ul data-acikmi="').concat(t[a].Id,'"  class="closed">').concat(this.drawelements(t[a].nodes),"</ul></li>"):e+='<li><i data-dal="dal" data-Id="'.concat(t[a].Id,'"  class="').concat(1===t[a].AltYapiTakip?"fas fa-hammer ":"fas fa-video ",'"   style="color:').concat(t[a].color,'"></i><a  name="dallink"\n             data-id="').concat(t[a].Id,'" \n             data-serino="').concat(t[a].SeriNo,'"\n             data-altyapitakip="').concat(t[a].AltYapiTakip,'"\n             data-serinotakip="').concat(t[a].SerinoTakip,'"\n             data-iptakip="').concat(t[a].IpTakip,'"\n             data-ipaddress="').concat(t[a].Ipaddress,'"\n             data-stok="').concat(t[a].Stokcode,'"\n             data-dal="dal"> ').concat(t[a].Tanim," </a></li>");return e},searchstokTree:function(t,e){if(t.Stokcode===e)return t;if(null!=t.nodes){var a,s=null;for(a=0;null==s&&a<t.nodes.length;a++)s=this.searchstokTree(t.nodes[a],e);return s}return null},searchenust:function(t){var e=this.searchstokTree(this.tree[0],t);null!=e&&(""===this.Usttanim?this.Usttanim=e.UstStokTanim:"-"!==e.UstStokTanim&&(this.Usttanim=this.Usttanim+" - "+e.UstStokTanim),this.searchenust(e.UstStok))},progressHesapla:function(t){for(var e=t.work?t.work.count:0,a=t.progress?t.progress.count:0,s=0;s<t.nodes.length;s++)if(t.nodes[s].nodes){var r=this.progressHesapla(t.nodes[s]),i=r.newSubWork,n=r.newSubProgress;e+=i,a+=n}return null!=t.work&&(t.work={count:0}),t.work.count=e,null!=t.progress&&(t.progress={count:0}),t.progress.count=a,e=e||0,a=a||0,{newSubWork:e,newSubProgress:a}}}},p=u,m=(a("662c"),a("2877")),f=Object(m["a"])(p,o,l,!1,null,null,null),v=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand navbar-light bg-white"},[t._m(0),a("div",{staticClass:"navbar-collapse collapse"},[a("ul",{staticClass:"navbar-nav ml-auto"},[t._m(1),t._m(2),a("li",{staticClass:"nav-item dropdown"},[t._m(3),a("a",{staticClass:"nav-link dropdown-toggle d-none d-sm-inline-block",attrs:{href:"#","data-toggle":"dropdown"}},[a("img",{staticClass:"avatar img-fluid rounded-circle mr-1",attrs:{src:"/images/default_user.jpg",alt:"Chris Wood"}}),a("span",{staticClass:"text-dark"},[t._v(t._s(t.FirstName+" "+t.LastName))])]),a("div",{staticClass:"dropdown-menu dropdown-menu-right"},[a("router-link",{staticClass:"dropdown-item",attrs:{to:"/user/profil"}},[a("i",{staticClass:"align-middle mr-1",attrs:{"data-feather":"user"}}),t._v(" Profil\r\n                ")]),a("div",{staticClass:"dropdown-divider"}),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.logout}},[t._v("Çıkış Yap")])],1)])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"sidebar-toggle d-flex mr-2",attrs:{onclick:"document.getElementById('sidebar').classList.toggle('toggled')"}},[a("i",{staticClass:"hamburger align-self-center"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-icon dropdown-toggle",attrs:{href:"#",id:"messagesDropdown","data-toggle":"dropdown"}},[a("div",{staticClass:"position-relative"},[a("i",{staticClass:"align-middle mr-2 fab fa-fw fa-snapchat"}),a("span",{staticClass:"indicator"},[t._v("0")])])]),a("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-right py-0",attrs:{"aria-labelledby":"messagesDropdown"}},[a("div",{staticClass:"dropdown-menu-header"},[a("div",{staticClass:"position-relative"},[t._v("Yeni mesaj yoktur.")])]),a("div",{staticClass:"list-group"}),a("div",{staticClass:"dropdown-menu-footer"},[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Tüm mesajları göster")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-icon dropdown-toggle",attrs:{href:"#",id:"alertsDropdown","data-toggle":"dropdown"}},[a("div",{staticClass:"position-relative"},[a("i",{staticClass:"align-middle mr-2 fas fa-fw fa-bell-slash"})])]),a("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-right py-0",attrs:{"aria-labelledby":"alertsDropdown"}},[a("div",{staticClass:"dropdown-menu-header"},[t._v("0 Adet Bildirim")]),a("div",{staticClass:"list-group"}),a("div",{staticClass:"dropdown-menu-footer"},[a("a",{staticClass:"text-muted",attrs:{href:"#"}},[t._v("Tüm Bildirimleri Göster")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-icon dropdown-toggle d-inline-block d-sm-none",attrs:{href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"align-middle",attrs:{"data-feather":"settings"}})])}],b={data:function(){return{FirstName:"",LastName:""}},mounted:function(){this.FirstName=JSON.parse(localStorage.getItem("user")).FirstName,this.LastName=JSON.parse(localStorage.getItem("user")).LastName},methods:{logout:function(){localStorage.clear(),location.reload()}}},k=b,C=Object(m["a"])(k,h,g,!1,null,null,null),w=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row text-muted"},[a("div",{staticClass:"col-6 text-left"}),a("div",{staticClass:"col-6 text-right"},[a("p",{staticClass:"mb-0"},[t._v("\n            © 2019 -\n            "),a("router-link",{staticClass:"text-muted",attrs:{to:"/"}},[t._v("Powered By ABY")])],1)])])])])},y=[],S={},_=S,$=Object(m["a"])(_,x,y,!1,null,null,null),N=$.exports,E=a("9dd0"),T={name:"TheContainer",components:{Sidebar:v,Header:w,Footer:N,Content:E["default"]},data:function(){return{}},mounted:function(){localStorage.getItem("token");this.$http.get("".concat(d["a"].ip,"/api/user/projeler")).then((function(t){localStorage.setItem("projects",n()(t.data))}))}},F=T,I=(a("87e5"),Object(m["a"])(F,s,r,!1,null,null,null));e["default"]=I.exports},"7f7f":function(t,e,a){var s=a("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,n="name";n in r||a("9e1e")&&s(r,n,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"87e5":function(t,e,a){"use strict";var s=a("7f17"),r=a.n(s);r.a},"9dd0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.ifserinumber,expression:"ifserinumber"}],staticClass:"col-md-6",attrs:{id:"seriolan"}},[a("label",[t._v(t._s(t.Usttanim))]),a("form",{attrs:{id:"loginform"}},[t.serimi?[a("div",{staticClass:"form-group"},[a("label",[t._v("Seri Numarası")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.seritext,expression:"seritext"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Seri Numarasını Giriniz",required:""},domProps:{value:t.seritext},on:{input:function(e){e.target.composing||(t.seritext=e.target.value)}}})]),t.ipmi?a("div",{staticClass:"form-group"},[a("label",[t._v("İp Adresi")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ipaddress,expression:"ipaddress"}],staticClass:"form-control",attrs:{type:"text",placeholder:"İp Adresini Giriniz",required:""},domProps:{value:t.ipaddress},on:{input:function(e){e.target.composing||(t.ipaddress=e.target.value)}}})]):t._e()]:a("div",{staticClass:"custom-control custom-checkbox form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.altyapicheck,expression:"altyapicheck"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customControlAutosizing"},domProps:{checked:Array.isArray(t.altyapicheck)?t._i(t.altyapicheck,null)>-1:t.altyapicheck},on:{change:function(e){var a=t.altyapicheck,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=null,n=t._i(a,i);s.checked?n<0&&(t.altyapicheck=a.concat([i])):n>-1&&(t.altyapicheck=a.slice(0,n).concat(a.slice(n+1)))}else t.altyapicheck=r}}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customControlAutosizing"}},[t._v("İşlem Tamamlandı mı?")])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"custom-file"},[a("input",{ref:"myFiles",staticClass:"custom-file-input",attrs:{type:"file",id:"validatedCustomFile",required:""},on:{change:t.previewFiles}}),a("label",{staticClass:"custom-file-label",attrs:{for:"validatedCustomFile"}},[t._v(t._s(t.value))])]),a("hr"),a("div",{staticClass:"form-group mb-0 text-center"},[a("button",{staticClass:"btn btn-primary mr-4",attrs:{type:"submit"},on:{click:t.kaydet}},[t._v("Kaydet")]),a("button",{staticClass:"btn btn-warning",attrs:{type:"submit"},on:{click:function(e){t.ifserinumber=!1}}},[t._v("İptal")])])])],2)])])},r=[],i=(a("4917"),a("7f7f"),a("bd9f")),n=a("3d20"),o=a.n(n),l=a("1aa2"),c={data:function(){return{Usttanim:"",ifserinumber:!1,seritext:"",selectedFile:"",ipaddress:"",altyapicheck:!1,serimi:!1,value:"",ipmi:!1,selectedid:0,Stokcode:""}},created:function(){var t=this;i["a"].$on("leftclicksidebar",(function(t){})),i["a"].$on("closecontent",(function(e){t.ifserinumber=!1})),i["a"].$on("sidebarok",(function(e){console.log(document.querySelector("a[data-id='"+t.$route.params.id+"']")),document.querySelector("a[data-id='"+t.$route.params.id+"']").style.backgroundColor="#f1e7296e",t.parantac(document.querySelector("a[data-id='"+t.$route.params.id+"']"))})),this.solclick(this.$route.params.id)},watch:{$route:"solclick"},methods:{previewFiles:function(t){this.value=this.$refs.myFiles.files[0].name,this.selectedFile=t.target.files[0]},parantac:function(t){if("UL"!==t.tagName||t.classList.contains("tree")){if(t.classList.contains("tree"))return}else t.classList.toggle("closed"),t.previousElementSibling.classList.toggle("tree-control-open");this.parantac(t.parentElement)},solclick:function(){var t=this,e=this.$route.params.id;this.$http.post("".concat(l["a"].ip,"/api/users/idyegorecek"),{id:e}).then((function(a){t.ifserinumber=!0,t.selectedid=e,t.Usttanim=a.data.UstTanim;var s=a.data.rowdata;t.Stokcode=s.Stokcode,"1"==s.SerinoTakip?("1"==s.IpTakip?(t.ipmi=!0,null===s.Ipaddress?t.ipaddress="":t.ipaddress=s.Ipaddress):t.ipmi=!1,t.serimi=!0,null===s.SeriNo?t.seritext="":t.seritext=s.SeriNo):"1"==s.AltYapiTakip?(t.serimi=!1,"true"===s.SeriNo?t.altyapicheck=!0:t.altyapicheck=!1):(t.ifserinumber=!1,t.seritext="")}))},kaydet:function(t){var e=this,a=this;t.preventDefault();var s=new FormData;s.append("Stokcode",this.Stokcode),this.serimi?(s.append("serinumber",this.seritext),s.append("file",this.selectedFile),s.append("id",this.selectedid),this.ipmi&&s.append("ipaddress",this.ipaddress)):(s.append("serinumber",this.altyapicheck),s.append("file",this.selectedFile),s.append("id",this.selectedid)),""!==this.seritext&&""!==this.selectedFile||!1===this.serimi&&""!==this.selectedFile?this.ValidateIPaddress(this.ipaddress)||!1===this.serimi?this.$http.post("".concat(l["a"].ip,"/api/users/serinokaydet"),s).then((function(t){t.data.succes?(o.a.fire("",t.data.msg,"success"),i["a"].$emit("contentsave",{selectedid:e.selectedid,seritext:e.seritext,ipaddress:e.ipaddress}),document.getElementById("loginform").reset(),a.value="Resim seç",e.ifserinumber=!1):o.a.fire("",t.data.msg,"error")})).catch((function(t){console.log(t)})):o.a.fire("","Geçerli bir ip adresi giriniz.","error"):o.a.fire("","Tüm alanlar doldurulmalıdır.","error")},ValidateIPaddress:function(t){var e=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return!!t.match(e)}}},d=c,u=a("2877"),p=Object(u["a"])(d,s,r,!1,null,null,null);e["default"]=p.exports},a21f:function(t,e,a){var s=a("584a"),r=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},b0c5:function(t,e,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},bd9f:function(t,e,a){"use strict";var s=a("2b0e");e["a"]=new s["a"]},f499:function(t,e,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-43d9feba.e09d7d51.js.map