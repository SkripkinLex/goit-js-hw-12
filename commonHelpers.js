import{a as p,S as h,i as _}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function L(e){return e.map(b).join(`
`)}function b(e){return`<li class="gallery-item">
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
            </li>`}function v(e){e.classList.remove("loader-hidden")}function q(e){e.classList.add("loader-hidden")}async function w(e){p.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:O,page:a};try{return(await p.get("/api/",{params:s})).data}catch(o){console.log(o)}}const S="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",u=document.querySelector(".search-form");document.querySelector(".search-form__input");const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more__button"),O=15;let a=1,n=null,l,g;g=new h(".gallery a");function d(){f.innerHTML=""}function P(){return a=a+1}function $(){y.classList.remove("active")}function C(){return a=1}u.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.query.value.trim(),C(),$(),l.length!==0){v(m);try{n=await w(l),n.hits.length===0?(_.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:S,position:"topRight",theme:"dark"}),d()):(d(),f.insertAdjacentHTML("beforeend",L(n.hits)),P(),g.refresh(),y.classList.add("active"))}catch(o){console.log(o)}q(m)}u.reset()});
//# sourceMappingURL=commonHelpers.js.map
