import{a as d,S as w,i as y}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function S(e){return e.map(P).join(`
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
            </li>`}function C(e){e.classList.remove("loader-hidden")}function O(e){e.classList.add("loader-hidden")}async function h(e,s,o){d.defaults.baseURL="https://pixabay.com";const n={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s};try{return(await d.get("/api/",{params:n})).data}catch(t){console.log(t)}}const _="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",m=document.querySelector(".search-form");document.querySelector(".search-form__input");const b=document.querySelector(".gallery"),f=document.querySelector(".loader"),i=document.querySelector(".load-more__button");let l,p;p=new w(".gallery a");let a,u;function g(){b.innerHTML=""}function L(){return a=a+1}function v(){i.classList.remove("active")}function k(){return a=1}function E(e){if(a>e)return v(),y.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:_,position:"topRight",theme:"dark"})}async function q(){const e=await h(l,a,u),s=Math.ceil(e.totalHits/u);a==s?(console.log("No more pages to load."),i.disabled=!0,i.style.display="none"):(b.insertAdjacentHTML("beforeend",S(e.hits)),p.refresh(),L(),E(s))}m.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.query.value.trim(),k(),v(),l.length!==0){C(f);try{const o=await h(l,a,u);q(),o.hits.length===0?(y.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:_,position:"topRight",theme:"dark"}),g()):(g(),L(),p.refresh(),i.classList.add("active"))}catch(o){console.log(o)}O(f)}m.reset()});i.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
