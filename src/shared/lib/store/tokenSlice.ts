import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TokenState } from './StoreTokenSchema'

const initialState: TokenState = {
  token: document.cookie.includes('token=')
    ? document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    : null,
}

const tokenSlice = createSlice({
  initialState,
  name: 'token',
  reducers: {
    clearToken: () => {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      const expires = new Date()
      expires.setHours(expires.getHours() + 1)
      document.cookie = `token=${action.payload}; expires=${expires.toUTCString()};`
    },
  },
})

export const { clearToken, setToken } = tokenSlice.actions

export default tokenSlice.reducer
