import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://69.61.29.27:99"
});

api.interceptors.request.use(async config => {
  const token = await localStorage.getItem("@SAO:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
