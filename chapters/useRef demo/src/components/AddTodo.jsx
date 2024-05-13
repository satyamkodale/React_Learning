import { useState,useRef, createContext, useContext } from "react"
import { IoMdAdd } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";


function AddTodo()
{

  const context = useContext(TodoItemsContext);
  const  addNewItem = context.addNewItem;


 
  // const[todoName,setToDoName]=useState("");
  
  // const[dueDate,setDueDate]=useState("");

  const nameElement = useRef();
  const dateElement = useRef();


  // const handleNameChange=(event)=>
  // {
  // //  setToDoName(event.target.value);
   
  // }
  // const handleDateChange=(event)=>
  // {
  //   // setDueDate(event.target.value);
    
  // }



  const handleAddButtonClicked=(event)=>
  {
    // console.log(event);
    event.preventDefault();
    // onNewItem(todoName,dueDate);
    // setDueDate("");
    // setToDoName("");
    const todoName = nameElement.current.value;
    const todoDate = dateElement.current.value;
    console.log(`${todoName} due on : ${todoDate}`);
    addNewItem(todoName,todoDate);
    nameElement.current.value="";
    dateElement.current.value="";

    
  }
  return (
     // now we are making different container to all its good because now they each are seperate componnet now 
    <div className="container text-center" >
   
    <form className="row" onSubmit={handleAddButtonClicked}>
     <div className="col-6">
      <input
       type="text" placeholder='enter here' 
       ref={nameElement}
      //  value={todoName}
        // onChange={handleNameChange}
        ></input>
     </div>
     <div className="col-4">
      <input type="date"
         ref={dateElement}
      //  onChange={handleDateChange}
        // value={dueDate}
        />
     </div>
     <div className="col-2">
      <button type='submit' className='btn btn-success'  ><IoMdAdd /></button>
     </div>
     
     </form>

     </div>
  )
}

export default AddTodo