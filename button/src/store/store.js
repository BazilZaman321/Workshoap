import { configureStore } from '@reduxjs/toolkit'
import buttonReducer from './buttonSlice'

export const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
})