function t(t,n,e,s){Object.defineProperty(t,n,{get:e,set:s,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},s={},a=n.parcelRequirea8ed;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in s){var n=s[t];delete s[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){s[t]=n},n.parcelRequirea8ed=a),a.register("7PhYn",(function(n,e){var s,a;t(n.exports,"resolve",(()=>a),(t=>a=t)),t(n.exports,"register",(()=>s),(t=>s=t));var i={};s=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)i[n[e]]=t[n[e]]},a=function(t){var n=i[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),a("7PhYn").register(JSON.parse('{"di8mO":"index.8a891f43.js","3Lfnw":"piedra.de1f4b74.png","kZKib":"papel.bf24c501.png","5TSXz":"tijera.dfa9f3cc.png","4AbWi":"star-red.e2ae0e0f.png","lkpPk":"star-green.f8333e55.png"}'));class i extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.typeText=this.textContent||"body",this.render()}render(){const t=document.createElement("style");this.shadow.innerHTML=`<button>${this.typeText}</button>`,t.innerHTML="\n        button {\n            font-family: Odibee Sans, sans-serif;\n            font-size: 45px;\n            font-weight: 400;\n            color: white;\n            width: 100%;\n            height: 100%;\n            padding: 8px;\n            background-color: #006CFC;\n            border-style: none;\n            border: 10px solid #001997;\n            border-radius: 10px;\n        }",this.shadow.querySelector("button").addEventListener("click",(()=>{const t=new CustomEvent("click-btn-custom",{detail:{}});this.dispatchEvent(t)})),this.shadow.appendChild(t)}}customElements.define("button-custom",i),a.register("hRGbL",(function(t,n){t.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("3Lfnw")})),a.register("kVZsc",(function(n,e){var s;t(n.exports,"getBundleURL",(()=>s),(t=>s=t));var a={};function i(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var n=a[t];return n||(n=function(){try{throw new Error}catch(n){var t=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),a[t]=n),n}})),a.register("gFVKK",(function(t,n){t.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("kZKib")})),a.register("lrQTD",(function(t,n){t.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("5TSXz")}));class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.typeImage=this.getAttribute("image")||"body",this.render()}render(){const t=document.createElement("img"),n=document.createElement("style");"piedra"==this.typeImage?(t.src=a("hRGbL"),t.setAttribute("alt","piedra")):"papel"==this.typeImage?(t.src=a("gFVKK"),t.setAttribute("alt","papel")):"tijera"==this.typeImage&&(t.src=a("lrQTD"),t.setAttribute("alt","tijera")),n.innerHTML="\n        img {\n            width: 100%;\n        }\n        ",t.addEventListener("click",(()=>{const t=new CustomEvent("listen-click-hand",{detail:{}});this.dispatchEvent(t)})),this.shadow.appendChild(t),this.shadow.appendChild(n)}}customElements.define("hand-custom",o);const r={data:{myTurn:"",pcTurn:"",history:{me:0,pc:0}},listeners:[],getState(){return this.data},setState(t){this.data=t;for(const t of this.listeners)t();localStorage.setItem("data",JSON.stringify(t))},subscribe(t){this.listeners.push(t)},theTurner(t,n){const e=this.getState();e.myTurn=t,e.pcTurn=n,this.setState(e)},theWinner:(t,n)=>"piedra"==t&&"tijera"==n?1:"piedra"==t&&"papel"==n?0:"piedra"==t&&"piedra"==n?-1:"papel"==t&&"piedra"==n?1:"papel"==t&&"tijera"==n?0:"papel"==t&&"papel"==n?-1:"tijera"==t&&"papel"==n?1:"tijera"==t&&"piedra"==n?0:"tijera"==t&&"tijera"==n?-1:void 0,pushToHistory(t){const n=r.getState();1==t&&n.history.me++,0==t&&n.history.pc++,r.setState(n)}};function c(t,n,e,s){const a=function(t){const n=Math.floor(3*Math.random()+1);let e;if(1==n)return e="piedra",r.theTurner(t,e),{myTurn:t,pcTurn:e};if(2==n)return e="papel",r.theTurner(t,e),{myTurn:t,pcTurn:e};if(3==n)return e="tijera",r.theTurner(t,e),{myTurn:t,pcTurn:e}}(t),i=r.theWinner(a.myTurn,a.pcTurn);r.pushToHistory(i),setTimeout((()=>{!function(t,n){n(1==t?"/result/ganaste":0==t?"/result/perdiste":"/result/empate")}(i,s)}),2e3),setTimeout((()=>{!function(t,n,e){t.innerHTML="";const s=document.createElement("div"),a=document.createElement("div"),i=document.createElement("style");s.classList.add("myHand"),a.classList.add("pcHand"),s.innerHTML=`<hand-custom class="content__hand-custom" image="${e}"></hand-custom>`,a.innerHTML=`<hand-custom class="content__hand-custom" image="${n}"</hand-custom>`,i.innerHTML="\n    .game__content {\n        display: flex;\n        justify-content: center;\n        }\n    .myHand {\n        width: 150px;\n        position: fixed;\n        bottom: 0;\n        }\n    .pcHand {\n        width: 150px;\n        transform: rotate(-180deg);\n        }\n    ",t.appendChild(a),t.appendChild(s),t.appendChild(i)}(e,a.pcTurn,a.myTurn)}))}a.register("jmvYd",(function(t,n){t.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("4AbWi")})),a.register("agL0n",(function(t,n){t.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("lkpPk")}));const d=[{path:/\/welcome/,component:function(t){const n=document.createElement("main");return n.classList.add("welcome__content"),n.innerHTML='\n    <div class="welcome__main">\n        <div class="welcome__title-cont">\n            <h1 class="welcome__title">Rock, Paper, Scissors</h1>\n        </div>\n\n        <div class="welcome__button">\n            <button-custom class="button-custom">PLAY</button-custom>\n        </div>\n    </div>\n\n    <div class="content__game">\n        <div class="content__hands">\n            <div class="content__hand-piedra">\n                <hand-custom image="piedra"></hand-custom>\n            </div>\n\n            <div class="content__hand-papel">\n                <hand-custom image="papel"></hand-custom>\n            </div>\n\n            <div class="content__hand-tijera">\n                <hand-custom image="tijera"></hand-custom>\n            </div>\n        </div>\n    </div>\n    ',n.querySelector("button-custom").addEventListener("click",(n=>{t.goTo("/instructions")})),n}},{path:/\/instructions/,component:function(t){const n=document.createElement("main");return n.classList.add("inst__content"),n.innerHTML='\n    <div class="inst__main">\n        <div class="inst__title-cont">\n            <h1 class="inst__title">Press START and choose rock, paper, scissors within 3 seconds.</h1>\n        </div>\n\n        <div class="inst__button">\n            <button-custom class="button-custom">START</button-custom>\n        </div>\n    </div>\n\n    <div class="content__game">\n        <div class="content__hands">\n            <div class="content__hand-piedra">\n                <hand-custom image="piedra"></hand-custom>\n            </div>\n\n            <div class="content__hand-papel">\n                <hand-custom image="papel"></hand-custom>\n            </div>\n\n            <div class="content__hand-tijera">\n                <hand-custom image="tijera"></hand-custom>\n            </div>\n        </div>\n    </div>\n    ',n.querySelector("button-custom").addEventListener("click",(n=>{t.goTo("/game")})),n}},{path:/\/game/,component:function(t){const n=document.createElement("main"),e=document.createElement("style");return n.classList.add("game__content"),n.innerHTML='\n    <div class="game__countdown">3</div>  \n\n    <div class="content__game">\n        <div class="content__hands">\n            <div class="content__hand-piedra">\n                <hand-custom class="content__hand-custom piedra" image="piedra"></hand-custom>\n            </div>\n\n            <div class="content__hand-papel-papel">\n                <hand-custom class="content__hand-custom papel" image="papel"></hand-custom>\n            </div>\n\n            <div class="content__hand-tijera">\n                <hand-custom class="content__hand-custom tijera" image="tijera"></hand-custom>\n            </div>\n        </div>\n    </div>',e.innerHTML='\n    .game__content {\n        display: grid;\n        padding: 100px 26px 0 26px;\n        height: 100vh;\n        gap: 30px;\n    }\n    \n    @media (min-height: 550px) {\n        .game__content {\n            padding: 200px 26px 0 26px;\n        }\n    }\n    \n    .game__countdown {\n        font-family: "Zilla Slab", sans-serif;\n        font-weight: 700;\n        border: 10px solid;\n        height: 250px;\n        width: 250px;\n        border-radius: 50%;\n        padding: 0 0 25px 0;\n        font-size: 150px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 auto;\n    }\n     ',function(t,n,e){const s=n.querySelector(".game__countdown");let a=3;const i=setInterval((()=>{a--,0==a&&(clearInterval(i),e("/instructions")),s.textContent=a.toString()}),1e3);t.forEach((s=>{s.addEventListener("click",(a=>{clearInterval(i),"piedra"==s.getAttribute("image")&&c("piedra",t,n,e),"papel"==s.getAttribute("image")&&c("papel",t,n,e),"tijera"==s.getAttribute("image")&&c("tijera",t,n,e)}))}))}(n.querySelectorAll(".content__hand-custom"),n,t.goTo),n.appendChild(e),n}},{path:/\/result\/./,component:function(t){return function(){const n=r.getState().history,e=document.createElement("main");e.classList.add("result");const s=function(t){let n="",e="";return location.pathname.includes("perdiste")?(n=a("jmvYd"),e="You lose"):location.pathname.includes("ganaste")?(n=a("agL0n"),e="You win",t.classList.add("result--green")):(n=a("agL0n"),e="Draw",t.classList.add("result--green")),{image:n,title:e}}(e);return e.innerHTML=`   \n    <div class="result__star">\n        <p class="result__text-star">${s.title}</p>\n        <img src="${s.image}" alt="" />\n    </div>\n    <div class="result__score">\n        <p class="result__text-score">Score</p>\n        <p class="result__text-player">Player: ${n.me}</p>\n        <p class="result__text-pc">PC: ${n.pc}</p>\n    </div>\n    <div class="result__cont-button">\n        <button-custom class="result__button">PLAY AGAIN</button-custom>\n    </div>\n`,"Draw"==s.title&&e.querySelector(".result__text-star").classList.add("result__text-star--draw"),e.querySelector(".result__button").addEventListener("click",(()=>{t.goTo("/instructions")})),e}()}}];function l(){return location.host.includes("github.io")}!function(){localStorage.getItem("data")&&r.setState(JSON.parse(localStorage.getItem("data")));!function(t){function n(t){const n=l()?"/Rock-Paper-Scissors"+t:t;history.pushState({},"",n),e(n)}function e(e){const s=l()?e.replace("/Rock-Paper-Scissors",""):e;d.forEach((e=>{if(e.path.test(s)){const s=e.component({goTo:n});t.firstChild?.remove(),t.appendChild(s)}}))}"/Rock-Paper-Scissors/"==window.location.pathname||"/"==window.location.pathname?n("/welcome"):e(window.location.pathname)}(document.querySelector("#root"))}();
//# sourceMappingURL=index.8a891f43.js.map