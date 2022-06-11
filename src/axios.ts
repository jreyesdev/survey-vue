import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { store } from './store';

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${store.state.user.token}`,
  };

  return config;
});

export default axiosClient;
