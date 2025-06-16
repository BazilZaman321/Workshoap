// Importing configureStore to create the Redux store
import { configureStore } from '@reduxjs/toolkit';
// Importing the product reducer we created above
import productReducer from './productSlice';

// Creating the Redux store and registering the product slice
const store = configureStore({
  reducer: {
    product: productReducer, // The key 'product' will be used in useSelector
  },
});

// Exporting the store so we can wrap our app with it
export default store;
