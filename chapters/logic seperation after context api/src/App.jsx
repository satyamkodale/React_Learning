import { useState ,useReducer} from 'react'

import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelComeMessage from './components/WelComeMessage '
import TodoItemsContextProvider from './store/todo-items-store'








function App() {
  return (

    <TodoItemsContextProvider>

    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <WelComeMessage />
      <TodoItems /> 
    </center>
   </TodoItemsContextProvider>
  )
}

export default App


//before using useRef -> 


// function App() {
//   const[todoItems,setTodoItems]=useState([]);

//   const addNewItem=(itemName,itemDueDate)=>
//   {
//       //  console.log(`new item added ${itemName} + ${itemDueDate}`);
//       // if multiple updates are happing there it may use old value in async
//       //  const newToDoItems=[...todoItems,{
//       //   name:itemName,
//       //   date:itemDueDate
//       //  }] ;
//       //  setTodoItems(newToDoItems);

//       setTodoItems((currentValue)=>{
//         const newToDoItems=[...currentValue,{
//             name:itemName,
//             date:itemDueDate
//            }] ;
//            return newToDoItems;
             
//       });
//   }

//   const deleteItem=(todoItemName)=>
//   {
//      const newToDoItems = todoItems.filter(item=>item.name !==todoItemName);
//      setTodoItems(newToDoItems);
//   }

 
//   return (
  
//      <TodoItemsContext.Provider value={
//       {
//         items:todoItems,
//         addNewItem:addNewItem,
//         deleteItem:deleteItem

//       }}>
//     <center className='todo-container'>
//       <AppName />
//       <AddTodo />
//       <WelComeMessage />
//       <TodoItems /> 
//     </center>
//     </TodoItemsContext.Provider>  
//   )
// }

// export default App