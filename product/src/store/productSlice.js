// Importing createSlice from Redux Toolkit to create a slice of state
import { createSlice } from "@reduxjs/toolkit";

// Initial state with all products and an empty filtered list
const initialState = {
  items: [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Headphones", category: "Electronics", price: 200 },
    { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 150 },
    { id: 4, name: "T-Shirt", category: "Clothing", price: 30 },
    { id: 5, name: "Blender", category: "Home Appliances", price: 120 },
  ],
  filtered: [], // This will hold filtered items after applying a category filter
};

// Creating a slice named "product"
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // This reducer filters the items based on the given category
    filteredData: (state, action) => {
      // Filters only those items that match the selected category
      state.filtered = state.items.filter(
        (item) => item.category === action.payload
      );
    },
  },
});

// Exporting the action so it can be dispatched from components
export const { filteredData } = productSlice.actions;

// Exporting the reducer to be used in the Redux store
export default productSlice.reducer;
