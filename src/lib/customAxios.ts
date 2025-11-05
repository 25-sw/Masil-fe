import axios from 'axios';

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('AT');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});