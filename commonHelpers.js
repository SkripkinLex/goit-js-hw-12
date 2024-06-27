import{a as p,S as v,i as f}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function q(e){return e.map(w).join(`
`)}function w(e){return`<li class="gallery-item">
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
            </li>`}function N(e){e.classList.remove("loader-hidden")}function P(e){e.classList.add("loader-hidden")}async function g(e,s,a){p.defaults.baseURL="https://pixabay.com";const i={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:s};try{return(await p.get("/api/",{params:i})).data}catch(t){console.log(t)}}const y="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",u=document.querySelector(".search-form");document.querySelector(".search-form__input");const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),o=document.querySelector(".load-more__button");let n,c;c=new v(".gallery a");function d(){h.innerHTML=""}function b(){return pageNumber=pageNumber+1}function _(){o.classList.remove("active")}function S(){return pageNumber=1}function C(e){if(pageNumber>e)return _(),f.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:y,position:"topRight",theme:"dark"})}async function L(){const e=Math.ceil(data.totalHits/perPage);if(pageNumber<=e)console.log("No more pages to load."),o.disabled=!0,o.style.display="none";else{const s=await g(n,pageNumber,perPage);h.insertAdjacentHTML("beforeend",q(s.hits)),c.refresh(),b(),C(e)}}u.addEventListener("submit",async e=>{if(e.preventDefault(),n=e.target.elements.query.value.trim(),S(),_(),n.length!==0){N(m);try{const a=await g(n,pageNumber,perPage);L(),a.hits.length===0?(f.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:y,position:"topRight",theme:"dark"}),d()):(d(),b(),c.refresh(),o.classList.add("active"))}catch(a){console.log(a)}P(m)}u.reset()});o.addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map
