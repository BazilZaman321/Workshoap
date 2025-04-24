import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name:"color",
    initialState:{
        colors:true,
    },
    reducers:{
        setColor:(state) => {
            state.colors = !state.colors
        }
    }
});

export const{ setColor }=colorSlice.actions;
export default colorSlice.reducer;