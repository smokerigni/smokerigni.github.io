(this["webpackJsonpsmokerigni.github.io"]=this["webpackJsonpsmokerigni.github.io"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(4),a=n.n(c),r=(n(10),n(11),n(2)),l=(n(12),n(0)),o=function(){return Object(l.jsx)("span",{className:"code-cursor",children:"_"})},d=function(e){var t=e.handleReset;return Object(l.jsx)("span",{className:"option-inline",onClick:function(e){e.preventDefault(),t()},children:'Reset contact "form"'})},j=Object.freeze({JOB:"job.",FREELANCE:"freelance activities.",HELLO:"...i have no question, just want to push this button."}),b="i have no question, just want to push this button.",h="i would like to contact you. I have some questions about your ",m=function(){var e,t=Object(i.useState)(""),n=Object(r.a)(t,2),c=n[0],a=n[1],m=Object(i.useState)(""),u=Object(r.a)(m,2),g=u[0],f=u[1],p=function(t){t.preventDefault(),f(c===j.HELLO?b:h),clearInterval(e),a(t.currentTarget.innerHTML)};Object(i.useEffect)((function(){if(console.log("Reason changed"),""===c){f("");var t=0;e=setInterval((function(){t<h.length?(console.log("not equals, setTyped",h.substring(0,t+1)),f(h.substring(0,t+1)),t++):(console.log("clear"),clearInterval(e))}),65)}else f(c===j.HELLO?b:h);return function(){return clearInterval(e)}}),[c]);return Object(l.jsxs)("div",{className:"contact-code-block w-100 m-auto",children:[Object(l.jsx)("h2",{children:"Get in touch"}),Object(l.jsxs)("div",{className:"code-styled p-3",children:["Contact PowerShell",Object(l.jsx)("br",{}),"Copyright (C) Smokerigni. All rights reserved.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"PS Web:\\",">",'get-in-touch -message="- Hi Ign\xe1c, ',Object(l.jsx)("span",{children:g}),""===c?Object(l.jsx)(o,{}):c!==j.HELLO?c:"",'"',function(){switch(c){case j.JOB:return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("br",{}),">"," You can contact me at ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/smokerigni/",target:"_blank",children:"linkedin"}),"."]});case j.FREELANCE:return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("br",{}),">"," Send me a message via ",Object(l.jsx)("a",{href:"mailto:smokerigni@gmail.com",children:"email"}),"!"]});case j.HELLO:return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("br",{}),">"," I know, this is a nice button. Treat it gently. ;)"]});default:return Object(l.jsx)(s.a.Fragment,{})}}(),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),""===c?Object(l.jsx)("div",{className:"w-100 ",children:Object.entries(j).map((function(e,t){var n=Object(r.a)(e,2),i=n[0],s=n[1];return Object(l.jsx)("span",{className:"option-inline",onClick:p,children:s},i)}))}):Object(l.jsx)(d,{handleReset:function(){return a("")}})]})]})},u=(n(14),n.p+"static/media/react.928f956d.svg"),g=n.p+"static/media/redux.0e4fb1c8.svg",f=n.p+"static/media/node.615ffbea.svg",p=n.p+"static/media/typescript.a6305a73.svg",x=n.p+"static/media/javascript.00f3e5cf.svg",O=n.p+"static/media/electron.d384e8b4.svg",v=n.p+"static/media/php.7c41b199.svg",w=n.p+"static/media/sass.8aa78a83.svg",y=n.p+"static/media/css3.4e47c312.svg",k=n.p+"static/media/html5.f318c8b1.svg",N=function(e){var t=e.img,n=e.label;return Object(l.jsxs)("figure",{className:"tech-badge d-flex flex-wrap justify-content-center align-items-center",children:[Object(l.jsx)("img",{className:"w-100",alt:n,src:t}),Object(l.jsx)("figcaption",{className:"w-100 align-self-end text-center",children:n})]})},I=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=(t[0],t[1],[{img:u,label:"Reactjs"},{img:g,label:"Redux"},{img:f,label:"NodeJS"},{img:p,label:"Typescript"},{img:x,label:"Javascript"},{img:O,label:"Electron"},{img:w,label:"SASS"},{img:y,label:"CSS3"},{img:k,label:"HTML5"},{img:v,label:"PHP"}]);return Object(l.jsx)("div",{className:"skills-technologies row",children:n.map((function(e){return Object(l.jsx)(N,{img:e.img,label:e.label},e.label)}))})},C=(n(15),[{keyCode:37,keyName:"left"},{keyCode:38,keyName:"up"},{keyCode:39,keyName:"right"},{keyCode:40,keyName:"down"},{keyCode:65,keyName:"a"},{keyCode:66,keyName:"b"}]),S=["up","up","down","down","left","right","left","right","b","a"],T=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),o=Object(r.a)(a,2),d=o[0],j=o[1],b=function(e){j(!1);var t=C.find((function(t){return t.keyCode===e.keyCode})),i=S[n];void 0!==t&&t.keyName===i?(console.log(n,S.length),n+1===S.length?(h(),c(0)):c(n+1)):c(0)},h=function(){j(!0)};return Object(i.useEffect)((function(){return window.addEventListener("keydown",b),function(){window.removeEventListener("keydown",b)}}),[n]),d?Object(l.jsx)("div",{id:"konami",className:"d-flex w-100 h-100 justify-content-center align-items-center",children:Object(l.jsxs)("div",{className:"h-100 w-100 embed-responsive",children:[Object(l.jsx)("iframe",{className:"w-100 h-100",src:"https://www.youtube-nocookie.com/embed/mHONNcZbwDY?controls=0&autoplay=1&start=79",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(l.jsx)("div",{className:"konami-layer",children:Object(l.jsx)("div",{className:"d-flex w-100 h-100 align-items-center justify-content-center",children:Object(l.jsx)("div",{className:"col-12 col-md-8 col-lg-6",children:Object(l.jsxs)("div",{className:"message-box",children:[Object(l.jsxs)("h1",{children:["Hello! ",Object(l.jsx)("br",{}),"Is it me you're looking for?"]}),Object(l.jsx)("p",{children:'Press any key to hide this "easter egg" or the button below'}),Object(l.jsx)("button",{onClick:function(){return j(!1)},children:"Return to content"})]})})})})]})}):Object(l.jsx)(s.a.Fragment,{})},E=(n(16),function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],a=function(){c(!n)},o=function(e){e.preventDefault();var t=e.currentTarget.getAttribute("href"),n=null!==t?document.querySelector(t):null;null!==n&&n.scrollIntoView({behavior:"smooth"}),a()};return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("nav",{className:(n?"open":"closed")+" d-flex justify-content-center flex-wrap align-items-center",children:[Object(l.jsxs)("div",{className:"menu-toggle align-self-start d-flex align-items-center justify-content-center",onClick:a,children:[Object(l.jsx)("span",{className:"menu-toggle-label-segment",children:"m"}),Object(l.jsxs)("span",{className:"bars",children:[Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"})]}),Object(l.jsx)("span",{className:"menu-toggle-label-segment",children:"nu"})]}),Object(l.jsx)("div",{className:"close-layer position-absolute",onClick:a}),Object(l.jsxs)("ul",{className:"position-relative align-self-baseline list-unstyled w-100",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{onClick:o,href:"#hello",children:"Hello"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{onClick:o,href:"#skills",children:"Skills"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{onClick:o,href:"#about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{onClick:o,href:"#contact",children:"Contact"})})]})]})})}),H=(n(17),n(5)),L=function(e){var t=e.interval,n=e.position,i=e.features,s=e.corporation,c=e.website;return Object(l.jsxs)("div",{className:"by-year d-flex flex-wrap",children:[Object(l.jsx)("div",{className:"yr",children:t}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("b",{children:n})}),i.length>0&&Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:"list-unstyled features",children:i.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})}),Object(l.jsx)("div",{children:s}),void 0!==c&&Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:c})})]})]})},F=function(){return Object(l.jsx)(s.a.Fragment,{children:[{interval:"1992",position:"",features:["@smokerigni version 1.0 released"],corporation:"",website:""},{interval:"2013, 2020",position:"fullstack developer",features:["PHP MVC custom development, database design","unique frontend","redesign and refactor in 2020"],corporation:"Patk\xf3s St\xfadi\xf3",website:"https://patkosstudio.hu/"},{interval:"2015",position:"system administrator",features:["Windows server (AD)","100+ clients"],corporation:"Damjanich J\xe1nos Gimn\xe1zium",website:"https://djg.hu/"},{interval:"2013 \u2013 2016",position:"fullstack developer",features:["custom PHP MVC","online journal engine"],corporation:"The University of Texas at Austin and ELTE (T\xc1MOP 4.1.2.)"},{interval:"2015 \u2013 2017",position:"fullstack developer",features:["custom sites using PHP and JS","Joomla, Wordpress, Drupal, other CMS"],corporation:"Feh\xe9r Rendszerh\xe1z Informatikai Kft.",website:"https://frik.hu/"},{interval:"2017 - 2021",position:"frontend developer (React)",features:["software UI development","completed several projects including a conference webapp, content sharing webapp prototype"],corporation:"MaxWhere",website:"https://www.maxwhere.com/"}].map((function(e,t){return Object(l.jsx)(L,Object(H.a)({},e),t)}))})},P=function(){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("p",{children:"My name is Ign\xe1c T\xf6r\xf6k. Having eight years' experience in structuring, I have acquired proficient web developing skills, both at developing and at implementing interactive web services. My actual focus is the frontend with Reactjs."}),Object(l.jsx)("p",{children:"At the beginning of my professional career, I designed minor web works. As a result, a couple of relatively simple, custom-built webpages were established as well as a few mini-games in Unity. This period was an impressive learning phase, for these early successes indeed had a great impact on me and encouraged me to continuously engage in this field."}),Object(l.jsx)("p",{children:"After I had obtained a web programming degree, I first cooperated in the development of an online journal engine. Then I started working in a high school as system monitoring administrator."}),Object(l.jsx)("h3",{children:"Back to school"}),Object(l.jsxs)("p",{children:["There were 136 clients and 3 servers in the high school \u2013 I was in charge of maintaining all the machines and network devices, both software and hardware. I worked really hard and often went to the office on weekends, too. However, I have gained a handful of experience and a deeper apprehension in understanding larger systems.",Object(l.jsx)("br",{}),"For programming fits rather to my interests than repairing, I left the job after almost a year."]}),Object(l.jsx)("h3",{children:"Hello world"}),Object(l.jsx)("p",{children:"Later on, I was employed by a company in Buda\xf6rs, which dealt with web development and system maintenance. Actually, the complete repertoire included web development, system administrator services, (e-)commerce, and IT consulting. I worked there as a midlevel PHP developer between 2015 and 2017. This environment also provided me specific experiences in terms of corporate governance, operating customer services and frameworks. Previously, I had been operating all by myself, but then I learnt a lot about teamwork and what it is like being the part of a seven-member team."}),Object(l.jsx)("h3",{children:"MaxWhere, the future's software"}),Object(l.jsx)("p",{children:"I first met the MaxWhere team in 2016, when they were looking for a user interface developer. They shared their interesting ideas with me, and \u2013 since I liked their software \u2013 I decided to be the part of this project in January 2017."}),Object(l.jsx)("p",{children:"This software proved its potential serving as a rich location of future\u2019s education and collaboration. The original idea was an innovative presentation tool, which now is suitable for a much more diverse usage. Worked closely with the UX team, my task was to develop the user interface of the software."}),Object(l.jsx)("h3",{children:"Present, future"}),Object(l.jsx)("p",{children:"Open to work!"})]})},R=function(){var e=Object(i.useState)("short"),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)("section",{id:"about",className:"row h-100 align-items-center justify-content-center",children:Object(l.jsxs)("div",{className:"col-12 col-lg-6 col-md-8",children:[Object(l.jsx)("h2",{children:"About me"}),Object(l.jsxs)("div",{className:"about-switch row row-cols-2",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{onClick:function(){return c("short")},className:"tab even d-flex align-items-center justify-content-center"+("short"===n?" active":""),children:"Chronology"})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{onClick:function(){return c("long")},className:"tab odd d-flex align-items-center justify-content-center"+("long"===n?" active":""),children:"Story"})})]}),"short"===n?Object(l.jsx)(F,{}):Object(l.jsx)(P,{})]})})})},A=function(){var e=Object(i.useRef)(null),t=function(t){var n=e.current;if(null!==n){var i=n.parentElement,s=(null===i||void 0===i?void 0:i.offsetHeight)||0,c=(null===i||void 0===i?void 0:i.getBoundingClientRect().top)||0;if(console.log(s,c),s+c>0){var a=(100-Number(((s+c)/s*100).toFixed(0)))/5*2;n.style.transform="translate(-50%, -"+a+"%)"}}};return Object(i.useEffect)((function(){return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}})),Object(l.jsx)("div",{ref:e,className:"image-layer position-absolute"})},M=function(){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)(E,{}),Object(l.jsx)("article",{className:"content",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsxs)("header",{id:"hello",className:"row align-items-center justify-content-center position-relative",children:[Object(l.jsx)(A,{}),Object(l.jsx)("div",{className:"position-relative col-10 col-lg-4 col-md-8",children:Object(l.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(l.jsxs)("h1",{className:"w-100",children:["Hello. It's me.",Object(l.jsx)("span",{children:"@smokerigni"})]}),Object(l.jsx)("div",{className:"sub-h1",children:"Frontend developer"}),Object(l.jsx)("p",{className:"d-none",children:"My name is Ign\xe1c T\xf6r\xf6k. Having eight years' experience in structuring, I have acquired proficient web developing skills, both at developing and at implementing interactive web services. My actual focus is the frontend with Reactjs."})]})})]}),Object(l.jsxs)("div",{id:"konami-tooltip",className:"text-center p-3",children:[Object(l.jsx)("i",{className:"bi bi-egg-fill"}),Object(l.jsx)("i",{className:"bi bi-egg-fill"}),Object(l.jsx)("i",{className:"bi bi-egg-fill"}),"Easter egg: Konami code works on this site"]}),Object(l.jsx)("section",{id:"skills",className:"row align-items-center justify-content-center",children:Object(l.jsxs)("div",{className:"col-12 col-lg-6 col-md-8",children:[Object(l.jsx)("h2",{children:"Skills"}),Object(l.jsx)("h3",{children:"Objective"}),Object(l.jsx)("p",{children:"Gained experience in UI/UX design by working as a web developer for nearly 8 years. I like facing challenges and provide neat solutions using the best tools available."}),Object(l.jsx)("h3",{children:"Knowledge"}),Object(l.jsx)("h4",{children:"Technologies"}),Object(l.jsx)(I,{}),Object(l.jsx)("h4",{children:"Software"}),"WebStorm, Apache NetBeans, VSCode, Xampp, Git, Notepad++, Sublime"]})}),Object(l.jsx)(R,{}),Object(l.jsx)("section",{id:"contact",className:"row h-100 align-items-center justify-content-center",children:Object(l.jsxs)("div",{className:"col-12 col-lg-6 col-md-8",children:[Object(l.jsx)(m,{}),Object(l.jsxs)("div",{className:"quick-contact-actions row row-cols-lg-2 row-cols-1",children:[Object(l.jsxs)("div",{className:"col d-flex align-items-center my-3",children:[Object(l.jsx)("i",{className:"bi bi-envelope"}),Object(l.jsx)("a",{href:"mailto:smokerigni@gmail.com",children:"smokerigni@gmail.com"})]}),Object(l.jsxs)("div",{className:"col d-flex align-items-center my-3",children:[Object(l.jsx)("i",{className:"bi bi-phone-vibrate"}),Object(l.jsx)("a",{href:"tel:+36317826113",children:"+36317826113"})]}),Object(l.jsxs)("div",{className:"col d-flex align-items-center my-3",children:[Object(l.jsx)("i",{className:"bi bi-linkedin"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/smokerigni/",target:"_blank",children:"Linkedin"})]}),Object(l.jsxs)("div",{className:"col d-flex align-items-center my-3",children:[Object(l.jsx)("i",{className:"bi bi-github"}),Object(l.jsx)("a",{href:"https://github.com/smokerigni",target:"_blank",children:"GitHub"})]})]})]})}),Object(l.jsx)("footer",{className:"row",children:Object(l.jsx)("p",{children:"\xa9 2018-2021 @smokerigni"})})]})}),Object(l.jsx)(T,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("app")),J()}],[[18,1,2]]]);
//# sourceMappingURL=main.4ea43c3f.chunk.js.map