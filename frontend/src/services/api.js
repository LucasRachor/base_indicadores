import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.6.63.30:3010/api' // ⬅️ substitua pelo IP do backend
});

export default api;