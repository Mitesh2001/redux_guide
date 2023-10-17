import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import products from "./products";
import logger from "redux-logger";
import error from "../middleware/error";

const store = configureStore(
    {
        reducer : {
            products: products
        },
        middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), logger,error]
    }
);

export default store;