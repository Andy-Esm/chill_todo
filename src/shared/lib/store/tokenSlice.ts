import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TokenState } from './StoreTokenSchema';

const initialState: TokenState = {
  token: localStorage.getItem('token') ?? null
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      document.cookie = `token=${action.payload}; expires=${expires.toUTCString()};`;
    },
    clearToken: () => {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions

export default tokenSlice.reducer;
