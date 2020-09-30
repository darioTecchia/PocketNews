import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '6b978c38a58d454ab73eb3c688b518d3'
  }
});

// singleton instance
export default axiosService;