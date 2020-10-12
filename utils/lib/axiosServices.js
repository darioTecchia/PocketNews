import axios from 'axios';

export const axiosNewsService = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '6b978c38a58d454ab73eb3c688b518d3'
  }
});

export const axiosWeatherService = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/weather',
  timeout: 10000,
  params: {
    appid: 'ded6650e4525f0e684441ebb57197cfd',
    units: 'metric',
    lang: 'it'
  }
});