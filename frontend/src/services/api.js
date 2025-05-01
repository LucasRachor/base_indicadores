import axios from 'axios';

const api = axios.create({
  baseURL: '/api' // ⬅️ substitua pelo IP do backend
});

export default api;