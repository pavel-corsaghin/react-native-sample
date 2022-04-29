import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export type ThemeState = {
  isDark: boolean;
};

const initialState: ThemeState = {
  isDark: false,
};

export const slice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggle: state => {
      state.isDark = !state.isDark;
    },
  },
});

// Plain actions
export const { toggle } = slice.actions;

export const isDarkTheme = (state: RootState) => state.theme.isDark;

export default slice.reducer;
