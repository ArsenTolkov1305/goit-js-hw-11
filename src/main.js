import { fetchImages } from '/js/pixabay-api.js';
import { clearGallery, createImageCard, showNoResultsMessage, loader, showLoader, hideLoader } from '/js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const gallery = document.querySelector('.gallery');

// fixing loader after page refresh
    hideLoader(loader);
// fixing loader


// testing area
const lightbox = new SimpleLightbox('.lightbox');
// testing area


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }


  clearGallery();

  showLoader(loader);


  fetchImages(query)
    .then(images => {
      hideLoader(loader);
      if (images.length === 0) {
        showNoResultsMessage();
      } else {
        images.forEach(image => {
          const imageCard = createImageCard(image);
          gallery.appendChild(imageCard);
        });
        
  
        // const lightbox = new SimpleLightbox('.lightbox');
        lightbox.refresh();
      }
    })
    .catch(error => {
      hideLoader(loader);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    });
});
