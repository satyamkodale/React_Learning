import { useState ,useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelComeMessage from './components/WelComeMessage '
import { TodoItemsContext } from './store/todo-items-store'


//after using useRef (must see how before we handle)

const todoItemsReducer =(currTodoItems,action)=>
{
  let newTodoItems=currTodoItems;
  if(action.type==="NEW_ITEM")
  {
     newTodoItems=[
      ...currTodoItems,
      {name:action.payload.itemName,dueDate:action.payload.itemDueDate}
    ]
  }
  else if(action.type==="DELETE_ITEM")
  {
       newTodoItems= currTodoItems.filter(item=>item.name!=action.payload.itemName);   
  }
  return newTodoItems;
}

function App() {
  // const[todoItems,setTodoItems]=useState([]);
  const[todoItems,dispathTodoItems] = useReducer(todoItemsReducer,[]);
  console.log(todoItems);


  const addNewItem=(itemName,itemDueDate)=>
  {
    const newItemAction =
    {
      type:"NEW_ITEM",
      payload:
      {
        itemName,
        itemDueDate
      }
    };
    dispathTodoItems(newItemAction);
      
  }

  const deleteItem=(todoItemName)=>
  {
    const deleteItemAction =
    {
      type:"DELETE_ITEM",
      payload:
      {
        itemName:todoItemName
      }
    }
    dispathTodoItems(deleteItemAction);
    
  }

 
  return (
  
     <TodoItemsContext.Provider value={
      {
        items:todoItems,
        addNewItem:addNewItem,
        deleteItem:deleteItem

      }}>
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <WelComeMessage />
      <TodoItems /> 
    </center>
    </TodoItemsContext.Provider>  
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