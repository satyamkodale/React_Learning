import {createStore} from "redux";


const INTIAL_VALUE={
  counter:4,
  privacy:false
}

const counterReducer=(store=INTIAL_VALUE,action)=>
  {
    //store is immutable 
   let newStore = store;
   if(action.type==="INCREMENT")
    {
      newStore=
      {
        ...newStore,
        counter:store.counter+1
      }
    }
    else if(action.type==="DECREMENT")
      {
        newStore=
        {
          ...newStore,
          counter:store.counter-1
        }
      }
      else if(action.type==="ADD")
        {
          newStore=
          {
            ...newStore,
            counter:store.counter+parseInt(action.payload.number)
          }
        
        }
      else if(action.type==="SUBSTRACT")
          {
            newStore=
            {
              ...newStore,
              counter:store.counter-parseInt(action.payload.number)
            }
          
          }
      else if(action.type==="PRIVACY")
            {
              return {...newStore,privacy:!store.privacy}
            
            }
    return newStore
  }
const counterStore=createStore(counterReducer);

export default counterStore;



