import { createContext } from "react";
// export const TodoItemsContext = createContext({});
// ({})-> initial value is not compusary  but if u need suggestion while using it for ide you can 

export const TodoItemsContext = createContext(
  {
    items: [],
  addNewItem: () => {},
  deleteItem: () => {},
  });