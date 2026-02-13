import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // ✅ CLONE payload to avoid frozen object
      const item = JSON.parse(JSON.stringify(action.payload));

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity; // ✅ SAFE HERE
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearAllItems: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addItem, updateQuantity, removeCart, clearAllItems } =
  cartSlice.actions;

export default cartSlice.reducer;
