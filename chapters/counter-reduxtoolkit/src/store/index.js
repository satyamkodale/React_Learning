// import {createStore} from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";


//moved to counter.js for sperate logic 
//  const counterSlice= createSlice(
//   {
//      name:'counter',
//      initialState:{
//       counterVal:10
//      },
//      reducers:{

//       increment:(state,action)=>
//       {
//         console.log(state,action);
//         state.counterVal++
//       },
//       decrement:(state,action)=>
//       {
//         console.log(state,action);
//         state.counterVal--
//       },
//       add:(state,action)=>
//       {
//         console.log(state,action);
//         state.counterVal+= parseInt(action.payload.number);
//       },
//       sustract:(state,action)=>
//       {
//         console.log(state,action);
//         state.counterVal-= parseInt(action.payload.number);
//       }
//      }

//   });

// const privacySlice = createSlice(
//     {
//       name:'privacy',
//       initialState:{
//         privacyState:false
//       },
//       reducers:{
//         toggle:(state)=>
//           {
            
//             state.privacyState=!state.privacyState
          
//            }
//       }

//     });

const counterStore =configureStore(
  {
    //can have multiple slice with reducer 
    reducer:{
      counter:counterSlice.reducer,
      privacy:privacySlice.reducer
    }
  });


//now we are exporting actions 
// export const counterActions = counterSlice.actions;
// export const privacyActions = privacySlice.actions;
export default counterStore;


// const INTIAL_VALUE={
//   counter:4,
//   privacy:false
// }


// const counterReducer=(store=INTIAL_VALUE,action)=>
//   {
//     //store is immutable 
//    let newStore = store;
//    if(action.type==="INCREMENT")
//     {
//       newStore=
//       {
//         ...newStore,
//         counter:store.counter+1
//       }
//     }
//     else if(action.type==="DECREMENT")
//       {
//         newStore=
//         {
//           ...newStore,
//           counter:store.counter-1
//         }
//       }
//       else if(action.type==="ADD")
//         {
//           newStore=
//           {
//             ...newStore,
//             counter:store.counter+parseInt(action.payload.number)
//           }
        
//         }
//       else if(action.type==="SUBSTRACT")
//           {
//             newStore=
//             {
//               ...newStore,
//               counter:store.counter-parseInt(action.payload.number)
//             }
          
//           }
//       else if(action.type==="PRIVACY")
//             {
//               return {...newStore,privacy:!store.privacy}
            
//             }
//     return newStore
//   }


// const counterStore=createStore(counterReducer);


