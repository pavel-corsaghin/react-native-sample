import AsyncStorage from '@react-native-community/async-storage';
import { default as axios, AxiosInstance } from 'axios';
import * as AxiosLogger from 'axios-logger';
import { handleError, handleResponse } from './handlers';

export let secureInstance: AxiosInstance;

// CONFIG
const TIME_OUT = 30000;
const BASE_URL = ''; // TODO: Set base url

const configAxios = () => {
  secureInstance = axios.create({
    timeout: TIME_OUT,
    baseURL: BASE_URL,
  });

  if (__DEV__) {
    secureInstance.interceptors.request.use(
      AxiosLogger.requestLogger,
      AxiosLogger.errorLogger,
    );

    secureInstance.interceptors.response.use(
      AxiosLogger.responseLogger,
      AxiosLogger.errorLogger,
    );
  }

  secureInstance.interceptors.request.use(
    async function (config) {
      const token = await AsyncStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return error;
    },
  );

  secureInstance.interceptors.response.use(
    function (response) {
      return handleResponse(response);
    },
    function (error) {
      return handleError(error);
    },
  );
};

export default configAxios;
