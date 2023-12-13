import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { StoreUiSchema } from './StoreUiSchema'

const initialState: StoreUiSchema = {
  popup: {
    children: null,
    isActive: false,
  },
}

export const UiSlice = createSlice({
  initialState,
  name: 'ui',
  reducers: {
    closePopup: (state) => {
      state.popup.isActive = false
      state.popup.children = null
    },
    openPopup: (state, action: PayloadAction<ReactNode>) => {
      state.popup.isActive = true
      state.popup.children = action.payload
    },
  },
})

export const { actions: UiActions } = UiSlice
export const { reducer: UiReducer } = UiSlice
