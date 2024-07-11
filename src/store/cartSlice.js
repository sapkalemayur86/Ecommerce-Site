import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProductInCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    updateProductInCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (products) => products.id === action.payload.id
      );
      if (index !== -1) {
        state.cartItems[index] = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductInCart, updateProductInCart } = cartSlice.actions;

export default cartSlice.reducer;
