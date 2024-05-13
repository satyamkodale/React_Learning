
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import ToDoItem from "./TodoItem";
const TodoItems = () => {
  const context = useContext(TodoItemsContext);
  const items = context.items;



  {/* <ToDoItem  key={item.name} name={item.name} date={item.date}  onDeleteClick={onDeleteClick}/>)}  before when we are using prop it takes from parent now no need to pass to child */ }
  return (
    <>
      <div>
        {items.map(item =>

          <ToDoItem key={item.name} name={item.name} date={item.dueDate} />)}
        {/* no need to do hard coding  */}
        {/* <ToDoItem name={"go to school"} date={"14/04/2003"}/>
     <ToDoItem name={"go to home"} date={"14/04/2023"}/> */}
      </div>

    </>
  );

}
export default TodoItems;