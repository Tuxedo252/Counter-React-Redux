import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += +action.payload.number;
    },
    subtraction: (state, action) => {
      state.counterVal -= +action.payload.number;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice;
