import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Headphones", category: "Electronics", price: 200 },
    { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 150 },
    { id: 4, name: "T-Shirt", category: "Clothing", price: 30 },
    { id: 5, name: "Blender", category: "Home Appliances", price: 120 },
  ],
  filtered: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filteredData: (state, action) => {
      state.filtered = state.items.filter(
        (item) => item.category === action.payload
      );
    },
  },
});

export const { filteredData } = productSlice.actions;
export default productSlice.reducer;
