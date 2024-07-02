import{a as b,S as k,i as f}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function L(e){return e.map(z).join(`
`)}function z(e){return`<li class="gallery-item">
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
            </li>`}function H(e){e.classList.remove("loader-hidden")}function M(e){e.classList.add("loader-hidden")}async function v(e,o,r){b.defaults.baseURL="https://pixabay.com";const i={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:o};try{return(await b.get("/api/",{params:i})).data}catch(t){console.log(t)}}const p="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",S=document.querySelector(".search-form");document.querySelector(".search-form__input");const d=document.querySelector(".gallery"),_=document.querySelector(".loader"),y=document.querySelector(".load-more__button");let m,q=new k(".gallery a"),n,g=15;function P(){d.innerHTML=""}function w(){return n=n+1}function h(){y.classList.remove("active")}function E(){y.classList.add("active")}function O(){return n=1}function R(e,o,r){let i=e.scrollTop,t=null;function s(a){t===null&&(t=a);const c=a-t,u=l(c,i,o,r);e.scrollTop=u,c<r&&requestAnimationFrame(s)}function l(a,c,u,C){return a/=C/2,a<1?u/2*a*a+c:(a--,-u/2*(a*(a-2)-1)+c)}requestAnimationFrame(s)}async function T(){const e=await v(m,n,g),o=Math.ceil(e.totalHits/g);if(e.hits.length>0){d.insertAdjacentHTML("beforeend",L(e.hits)),q.refresh();const s=d.querySelectorAll("li")[0].getBoundingClientRect().height*2;R(document.documentElement,s,500),w(),n>o&&(h(),f.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:p,position:"topRight",theme:"dark"}))}else h(),f.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:p,position:"topRight",theme:"dark"})}async function U(e){if(e.preventDefault(),m=e.target.elements.query.value.trim(),O(),h(),m.length!==0){H(_);try{const r=await v(m,n,g);P(),r.hits.length===0?f.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:p,position:"topRight",theme:"dark"}):(d.insertAdjacentHTML("beforeend",L(r.hits)),w(),q.refresh(),r.hits.length===g?E():(h(),f.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:p,position:"topRight",theme:"dark"})))}catch(r){console.log(r)}M(_)}S.reset()}S.addEventListener("submit",U);y.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
