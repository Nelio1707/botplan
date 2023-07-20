import axios from "axios";
import { getToken } from "./auth/getStorage";

const baseURL = process.env.REACT_APP_API_HOST
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(async (config:any) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;