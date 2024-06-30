import{a as b,S as P,i as g}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function L(e){return e.map(k).join(`
`)}function k(e){return`<li class="gallery-item">
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
            </li>`}function H(e){e.classList.remove("loader-hidden")}function M(e){e.classList.add("loader-hidden")}async function q(e,o,s){b.defaults.baseURL="https://pixabay.com";const i={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:o};try{return(await b.get("/api/",{params:i})).data}catch(t){console.log(t)}}const h="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",v=document.querySelector(".search-form");document.querySelector(".search-form__input");const u=document.querySelector(".gallery"),_=document.querySelector(".loader"),y=document.querySelector(".load-more__button");let f,S=new P(".gallery a"),n,d=15;function z(){u.innerHTML=""}function w(){return n=n+1}function m(){y.classList.remove("active")}function E(){y.classList.add("active")}function O(){return n=1}function T(e){if(n>e)return m(),g.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"})}function R(e,o,s){let i=e.scrollTop,t=null;function r(a){t===null&&(t=a);const c=a-t,p=l(c,i,o,s);e.scrollTop=p,c<s&&requestAnimationFrame(r)}function l(a,c,p,C){return a/=C/2,a<1?p/2*a*a+c:(a--,-p/2*(a*(a-2)-1)+c)}requestAnimationFrame(r)}async function $(){const e=await q(f,n,d),o=Math.ceil(e.totalHits/d);if(e.hits.length===0){m(),g.show({class:"izt-toast-message",message:"Wait please!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"});return}if(n>=o){m(),u.insertAdjacentHTML("beforeend",L(e.hits)),S.refresh();const r=u.querySelectorAll("li")[0].getBoundingClientRect().height*2;R(u,r,500),w(),T(o)}}async function A(e){if(e.preventDefault(),f=e.target.elements.query.value.trim(),O(),m(),f.length!==0){H(_);try{const s=await q(f,n,d);z(),s.hits.length===0?g.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"}):(u.insertAdjacentHTML("beforeend",L(s.hits)),w(),S.refresh(),s.hits.length===d?E():m())}catch(s){console.log(s)}M(_)}v.reset()}v.addEventListener("submit",A);y.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
