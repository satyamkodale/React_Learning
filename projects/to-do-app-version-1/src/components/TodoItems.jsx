import ToDoItem from "./TodoItem";
const TodoItems=({items,onDeleteClick})=>
{

  return (
  <>
  <div>
  {items.map(item=>
  <ToDoItem  key={item.name} name={item.name} date={item.date}  onDeleteClick={onDeleteClick}/>)}
  {/* no need to do hard coding  */}
      {/* <ToDoItem name={"go to school"} date={"14/04/2003"}/>
     <ToDoItem name={"go to home"} date={"14/04/2023"}/> */}
   </div>

  </>
  );

}
export default TodoItems;