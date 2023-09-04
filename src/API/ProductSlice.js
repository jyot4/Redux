import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit"
// import product from "./ProductStore"
import axios from 'axios'

 export const fetchApi = createAsyncThunk("products", async()=>{
    const result = await axios.get("https://fakestoreapi.com/products")
    console.log(result.data)
    return result.data

})


 export const Product = createSlice({
name:'clothes',
initialState:{
    currentState: 0,
    productOf : [],
    loadingData : false,


},

reducers:{
left: (state,action)=>{
        state.currentState = state.currentState +1
    },
    right:(state, action)=>{
        state.currentState = state.currentState -1
    }
 },

 extraReducers:{
    [fetchApi.pending]: (state)=>{
state.loadingData = true;
    },

    [fetchApi.fulfilled]:(state,action)=>{
        state.loadingData = false;
        state.productOf = action.payload
        console.log(state.productOf)
    },

    [fetchApi.rejected]: (state)=>{
        state.loadingData = true;
    }
 }





})




 export const {left ,right} = Product.actions

 export default Product.reducer
