(function(e){function t(t){for(var r,a,o=t[0],l=t[1],s=t[2],p=0,f=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),i()}function i(){for(var e,t=0;t<c.length;t++){for(var i=c[t],r=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},c=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=l;c.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"073e":function(e,t,i){"use strict";i("4bbe")},"1f4d":function(e,t,i){e.exports=i.p+"img/marbel.3eb75e8c.jpg"},"26b2":function(e,t,i){},"29d5":function(e,t,i){e.exports=i.p+"img/BasilAndPestoHummus.a96032fe.jpg"},"2d1e":function(e,t,i){var r={"./BananaOatmealCookie.jpg":"8eea","./BasilAndPestoHummus.jpg":"29d5","./BlackBeanandRiceEnchiladas.jpg":"bd5d","./FourCheeseMargheritaPizza.jpg":"6c4d","./HomemadeBlackBeanVeggieBurgers.jpg":"ff9d","./MarinatedGrilledShrimp.jpg":"657c","./hero.jpg":"ae48","./marbel.jpg":"1f4d"};function n(e){var t=c(e);return i(t)}function c(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id="2d1e"},"4bbe":function(e,t,i){},5132:function(e,t,i){"use strict";i("8f85")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("7a23");i("4de4");function n(e,t,i,n,c,a){var o=Object(r["k"])("nav-bar"),l=Object(r["k"])("recipe-list"),s=Object(r["k"])("the-footer");return Object(r["g"])(),Object(r["c"])(r["a"],null,[Object(r["f"])(o,{onFilterEmit:a.setFilter},null,8,["onFilterEmit"]),Object(r["f"])(l,{is:e.currentPage,recipeData:e.recipeData,filter:e.filter},null,8,["is","recipeData","filter"]),Object(r["f"])(s)],64)}i("d3b7");var c=i("f0d8"),a=i.n(c),o=Object(r["r"])("data-v-727faa6b");Object(r["i"])("data-v-727faa6b");var l=Object(r["f"])("a",{href:"https://www.fostr.io/"},[Object(r["f"])("img",{src:a.a,alt:""})],-1),s=Object(r["d"])('<option value="" selected disabled data-v-727faa6b>filter</option><option value="all" selected data-v-727faa6b>All</option><option value="title" data-v-727faa6b>Title</option><option value="ingredients" data-v-727faa6b>Ingredients</option><option value="tags" data-v-727faa6b>Tags</option><option value="description" data-v-727faa6b>Description</option>',6),u=Object(r["f"])("button",null,"Submit",-1);Object(r["h"])();var p=o((function(e,t,i,n,c,a){return Object(r["g"])(),Object(r["c"])("nav",{class:{black:e.pastHero}},[l,Object(r["f"])("form",{onSubmit:t[4]||(t[4]=Object(r["q"])((function(e){return a.filterEmit()}),["prevent"]))},[Object(r["p"])(Object(r["f"])("input",{name:"search",type:"text",placeholder:"search","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.filterInput=t})},null,512),[[r["o"],e.filterInput]]),Object(r["p"])(Object(r["f"])("select",{name:"filter",id:"filter","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.filterOption=t})},[s],512),[[r["n"],e.filterOption]]),Object(r["f"])("button",{onClick:t[3]||(t[3]=function(e){return a.resetFilter()})},"Reset"),u],32)],2)})),f={name:"NavBarBlock",data:function(){return{filterInput:"",filterOption:"",pastHero:!1}},created:function(){window.addEventListener("scroll",this.changeColour)},methods:{resetFilter:function(){this.filterOption="",this.filterInput=""},filterEmit:function(){this.$emit("filter-emit",this.filterInput,this.filterOption),this.scrollPosition=window.scrollY,this.screenHeight=.85*window.innerHeight,window.scrollTo(0,this.screenHeight)},changeColour:function(){this.scrollPosition=window.scrollY,this.screenHeight=.75*window.innerHeight,this.scrollPosition>this.screenHeight?this.pastHero=!0:this.pastHero=!1}}};i("5132");f.render=p,f.__scopeId="data-v-727faa6b";var b=f,d=Object(r["r"])("data-v-3b2095e4");Object(r["i"])("data-v-3b2095e4");var j=Object(r["d"])('<div data-v-3b2095e4><b data-v-3b2095e4><a href="mailto:hello@fostr.io" data-v-3b2095e4>hello@fostr.io</a></b><br data-v-3b2095e4><a href="https://www.fostr.io/privacy-policy" data-v-3b2095e4>Privacy Policy</a></div><div data-v-3b2095e4><b data-v-3b2095e4>Availability</b><br data-v-3b2095e4><span class="footer-availability" data-v-3b2095e4>Booking projects for Q2 2021</span></div><div data-v-3b2095e4><b data-v-3b2095e4>Follow:</b><section class="socials" data-v-3b2095e4><a href="https://twitter.com/fostr_io" data-v-3b2095e4>Twitter</a><a href="https://www.instagram.com/fostr.io/" data-v-3b2095e4>Instagram</a><a href="https://www.linkedin.com/company/fostr-io" data-v-3b2095e4>Linkedin</a></section></div>',3);Object(r["h"])();var O=d((function(e,t,i,n,c,a){return Object(r["g"])(),Object(r["c"])("footer",null,[j])})),m={name:"TheFooter"};i("de22");m.render=O,m.__scopeId="data-v-3b2095e4";var h=m,v=Object(r["r"])("data-v-2c20ac35"),g=v((function(e,t,i,n,c,a){var o=Object(r["k"])("recipe-list-item");return Object(r["g"])(),Object(r["c"])(r["a"],null,[(Object(r["g"])(),Object(r["c"])(Object(r["l"])(e.currentPage),{recipeData:i.recipeData,recipeTitle:e.currentRecipe},null,8,["recipeData","recipeTitle"])),Object(r["f"])("main",null,[Object(r["f"])("ul",null,[(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(a.filteredData,(function(e){return Object(r["g"])(),Object(r["c"])(o,{onClick:function(t){return a.emitTitle(e.title)},key:e.title,id:e.title,title:e.title,prepTime:e.prep_time_min,cookTime:e.cook_time_min,recipe:e},null,8,["onClick","id","title","prepTime","cookTime","recipe"])})),128))])])],64)})),y=(i("caad"),i("2532"),Object(r["r"])("data-v-946cb4cc"));Object(r["i"])("data-v-946cb4cc");var k=Object(r["f"])("div",{class:"overlay"},[Object(r["f"])("section",null,[Object(r["f"])("h1",null,[Object(r["f"])("span",null,"Fostr Foods"),Object(r["e"])(" favourite recipes to try from home")])])],-1);Object(r["h"])();var w=y((function(e,t,i,n,c,a){return Object(r["g"])(),Object(r["c"])("header",null,[k])})),T={name:"hero"};i("8092");T.render=w,T.__scopeId="data-v-946cb4cc";var _=T,P=Object(r["r"])("data-v-3aeb9056");Object(r["i"])("data-v-3aeb9056");var C={href:"#app"},B={class:"imageContainer"},D={key:1,src:a.a,alt:"Image not Loaded"},x={class:"textContainer"},F=Object(r["e"])(" Prep Time: "),I=Object(r["e"])(" Cooking Time: ");Object(r["h"])();var S=P((function(e,t,i,n,c,a){return Object(r["g"])(),Object(r["c"])("a",C,[Object(r["f"])("div",B,[e.imagePresent?(Object(r["g"])(),Object(r["c"])("img",{key:0,src:a.imageCompute(),alt:"image not available"},null,8,["src"])):(Object(r["g"])(),Object(r["c"])("img",D))]),Object(r["f"])("div",x,[Object(r["f"])("h1",null,Object(r["m"])(i.recipe.title),1),Object(r["f"])("section",null,[Object(r["f"])("h5",null,[F,Object(r["f"])("span",null,Object(r["m"])(i.prepTime)+" mins ",1)]),Object(r["f"])("h5",null,[I,Object(r["f"])("span",null,Object(r["m"])(i.cookTime)+" mins ",1)])])])])})),H=(i("5319"),i("ac1f"),{name:"RecipeListItem",data:function(){return{image:"",imagePresent:!0}},props:{title:{type:String,required:!0},recipe:{},prepTime:{type:String,default:"N/A"},cookTime:{type:String,default:"N/A"},id:{}},methods:{imageCompute:function(){try{var e=i("2d1e")("./".concat(this.title.replace(/\s/g,""),".jpg"));return e}catch(t){return this.imagePresent=!1}}}});i("7c26");H.render=S,H.__scopeId="data-v-3aeb9056";var L=H,R=(i("a4d3"),i("e01a"),i("b0c0"),Object(r["r"])("data-v-4d55ace6"));Object(r["i"])("data-v-4d55ace6");var A={class:"list"},E={class:"ingredients"},M=Object(r["e"])("Ingredients "),N={class:"serve"},z={class:"directions"},q=Object(r["f"])("h2",null,"Directions:",-1);Object(r["h"])();var U=R((function(e,t,i,n,c,a){var o=Object(r["k"])("prep-time");return Object(r["g"])(),Object(r["c"])("header",null,[Object(r["f"])("div",null,[Object(r["f"])("section",null,[Object(r["f"])("h1",null,Object(r["m"])(a.recipe.title),1),Object(r["f"])(o,{prepTime:a.recipe.prep_time_min,cookTime:a.recipe.cook_time_min},null,8,["prepTime","cookTime"]),Object(r["f"])("p",null,[Object(r["e"])(Object(r["m"])(a.recipe.description)+" By ",1),Object(r["f"])("a",{href:a.recipe.author.url},Object(r["m"])(a.recipe.author.name),9,["href"])])]),Object(r["f"])("section",A,[Object(r["f"])("ul",E,[Object(r["f"])("h2",null,[M,Object(r["f"])("span",N,"- Serving Size "+Object(r["m"])(a.recipe.servings),1)]),(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(a.recipe.ingredients,(function(e){return Object(r["g"])(),Object(r["c"])("li",{key:e},Object(r["m"])(e),1)})),128))]),Object(r["f"])("ol",z,[q,(Object(r["g"])(!0),Object(r["c"])(r["a"],null,Object(r["j"])(a.recipe.directions,(function(e){return Object(r["g"])(),Object(r["c"])("li",{key:e},Object(r["m"])(e),1)})),128))])])])])})),V=(i("7db0"),Object(r["r"])("data-v-5974e42f"));Object(r["i"])("data-v-5974e42f");var G=Object(r["e"])(" Prep Time: "),J=Object(r["e"])(" Cooking Time: ");Object(r["h"])();var Y=V((function(e,t,i,n,c,a){return Object(r["g"])(),Object(r["c"])("section",null,[Object(r["f"])("h5",null,[G,Object(r["f"])("span",null,Object(r["m"])(i.prepTime)+" mins ",1)]),Object(r["f"])("h5",null,[J,Object(r["f"])("span",null,Object(r["m"])(i.cookTime)+" mins ",1)])])})),Q={name:"prepTime",props:{prepTime:{type:String,default:"N/A"},cookTime:{type:String,default:"N/A"}}};i("073e");Q.render=Y,Q.__scopeId="data-v-5974e42f";var $=Q,K={name:"RecipeCardBlock",components:{prepTime:$},props:{recipeData:{type:Array,required:!0},recipeTitle:{type:String,required:!0}},computed:{recipe:function(){var e=this,t=this.recipeData.find((function(t){return t.title.toLowerCase()==e.recipeTitle.toLowerCase()}));return t}}};i("68cf");K.render=U,K.__scopeId="data-v-4d55ace6";var W=K,X={name:"RecipeListBlock",components:{Hero:_,RecipeListItem:L,RecipeCard:W},props:{recipeData:{Type:Array},filter:{Type:Array}},data:function(){return{currentPage:"hero",currentRecipe:"banana oatmeal cookie"}},methods:{emitTitle:function(e){this.currentRecipe=e,this.currentPage="recipe-card"},stringFilter:function(e,t){var i=this.recipeData.filter((function(i){return i[t].toLowerCase().includes(e.toLowerCase())}));return i},arrayFilter:function(e,t){var i=this.recipeData.filter((function(i){return i[t.toLowerCase()].some((function(t){return t.includes(e.toLowerCase())}))}));return i}},computed:{filteredData:function(){return"title"==this.filter[1]||"description"==this.filter[1]?this.stringFilter(this.filter[0],this.filter[1]):"tags"==this.filter[1]||"ingredients"==this.filter[1]?this.arrayFilter(this.filter[0],this.filter[1]):this.recipeData}}};i("a520");X.render=g,X.__scopeId="data-v-2c20ac35";var Z=X,ee={name:"App",components:{NavBar:b,RecipeList:Z,RecipeCard:W,TheFooter:h},data:function(){return{recipeData:[],currentPage:"recipe-list",currentRecipe:"Basil and pesto Hummus",filter:["","all"]}},methods:{setFilter:function(e,t){this.filter=[e,t]},fetchData:function(){var e=this;fetch("https://recipes-36a72-default-rtdb.firebaseio.com/.json").then((function(t){t.ok?t.json().then((function(t){return console.log("fetched in recipe"),console.log(t),e.recipeData=t})):console.log("error - data not recieved via fetch")}))}},created:function(){this.fetchData()}};i("b10c");ee.render=n;var te=ee;Object(r["b"])(te).mount("#app")},"657c":function(e,t,i){e.exports=i.p+"img/MarinatedGrilledShrimp.da4629fd.jpg"},"68cf":function(e,t,i){"use strict";i("b902")},"6c4d":function(e,t,i){e.exports=i.p+"img/FourCheeseMargheritaPizza.b97bc071.jpg"},"7c26":function(e,t,i){"use strict";i("b989")},"7e89":function(e,t,i){},8092:function(e,t,i){"use strict";i("26b2")},"8eea":function(e,t,i){e.exports=i.p+"img/BananaOatmealCookie.728f81ad.jpg"},"8f85":function(e,t,i){},"9f27":function(e,t,i){},a520:function(e,t,i){"use strict";i("e2d4")},ae48:function(e,t,i){e.exports=i.p+"img/hero.de8917a6.jpg"},b10c:function(e,t,i){"use strict";i("7e89")},b902:function(e,t,i){},b989:function(e,t,i){},bd5d:function(e,t,i){e.exports=i.p+"img/BlackBeanandRiceEnchiladas.55adba7a.jpg"},de22:function(e,t,i){"use strict";i("9f27")},e2d4:function(e,t,i){},f0d8:function(e,t,i){e.exports=i.p+"img/fostrLogo.5bfd0056.png"},ff9d:function(e,t,i){e.exports=i.p+"img/HomemadeBlackBeanVeggieBurgers.53323da9.jpg"}});
//# sourceMappingURL=app.cdd61edd.js.map