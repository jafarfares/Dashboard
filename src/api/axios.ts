import axios from "axios";
const API_URL=import.meta.env.VITE_API_BASE_URL;
// const token = localStorage.getItem("token");
const api = axios.create({
  baseURL:API_URL,
   
})
api.interceptors.request.use((config) => {
  //interceptors It works before each order and brings the latest token and add to headers
  const token = localStorage.getItem("token");
  // console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("401 error in seriver")
    }
    return Promise.reject(error);
  }
);
export default api;