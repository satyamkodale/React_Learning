import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function ToDoItem({name,date})
{
   const context = useContext(TodoItemsContext);
        
   const deleteItem = context.deleteItem;
   return(
        // now we are making different container to all its good because now they each are seperate componnet now 

    <div className="container text-center" >
    <div className="row">
   <div className="col-6">
    {name}
   </div>
   <div className="col-4">
   {date}
   </div>
   <div className="col-2">
    <button type='button' className='btn btn-danger kgbtn' style={{margin:5}} onClick={()=> deleteItem(name)}><MdDelete /></button>
   </div>
   </div>
   </div>
   );
}
export default ToDoItem