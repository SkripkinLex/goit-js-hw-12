import { renderCards, addLoader, removeLoader } from './js/render-functions.js';
import { sendQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iconClose from './img/icon-close.svg';

// ---------------------------------------------------------
const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.search-form__input');
const ulEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.load-more__button');

let query;
let gallery = new SimpleLightbox('.gallery a');
let pageNumber;
let perPage = 15;

function clearGallery() {
  ulEl.innerHTML = '';
}

function increasePage() {
  return (pageNumber = pageNumber + 1);
}

function hideLoadMoreBtn() {
  loadMoreBtnEl.classList.remove('active');
}

function showLoadMoreBtn() {
  loadMoreBtnEl.classList.add('active');
}

function resetPageNumber() {
  return (pageNumber = 1);
}

function checkEndPages(totalPages) {
  if (pageNumber > totalPages) {
    hideLoadMoreBtn();
    return iziToast.error({
      class: 'izt-toast-message',
      message: "We're sorry, but you've reached the end of search results.",
      messageSize: '16',
      messageLineHeight: '24',
      messageColor: '#ffffff',
      backgroundColor: '#b51b1b',
      iconUrl: iconClose,
      position: 'topRight',
      theme: 'dark',
    });
  }
}

function smoothScrollBy(element, distance, duration) {
  let start = element.scrollTop;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, distance, duration);
    element.scrollTop = run;
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}



async function loadMoreControle() {
  const data = await sendQuery(query, pageNumber, perPage);
  const totalPages = Math.ceil(data.totalHits / perPage);

  if (data.hits.length === 0) {
    hideLoadMoreBtn();
    iziToast.show({
      class: 'izt-toast-message',
      message: 'Wait please!',
      messageSize: '16',
      messageLineHeight: '24',
      messageColor: '#ffffff',
      backgroundColor: '#b51b1b',
      iconUrl: iconClose,
      position: 'topRight',
      theme: 'dark',
    });
    return;
    
  } 
  if(pageNumber >= totalPages){
    hideLoadMoreBtn();
  
    ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));
    gallery.refresh();
    
    // Scroll to the newly added items
    const items = ulEl.querySelectorAll('li'); // Assuming that each item is wrapped in an <li> tag
    const itemHeight = items[0].getBoundingClientRect().height;
    const rowsToScroll = 2; // Number of rows to scroll
    const scrollDistance = itemHeight * rowsToScroll;
    
    smoothScrollBy(ulEl, scrollDistance, 500); // Scroll the gallery container

    increasePage();
    checkEndPages(totalPages);
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const valueOfInput = event.target.elements.query.value.trim();
  query = valueOfInput;

  resetPageNumber();
  hideLoadMoreBtn();

  if (query.length !== 0) {
    addLoader(loader);

    try {
      const data = await sendQuery(query, pageNumber, perPage);
      clearGallery();
      if (data.hits.length === 0) {
        iziToast.show({
          class: 'izt-toast-message',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageSize: '16',
          messageLineHeight: '24',
          messageColor: '#ffffff',
          backgroundColor: '#b51b1b',
          iconUrl: iconClose,
          position: 'topRight',
          theme: 'dark',
        });
      } else {
        ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));
        increasePage();
        gallery.refresh();

        if (data.hits.length === perPage) {
          showLoadMoreBtn();
        } else {
          hideLoadMoreBtn();
        }
      }
    } catch (err) {
      console.log(err);
    }

    removeLoader(loader);
  }

  formEl.reset();
}

// ---------- Submit actions-----------------------------------------------

formEl.addEventListener('submit', handleFormSubmit);

// -------------------- Click button's actions
loadMoreBtnEl.addEventListener('click', loadMoreControle);