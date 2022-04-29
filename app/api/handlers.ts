import { HttpCodes } from './@types';
import { AxiosError, AxiosResponse } from 'axios';

export const handleError = (error: AxiosError) => {
  return {
    data: undefined,
    meta: {
      httpCode: error.response?.status ?? HttpCodes.SERVER_ERROR,
      message: error.response?.data?.meta?.message,
    },
  };
};

export const handleResponse = (response: AxiosResponse) => {
  if (response.data.rows) {
    return handleListResponse(response);
  } else {
    return handleObjectResponse(response);
  }
};

const handleListResponse = (response: AxiosResponse) => {
  response.data.data = response.data.rows;
  response.data.meta = {
    httpCode: response.status,
    page: response.data.page as number,
    size: response.data.size as number,
    total: response.data.count as number,
  };
  return response;
};

const handleObjectResponse = (response: AxiosResponse) => {
  response.data.meta = {
    httpCode: response.status,
  };
  return response;
};
