import{a as f,S as P,i as _}from"./assets/vendor-b0d10f48.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function b(e){return e.map(C).join(`
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
            </li>`}function M(e){e.classList.remove("loader-hidden")}function O(e){e.classList.add("loader-hidden")}async function L(e){f.defaults.baseURL="https://pixabay.com";const s={key:"44349742-ecc8a7b60aea5585f0c207813",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:o};try{return(await f.get("/api/",{params:s})).data}catch(a){console.log(a)}}const v="/goit-js-hw-12/assets/icon-close-5bc7b79a.svg",g=document.querySelector(".search-form");document.querySelector(".search-form__input");const u=document.querySelector(".gallery"),y=document.querySelector(".loader"),i=document.querySelector(".load-more__button"),p=15;let o=1,n=null,l,d;d=new P(".gallery a");function h(){u.innerHTML=""}function q(){return o=o+1}function w(){i.classList.remove("active")}function k(){return o=1}function E(e){if(o>e)return w(),_.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:v,position:"topRight",theme:"dark"})}async function S(){const e=Math.ceil(n.totalHits/p);o>=e?(console.log("No more pages to load."),i.disabled=!0,i.style.display="none"):(n=await L(l),u.insertAdjacentHTML("beforeend",b(n.hits)),d.refresh(),q(),E(e))}g.addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.query.value.trim(),k(),w(),l.length!==0){M(y);try{n=await L(l,o,p),S(),n.hits.length===0?(_.show({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:v,position:"topRight",theme:"dark"}),h()):(h(),u.insertAdjacentHTML("beforeend",b(n.hits)),q(),d.refresh(),i.classList.add("active"))}catch(a){console.log(a)}O(y)}g.reset()});i.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map
