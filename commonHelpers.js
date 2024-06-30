import{a as y,S as P,i as _}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function b(e){return e.map(M).join(`
`)}function M(e){return`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                <div class="gallery-image-thumb">
                  <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
                </div>
                <ul class="property">
                  <li class="property__item">
                    <p class="property__name">Likes</p>
                    <p class="item-prop__quantity">${e.likes}</p>
                  </li>
                  <li class="property__item">
                    <p class="property__name">Views</p>
                    <p class="item-prop__quantity">${e.views}</p>
                  </li>
                  <li class="property__item">
                    <p class="property__name">Comments</p>
                    <p class="item-prop__quantity">${e.comments}</p>
                  </li>
                  <li class="property__item">
                    <p class="property__name">Downloads</p>
                    <p class="item-prop__quantity">${e.downloads}</p>
                  </li>
                </ul>
              </a>
            </li>`}function E(e){e.classList.remove("loader-hidden")}function H(e){e.classList.add("loader-hidden")}async function L(e,s,o){y.defaults.baseURL="https://pixabay.com";const n={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s};try{return(await y.get("/api/",{params:n})).data}catch(t){console.log(t)}}const q="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",v=document.querySelector(".search-form");document.querySelector(".search-form__input");const u=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".load-more__button");let p,S=new P(".gallery a"),i,d=15;function O(){u.innerHTML=""}function w(){return i=i+1}function f(){g.classList.remove("active")}function T(){g.classList.add("active")}function k(){return i=1}function $(e){if(i>e)return f(),_.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:q,position:"topRight",theme:"dark"})}function z(e,s,o){let n=e.scrollTop,t=null;function r(a){t===null&&(t=a);const c=a-t,m=l(c,n,s,o);e.scrollTop=m,c<o&&requestAnimationFrame(r)}function l(a,c,m,C){return a/=C/2,a<1?m/2*a*a+c:(a--,-m/2*(a*(a-2)-1)+c)}requestAnimationFrame(r)}async function A(){const e=await L(p,i,d),s=Math.ceil(e.totalHits/d);if(e.hits.length===0||i>=s)console.log("No more pages to load."),f();else{u.insertAdjacentHTML("beforeend",b(e.hits)),S.refresh();const r=u.querySelectorAll("li")[0].getBoundingClientRect().height*2;z(u,r,500),w(),$(s)}}async function N(e){if(e.preventDefault(),p=e.target.elements.query.value.trim(),k(),f(),p.length!==0){E(h);try{const o=await L(p,i,d);O(),o.hits.length===0?_.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:q,position:"topRight",theme:"dark"}):(u.insertAdjacentHTML("beforeend",b(o.hits)),w(),S.refresh(),o.hits.length===d?T():f())}catch(o){console.log(o)}H(h)}v.reset()}v.addEventListener("submit",N);g.addEventListener("click",A);
//# sourceMappingURL=commonHelpers.js.map
