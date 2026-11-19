import{a as e,i as t,n,r,t as i}from"./rolldown-runtime-BWaJ3C7D.js";import{i as a,n as o,t as s}from"./react-HlMtmGAJ.js";import{C as c,D as l,E as u,O as d,S as f,T as p,_ as m,a as h,b as g,c as _,d as v,f as y,g as b,h as ee,i as te,k as x,l as S,m as ne,n as C,o as re,p as ie,r as ae,s as oe,t as se,u as w,v as ce,w as le,x as ue,y as de}from"./ui-BSGzFa1d.js";import{a as fe,i as pe,n as me,o as he,r as ge,t as _e}from"./animation-CHXdh0jp.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var T=e(a(),1),ve=e(o(),1),E=s(),ye=[[`Expertise`,`expertise`],[`History`,`history`],[`Projects`,`projects`],[`Contact`,`contact`]],be=_e.create(S);function xe({mode:e,onModeChange:t}){let[n,r]=(0,T.useState)(!1),i=d(`(prefers-reduced-motion: reduce)`),a=pe(700),{scrollY:o}=fe(),s=me(()=>{let e=a.get(),t=e*.35,n=Math.max(t+1,e-96);return Math.max(0,Math.min(1,(o.get()-t)/(n-t)))}),c=ge(s,{stiffness:180,damping:30,restDelta:.001});(0,T.useEffect)(()=>{let e=document.querySelector(`.about-section`);if(!e)return;let t=()=>a.set(e.offsetHeight);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a]);function l(e){r(!1),document.getElementById(e)?.scrollIntoView({behavior:i?`instant`:`smooth`})}return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(f,{component:`nav`,"aria-label":`Main navigation`,id:`navigation`,elevation:0,children:(0,E.jsxs)(be,{className:`navigation-bar`,style:{"--nav-progress":i?s:c},children:[(0,E.jsx)(le,{color:`inherit`,"aria-label":`Open menu`,"aria-expanded":n,"aria-controls":n?`mobile-menu`:void 0,onClick:()=>r(!0),sx:{display:{sm:`none`}},children:(0,E.jsx)(C,{})}),(0,E.jsx)(le,{color:`inherit`,"aria-label":e===`dark`?`Switch to light mode`:`Switch to dark mode`,onClick:t,children:e===`dark`?(0,E.jsx)(te,{}):(0,E.jsx)(re,{})}),(0,E.jsx)(g,{className:`navigation-links`,sx:{display:{xs:`none`,sm:`flex`}},children:ye.map(([e,t])=>(0,E.jsx)(de,{sx:{color:`text.primary`},onClick:()=>l(t),children:e},t))})]})}),(0,E.jsx)(b,{open:n,onClose:()=>r(!1),sx:{display:{xs:`block`,sm:`none`},"& .MuiDrawer-paper":{width:240}},children:(0,E.jsxs)(g,{component:`nav`,"aria-label":`Mobile navigation`,id:`mobile-menu`,sx:{textAlign:`center`},children:[(0,E.jsx)(`p`,{className:`mobile-menu-top`,children:`Menu`}),(0,E.jsx)(m,{}),(0,E.jsx)(ne,{children:ye.map(([e,t])=>(0,E.jsx)(y,{disablePadding:!0,children:(0,E.jsx)(ie,{onClick:()=>l(t),children:(0,E.jsx)(v,{primary:e})})},t))})]})})]})}function Se(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`a`,{className:`social-link`,href:`https://github.com/ninisdyah`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Ninis Dyah Yulianingsih on GitHub`,children:(0,E.jsx)(h,{})}),(0,E.jsx)(`a`,{className:`social-link`,href:`https://www.linkedin.com/in/ninisdyah/`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Ninis Dyah Yulianingsih on LinkedIn`,children:(0,E.jsx)(ae,{})})]})}var D={pink:`#FFCED8`,blush:`#FFDDDD`,cream:`#FFF4DE`,peach:`#FFE8C4`,porcelain:`#FFF5F5`,rosePeach:`#F7D6D0`,dustyRose:`#E2B4BD`,charcoal:`#4A4A4A`};function O(e,t,n){return`#${[1,3,5].map(r=>{let i=parseInt(e.slice(r,r+2),16),a=parseInt(t.slice(r,r+2),16);return Math.round(i*n+a*(1-n))}).map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}var Ce={light:{page:D.porcelain,surface:D.cream,text:D.charcoal,secondary:O(D.charcoal,D.rosePeach,.88),section:D.peach,border:O(D.dustyRose,D.porcelain,.55),"accent-text":D.charcoal,"chip-bg":D.blush,"hero-glow":l(D.dustyRose,.2),"hero-start":D.pink,"hero-middle":D.cream,"hero-end":D.porcelain,nav:l(D.porcelain,.9)},dark:{page:D.charcoal,surface:O(D.charcoal,D.rosePeach,.94),text:D.porcelain,secondary:O(D.porcelain,D.charcoal,.84),section:O(D.charcoal,D.dustyRose,.9),border:O(D.dustyRose,D.charcoal,.48),"accent-text":D.cream,"chip-bg":O(D.charcoal,D.pink,.78),"hero-glow":l(D.rosePeach,.16),"hero-start":D.charcoal,"hero-middle":O(D.charcoal,D.dustyRose,.16),"hero-end":D.charcoal,nav:l(D.charcoal,.9)}};function we(e){let t={...Ce[e],accent:D.dustyRose,ink:D.charcoal};return Object.fromEntries(Object.entries(t).map(([e,t])=>[`--${e}`,t]))}function Te(e){let t=Ce[e];return u({palette:{mode:e,primary:{main:D.dustyRose,contrastText:D.charcoal},secondary:{main:t[`accent-text`]},info:{main:t[`accent-text`]},error:{main:t[`accent-text`]},background:{default:t.page,paper:t.surface},text:{primary:t.text,secondary:t.secondary},divider:t.border},typography:{fontFamily:`Lato, sans-serif`},components:{MuiDrawer:{styleOverrides:{paper:{backgroundImage:`none`}}},MuiButton:{styleOverrides:{root:{textTransform:`none`},containedPrimary:{backgroundColor:D.dustyRose,color:D.charcoal,"&:hover":{backgroundColor:O(D.dustyRose,D.pink,.82)}}}},MuiAlert:{styleOverrides:{standardInfo:{color:t.text,backgroundColor:l(D.dustyRose,.18)}}}}})}function Ee(e,t,n){let r=n?71:101,i=n?18:32,a=[[0,.8],[.22,.56],[.52,.92],[1,.18]],o=new Float64Array(r),s=new Float64Array(r),c=new Float64Array(r),l=new Float64Array(r),u=new Float64Array(r),d=new Float64Array(r),f=new Float64Array(r),p=new Float64Array(r);for(let n=0;n<r;n+=1){let i=n/(r-1),m=0;for(;m<a.length-2&&i>a[m+1][0];)m+=1;let[h,g]=a[m],[_,v]=a[m+1],y=(i-h)/(_-h),b=y*y*(3-2*y);o[n]=(i*1.08-.04)*e,s[n]=(g+(v-g)*b)*t,c[n]=Math.sin(i*Math.PI*1.55),l[n]=Math.cos(i*Math.PI*1.55),u[n]=Math.sin(i*Math.PI*2.2),d[n]=Math.cos(i*Math.PI*2.2),f[n]=Math.sin(i*Math.PI*3.4),p[n]=Math.cos(i*Math.PI*3.4)}return{x:o,baseY:s,fanSin:c,fanCos:l,swaySin:u,swayCos:d,crossSin:f,crossCos:p,strands:Array.from({length:i},(e,t)=>({offset:t/(i-1)-.5,sin:Math.sin(t*.17),cos:Math.cos(t*.17),phaseSin:0,phaseCos:1})),height:t,spread:n?.085:.105,frame:{sin:0,cos:1,fan:new Float64Array(r)}}}function De(e,t){let n=t*45e-5,r=e.frame;r.sin=Math.sin(n),r.cos=Math.cos(n);let i=Math.sin(n*.6),a=Math.cos(n*.6);for(let t of e.strands)t.phaseSin=r.sin*t.cos+r.cos*t.sin,t.phaseCos=r.cos*t.cos-r.sin*t.sin;for(let t=0;t<e.x.length;t+=1)r.fan[t]=.12+.88*Math.abs(e.fanSin[t]*a+e.fanCos[t]*i);return r}function Oe(e,t,n){let r=e.strands[t],i=e.frame,a=r.phaseSin,o=r.phaseCos,s=e.swaySin[n]*o+e.swayCos[n]*a,c=e.crossSin[n]*o+e.crossCos[n]*a;return e.baseY[n]+e.height*(r.offset*e.spread*i.fan[n]+s*.018+c*r.offset*.045)}var ke=Array.from({length:35},(e,t)=>({x:(t*47+13)%101/100,y:(t*31+7)%97/100,radius:t<5?2.2+t%3*.55:(.65+t%4*.18)*.8,speed:.018+t%7*.004,phase:t*1.71,sin:Math.sin(t*1.71),cos:Math.cos(t*1.71),color:[D.dustyRose,D.peach,D.pink][t%3],mote:t<5}));function k(e,t){return`rgba(${[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)).join(`,`)},${t})`}function Ae(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=64;let i=r.getContext(`2d`);if(!i)return null;let a=i.createRadialGradient(32,32,0,32,32,32);return t===`light`?(a.addColorStop(0,Ce.light[`accent-text`]),a.addColorStop(.12,k(e,.95)),a.addColorStop(.35,k(e,n===`footer`?.38:.32)),a.addColorStop(.7,k(e,n===`footer`?.13:.09))):(a.addColorStop(0,k(e,.9)),a.addColorStop(.15,k(e,.55)),a.addColorStop(.5,k(e,n===`footer`?.14:.08))),a.addColorStop(1,k(e,0)),i.fillStyle=a,i.fillRect(0,0,64,64),r}function je(e,t){return[0,1].map(n=>{let r=new Path2D;for(let i=0;i<12;i+=1){let a=i/11-.5;for(let i=0;i<=60;i+=1){let o=i/60,s=(o*1.14-.07)*e,c=t*(.24+n*.23+.17*Math.sin(o*Math.PI*(2-n*.4)+.4+n*1.6)+a*.14*Math.sin(o*Math.PI*3+n));i===0?r.moveTo(s,c):r.lineTo(s,c)}}return r})}function Me({mode:e,variant:t=`hero`}){let n=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let r=n.current,i=r?.getContext(`2d`);if(!r||!i)return;let a=i,o=r,s=window.matchMedia(`(prefers-reduced-motion: reduce)`),c=t===`footer`,l=c?2:1,u=c?24:ke.length,d=c?14:21,f=e===`light`?[Ce.light[`accent-text`],D.dustyRose,D.rosePeach]:[D.dustyRose,D.peach,D.pink],p=c?.45:1,m=f.map(t=>k(t,(e===`light`?.32:.35)*p)),h=[k(D.dustyRose,(e===`light`?.085:.12)*p),k(e===`light`?D.dustyRose:D.porcelain,(e===`light`?.055:.045)*p)],g=ke.map(n=>{let r=e===`light`?D.dustyRose:n.color;return{fill:k(e===`light`?Ce.light[`accent-text`]:r,e===`light`?.7:n.mote?.72:.48),radius:n.radius*(e===`light`?1.25:1),glowSize:n.radius*(e===`light`?15:12)*(c?1.45:1),glow:n.mote?Ae(r,e,t):null}}),_=0,v=0,y=0,b=null,ee=[],te=0,x=0,S=0,ne=-1,C=!1,re=!1;function ie(e){if(!b||!_||!v)return;a.clearRect(0,0,_,v);let t=De(b,e);a.save(),a.lineWidth=.8,a.translate(t.sin*7,t.cos*8),a.strokeStyle=h[0],a.stroke(ee[0]),a.translate(-t.sin*13,-t.cos*11),a.strokeStyle=h[1],a.stroke(ee[1]),a.restore();for(let e=0;e<b.strands.length;e+=l){a.beginPath(),a.moveTo(b.x[0],Oe(b,e,0));for(let t=1;t<b.x.length;t+=1)a.lineTo(b.x[t],Oe(b,e,t));a.strokeStyle=m[e%m.length],a.lineWidth=e%5==0?1.35:.72,a.stroke()}let n=Math.sin(e*7e-4),r=Math.cos(e*7e-4),i=_<600?d:u;for(let t=0;t<i;t+=1){let i=ke[t],o=g[t],s=(e*i.speed/1e3+i.phase*.013)%1,c=(i.x+s*.16)%1,l=i.y+(n*i.cos+r*i.sin)*.018;if(c<.57&&l>.27&&l<.7&&(l=.73+t*.037%.12),o.glow){let e=o.glowSize;a.drawImage(o.glow,c*_-e/2,l*v-e/2,e,e)}else a.beginPath(),a.arc(c*_,l*v,o.radius,0,Math.PI*2),a.fillStyle=o.fill,a.fill()}}function ae(){if(c&&!C)return;let e=o.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,1.5);(_!==e.width||v!==e.height||y!==t)&&(_=e.width,v=e.height,y=t,o.width=Math.max(1,Math.round(_*y)),o.height=Math.max(1,Math.round(v*y)),a.setTransform(y,0,0,y,0,0),a.lineJoin=`round`,b=Ee(_,v,_<600),ee=je(_,v),ie(s.matches?0:te))}let oe=()=>!re&&!document.hidden&&C&&!s.matches,se=e=>{if(!oe())return;S&&(te+=Math.min(e-S,64)),S=e;let t=Math.floor(e/(1e3/30));t!==ne&&(ie(te),ne=t),x=requestAnimationFrame(se)},w=()=>{cancelAnimationFrame(x),S=0,ne=-1,oe()?x=requestAnimationFrame(se):s.matches&&ie(0)},ce=new ResizeObserver(ae),le=new IntersectionObserver(([e])=>{C=e.isIntersecting,C&&ae(),w()});return ce.observe(r),le.observe(r),s.addEventListener(`change`,w),document.addEventListener(`visibilitychange`,w),ae(),()=>{re=!0,cancelAnimationFrame(x),ce.disconnect(),le.disconnect(),s.removeEventListener(`change`,w),document.removeEventListener(`visibilitychange`,w)}},[e,t]),(0,E.jsx)(`canvas`,{ref:n,className:`hero-artwork ${t===`footer`?`footer-artwork-canvas`:``}`,"data-artwork":t,"aria-hidden":`true`})}var Ne=new URL(`profile-B42SOAsP.jpg`,import.meta.url).href;function Pe({mode:e}){let t=(0,T.useRef)(null),n=d(`(prefers-reduced-motion: reduce)`),{scrollYProgress:r}=fe({target:t,offset:[`start start`,`end start`]}),i=ge(r,{stiffness:150,damping:30,restDelta:.001}),a=me(i,[0,.2,.9],[1,1,.15]),o=me(i,[0,.85],[`blur(0px)`,`blur(5px)`]),s=n?{opacity:1,filter:`none`}:{opacity:a,filter:o};return(0,E.jsx)(`div`,{className:`container hero-container`,children:(0,E.jsxs)(_e.section,{ref:t,className:`about-section`,"aria-labelledby":`profile-name`,style:s,children:[(0,E.jsx)(`div`,{className:`hero-art-layer`,children:(0,E.jsx)(Me,{mode:e})}),(0,E.jsx)(`div`,{className:`image-wrapper`,children:(0,E.jsx)(`img`,{className:`profile-photo`,src:Ne,alt:`Ninis Dyah Yulianingsih`,width:150,height:150,loading:`eager`,decoding:`async`})}),(0,E.jsxs)(`div`,{className:`content`,children:[(0,E.jsx)(`div`,{className:`social_icons`,children:(0,E.jsx)(Se,{})}),(0,E.jsx)(`h1`,{id:`profile-name`,tabIndex:-1,children:`Ninis Dyah Yulianingsih`}),(0,E.jsx)(`p`,{children:`Technical Writer with a Software Engineering Technology degree and experience in system documentation, requirements analysis, and software testing.`}),(0,E.jsx)(`div`,{className:`mobile_social_icons`,children:(0,E.jsx)(Se,{})})]})]})})}function Fe(e,t,n){return(t=Re(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ie(Object(n),!0).forEach(function(t){Fe(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Le(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Re(e){var t=Le(e,`string`);return typeof t==`symbol`?t:t+``}var ze=()=>{},Be={},Ve={},He=null,Ue={mark:ze,measure:ze};try{typeof window<`u`&&(Be=window),typeof document<`u`&&(Ve=document),typeof MutationObserver<`u`&&(He=MutationObserver),typeof performance<`u`&&(Ue=performance)}catch{}var{userAgent:We=``}=Be.navigator||{},j=Be,M=Ve,Ge=He,Ke=Ue;j.document;var N=!!M.documentElement&&!!M.head&&typeof M.addEventListener==`function`&&typeof M.createElement==`function`,qe=~We.indexOf(`MSIE`)||~We.indexOf(`Trident/`),Je=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ye=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Xe={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},Ze={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Qe=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],P=`classic`,$e=`duotone`,et=[P,$e,`sharp`,`sharp-duotone`],tt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},nt={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},rt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),it={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},at=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ot={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},st=[`kit`],ct={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},lt=[`fak`,`fakd`],ut={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},dt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},ft={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},pt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],mt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ht={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},gt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},_t={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},vt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},yt=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],bt=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...pt,...yt],xt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],St=[1,2,3,4,5,6,7,8,9,10],Ct=St.concat([11,12,13,14,15,16,17,18,19,20]),wt=[...Object.keys(_t),...xt,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY].concat(St.map(e=>`${e}x`),Ct.map(e=>`w-${e}`)),Tt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},F=`___FONT_AWESOME___`,Et=16,Dt=`fa`,Ot=`svg-inline--fa`,I=`data-fa-i2svg`,kt=`data-fa-pseudo-element`,At=`data-fa-pseudo-element-pending`,jt=`data-prefix`,Mt=`data-icon`,Nt=`fontawesome-i2svg`,Pt=`async`,Ft=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],It=(()=>{try{return!0}catch{return!1}})();function Lt(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[P]}})}var Rt=A({},Xe);Rt[P]=A(A(A(A({},{"fa-duotone":`duotone`}),Xe[P]),ot.kit),ot[`kit-duotone`]);var zt=Lt(Rt),Bt=A({},it);Bt[P]=A(A(A(A({},{duotone:`fad`}),Bt[P]),dt.kit),dt[`kit-duotone`]);var Vt=Lt(Bt),Ht=A({},vt);Ht[P]=A(A({},Ht[P]),ut.kit);var Ut=Lt(Ht),Wt=A({},gt);Wt[P]=A(A({},Wt[P]),ct.kit),Lt(Wt);var Gt=Je,Kt=`fa-layers-text`,qt=Ye;Lt(A({},tt));var Jt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Yt=Ze,Xt=[...st,...wt],Zt=j.FontAwesomeConfig||{};function Qt(e){var t=M.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function $t(e){return e===``?!0:e===`false`?!1:e===`true`||e}M&&typeof M.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=$t(Qt(t));r!=null&&(Zt[n]=r)});var en={styleDefault:`solid`,familyDefault:P,cssPrefix:Dt,replacementClass:Ot,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zt.familyPrefix&&(Zt.cssPrefix=Zt.familyPrefix);var L=A(A({},en),Zt);L.autoReplaceSvg||(L.observeMutations=!1);var R={};Object.keys(en).forEach(e=>{Object.defineProperty(R,e,{enumerable:!0,set:function(t){L[e]=t,tn.forEach(e=>e(R))},get:function(){return L[e]}})}),Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){L.cssPrefix=e,tn.forEach(e=>e(R))},get:function(){return L.cssPrefix}}),j.FontAwesomeConfig=R;var tn=[];function nn(e){return tn.push(e),()=>{tn.splice(tn.indexOf(e),1)}}var z=Et,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rn(e){if(!e||!N)return;let t=M.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=M.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return M.head.insertBefore(t,r),e}var an=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function on(){let e=12,t=``;for(;e-->0;)t+=an[Math.random()*62|0];return t}function V(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sn(e){return e.classList?V(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function cn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ln(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${cn(e[n])}" `,``).trim()}function un(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function dn(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function fn(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function pn(e){let{transform:t,width:n=Et,height:r=Et,startCentered:i=!1}=e,a=``;return a+=i&&qe?`translate(${t.x/z-n/2}em, ${t.y/z-r/2}em) `:i?`translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) `:`translate(${t.x/z}em, ${t.y/z}em) `,a+=`scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var mn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function hn(){let e=Dt,t=Ot,n=R.cssPrefix,r=R.replacementClass,i=mn;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var gn=!1;function _n(){R.autoAddCss&&!gn&&(rn(hn()),gn=!0)}var vn={mixout(){return{dom:{css:hn,insertCss:_n}}},hooks(){return{beforeDOMElementCreation(){_n()},beforeI2svg(){_n()}}}},H=j||{};H[F]||(H[F]={}),H[F].styles||(H[F].styles={}),H[F].hooks||(H[F].hooks={}),H[F].shims||(H[F].shims=[]);var U=H[F],yn=[],bn=function(){M.removeEventListener(`DOMContentLoaded`,bn),xn=1,yn.map(e=>e())},xn=!1;N&&(xn=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),xn||M.addEventListener(`DOMContentLoaded`,bn));function Sn(e){N&&(xn?setTimeout(e,0):yn.push(e))}function Cn(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?cn(e):`<${t} ${ln(n)}>${r.map(Cn).join(``)}</${t}>`}function wn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Tn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},En=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Tn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Dn(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function On(e){let t=Dn(e);return t.length===1?t[0].toString(16):null}function kn(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function An(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function jn(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=An(t);typeof U.hooks.addPack==`function`&&!n?U.hooks.addPack(e,An(t)):U.styles[e]=A(A({},U.styles[e]||{}),r),e===`fas`&&jn(`fa`,t)}var{styles:Mn,shims:Nn}=U,Pn=Object.keys(Ut),Fn=Pn.reduce((e,t)=>(e[t]=Object.keys(Ut[t]),e),{}),In=null,Ln={},Rn={},zn={},Bn={},Vn={};function Hn(e){return~Xt.indexOf(e)}function Un(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Hn(i)?i:null}var Wn=()=>{let e=e=>En(Mn,(t,n,r)=>(t[r]=En(n,e,{}),t),{});Ln=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Rn=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Vn=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in Mn||R.autoFetchSvg,n=En(Nn,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});zn=n.names,Bn=n.unicodes,In=Zn(R.styleDefault,{family:R.familyDefault})};nn(e=>{In=Zn(e.styleDefault,{family:R.familyDefault})}),Wn();function Gn(e,t){return(Ln[e]||{})[t]}function Kn(e,t){return(Rn[e]||{})[t]}function W(e,t){return(Vn[e]||{})[t]}function qn(e){return zn[e]||{prefix:null,iconName:null}}function Jn(e){let t=Bn[e],n=Gn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function G(){return In}var Yn=()=>({prefix:null,iconName:null,rest:[]});function Xn(e){let t=P,n=Pn.reduce((e,t)=>(e[t]=`${R.cssPrefix}-${t}`,e),{});return et.forEach(r=>{(e.includes(n[r])||e.some(e=>Fn[r].includes(e)))&&(t=r)}),t}function Zn(e){let{family:t=P}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=zt[t][e];if(t===$e&&!e)return`fad`;let r=Vt[t][e]||Vt[t][n],i=e in U.styles?e:null;return r||i||null}function Qn(e){let t=[],n=null;return e.forEach(e=>{let r=Un(R.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function $n(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function er(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=bt.concat(mt),i=$n(e.filter(e=>r.includes(e))),a=$n(e.filter(e=>!bt.includes(e))),[o=null]=i.filter(e=>(n=e,!Qe.includes(e))),s=Xn(i),c=A(A({},Qn(a)),{},{prefix:Zn(o,{family:s})});return A(A(A({},c),ir({values:e,family:s,styles:Mn,config:R,canonical:c,givenPrefix:n})),tr(t,n,c))}function tr(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?qn(i):{},o=W(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Mn.far&&Mn.fas&&!R.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var nr=et.filter(e=>e!==P||e!==$e),rr=Object.keys(vt).filter(e=>e!==P).map(e=>Object.keys(vt[e])).flat();function ir(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===$e,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&nr.includes(n)&&(Object.keys(a).find(e=>rr.includes(e))||o.autoFetchSvg)&&(r.prefix=rt.get(n).defaultShortPrefixId,r.iconName=W(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=G()||`fas`),r}var ar=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=A(A({},this.definitions[t]||{}),e[t]),jn(t,e[t]);let n=Ut[P][t];n&&jn(n,e[t]),Wn()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},or=[],K={},q={},sr=Object.keys(q);function cr(e,t){let{mixoutsTo:n}=t;return or=e,K={},Object.keys(q).forEach(e=>{sr.indexOf(e)===-1&&delete q[e]}),or.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{K[e]||(K[e]=[]),K[e].push(t[e])})}e.provides&&e.provides(q)}),n}function lr(e,t){var n=[...arguments].slice(2);return(K[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function J(e){var t=[...arguments].slice(1);(K[e]||[]).forEach(e=>{e.apply(null,t)})}function Y(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return q[e]?q[e].apply(null,t):void 0}function ur(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||G();if(t)return t=W(n,t)||t,wn(dr.definitions,n,t)||wn(U.styles,n,t)}var dr=new ar,X={noAuto:()=>{R.autoReplaceSvg=!1,R.observeMutations=!1,J(`noAuto`)},config:R,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(J(`beforeI2svg`,e),Y(`pseudoElements2svg`,e),Y(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Sn(()=>{fr({autoReplaceSvgRoot:t}),J(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Zn(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${R.cssPrefix}-`)>-1||e.match(Gt))){let t=er(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||G(),iconName:W(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=G();return{prefix:t,iconName:W(t,e)||e}}}},library:dr,findIconDefinition:ur,toHtml:Cn},fr=function(){let{autoReplaceSvgRoot:e=M}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(U.styles).length>0||R.autoFetchSvg)&&N&&R.autoReplaceSvg&&X.dom.i2svg({node:e})};function pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(e=>Cn(e))}}),Object.defineProperty(e,"node",{get:function(){if(!N)return;let t=M.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function mr(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(dn(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=un(A(A({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function hr(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${R.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:A(A({},i),{},{id:o}),children:r}]}]}function gr(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,m=lt.includes(r),h=[R.replacementClass,i?`${R.cssPrefix}-${i}`:``].filter(e=>u.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(u.classes).join(` `),g={children:[],attributes:A(A({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${f} ${p}`})},_=m&&!~u.classes.indexOf(`fa-fw`)?{width:`${f/p*16*.0625}em`}:{};d&&(g.attributes[I]=``),s&&(g.children.push({tag:`title`,attributes:{id:g.attributes[`aria-labelledby`]||`title-${l||on()}`},children:[s]}),delete g.attributes.title);let v=A(A({},g),{},{prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:A(A({},_),u.styles)}),{children:y,attributes:b}=n.found&&t.found?Y(`generateAbstractMask`,v)||{children:[],attributes:{}}:Y(`generateAbstractIcon`,v)||{children:[],attributes:{}};return v.children=y,v.attributes=b,o?hr(v):mr(v)}function _r(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,c=A(A(A({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});s&&(c[I]=``);let l=A({},o.styles);dn(i)&&(l.transform=pn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);let u=un(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:`span`,attributes:c,children:[t]}),a&&d.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),d}function vr(e){let{content:t,title:n,extra:r}=e,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=un(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:yr}=U;function br(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${R.cssPrefix}-${Yt.GROUP}`},children:[{tag:`path`,attributes:{class:`${R.cssPrefix}-${Yt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${R.cssPrefix}-${Yt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var xr={found:!1,width:512,height:512};function Sr(e,t){!It&&!R.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Cr(e,t){let n=t;return t===`fa`&&R.styleDefault!==null&&(t=G()),new Promise((r,i)=>{if(n===`fa`){let n=qn(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&yr[t]&&yr[t][e]){let n=yr[t][e];return r(br(n))}Sr(e,t),r(A(A({},xr),{},{icon:R.showMissingIcons&&e&&Y(`missingIconAbstract`)||{}}))})}var wr=()=>{},Tr=R.measurePerformance&&Ke&&Ke.mark&&Ke.measure?Ke:{mark:wr,measure:wr},Er=`FA "6.7.2"`,Dr=e=>(Tr.mark(`${Er} ${e} begins`),()=>Or(e)),Or=e=>{Tr.mark(`${Er} ${e} ends`),Tr.measure(`${Er} ${e}`,`${Er} ${e} begins`,`${Er} ${e} ends`)},kr={begin:Dr,end:Or},Ar=()=>{};function jr(e){return typeof(e.getAttribute?e.getAttribute(I):null)==`string`}function Mr(e){let t=e.getAttribute?e.getAttribute(jt):null,n=e.getAttribute?e.getAttribute(Mt):null;return t&&n}function Nr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function Pr(){return R.autoReplaceSvg===!0?zr.replace:zr[R.autoReplaceSvg]||zr.replace}function Fr(e){return M.createElementNS(`http://www.w3.org/2000/svg`,e)}function Ir(e){return M.createElement(e)}function Lr(e){let{ceFn:t=e.tag===`svg`?Fr:Ir}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return M.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Lr(e,{ceFn:t}))}),n}function Rr(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var zr={replace:function(e){let t=e[0];if(t.parentNode){if(e[1].forEach(e=>{t.parentNode.insertBefore(Lr(e),t)}),t.getAttribute(I)===null&&R.keepOriginalSource){let e=M.createComment(Rr(t));t.parentNode.replaceChild(e,t)}else t.remove()}},nest:function(e){let t=e[0],n=e[1];if(~sn(t).indexOf(R.replacementClass))return zr.replace(e);let r=RegExp(`${R.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===R.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>Cn(e)).join(`
`);t.setAttribute(I,``),t.innerHTML=i}};function Br(e){e()}function Vr(e,t){let n=typeof t==`function`?t:Ar;if(e.length===0)n();else{let t=Br;R.mutateApproach===Pt&&(t=j.requestAnimationFrame||Br),t(()=>{let t=Pr(),r=kr.begin(`mutate`);e.map(t),r(),n()})}}var Hr=!1;function Ur(){Hr=!0}function Wr(){Hr=!1}var Gr=null;function Kr(e){if(!Ge||!R.observeMutations)return;let{treeCallback:t=Ar,nodeCallback:n=Ar,pseudoElementsCallback:r=Ar,observeMutationsRoot:i=M}=e;Gr=new Ge(e=>{if(Hr)return;let i=G();V(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!jr(e.addedNodes[0])&&(R.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&R.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&jr(e.target)&&~Jt.indexOf(e.attributeName)){if(e.attributeName===`class`&&Mr(e.target)){let{prefix:t,iconName:n}=er(sn(e.target));e.target.setAttribute(jt,t||i),n&&e.target.setAttribute(Mt,n)}else Nr(e.target)&&n(e.target)}})}),N&&Gr.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function qr(){Gr&&Gr.disconnect()}function Jr(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Yr(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=er(sn(e));return i.prefix||=G(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Kn(i.prefix,e.innerText)||Gn(i.prefix,On(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Xr(e){let t=V(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return R.autoA11y&&(n?t[`aria-labelledby`]=`${R.replacementClass}-title-${r||on()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function Zr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Qr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=Yr(e),a=Xr(e),o=lr(`parseNodeAttributes`,{},e),s=t.styleParser?Jr(e):[];return A({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var{styles:$r}=U;function ei(e){let t=R.autoReplaceSvg===`nest`?Qr(e,{styleParser:!1}):Qr(e);return~t.extra.classes.indexOf(Kt)?Y(`generateLayersText`,e,t):Y(`generateSvgReplacementMutation`,e,t)}function ti(){return[...at,...bt]}function ni(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();let n=M.documentElement.classList,r=e=>n.add(`${Nt}-${e}`),i=e=>n.remove(`${Nt}-${e}`),a=R.autoFetchSvg?ti():Qe.concat(Object.keys($r));a.includes(`fa`)||a.push(`fa`);let o=[`.${Kt}:not([${I}])`].concat(a.map(e=>`.${e}:not([${I}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=V(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=kr.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=ei(t);n&&e.push(n)}catch(e){It||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Vr(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function ri(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ei(e).then(e=>{e&&Vr([e],t)})}function ii(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ur(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:ur(i||{}),e(r,A(A({},n),{},{mask:i}))}}var ai=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=B,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;let{prefix:d,iconName:f,icon:p}=e;return pr(A({type:`icon`},e),()=>(J(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),R.autoA11y&&(o?l[`aria-labelledby`]=`${R.replacementClass}-title-${s||on()}`:(l[`aria-hidden`]=`true`,l.focusable=`false`)),gr({icons:{main:br(p),mask:i?br(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:A(A({},B),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},oi={mixout(){return{icon:ii(ai)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=ni,e.nodeCallback=ri,e}}},provides(e){e.i2svg=function(e){let{node:t=M,callback:n=()=>{}}=e;return ni(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([Cr(n,a),c.iconName?Cr(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,gr({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=un(a);o.length>0&&(n.style=o);let s;return dn(i)&&(s=Y(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},si={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return pr({type:`layer`},()=>{J(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${R.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},ci={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return pr({type:`counter`,content:e},()=>(J(`beforeDOMElementCreation`,{content:e,params:t}),vr({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${R.cssPrefix}-layers-counter`,...r]}})))}}}},li={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=B,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return pr({type:`text`,content:e},()=>(J(`beforeDOMElementCreation`,{content:e,params:t}),_r({content:e,transform:A(A({},B),n),title:r,extra:{attributes:a,styles:o,classes:[`${R.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(qe){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return R.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,_r({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},ui=RegExp(`"`,`ug`),di=[1105920,1112319],fi=A(A(A(A({},{FontAwesome:{normal:`fas`,400:`fas`}}),nt),Tt),ht),pi=Object.keys(fi).reduce((e,t)=>(e[t.toLowerCase()]=fi[t],e),{}),mi=Object.keys(pi).reduce((e,t)=>{let n=pi[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function hi(e){let t=e.replace(ui,``),n=kn(t,0),r=n>=di[0]&&n<=di[1],i=t.length===2&&t[0]===t[1];return{value:On(i?t[0]:t),isSecondary:r||i}}function gi(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(pi[n]||{})[i]||mi[n]}function _i(e,t){let n=`${At}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=V(e.children).filter(e=>e.getAttribute(kt)===t)[0],o=j.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(qt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){let u=o.getPropertyValue(`content`),d=gi(s,l),{value:f,isSecondary:p}=hi(u),m=c[0].startsWith(`FontAwesome`),h=Gn(d,f),g=h;if(m){let e=Jn(f);e.iconName&&e.prefix&&(h=e.iconName,d=e.prefix)}if(h&&!p&&(!a||a.getAttribute(jt)!==d||a.getAttribute(Mt)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);let o=Zr(),{extra:s}=o;s.attributes[kt]=t,Cr(h,d).then(i=>{let a=gr(A(A({},o),{},{icons:{main:i,mask:Yn()},prefix:d,iconName:g,extra:s,watchable:!0})),c=M.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map(e=>Cn(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function vi(e){return Promise.all([_i(e,`::before`),_i(e,`::after`)])}function yi(e){return e.parentNode!==document.head&&!~Ft.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function bi(e){if(N)return new Promise((t,n)=>{let r=V(e.querySelectorAll(`*`)).filter(yi).map(vi),i=kr.begin(`searchPseudoElements`);Ur(),Promise.all(r).then(()=>{i(),Wr(),t()}).catch(()=>{i(),Wr(),n()})})}var xi={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=bi,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=M}=e;R.searchPseudoElements&&bi(t)}}},Si=!1,Ci={mixout(){return{dom:{unwatch(){Ur(),Si=!0}}}},hooks(){return{bootstrap(){Kr(lr(`mutationObserverCallbacks`,{}))},noAuto(){qr()},watch(e){let{observeMutationsRoot:t}=e;Si?Wr():Kr(lr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},wi=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),Ti={mixout(){return{parse:{transform:e=>wi(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=wi(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:A({},a.outer),children:[{tag:`g`,attributes:A({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:A(A({},t.icon.attributes),a.path)}]}]}}}},Ei={x:0,y:0,width:`100%`,height:`100%`};function Di(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Oi(e){return e.tag===`g`?e.children:[e]}cr([vn,oi,si,ci,li,xi,Ci,Ti,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?er(n.split(` `).map(e=>e.trim())):Yn();return r.prefix||=G(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:c}=r,{width:l,icon:u}=i,d=fn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:A(A({},Ei),{},{fill:`white`})},p=c.children?{children:c.children.map(Di)}:{},m={tag:`g`,attributes:A({},d.inner),children:[Di(A({tag:c.tag,attributes:A(A({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:A({},d.outer),children:[m]},g=`mask-${a||on()}`,_=`clip-${a||on()}`,v={tag:`mask`,attributes:A(A({},Ei),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Oi(u)},v]};return t.push(y,{tag:`rect`,attributes:A({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ei)}),{children:t,attributes:n}}}},{provides(e){let t=!1;j.matchMedia&&(t=j.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:A(A({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=A(A({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:A(A({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:A(A({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:A(A({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:A(A({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:A(A({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:A(A({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:A(A({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:X}),X.noAuto;var Z=X.config;X.library,X.dom;var ki=X.parse;X.findIconDefinition,X.toHtml;var Ai=X.icon;X.layer,X.text,X.counter;function ji(e){return e-=0,e===e}function Mi(e){return ji(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Ni=(e,t)=>T.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Pi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Fi=new Map,Ii=1e3;function Li(e){if(Fi.has(e))return Fi.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Mi(n);t[e.startsWith(`webkit`)?Pi(e):e]=r}}}n=a+1}if(Fi.size===Ii){let e=Fi.keys().next().value;e&&Fi.delete(e)}return Fi.set(e,t),t}function Ri(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Ri(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Li(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Mi(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Ni)))}return e(t.tag,{...a,...u},...r)}var zi=Ri.bind(null,T.createElement),Bi=(e,t)=>{let n=(0,T.useId)();return e||(t?n:void 0)},Vi=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Hi=`searchPseudoElementsFullScan`in Z&&typeof Z.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Ui=Number.parseInt(Hi)>=7,Wi=()=>Ui,Gi=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},Ki={left:`fa-pull-left`,right:`fa-pull-right`},qi={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Ji={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},Yi={default:`fa-layers`};function Xi(e){let t=Z.cssPrefix||Z.familyPrefix||Gi;return t===Gi?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Gi}-`,`g`),`${t}-`)}function Zi(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:ee,flip360:te,buzz:x,float:S,jello:ne,spinSnap:C,spinSnap4:re,spinSnap8:ie,swing:ae,wag:oe,className:se}=e,w=[];return se&&w.push(...se.split(` `)),t&&w.push(Q.beat),n&&w.push(Q.fade),r&&w.push(Q.beatFade),i&&w.push(Q.bounce),a&&w.push(Q.shake),o&&w.push(Q.spin),c&&w.push(Q.spinReverse),s&&w.push(Q.spinPulse),l&&w.push(Q.pulse),u&&w.push($.fixedWidth),d&&w.push($.inverse),f&&w.push($.border),p===!0&&w.push($.flip),(p===`horizontal`||p===`both`)&&w.push($.flipHorizontal),(p===`vertical`||p===`both`)&&w.push($.flipVertical),m!=null&&w.push(Ji[m]),h!=null&&h!==0&&w.push(qi[h]),g!=null&&w.push(Ki[g]),_&&w.push($.swapOpacity),Wi()?(v&&w.push($.rotateBy),y&&w.push($.widthAuto),b&&w.push($.canvasSquare),ee&&w.push($.canvasRoomy),te&&w.push(Q.flip360),x&&w.push(Q.buzz),S&&w.push(Q.float),ne&&w.push(Q.jello),C&&w.push(Q.spinSnap),re&&w.push(Q.spinSnap4),ie&&w.push(Q.spinSnap8),ae&&w.push(Q.swing),oe&&w.push(Q.wag),(Z.cssPrefix||Z.familyPrefix||Gi)===Gi?w:w.map(Xi)):w}var Qi=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function $i(e){if(e)return Qi(e)?e:ki.icon(e)}function ea(e){return Object.keys(e)}var ta=new Vi(`FontAwesomeIcon`),na={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},ra=new Set(Object.keys(na)),ia=T.forwardRef((e,t)=>{let n={...na,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Bi(c,!!i),d=Bi(s,!!o),f=$i(r);if(!f)return ta.error(`Icon lookup is undefined`,r),null;let p=Zi(n),m=typeof l==`string`?ki.transform(l):l,h=$i(i),g=Ai(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return ta.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of ea(n))ra.has(e)||(v[e]=n[e]);return zi(_[0],v)});ia.displayName=`FontAwesomeIcon`,`${Yi.default}${$.fixedWidth}`;var aa={prefix:`fas`,iconName:`file-lines`,icon:[384,512,[128441,128462,61686,`file-alt`,`file-text`],`f15c`,`M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z`]},oa={prefix:`fas`,iconName:`clipboard-list`,icon:[384,512,[],`f46d`,`M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z`]},sa={prefix:`fas`,iconName:`vial-circle-check`,icon:[512,512,[],`e596`,`M0 64C0 46.3 14.3 32 32 32l64 0 64 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 170.8c-20.2 28.6-32 63.5-32 101.2c0 25.2 5.3 49.1 14.8 70.8C189.5 463.7 160.6 480 128 480c-53 0-96-43-96-96L32 96C14.3 96 0 81.7 0 64zM96 96l0 96 64 0 0-96L96 96zM224 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L352 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z`]},ca=[`Functional Specifications`,`API Documentation`,`Data Dictionaries`,`User Guides`,`XML/JSON`,`Microsoft Word`,`Microsoft Excel`,`Microsoft Visio`,`Draw.io`,`Interface Documentation`,`Google Workspace`,`Bilingual Documentation`],la=[`Requirements Analysis`,`Business Requirements`,`User Personas`,`Activity Diagrams`,`Sequence Diagrams`,`Use Cases`,`User Stories`,`Process Modeling`,`Figma`,`Draw.io`,`Microsoft Visio`,`Technical Specifications`],ua=[`Test Case Design`,`Black-box Testing`,`Manual Testing`,`Automated Testing`,`Feature Testing`,`User Acceptance Testing`,`Debugging`,`AI Agent Evaluation`,`Google Gemini`,`WebSocket`,`PostgreSQL`,`Test Planning`];function da(){return(0,E.jsx)(`div`,{className:`container`,id:`expertise`,children:(0,E.jsxs)(`div`,{className:`skills-container`,children:[(0,E.jsx)(`h1`,{children:`Expertise`}),(0,E.jsxs)(`div`,{className:`skills-grid`,children:[(0,E.jsxs)(`div`,{className:`skill`,children:[(0,E.jsx)(ia,{icon:aa,size:`3x`}),(0,E.jsx)(`h3`,{children:`Technical Writer`}),(0,E.jsx)(`p`,{children:`I write technical content that helps teams understand how systems and integrations work, from functional specifications and interface documentation to API and data-model guides. At PT EDI Indonesia, I document banking and tax integrations, eTax and XML-to-JSON workflows, and prepare user and technical guides. My work also includes maintaining change records and producing selected deliverables in Indonesian and English.`}),(0,E.jsxs)(`div`,{className:`flex-chips`,children:[(0,E.jsx)(`span`,{className:`chip-title`,children:`Skills & tools:`}),ca.map((e,t)=>(0,E.jsx)(ue,{className:`chip`,label:e},t))]})]}),(0,E.jsxs)(`div`,{className:`skill`,children:[(0,E.jsx)(ia,{icon:oa,size:`3x`}),(0,E.jsx)(`h3`,{children:`Requirement Analysis`}),(0,E.jsx)(`p`,{children:`I work through business and user needs to define what a system should do and how it fits its operating environment. At DataIns, I analyzed government requirements and documented technical specifications for implementation and training. My teaching work at UGM covered use cases, user stories, personas, and activity and sequence diagrams, helping students describe requirements and system behavior clearly.`}),(0,E.jsxs)(`div`,{className:`flex-chips`,children:[(0,E.jsx)(`span`,{className:`chip-title`,children:`Skills & tools:`}),la.map((e,t)=>(0,E.jsx)(ue,{className:`chip`,label:e},t))]})]}),(0,E.jsxs)(`div`,{className:`skill`,children:[(0,E.jsx)(ia,{icon:sa,size:`3x`}),(0,E.jsx)(`h3`,{children:`Testing`}),(0,E.jsx)(`p`,{children:`I have taught test-case design, bug identification, and unit, integration, system, and acceptance testing, and guided students in manual and automated testing. I have also conducted feature testing at DataIns and built an automated system at Wesclic that evaluates Sales Agent performance in real-time WebSocket conversations using Google Gemini. The system used a multi-turn engine and four testing strategies, with a PostgreSQL backend.`}),(0,E.jsxs)(`div`,{className:`flex-chips`,children:[(0,E.jsx)(`span`,{className:`chip-title`,children:`Skills & tools:`}),ua.map((e,t)=>(0,E.jsx)(ue,{className:`chip`,label:e},t))]})]})]})]})})}var fa=i(((e,t)=>{(function(){var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()})),pa=i((e=>{e.__esModule=!0,e.default=void 0;var t=i(a()),n=i(x()),r=i(fa());function i(e){return e&&e.__esModule?e:{default:e}}var o=({animate:e=!0,className:n=``,layout:i=`2-columns`,lineColor:a=`#FFF`,children:o})=>(typeof window==`object`&&document.documentElement.style.setProperty(`--line-color`,a),t.default.createElement(`div`,{className:(0,r.default)(n,`vertical-timeline`,{"vertical-timeline--animate":e,"vertical-timeline--two-columns":i===`2-columns`,"vertical-timeline--one-column-left":i===`1-column`||i===`1-column-left`,"vertical-timeline--one-column-right":i===`1-column-right`})},o));o.propTypes={children:n.default.oneOfType([n.default.arrayOf(n.default.node),n.default.node]).isRequired,className:n.default.string,animate:n.default.bool,layout:n.default.oneOf([`1-column-left`,`1-column`,`2-columns`,`1-column-right`]),lineColor:n.default.string},e.default=o})),ma=r({InView:()=>Na,default:()=>Na,defaultFallbackInView:()=>ya,observe:()=>Ca,useInView:()=>Ta});function ha(){return ha=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}function ga(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_a(e,t)}function _a(e,t){return _a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_a(e,t)}function va(e,t){if(e==null)return{};for(var n={},r=Object.keys(e),i,a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}function ya(e){ja=e}function ba(e){return e?(ka.has(e)||(Aa+=1,ka.set(e,Aa.toString())),ka.get(e)):`0`}function xa(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+`_`+(t===`root`?ba(e.root):e[t])}).toString()}function Sa(e){var t=xa(e),n=Oa.get(t);if(!n){var r=new Map,i,a=new IntersectionObserver(function(t){t.forEach(function(t){var n,a=t.isIntersecting&&i.some(function(e){return t.intersectionRatio>=e});e.trackVisibility&&t.isVisible===void 0&&(t.isVisible=a),(n=r.get(t.target))==null||n.forEach(function(e){e(a,t)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},Oa.set(t,n)}return n}function Ca(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=ja),window.IntersectionObserver===void 0&&r!==void 0){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold==`number`?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var a=Sa(n),o=a.id,s=a.observer,c=a.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),s.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(c.delete(e),s.unobserve(e)),c.size===0&&(s.disconnect(),Oa.delete(o))}}function wa(e){return typeof e.children!=`function`}function Ta(e){var t=e===void 0?{}:e,n=t.threshold,r=t.delay,i=t.trackVisibility,a=t.rootMargin,o=t.root,s=t.triggerOnce,c=t.skip,l=t.initialInView,u=t.fallbackInView,d=Ea.useRef(),f=Ea.useState({inView:!!l}),p=f[0],m=f[1],h=Ea.useCallback(function(e){d.current!==void 0&&(d.current(),d.current=void 0),c||e&&(d.current=Ca(e,function(e,t){m({inView:e,entry:t}),t.isIntersecting&&s&&d.current&&(d.current(),d.current=void 0)},{root:o,rootMargin:a,threshold:n,trackVisibility:i,delay:r},u))},[Array.isArray(n)?n.toString():n,o,a,s,c,i,u,r]);(0,Da.useEffect)(function(){!d.current&&p.entry&&!s&&!c&&m({inView:!!l})});var g=[h,p.inView,p.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa=n((()=>{Ea=e(a()),Da=e(a()),Oa=new Map,ka=new WeakMap,Aa=0,ja=void 0,Ma=[`children`,`as`,`triggerOnce`,`threshold`,`root`,`rootMargin`,`onChange`,`skip`,`trackVisibility`,`delay`,`initialInView`,`fallbackInView`],Na=function(e){ga(t,e);function t(t){var n=e.call(this,t)||this;return n.node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),wa(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}var n=t.prototype;return n.componentDidUpdate=function(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,a=e.delay,o=e.fallbackInView;this._unobserveCb=Ca(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:a},o)}},n.unobserve=function(){this._unobserveCb&&=(this._unobserveCb(),null)},n.render=function(){if(!wa(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,i=r.children,a=r.as,o=va(r,Ma);return Ea.createElement(a||`div`,ha({ref:this.handleNode},o),i)},t}(Ea.Component),Na.displayName=`InView`,Na.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}})),Fa=i((e=>{e.__esModule=!0,e.default=void 0;var n=s(a()),r=s(x()),i=s(fa()),o=(Pa(),t(ma));function s(e){return e&&e.__esModule?e:{default:e}}var c=({children:e=``,className:t=``,contentArrowStyle:r=null,contentStyle:a=null,date:s=``,dateClassName:c=``,icon:l=null,iconClassName:u=``,iconOnClick:d=null,onTimelineElementClick:f=null,iconStyle:p=null,id:m=``,position:h=``,style:g=null,textClassName:_=``,intersectionObserverProps:v={rootMargin:`0px 0px -40px 0px`,triggerOnce:!0},visible:y=!1})=>n.default.createElement(o.InView,v,({inView:o,ref:v})=>n.default.createElement(`div`,{ref:v,id:m,className:(0,i.default)(t,`vertical-timeline-element`,{"vertical-timeline-element--left":h===`left`,"vertical-timeline-element--right":h===`right`,"vertical-timeline-element--no-children":e===``}),style:g},n.default.createElement(n.default.Fragment,null,n.default.createElement(`span`,{style:p,onClick:d,className:(0,i.default)(u,`vertical-timeline-element-icon`,{"bounce-in":o||y,"is-hidden":!(o||y)})},l),n.default.createElement(`div`,{style:a,onClick:f,className:(0,i.default)(_,`vertical-timeline-element-content`,{"bounce-in":o||y,"is-hidden":!(o||y)})},n.default.createElement(`div`,{style:r,className:`vertical-timeline-element-content-arrow`}),e,n.default.createElement(`span`,{className:(0,i.default)(c,`vertical-timeline-element-date`)},s)))));c.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),className:r.default.string,contentArrowStyle:r.default.shape({}),contentStyle:r.default.shape({}),date:r.default.node,dateClassName:r.default.string,icon:r.default.element,iconClassName:r.default.string,iconStyle:r.default.shape({}),iconOnClick:r.default.func,onTimelineElementClick:r.default.func,id:r.default.string,position:r.default.string,style:r.default.shape({}),textClassName:r.default.string,visible:r.default.bool,intersectionObserverProps:r.default.shape({root:r.default.object,rootMargin:r.default.string,threshold:r.default.number,triggerOnce:r.default.bool})},e.default=c})),Ia=i(((e,t)=>{t.exports={VerticalTimeline:pa().default,VerticalTimelineElement:Fa().default}}))(),La=new URL(`pt-edii-logo-B2Ss4hCD.jpeg`,import.meta.url).href,Ra=new URL(`wesclic-logo-D5cjRQhm.jpeg`,import.meta.url).href,za=new URL(`asia-university-logo-DMOqr880.jpg`,import.meta.url).href,Ba=new URL(`ugm-logo-CxaZb6LM.png`,import.meta.url).href,Va=new URL(`bangkit-logo-B2HpQmux.jpg`,import.meta.url).href,Ha=new URL(`datains-logo-DIP3IkHP.png`,import.meta.url).href,Ua=[{date:`Apr 2026 – Present`,title:`Technical Writer`,organization:`PT EDI Indonesia · Jakarta Utara, Jakarta Raya, Indonesia`,logo:La,logoAlt:`Logo PT EDI Indonesia`,duties:[`Develop technical and functional specifications, technical documentation, and interface documentation for banking and tax-system integration projects.`,`Document data models and dictionaries, application configurations, infrastructure, use cases, and process and data flows.`,`Create documentation for eTax/API integrations, XML-to-JSON transformations, and automated fund disbursement workflows.`,`Prepare user guides for DJP/MPN Maker, Checker, and Admin processes, along with technical guides for server configuration, IIS/PHP, Windows Services, and Web Services.`,`Maintain system change and upgrade documentation, prepare project progress reports, and produce selected deliverables in both Indonesian and English.`,`Perform manual testing to identify defects and verify that features meet requirements. Also use SQL queries to retrieve data for validation.`]},{date:`2025 – 2026`,title:`AI Engineer (Internship)`,organization:`Wesclic Technology`,logo:Ra,logoAlt:`Logo Wesclic Technology`,duties:[`Built a Gemini-powered system to evaluate Sales Agent performance in real-time WebSocket conversations, using a multi-turn engine, four testing strategies, and contextual follow-ups.`,`Added automated quality monitoring and designed a PostgreSQL backend and live dashboard to reduce manual testing and deliver data-driven improvement insights.`]},{date:`Sep 2024 – Jan 2025`,title:`TEEP Research Intern`,organization:`Asia University · Taichung City, Taiwan`,logo:za,logoAlt:`Logo Asia University`,duties:[{before:`Supported `,mentor:`Prof. Wen-Chi Vivian Wu`,href:`https://sites.google.com/view/vivwu123/%E9%A6%96%E9%A0%81?authuser=0&pli=1`,after:`’s research on spherical video-based virtual reality (SVVR) by identifying relevant studies, helping draft a manuscript on nursing education, and proofreading it.`},`Contributed to Prof. Wu’s nursing education project, which used Uptale and Meta Quest headsets for interactive VR learning.`,`Designed the virtual learning environment in Uptale for the nursing training experience.`,{before:`Attended classes on artificial intelligence and drone technology taught by `,mentor:`Prof. Hsueh-Ting Chu`,href:`https://www.aiplab.tw/people`,after:`.`}]},{date:`Aug 2023 – Jul 2025`,title:`Teaching Assistant`,organization:`Universitas Gadjah Mada · Sleman, Yogyakarta`,logo:Ba,logoAlt:`Logo Universitas Gadjah Mada`,duties:[`Guided Senior Project students in data-mining algorithms and real-data projects, explaining implementations, troubleshooting code, and reviewing and grading assignments with feedback on proficiency and outcomes.`,`Taught test-case writing and bug identification across unit, integration, system, and acceptance testing, guided manual and automated methods, supported frameworks and code reviews, and assessed assignments and test plans with software-quality feedback.`,`Taught activity, sequence, and use-case diagrams, user stories and personas, requirements, UI/UX, and visual modeling, and supported design tools, usability and feedback tests, project progress, and documentation.`]},{date:`Aug 2023 – Jan 2024`,title:`Machine Learning Student`,organization:`Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka`,logo:Va,logoAlt:`Logo Bangkit Academy`,duties:[`Completed 900+ hours of learning in machine-learning pipelines, deep learning, Python, TensorFlow, and scikit-learn.`,`Led technical and administrative capstone work, including development, quality assurance, testing, documentation, and stakeholder presentations.`,`Served as Student Representative, organizing campus outreach and coordinating communication between students and program administration.`]},{date:`Jun 2023 – Aug 2023`,title:`System Analyst Intern`,organization:`PT Global Data Inspirasi (DataIns) · DI Yogyakarta`,logo:Ha,logoAlt:`Logo DataIns`,duties:[`Assessed government requirements and technologies for fit, performance, scalability, and business alignment, and prepared technical specifications and implementation and training guides.`,`Tested features, coordinated with Diskominfo DIY and technical and business teams, and tracked quality, schedules, reports, targets, and delivery tasks for Tepat Janji/SDPPI.`]}];function Wa(){let e=d(`(prefers-reduced-motion: reduce)`),t={rootMargin:`0px 0px -40px 0px`,triggerOnce:!1,skip:e};return(0,E.jsx)(`div`,{id:`history`,children:(0,E.jsxs)(`div`,{className:`items-container`,children:[(0,E.jsx)(`h1`,{children:`Career History`}),(0,E.jsx)(Ia.VerticalTimeline,{animate:!e,children:Ua.map(n=>(0,E.jsxs)(Ia.VerticalTimelineElement,{intersectionObserverProps:t,visible:e,className:`vertical-timeline-element--work`,date:n.date,icon:(0,E.jsx)(`img`,{className:`experience-logo`,src:n.logo,alt:n.logoAlt,width:60,height:60,loading:`lazy`,decoding:`async`}),children:[(0,E.jsx)(`h3`,{className:`vertical-timeline-element-title`,children:n.title}),(0,E.jsx)(`h4`,{className:`vertical-timeline-element-subtitle`,children:n.organization}),(0,E.jsx)(`ul`,{className:`history-responsibilities`,children:n.duties.map(e=>typeof e==`string`?(0,E.jsx)(`li`,{children:e},e):(0,E.jsxs)(`li`,{children:[e.before,(0,E.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:e.mentor}),e.after]},e.mentor))})]},`${n.title}-${n.date}`))})]})})}var Ga=new URL(`project-sap-sm-bn4xkSWK.svg`,import.meta.url).href,Ka=new URL(`project-sap-mm-DiSvBBUs.svg`,import.meta.url).href,qa=new URL(`project-smart-waste-xnRsnku2.jpg`,import.meta.url).href,Ja=new URL(`project-rfid-movement-BBg0Z9z1.jpg`,import.meta.url).href,Ya=new URL(`project-drilling-ai-BdSaM07e.jpg`,import.meta.url).href,Xa=new URL(`project-yolo-rice-D4LvwTA0.jpg`,import.meta.url).href,Za=new URL(`project-uptale-asia-univ-DFjBSbjK.png`,import.meta.url).href,Qa=[{id:`project_sap_sm_service_billing_controls`,title:`SAP SM Service Prioritization and Labor Billing Controls`,description:[`I modeled an SAP SM service-to-billing workflow as an independent Excel simulation using the `,{label:`APS Failure at Scania Trucks dataset`,href:`https://archive.ics.uci.edu/dataset/421/aps+failure+at+scania+trucks`},` from the UCI Machine Learning Repository. With Power Query, I prepared the 60,000-row training table and traced one selected APS case through equipment data, service requests, order planning, technician assignment, and service confirmation. I connected functional requirements to business rules, corrected a priority-validation defect, and retested seven priority scenarios, all of which passed. The costing model recorded three simulated inspection hours and Rp540,000 in internal labor cost, while billing controls limited eligible charges to two approved hours worth Rp700,000. I linked the approved amount to a billing document request and an invoice draft, adding controls for the one-hour overrun and tax review. I also mapped the process flow and drafted a Functional Specification Document (FSD).`],skills:[`Microsoft Excel`,`Power Query`,`Figma`,`Data Preparation`,`Requirements Analysis`,`Business Process Mapping`,`Functional Specifications`,`Functional Testing`,`Defect Tracking`,`Service Prioritization`,`Service Costing`,`Billing Controls`],src:Ga,width:1772.787,height:1180},{id:`project_sap_mm_p2p_simulation`,title:`SAP MM Replenishment Planning and Three-Way Invoice Matching`,description:[`For a simulated giftware retailer, I modeled the SAP MM procure-to-pay process in Microsoft Excel using product codes and descriptions from the UCI Machine Learning Repository’s `,{label:`Online Retail dataset`,href:`https://archive.ics.uci.edu/dataset/352/online+retail`},`. I organized 17 worksheets covering material data, inventory planning, purchase requisitions, supplier comparison, purchase orders, approval controls, goods receipt, and invoice verification. Planning across 10 materials identified five replenishment items totaling 75 units, leading to a simulated purchase order of £138.80. I implemented quantity and price checks, passed a price-mismatch test and all three approval boundary tests, and reconciled purchase orders, receipts, and invoices through three-way matching. The reconciliation returned four matched lines and flagged a two-unit variance worth £3.20, which I recorded in an issue log with a follow-up recommendation.`],skills:[`Microsoft Excel`,`draw.io`,`Data Cleaning`,`Material Master Data`,`Procure-to-Pay`,`Inventory Planning`,`Supplier Evaluation`,`Purchase Order Validation`,`Approval Controls`,`Goods Receipt`,`Invoice Verification`,`Three-Way Matching`,`Boundary Testing`,`Issue Tracking`],src:Ka,width:1800,height:1440},{id:`project_yolov11_rice_seedling_count`,title:`YOLOv11 Rice Seedling Detection`,description:[`For this crop monitoring project, I contributed to a system that detects and counts rice seedlings in UAV imagery. The detector used YOLO11n, MIRV and MIRH data augmentation, and AdamW with a learning rate of 0.01. It recorded 0.592 mAP@50 and 0.852 precision, while User Acceptance Testing reported an 85% acceptance rate for the system. The paper `,{label:`A Web-Based Rice Seedling Detection System Using UAV Imagery and YOLO Algorithm for Optimizing Crop Production`,href:`http://www.iemsjl.org/journal/article.php?code=97278&ckattempt=1`},` appeared in Industrial Engineering & Management Systems, Vol. 25, No. 1, in March 2026.`],skills:[`Python`,`Google Colab`,`Roboflow`,`OpenCV`,`YOLO11n`,`Image Processing`,`Data Augmentation`,`Object Detection`,`Model Evaluation`,`User Acceptance Testing`],projectContext:{label:`Project tools & methods`,tags:[`Label Studio`,`Flask`,`SQLAlchemy`,`UAV Imagery`,`AdamW`]},src:Xa,width:1919,height:1290},{id:`project_uptale_caregiver_training`,title:`360° VR Caregiver Training with Uptale and Meta Quest`,description:`During my TEEP internship at Asia University, I designed a 360° training environment in Uptale to help incoming caregivers get familiar with Yong-Kan Nursing Home on Meta Quest headsets. I interviewed caregivers at the facility, translated their needs into training requirements, and used those requirements to develop the learning concept. I photographed rooms and captured selected resident activities with a 360° camera, then used that material to build the virtual scenes in Uptale. Each session paired explanations with game-based activities and quizzes. Correct answers earned stars, and learners had to complete the current session before unlocking the next one.`,skills:[`Uptale`,`Meta Quest`,`360° Photography`,`Stakeholder Interviews`,`Requirements Elicitation`,`Requirements Analysis`,`VR Environment Design`,`Scenario-Based Learning`,`Gamification`,`Quiz Design`,`Progression Rules`],src:Za,width:1920,height:926},{id:`project_ai_drilling_prediction`,title:`AI-Driven Drilling Prediction System`,description:`In the drilling prediction project, I contributed to model design and analysis of experimental results. I also helped prepare the research paper, working on the literature review, writing, and proofreading.`,skills:[`Prediction Model Design`,`Experimental Analysis`,`Literature Review`,`Research Writing`,`Proofreading`],src:Ya,width:1919,height:1290},{id:`project_rfid_random_forest_tag_movement`,title:`RFID Tag Movement Research`,description:[`This study investigated movement and direction detection for passive RFID tags using RSS and timestamp features. I helped with the paper's writing, literature review, and proofreading. The study combined iForest-based outlier detection, SMOTE, and Random Forest, reporting 94.25% accuracy and better performance than the other machine learning methods evaluated. The findings were published in Future Internet in the paper `,{label:`Utilizing Random Forest with iForest-Based Outlier Detection and SMOTE to Detect Movement and Direction of RFID Tags`,href:`https://doi.org/10.3390/fi15030103`},`.`],skills:[`Technical Writing`,`Literature Review`,`Proofreading`],projectContext:{label:`Study methods`,tags:[`RSS & Timestamp Features`,`Isolation Forest`,`SMOTE`,`Random Forest`]},src:Ja,width:1315,height:993},{id:`project_tourism_sentiment_tfidf_logistic_regression`,title:`Tourism Sentiment Analysis with TF-IDF and Logistic Regression`,description:`A dataset of 14,122 tourism tweets formed the basis of this sentiment analysis study. The research used TF-IDF and Logistic Regression to classify tweets as positive, neutral, or negative, reporting 82.58% accuracy, 81.74% precision, 82.58% recall, and an 81.39% F1-score. In the reported comparison, the classifier outperformed MLP, KNN, Decision Tree, Random Forest, and AdaBoost. For this project, I helped prepare the paper through literature review, writing, and proofreading.`,skills:[`Technical Writing`,`Literature Review`,`Proofreading`],projectContext:{label:`Study methods`,tags:[`Sentiment Analysis`,`TF-IDF`,`Logistic Regression`,`Model Benchmarking`]}},{id:`project_swaps_smart_waste_plastic`,title:`SWAPS (Smart Waste Plastic System)`,description:`I helped develop SWAPS (Smart Waste Plastic System), a system that processes plastic bottle waste and rewards users with money. The project received Second Runner-Up (Juara Harapan II) at the 2019 National Young Inventor Awards and the Silver Award at the 2020 International Exhibition for Young Inventors.`,skills:[`System Development`,`Plastic Bottle Waste Processing`,`Financial Incentive Design`],src:qa,width:640,height:640}];function $a(){return(0,E.jsxs)(`section`,{className:`projects-container`,id:`projects`,"aria-labelledby":`projects-title`,children:[(0,E.jsx)(`h1`,{id:`projects-title`,children:`Personal Projects`}),(0,E.jsx)(`div`,{className:`projects-grid`,children:Qa.map(({id:e,title:t,description:n,skills:r,projectContext:i,src:a,width:o,height:s})=>{let c=typeof n==`string`?n:n.map((e,t)=>typeof e==`string`?e:(0,E.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:e.label},`${e.href}-${t}`));return(0,E.jsxs)(`article`,{className:`project`,"aria-labelledby":`${e}-title`,children:[a&&(0,E.jsx)(`div`,{className:`project-media`,children:(0,E.jsx)(`img`,{src:a,className:`zoom`,alt:`Project thumbnail for ${t}`,width:o,height:s,loading:`lazy`})}),(0,E.jsxs)(`div`,{className:`project-content`,children:[(0,E.jsx)(`h2`,{id:`${e}-title`,children:t}),(0,E.jsx)(`p`,{children:c}),(0,E.jsxs)(`div`,{className:`project-tags`,children:[(0,E.jsx)(`ul`,{className:`project-skills`,"aria-label":`Skills for ${t}`,children:r.map(e=>(0,E.jsx)(`li`,{className:`project-skill`,children:e},e))}),i&&(0,E.jsxs)(`div`,{className:`project-context`,children:[(0,E.jsx)(`h3`,{id:`${e}-context`,children:i.label}),(0,E.jsx)(`ul`,{className:`project-skills`,"aria-labelledby":`${e}-context`,children:i.tags.map(e=>(0,E.jsx)(`li`,{className:`project-skill`,children:e},e))})]})]})]})]},e)})})]})}var eo=`ninis.dyah.yulianingsih@outlook.com`;function to(){let[e,t]=(0,T.useState)(``),[n,r]=(0,T.useState)(``),[i,a]=(0,T.useState)(``),[o,s]=(0,T.useState)(!1),[l,u]=(0,T.useState)(!1),[d,f]=(0,T.useState)(!1),[p,m]=(0,T.useState)(!1);return(0,E.jsx)(`div`,{id:`contact`,children:(0,E.jsx)(`div`,{className:`items-container`,children:(0,E.jsxs)(`div`,{className:`contact_wrapper`,children:[(0,E.jsx)(`h1`,{children:`Contact Me`}),(0,E.jsx)(`p`,{children:`Have a project in mind? Let’s collaborate and bring your next idea to life!`}),(0,E.jsxs)(g,{component:`form`,noValidate:!0,autoComplete:`off`,className:`contact-form`,onSubmit:t=>{t.preventDefault();let r=e.trim().length>0,a=n.trim().length>0,o=i.trim().length>0;if(s(!r),u(!a),f(!o),m(r&&a&&o),r&&a&&o){let t=[`Name: ${e.trim()}`,`Contact: ${n.trim()}`,``,i.trim().replace(/\r?\n/g,`\r
`)].join(`\r
`);window.location.assign(`mailto:${eo}?subject=Portfolio%20inquiry&body=${encodeURIComponent(t)}`)}},children:[(0,E.jsxs)(`div`,{className:`form-flex`,children:[(0,E.jsx)(_,{required:!0,id:`contact-name`,label:`Your Name`,placeholder:`What's your name?`,value:e,onChange:e=>{t(e.target.value),s(!1),m(!1)},error:o,helperText:o?`Please enter your name`:` `}),(0,E.jsx)(_,{required:!0,id:`contact-email-phone`,label:`Email / Phone`,placeholder:`How can I reach you?`,value:n,onChange:e=>{r(e.target.value),u(!1),m(!1)},error:l,helperText:l?`Please enter your email or phone number`:` `})]}),(0,E.jsx)(_,{required:!0,id:`contact-message`,label:`Message`,placeholder:`Send me any inquiries or questions`,multiline:!0,rows:10,className:`body-form`,value:i,onChange:e=>{a(e.target.value),f(!1),m(!1)},error:d,helperText:d?`Please enter the message`:` `}),(0,E.jsx)(de,{type:`submit`,variant:`contained`,endIcon:(0,E.jsx)(se,{}),children:`Send`}),p&&(0,E.jsxs)(c,{className:`preview-status`,role:`status`,severity:`info`,children:[`Complete sending in your email app. If it does not open, email `,eo,` directly.`]})]})]})})})}function no(){return(0,E.jsxs)(`footer`,{children:[(0,E.jsx)(`div`,{className:`footer-social`,children:(0,E.jsx)(Se,{})}),(0,E.jsx)(`p`,{children:`Ninis Dyah Yulianingsih · Personal portfolio`})]})}var ro=_e.div;function io(){let[e,t]=(0,T.useState)(!1),n=(0,T.useRef)(!1),r=d(`(prefers-reduced-motion: reduce)`);return(0,T.useEffect)(()=>{let e=()=>{let e=window.scrollY>360;n.current!==e&&(n.current=e,t(e))};return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,E.jsx)(ro,{className:`back-to-top`,"aria-hidden":!e,style:{pointerEvents:e?`auto`:`none`},initial:!1,animate:{opacity:+!!e,y:e?0:16},transition:{duration:r?0:.2,ease:`easeOut`},children:(0,E.jsx)(w,{title:`Kembali ke atas`,children:(0,E.jsx)(ee,{size:`medium`,color:`primary`,"aria-label":`Kembali ke atas`,tabIndex:e?0:-1,onClick:()=>{document.getElementById(`profile-name`)?.focus({preventScroll:!0}),window.scrollTo({top:0,behavior:r?`instant`:`smooth`})},children:(0,E.jsx)(oe,{})})})})}function ao(){let[e,t]=(0,T.useState)(`light`),n=d(`(prefers-reduced-motion: reduce)`),r=(0,T.useMemo)(()=>Te(e),[e]),i=[(0,E.jsx)(Pe,{mode:e}),(0,E.jsx)(da,{}),(0,E.jsx)(Wa,{}),(0,E.jsx)($a,{}),(0,E.jsx)(to,{})];return(0,E.jsxs)(p,{theme:r,children:[(0,E.jsx)(ce,{}),(0,E.jsx)(he,{reducedMotion:n?`always`:`never`,children:(0,E.jsxs)(`div`,{className:`main-container ${e}-mode`,style:we(e),children:[(0,E.jsx)(`div`,{className:`page-bottom-artwork`,"aria-hidden":`true`,children:(0,E.jsx)(Me,{mode:e,variant:`footer`})}),(0,E.jsx)(`a`,{className:`skip-link`,href:`#main-content`,children:`Skip to content`}),(0,E.jsx)(xe,{mode:e,onModeChange:()=>t(e===`dark`?`light`:`dark`)}),(0,E.jsx)(`main`,{id:`main-content`,children:i.map((e,t)=>(0,E.jsx)(_e.div,{initial:!n&&{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:n?0:.7,delay:n?0:t*.05},children:e},t))}),(0,E.jsx)(no,{}),(0,E.jsx)(io,{})]})})]})}ve.createRoot(document.getElementById(`root`)).render((0,E.jsx)(T.StrictMode,{children:(0,E.jsx)(ao,{})}));