import axios from 'axios';
const port = 8008;

const api = axios.create({ baseURL: `http://localhost:${port}` });

export default api;