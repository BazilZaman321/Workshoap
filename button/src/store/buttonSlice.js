import { createSlice } from '@reduxjs/toolkit'

const buttonSlice = createSlice({
  name: 'button',
  initialState: {
    clickedText: '',
  },
  reducers: {
    setClickedText: (state, action) => {
      state.clickedText = action.payload
    },
  },
})

export const { setClickedText } = buttonSlice.actions
export default buttonSlice.reducer
