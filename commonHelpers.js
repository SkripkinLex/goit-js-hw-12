import{a as m,S as q,i as w}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function h(e){return e.map(S).join(`
`)}function S(e){return`<li class="gallery-item">
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
            </li>`}function P(e){e.classList.remove("loader-hidden")}function M(e){e.classList.add("loader-hidden")}async function _(e){m.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:i};try{return(await m.get("/api/",{params:s})).data}catch(o){console.log(o)}}const O="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",f=document.querySelector(".search-form");document.querySelector(".search-form__input");const p=document.querySelector(".gallery"),y=document.querySelector(".loader"),n=document.querySelector(".load-more__button"),L=15;let i=1,a=null,l,u;u=new q(".gallery a");function g(){p.innerHTML=""}function b(){return i=i+1}function C(){n.classList.remove("active")}function $(){return i=1}async function v(){const e=Math.ceil(a.totalHits/L);i>=e?(console.log("No more pages to load."),n.disabled=!0,n.style.display="none"):(a=await _(l),p.insertAdjacentHTML("beforeend",h(a.hits)),u.refresh(),b())}f.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.query.value.trim(),$(),C(),l.length!==0){P(y);try{a=await _(l),v(),a.hits.length===0?(w.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:O,position:"topRight",theme:"dark"}),g()):(g(),p.insertAdjacentHTML("beforeend",h(a.hits)),b(),u.refresh(),n.classList.add("active"))}catch(o){console.log(o)}M(y)}f.reset()});n.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map
