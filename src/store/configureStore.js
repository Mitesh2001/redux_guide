import employeeReducer from "./employees";
import taskReducer from "./tasks";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({reducer : {
    tasks: taskReducer,
    employee : employeeReducer
}});

export default store;