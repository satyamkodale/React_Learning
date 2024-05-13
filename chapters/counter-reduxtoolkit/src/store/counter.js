import { createSlice } from "@reduxjs/toolkit";
const counterSlice= createSlice(
  {
     name:'counter',
     initialState:{
      counterVal:10
     },
     reducers:{

      increment:(state,action)=>
      {
        console.log(state,action);
        state.counterVal++
      },
      decrement:(state,action)=>
      {
        console.log(state,action);
        state.counterVal--
      },
      add:(state,action)=>
      {
        console.log(state,action);
        state.counterVal+= parseInt(action.payload.number);
      },
      sustract:(state,action)=>
      {
        console.log(state,action);
        state.counterVal-= parseInt(action.payload.number);
      }
     }

  });
  export default counterSlice;
  export const counterActions = counterSlice.actions;