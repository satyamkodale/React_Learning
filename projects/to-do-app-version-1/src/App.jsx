import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelComeMessage from './components/WelComeMessage '

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

  const[items,setItems]=useState([]);
  console.log(items);

  const handleNewItem=(itemName,itemDueDate)=>
  {
      //  console.log(`new item added ${itemName} + ${itemDueDate}`);
      // if multiple updates are happing there it may use old value in async
      //  const newToDoItems=[...items,{
      //   name:itemName,
      //   date:itemDueDate
      //  }] ;
      //  setItems(newToDoItems);

      setItems((currentValue)=>{
        const newToDoItems=[...currentValue,{
            name:itemName,
            date:itemDueDate
           }] ;
           return newToDoItems; 
      });
  }

  const handleDeleteItem=(todoItemName)=>
  {
    //  console.log(`Item Deleted ${todoItemName}`);

     const newToDoItems = items.filter(item=>item.name !==todoItemName);
     setItems(newToDoItems);
  }

  return (
    // <>
    // <div>Hello from app</div>
    // </>

    
    <center className='todo-container'>
      <AppName />
      {/* componenet is going to pass data to us  */}
     
      <AddTodo onNewItem={handleNewItem}/>
      {/* {todoitems.length==0? <WelComeMessage />:null} */}
      {items.length==0 && <WelComeMessage />}
      <TodoItems items={items} onDeleteClick={handleDeleteItem}/>
      
    </center>
  )
}

export default App
