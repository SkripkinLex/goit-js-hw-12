import{a as m,S,i as h}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function P(e){return e.map(C).join(`
`)}function C(e){return`<li class="gallery-item">
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
            </li>`}function O(e){e.classList.remove("loader-hidden")}function k(e){e.classList.add("loader-hidden")}async function _(e){m.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:o};try{return(await m.get("/api/",{params:s})).data}catch(a){console.log(a)}}const b="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",f=document.querySelector(".search-form");document.querySelector(".search-form__input");const L=document.querySelector(".gallery"),g=document.querySelector(".loader"),n=document.querySelector(".load-more__button"),u=15;let o=1,i=null,l,p;p=new S(".gallery a");function y(){L.innerHTML=""}function v(){return o=o+1}function q(){n.classList.remove("active")}function E(){return o=1}function M(e){if(o>e)return q(),h.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"})}async function w(){const e=Math.ceil(i.totalHits/u);o>=e?(console.log("No more pages to load."),n.disabled=!0,n.style.display="none"):(i=await _(l),L.insertAdjacentHTML("beforeend",P(i.hits)),p.refresh(),v(),M(e))}f.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.query.value.trim(),E(),q(),l.length!==0){O(g);try{i=await _(l,o,u),w(),i.hits.length===0?(h.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:b,position:"topRight",theme:"dark"}),y()):(y(),v(),p.refresh(),n.classList.add("active"))}catch(a){console.log(a)}k(g)}f.reset()});n.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
