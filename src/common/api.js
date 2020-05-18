import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set APPID on each request
    config.params.APPID = '56578f4a814090c206b5a73cf4441109';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });