import{d as t,u as e,b as s,r as a,o,e as n,a as i,c as l,f as r,g as c,t as f,h as u,_ as d,p as m,j as v,F as x,k as h,l as p,m as y}from"./app.9b16255e.js";function g(t,e){var s=t,a=e,o={_x:0,_y:0,x:0,y:0,updatePosition:function(t){var e=t||window.event;this.x=e.clientX-this._x,this.y=-1*(e.clientY-this._y)},setOrigin:function(t){this._x=t.offsetLeft+Math.floor(t.offsetWidth/2),this._y=t.offsetTop+Math.floor(t.offsetHeight/2)},show:function(){return"("+this.x+", "+this.y+")"}};o.setOrigin(s);var n=0,i=function(t){o.updatePosition(t),l((o.y/a.offsetHeight/2).toFixed(2),(o.x/a.offsetWidth/2).toFixed(2))},l=function(t,e){var s="rotateX("+40*t+"deg) rotateY("+40*e+"deg)";a.style.transform=s,a.style.webkitTransform=s,a.style.mozTranform=s,a.style.msTransform=s,a.style.oTransform=s};s.onmousemove=function(t){n++%10==0&&i(t)},s.onmouseleave=function(){a.style=""},s.onmouseenter=function(t){i(t)}}m("data-v-3ce25970");const k={key:0,class:"home-hero"},_={class:"\n        container\n        mx-auto\n        flex\n        <lg:flex-row\n        <lg:justify-center\n        <md:flex-col\n        <md:items-center\n      "},w=r("img",{src:"/vuecomponent-seed/banner.png",class:"block"},null,-1),b={class:"w-1/2 flex flex-col justify-center items-start p-16 <sm:w-full <sm:items-center <sm:p-0"},T={key:0,class:"relative font-sans text-6xl <md:text-3xl <md:text-center <md:w-full"},L=r("sub",{class:"absolute top-0 -right-16 text-2xl animate-text <sm:text-sm <sm:right-12"},"seed",-1),I={key:1,class:"text-base text-gray-500 lg:text-left"},j={class:"home-text-action <sm:w-full <sm:flex <sm:flex-col"};v();var A=t({setup(t){const{site:m,frontmatter:v}=e(),x=s((()=>{const{heroImage:t,heroText:e,tagline:s,actionLink:a,actionText:o}=v.value;return t||e||s||a&&o})),h=s((()=>v.value.heroText||m.value.title)),p=a(),y=a();return o((()=>{g(p.value,y.value)})),(t,e)=>n(x)?(i(),l("header",k,[r("section",_,[r("div",{ref:p,class:"w-1/2 <sm:w-auto"},[r("div",{ref:y,class:"inner"},[w],512)],512),r("div",b,[n(h)?(i(),l("p",T,[c(f(n(h))+" ",1),L])):u("v-if",!0),n(v).tagline?(i(),l("p",I,f(n(v).tagline),1)):u("v-if",!0),r("div",j,[n(v).actionLink&&n(v).actionText?(i(),l(d,{key:0,item:{link:n(v).actionLink,text:n(v).actionText},class:"action overflow-hidden rounded-full"},null,8,["item"])):u("v-if",!0),n(v).altActionLink&&n(v).altActionText?(i(),l(d,{key:1,item:{link:n(v).altActionLink,text:n(v).altActionText},class:"action alt overflow-hidden rounded-full <md:ml-0 lg:ml-4"},null,8,["item"])):u("v-if",!0)])])])])):u("v-if",!0)}});A.__scopeId="data-v-3ce25970",m("data-v-3f3ea9aa");const F={key:0,class:"home-features"},$={class:"wrapper"},H={class:"container"},M={class:"features"},O={key:0,class:"title"},P={key:1,class:"details"};v();var W=t({setup(t){const{frontmatter:a}=e(),o=s((()=>a.value.features&&a.value.features.length>0)),c=s((()=>a.value.features?a.value.features:[]));return(t,e)=>n(o)?(i(),l("div",F,[r("div",$,[r("div",H,[r("div",M,[(i(!0),l(x,null,h(n(c),((t,e)=>(i(),l("section",{key:e,class:"feature"},[t.title?(i(),l("h2",O,f(t.title),1)):u("v-if",!0),t.details?(i(),l("p",P,f(t.details),1)):u("v-if",!0)])))),128))])])])])):u("v-if",!0)}});W.__scopeId="data-v-3f3ea9aa",m("data-v-0a64a610");const X={key:0,class:"footer"},Y={class:"container"},z={class:"text"};v();var C=t({setup(t){const{frontmatter:s}=e();return(t,e)=>n(s).footer?(i(),l("footer",X,[r("div",Y,[r("p",z,f(n(s).footer),1)])])):u("v-if",!0)}});C.__scopeId="data-v-0a64a610",m("data-v-027d54b4");const q={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};v();var D=t({setup:t=>(t,e)=>{const s=p("Content");return i(),l("main",q,[r(A),y(t.$slots,"hero",{},void 0,!0),r(W),r("div",B,[r(s)]),y(t.$slots,"features",{},void 0,!0),r(C),y(t.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-027d54b4";export default D;
