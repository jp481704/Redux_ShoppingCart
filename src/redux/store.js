import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.js";
import productReducer from "./productSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
