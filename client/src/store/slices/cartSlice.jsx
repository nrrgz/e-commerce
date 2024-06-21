import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    removeItemFromCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity > 1) {
          state.items[existingItemIndex].quantity--;
        } else {
          state.items.splice(existingItemIndex, 1);
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    
    initializeCart: (state) => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (storedCartItems) {
        state.items = storedCartItems;
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, initializeCart } = cartSlice.actions;

export default cartSlice.reducer;
