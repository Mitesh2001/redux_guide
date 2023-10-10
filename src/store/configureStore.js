import employeeReducer from "./employees";
import products from "./products";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer : {
    products: products,
    employee : employeeReducer
}});

export default store;