import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
};

export const createImageCard = (image) => {
  const card = document.createElement('div');
  card.classList.add('gallery-item');

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;

  const info = document.createElement('div');
  info.classList.add('image-info');
  info.innerHTML = `
    <p><strong>Likes:</strong> ${image.likes}</p>
    <p><strong>Views:</strong> ${image.views}</p>
    <p><strong>Comments:</strong> ${image.comments}</p>
    <p><strong>Downloads:</strong> ${image.downloads}</p>
  `;

  const link = document.createElement('a');
  link.href = image.largeImageURL;
  link.classList.add('lightbox');
  link.appendChild(img);
  link.appendChild(info);

  card.appendChild(link);
  return card;
};


export const showNoResultsMessage = () => {
  iziToast.error({
    title: 'Sorry!',
    message: 'There are no images matching your search query. Please try again!',
  });
};


export const loader = document.querySelector('.loader');

export function showLoader(loader) {
    loader.classList.remove('hidden');
}

export function hideLoader(loader) {
    loader.classList.add('hidden');
}