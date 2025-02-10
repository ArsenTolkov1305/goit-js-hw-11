import axios from 'axios';

const API_KEY = '48747106-1a5ff0efd71c1746242e0aed2'; 
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = (searchQuery) => {
  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(BASE_URL, { params })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};
