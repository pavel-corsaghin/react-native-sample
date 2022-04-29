import { isRequestSuccess } from './../../api/helper';
import { UserInfo } from '../../api/@types';
import { Dispatch, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { APICallingState, AppThunk } from '../@types';
import { authApi } from '../../api';

export type AuthState = {
  // login
  loginState: APICallingState; // this will be used for show loading, error message when call login api

  // login
  logoutState: APICallingState; // this will be used for show loading, error message when call logout api

  // user info
  userInfo?: UserInfo;
};

const initialState: AuthState = {
  loginState: APICallingState.None,
  logoutState: APICallingState.None,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      state.loginState = action.payload;
    },
    setLogoutState: (state, action) => {
      state.logoutState = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    reset: () => initialState,
  },
});

// Plain actions
export const { setLoginState, setLogoutState, setUserInfo, reset } =
  authSlice.actions;

// Async actions
export const login =
  (username: string, password: string): AppThunk<void> =>
  async (dispatch: Dispatch) => {
    dispatch(setLoginState(APICallingState.Doing));
    const { data, meta } = await authApi.login(username, password);
    dispatch(
      setLoginState(
        isRequestSuccess(meta) ? APICallingState.Success : APICallingState.Fail,
      ),
    );
    dispatch(setUserInfo(data));
  };

export const logout = (): AppThunk<void> => async (dispatch: Dispatch) => {
  dispatch(setLogoutState(APICallingState.Doing));
  const { meta } = await authApi.logout();
  dispatch(
    setLoginState(
      isRequestSuccess(meta) ? APICallingState.Success : APICallingState.Fail,
    ),
  );
  dispatch(setUserInfo(undefined));
};

// Auth selector
export const selectAuth = (state: RootState) => state.auth;
export const isLoggedIn = (state: RootState) =>
  state.auth.userInfo !== undefined;

export default authSlice.reducer;
