import axios, {AxiosInstance} from 'axios';

export const axiosService: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '92a4fb3f3f6f447eae009bdfdd3e9c91',
  },
});

axiosService.interceptors.request.use(
  config => {
    console.log('Request:', config);
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);
