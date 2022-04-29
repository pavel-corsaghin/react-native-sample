import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './@slices/auth';
import counterReducer from './@slices/counter';
import themeReducer from './@slices/theme';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
