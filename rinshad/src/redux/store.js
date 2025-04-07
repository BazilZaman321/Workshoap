import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice"

const store = configureStore({
    reducer:{
        colorslice:colorReducer
    }
});

export default store;   