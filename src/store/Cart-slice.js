import { createSlice } from "@reduxjs/toolkit";
import { useId } from "react";

const initialCartState = { cartVisible: false, items: [], totalItems: 0, totalPrice: 0, delivery: 0, subtotal: 0};


const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
    addItemToCart(state, action){
        const newItem = action.payload;

        state.totalItems++;
        state.delivery = state.delivery + 10;
        state.subtotal = state.subtotal + newItem.price;
        state.totalPrice = state.totalPrice + 10 + newItem.price;

        state.items.push({
            id: Date.now(),
            name: newItem.name,
            color: newItem.color,
            price: newItem.price,
            size: newItem.size
        })
    },
    removeItemFromCart(state, action) {
        state.delivery = state.delivery - 10;

        state.subtotal = state.subtotal - action.payload.price;

        state.totalPrice = state.totalPrice - 10 - action.payload.price;

        const id = action.payload.id;

        state.totalItems--;

        state.items = state.items.filter((item) => item.id !== id)
    },
    clearCart(state) {
        state.items = [];
        state.delivery = 0;
        state.subtotal = 0;
        state.totalPrice = 0;
        state.totalItems = 0;
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
