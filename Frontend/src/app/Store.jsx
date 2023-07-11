import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../features/CartSlice'

const Store=configureStore({
    reducer:{
        allCart:CartReducer
    },
});

export default Store;