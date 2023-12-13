import { ReactNode } from 'react'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { StoreUiSchema } from './StoreUiSchema'

const initialState: StoreUiSchema = {
  popup: {
    isActive: false,
    children: null
  }
}

export const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<ReactNode>) => {
      state.popup.isActive = true
      state.popup.children = action.payload
    },
    closePopup: (state) => {
      state.popup.isActive = false
      state.popup.children = null
    }
  }
})

export const {actions: UiActions} = UiSlice
export const {reducer: UiReducer} = UiSlice
