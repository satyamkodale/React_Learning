import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice(
  {
    name:'privacy',
    initialState:{
      privacyState:false
    },
    reducers:{
      toggle:(state)=>
        {
          
          state.privacyState=!state.privacyState
        
         }
    }

  });
  export default privacySlice
  export const privacyActions = privacySlice.actions;