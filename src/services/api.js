import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(async config => {

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let token = params.get('token');

  if(!token) {
   token = getToken();
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
},  error => {
  Promise.reject(error)
});

api.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    console.log("Refresh Token")
    return api(originalRequest);
  }
  return Promise.reject(error);
});

export default api;
