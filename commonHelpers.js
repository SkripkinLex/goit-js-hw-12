import{a as d,S as q,i as y}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function h(e){return e.map(w).join(`
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
            </li>`}function S(e){e.classList.remove("loader-hidden")}function C(e){e.classList.add("loader-hidden")}async function _(e,s,o){d.defaults.baseURL="https://pixabay.com";const i={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:o,page:s};try{return(await d.get("/api/",{params:i})).data}catch(t){console.log(t)}}const b="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",f=document.querySelector(".search-form");document.querySelector(".search-form__input");const n=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more__button");let c,L=new q(".gallery a"),a,l=15;function P(){n.innerHTML=""}function v(){return a=a+1}function m(){p.classList.remove("active")}function M(){p.classList.add("active")}function H(){return a=1}function O(e){if(a===e)return m(),y.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"})}async function k(){const e=await _(c,a,l),s=Math.ceil(e.totalHits/l);if(e.hits.length<l||a===s)console.log("No more pages to load."),m();else{n.insertAdjacentHTML("beforeend",h(e.hits)),L.refresh();const r=n.querySelectorAll("li")[0].getBoundingClientRect().height*2;n.scrollBy({top:r,behavior:"smooth"}),v(),O(s)}}f.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.query.value.trim(),H(),m(),c.length!==0){S(g);try{const o=await _(c,a,l);P(),o.hits.length===0?y.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"}):(n.insertAdjacentHTML("beforeend",h(o.hits)),v(),L.refresh(),o.hits.length===l&&M())}catch(o){console.log(o)}C(g)}f.reset()});p.addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map
