import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/events', // Cambia esta URL si es necesario
});

export default api;