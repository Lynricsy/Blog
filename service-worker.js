if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const a=e=>c(e,r),f={module:{uri:r},exports:n,require:a};i[r]=Promise.all(d.map((e=>f[e]||a(e)))).then((e=>(s(...e),n)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/06/hello-world/index.html",revision:"80a4141aabf8c584193e1983f482fa0d"},{url:"404.html",revision:"f653d2844cad666f386eea031e3236d6"},{url:"anzhiyu/random.js",revision:"416ed58cd1627fdce2604da9cc2af075"},{url:"archives/2023/06/index.html",revision:"c16ecf41f2886574959742e43798c009"},{url:"archives/2023/index.html",revision:"dd8ae53281d2df0a51308ac6fcdcdbe7"},{url:"archives/index.html",revision:"2a2d991496d4937409727b230676e8c5"},{url:"css/index.css",revision:"b2d56838dfebab94e77b8d9484912972"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"f5c24a8a50fb8bbd7e2ca60b015e2313"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"6d27ae3cf834050e2b8c3a3c0bd4573d"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{})}));
//# sourceMappingURL=service-worker.js.map
