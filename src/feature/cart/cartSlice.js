import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", //state name
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const foundIndex = state.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (foundIndex < 0) {
        state.push(action.payload);
      } else {
        state[foundIndex].count += action.payload.count;
      }
    },
    incCart: (state, action) => {
      const foundIndex = state.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (foundIndex < 0) {
        state.push(action.payload);
      } else {
        state[foundIndex].count++;
      }
    },
    decCart: (state, action) => {
      const foundIndex = state.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if(state[foundIndex].count===1){
        state.pop([foundIndex])
      }else{
        state[foundIndex].count--;
      }
    },
  },
});

export const { addToCart, incCart , decCart } = cartSlice.actions;
export default cartSlice.reducer;
