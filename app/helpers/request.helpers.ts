import axios from 'axios';
import {AppConfig} from '../AppConfig.ts';
// import AsyncStorage from '@react-native-community/async-storage';

export enum Method {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const request = axios.create({
  baseURL: AppConfig.apiUrl,
});

request.interceptors.request.use(
  config => {
    const token = AppConfig.token;
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);
