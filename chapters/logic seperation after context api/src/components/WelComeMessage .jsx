import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelComeMessage=()=>
{
  const context =useContext(TodoItemsContext);
  const items = context.items;
  
  return(
    <>
    {items.length===0&&<h1>Add Your Tasks</h1>}
    </>
  
  );
}
export default WelComeMessage