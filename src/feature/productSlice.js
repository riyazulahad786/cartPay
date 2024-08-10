import { createSlice } from '@reduxjs/toolkit'


export const productDetails = createSlice({
    name:"productDetails",
    initialState : {
        products:[],
        cart: [],
        loading:false,
        error:null
      },
      reducers:{
        setProducts : (state,action)=>{
            state.products = action.payload;
        },
        addToCart:(state,action)=>{
            const product = action.payload;
            const existProducts = state.cart.find((i)=> i.id === product.id)
            if(existProducts){
                existProducts.quantity += 1   //increase quantity if items exist
            }else{
              state.cart.push({...product,quantity:1});  //add new item in cart
            }
        },
        removeItem:(state,action)=>{
          state.cart = state.cart.filter((i)=> i.id !== action.payload)
        }
      }
})
export const {setProducts,addToCart,removeItem} = productDetails.actions;
export default productDetails.reducer;