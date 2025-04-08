import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice"
import counterReducer from "./counterSlice"; // ✅ Fixed spelling

const store = configureStore({
    reducer:{
        colorslice:colorReducer,
        counter: counterReducer
    }
});

export default store;   