import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/http";

let id = 0;

const initialState = {
    tasks : [],
    loading : false,
    error : null
}

export const fetchProducts = createAsyncThunk("fetchProducts", async (a,{rejectWithValue}) => {
    try {
        const response = await axios.get('/todoss');
        return {tasks : response.data}
    } catch (error) {
        return rejectWithValue({error : error.message})
    }
})

const productSlice = createSlice({
    name : "products",
    initialState,
    reducers:{
        getProducts : (state,action) => {
            state.tasks =  action.payload.products
        },
        addProduct : (state,action) => {
            state.tasks.push({
                id : ++id,
                product : action.payload.product,
                completed : false
            })
        },
        removeProduct : (state,action) => state.tasks.filter(product => product.id !== action.payload.id),
        completedProduct : (state,action) => state.tasks.map(product => product.id === action.payload.id ? {
            ...product,
            completed : true
        } : product)
    },
    extraReducers : {
        [fetchProducts.pending] : (state,action) => {
            state.loading =  true
        },
        [fetchProducts.fulfilled] : (state,action) => {
            state.tasks =  action.payload.tasks;
            state.loading =  false;
        },                                        
        [fetchProducts.rejected] : (state,action) => {
            state.error =  action.payload.error;
            state.loading =  false;
        },
    }
})

export const { addProduct,getProducts,removeProduct, completedProduct } = productSlice.actions;
export default productSlice.reducer
