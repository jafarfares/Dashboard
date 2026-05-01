import axios from "axios";
const API_URL=import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem("token");
const api = axios.create({
    baseURL:API_URL,
    headers:{
       "Content-Type": "application/json",
       ...(token && { "Authorization": `Bearer ${token}` })
    }
})

export default api;