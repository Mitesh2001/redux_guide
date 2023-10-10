import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const productSlice = createSlice({
    name : "products",
    initialState : [],
    reducers:{
        setProducts : (state,action) => action.payload.products,
        addProduct : (state,action) => {
            state.push({
                id : ++id,
                product : action.payload.product,
                completed : false
            })
        },
        removeProduct : (state,action) => state.filter(product => product.id !== action.payload.id),
        completedProduct : (state,action) => state.map(product => product.id === action.payload.id ? {
            ...product,
            completed : true
        } : product)
    }
})

export const { setProducts,addProduct,removeProduct, completedProduct } = productSlice.actions;
export default productSlice.reducer
