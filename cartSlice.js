import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, name, price, image, quantity }
  totalCount: 0,
  totalCost: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      const exists = state.items.find(item => item.id === plant.id);
      if (!exists) {
        state.items.push({ ...plant, quantity: 1 });
        state.totalCount++;
        state.totalCost += plant.price;
      }
    },
    increment(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalCount++;
        state.totalCost += item.price;
      }
    },
    decrement(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
        state.totalCount--;
        state.totalCost -= item.price;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        state.totalCount -= item.quantity;
        state.totalCost -= item.quantity * item.price;
        state.items = state.items.filter(i => i.id !== id);
      }
    }
  }
});

export const { addToCart, increment, decrement, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
