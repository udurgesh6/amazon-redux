import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: [{ id: 1, name: "Boat" }],
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: action.payload.id,
        name: action.payload.name,
      };
      state.push(product);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
