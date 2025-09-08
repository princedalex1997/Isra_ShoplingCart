import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
  totalAmount: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const checkList = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (checkList) {
        state.cartList.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count++;
            item.totalPrice = item.price * item.count;
          }
          return;
        });
      }
      state.cartList.push({
        ...action.payload,
        count: 1,
        totalPrice: action.payload.price,
      });
    },
    increment: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === productId) {
          item.count++;
          item.totalPrice = item.price * item.count;
        }
      });
    },
    decrement: (state, action) => {
      const productId = action.payload;
      state.cartList = state.cartList
        .map((item) => {
          if (item.id === productId) {
            item.count--;
            item.totalPrice = item.price * item.count;
          }
          return item;
        })
        .filter((item) => item.count > 0);
    },
    removeItem: (state, action) => {
      const removeIt = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== removeIt.id);
    },
    totalListPrice: (state, action) => {
      state.totalAmount = [
        {
          amount: action.payload.amount,
          adress: action.payload.adress,
        },
      ];
    },
  },
});
export const { addCart, increment, decrement, removeItem, totalListPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
