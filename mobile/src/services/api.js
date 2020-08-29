import axios from 'axios';

const api = axios.create({
  baseURL: 'exp://kg-72r.anonymous.mobile.exp.direct:3333',
});

export default api;
