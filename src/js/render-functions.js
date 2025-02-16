import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export function renderImages(images) {
    gallery.innerHTML = images.map(image => `
        <a href="${image.largeImageURL}" class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}" />
            <div class="image-info">
                <p><strong>Likes:</strong> ${image.likes}</p>
                <p><strong>Views:</strong> ${image.views}</p>
                <p><strong>Comments:</strong> ${image.comments}</p>
                <p><strong>Downloads:</strong> ${image.downloads}</p>
            </div>
        </a>
    `).join('');
    
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    } else {
        lightbox.refresh();
    }
}

export function clearGallery() {
    gallery.innerHTML = '';
}
