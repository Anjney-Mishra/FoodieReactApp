import { createSlice } from "@reduxjs/toolkit";

//Each slice have their own reducers

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //mutating the state
        addItem: (state,action)=>{
            //state-> intial state
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // slice=[] -> not work as it become local variable
            //RTK says u have to mutate the state of return the new state
            // return {items: []}  -> this will work
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer;