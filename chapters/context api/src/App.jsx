import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelComeMessage from './components/WelComeMessage '
import { TodoItemsContext } from './store/todo-items-store'

function App() {
  
  // const todoitems=[
  //  {
  //   name:"go to college",
  //   date:"14/04/2003"
  //  },
  //  {
  //   name:"go to mess",
  //   date :"15/05/2004"
  //  },
  //  {
  //   name:"go to ground",
  //   date:"01/08/2023"
  //  }
  // ];

  const[todoItems,setTodoItems]=useState([]);

  const addNewItem=(itemName,itemDueDate)=>
  {
      //  console.log(`new item added ${itemName} + ${itemDueDate}`);
      // if multiple updates are happing there it may use old value in async
      //  const newToDoItems=[...items,{
      //   name:itemName,
      //   date:itemDueDate
      //  }] ;
      //  setItems(newToDoItems);

      setTodoItems((currentValue)=>{
        const newToDoItems=[...currentValue,{
            name:itemName,
            date:itemDueDate
           }] ;
           return newToDoItems;
             
      });
  }

  const deleteItem=(todoItemName)=>
  {
    //  console.log(`Item Deleted ${todoItemName}`);

     const newToDoItems = todoItems.filter(item=>item.name !==todoItemName);
     setTodoItems(newToDoItems);
  }

  // const temp = [{name:'byye ghee',date:'14/05/2003'}];
  return (
  
     <TodoItemsContext.Provider value={
      {
        items:todoItems,
        addNewItem:addNewItem,
        deleteItem:deleteItem

      }}>
    <center className='todo-container'>
      <AppName />
      {/* componenet is going to pass data to us  */}
     
      <AddTodo />
      
      {/* {items.length==0 && <WelComeMessage />} */}

      <WelComeMessage />

      <TodoItems />
      
    </center>
    </TodoItemsContext.Provider>  
  )
}

export default App
