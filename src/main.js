import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const queryInput = event.target.elements.searchQuery;
    const query = queryInput.value.trim();
    
    
    if (!query) {
        iziToast.error({ title: 'Error', message: 'Please enter a search term!' });
        return;
    }
    
    clearGallery();
    loader.style.display = 'block';
    
    try {
        const images = await fetchImages(query);
        if (images.length === 0) {
            iziToast.warning({ title: 'No results', message: 'Sorry, there are no images matching your search query. Please try again!' });
        } else {
            renderImages(images);
        }
    } catch (error) {
        iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again later.' });
    }
    
    loader.style.display = 'none';
    queryInput.value = '';
   
});
