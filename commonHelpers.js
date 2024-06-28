import{a as u,S as q,i as g}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function w(e){return e.map(P).join(`
`)}function P(e){return`<li class="gallery-item">
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
            </li>`}function S(e){e.classList.remove("loader-hidden")}function C(e){e.classList.add("loader-hidden")}async function y(e,s,o){u.defaults.baseURL="https://pixabay.com";const n={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s};try{return(await u.get("/api/",{params:n})).data}catch(t){console.log(t)}}const h="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",d=document.querySelector(".search-form");document.querySelector(".search-form__input");const _=document.querySelector(".gallery"),m=document.querySelector(".loader"),i=document.querySelector(".load-more__button");let l,p;p=new q(".gallery a");let a;function f(){_.innerHTML=""}function b(){return a=a+1}function L(){i.classList.remove("active")}function O(){return a=1}function k(e){if(a>e)return L(),g.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"})}async function v(){const e=Math.ceil(data.totalHits/perPage);if(a==e)console.log("No more pages to load."),i.disabled=!0,i.style.display="none";else{const s=await y(l,a,perPage);_.insertAdjacentHTML("beforeend",w(s.hits)),p.refresh(),b(),k(e)}}d.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.query.value.trim(),O(),L(),l.length!==0){S(m);try{const o=await y(l,a,perPage);v(),o.hits.length===0?(g.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:h,position:"topRight",theme:"dark"}),f()):(f(),b(),p.refresh(),i.classList.add("active"))}catch(o){console.log(o)}C(m)}d.reset()});i.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
