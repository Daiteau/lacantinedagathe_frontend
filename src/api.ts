import axios from 'axios';

// Utilisation de la variable d'environnement
const API_URL = import.meta.env.VITE_API_URL;

export const laCantineDAgatheApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Intercepteur pour gérer les erreurs globales
laCantineDAgatheApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.setItem('persist:rootPersist', JSON.stringify({}));
      console.log("API ERROR : Redirected to login page");
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);