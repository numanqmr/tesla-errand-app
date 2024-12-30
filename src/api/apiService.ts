import axios, {AxiosInstance} from 'axios';

export const axiosService: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.MOCKAPI_KEY,
  },
});

axiosService.interceptors.request.use(
  config => {
    //console.log('Request:', config);
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);
