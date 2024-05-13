const redux = require('redux');

const INITIAL_VALUE=
{
  counter:0
}

//reducer 
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === 'INCREMENT') {
    newStore = {
      counter: store.counter + 1
    };
  } else if (action.type === 'ADDITION') {
    newStore = {
      counter: store.counter + action.payload.number
    };
  } else if (action.type === 'SUBTRACTION') { // Corrected typo here
    newStore = {
      counter: store.counter - 1
    };
  }
  return newStore;
};

// createing store
const store =redux.createStore(reducer);

//subscriber->is a normal method / react component which work on store values 
// are the component who uses value and says that when-ever value changes inform me 
// another type is only need current value they don,t want to subscribe -> const state= store.getState();

const subscriber =()=>
  {
    const state =store.getState();
    console.log(state);
  }

  // to create subscription 
  // subscriber function is going to subscribe you if change happen -> call subscriber function 
  store.subscribe(subscriber);


  // to create action 

store.dispatch({type:"INCREMENT"});
store.dispatch({type:"SUBSTRACTION"});
store.dispatch({
  type:"ADDITION",
  payload:
  {
    number:7
  }
});
store.dispatch({type:"INCREMENT"});

