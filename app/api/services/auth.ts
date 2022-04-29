import { secureInstance } from '../config';
import { ServerResponse, UserInfo } from '../@types';

export interface AuthServices {
  login: (username: string, password: string) => ServerResponse<UserInfo>;
  logout: () => ServerResponse<any>;
  createAccount: (
    username: string,
    password: string,
    dob: string,
  ) => ServerResponse<UserInfo>;
}

async function login(
  username: string,
  password: string,
): ServerResponse<UserInfo> {
  const request = { username: username, password: password };
  // const res = await secureInstance.post(`v1/login`, request);
  // Fake. Todo: remove
  // await new Promise(f => setTimeout(f, 5000));
  const res = {
    data: {
      data: {
        name: 'Fake User',
      },
      meta: {
        httpCode: 200,
      },
    },
  };

  return res.data;
}

async function logout(): ServerResponse<any> {
  // await new Promise(f => setTimeout(f, 5000));
  return {
    meta: {
      httpCode: 200,
    },
  };
}

async function createAccount(
  username: string,
  password: string,
  dob: string,
): ServerResponse<UserInfo> {
  const request = { username: username, password: password, dob: dob };
  const res = await secureInstance.post('v1/create-account', request);
  return res.data;
}

const authService: AuthServices = {
  login,
  logout,
  createAccount,
};

export default authService;
