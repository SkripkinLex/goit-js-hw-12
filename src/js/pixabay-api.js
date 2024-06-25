import axios from 'axios';
import { pageNumber, perPage } from '../main';

/**
 *
 * @param {String} query
 * @returns {Object}
 */
// export async function sendQuery(imageName) {
//   axios.defaults.baseURL = 'https://pixabay.com';

export async function sendQuery(query, pageNumber = 1, perPage = 15) {
  const response = await fetch(`https://pixabay.com/api/?key=YOUR_API_KEY&q=${query}&page=${pageNumber}&per_page=${perPage}`);
  const data = await response.json();
  return data;
}

  const params = {
    key: '44349742-ecc8a7b60aea5585f0c207813',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: pageNumber,
  };

  try {
    const response = await axios.get('/api/', { params });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}