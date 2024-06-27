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
let gallery;

gallery = new SimpleLightbox('.gallery a');

// ---------------------------------------------------------

function clearGallery() {
  ulEl.innerHTML = '';
}

function increasePage() {
  return (pageNumber = pageNumber + 1);
}

function hideLoadMoreBtn() {
  loadMoreBtnEl.classList.remove('active');
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

async function loadMoreControle() {
  const totalPages = Math.ceil(data.totalHits / perPage);

  if (pageNumber >= totalPages) {
    console.log('No more pages to load.');
    loadMoreBtnEl.disabled = true;
    loadMoreBtnEl.style.display = "none";
  } else {
    const data = await sendQuery(query, pageNumber, perPage);

    ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));
    gallery.refresh();

    increasePage();
    checkEndPages(totalPages);
  }
}


// ---------- Submit actions-----------------------------------------------

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const valueOfInput = event.target.elements.query.value.trim();
  query = valueOfInput;

  resetPageNumber();
  hideLoadMoreBtn();

  if (query.length !== 0) {
    addLoader(loader);

    try {
      const data = await sendQuery(query, pageNumber, perPage); // {total: 24170, totalHits: 500, hits: Array(3)}
      loadMoreControle();

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

        clearGallery();
      } else {
        clearGallery();

        // ulEl.insertAdjacentHTML('beforeend', renderCards(data.hits));
        increasePage();

        gallery.refresh();

        loadMoreBtnEl.classList.add('active');
      }
    } catch (err) {
      console.log(err);
    }

    removeLoader(loader);
  }

  formEl.reset();
});
// ------------------------------------------------
// -------------------- Click button's actions
loadMoreBtnEl.addEventListener('click', loadMoreControle);