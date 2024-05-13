import { createContext } from "react";
// export const TodoItemsContext = createContext({});
// ({})-> initial value is not compusary  but if u need suggestion while using it for ide you can 

import {useState, useReducer } from "react";

export const TodoItemsContext = createContext(
  {
    items: [],
  addNewItem: () => {},
  deleteItem: () => {},
  });

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

const TodoItemsContextProvider=({containerchildren})=>
{
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

  return(
  <TodoItemsContext.Provider 
  value={
    {
      items:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem
    }}>
     {containerchildren}
   </TodoItemsContext.Provider>
  )
}
export default TodoItemsContextProvider;