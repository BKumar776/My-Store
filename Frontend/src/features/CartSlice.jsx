import { createSlice } from "@reduxjs/toolkit";
import {MenuList} from '../components/data'

const initialState={
    cart:[],
    items:MenuList,
    subTotal:0,
    shipping:0,
    tax:0,
    totalPrice:0,
};

 const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{


        addToCart:(state,action)=>{
      
            const item = action.payload;
            const isItemExist = state.cart.find((i) => i.id === item.id);
      
            if (isItemExist) {
              state.cart.forEach((i) => {
                if (i.id === item.id) i.quantity += 1;
              });
            } else {
              state.cart.push(item);
            }
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
          },

          increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },
          decreaseItemQuantity: (state, action) => {
       
            const item = state.cart.find((i) => i.id === action.payload);
            if (item.quantity > 1) {
              state.cart.forEach((i) => {
                if (i.id === item.id) i.quantity -= 1;
              });
            }
          },
          calculatePrice: (state) => {
            let sum = 0;
            state.cart.forEach((i) => (sum += i.price * i.quantity));
            state.subTotal = sum;
            state.shipping = state.subTotal > 1000 || state.subTotal===0 ? 0 : 200;
            state.tax = +(state.subTotal * 0.18).toFixed();
            state.totalPrice = state.subTotal + state.tax + state.shipping;
          },
    },
})


export const {addToCart,removeItem,increaseItemQuantity,decreaseItemQuantity,calculatePrice}=CartSlice.actions;
export default CartSlice.reducer;