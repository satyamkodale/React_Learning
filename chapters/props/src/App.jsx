
import './App.css'
import FoodItems from './FoodItems';
import Heading from './Heading';
import ErrorMessage from './ErrorMessage';

function App() {

  const foodItems=["aalu","battata","tamata","mirchi","safrachand"];

  // data is flowing read only from parent to child

  return (
    <>
       {/* <h1>Today's Menu</h1> instead of doing this we divides it into components*/}
       <Heading />
       {/* null  undefined are the falsy values */}
       {/* {foodItems.length==0 ? <h1>I am hungry I need more food </h1>:null} instead of doing this we divides it into components* */}
       <ErrorMessage items={foodItems}/>
       
      {/* {foodItems.map(item=><li>{item}</li>)}   instead of doing this we divides it into components*/}
      <FoodItems items={foodItems}/>

      
       
    </>
  )
}

export default App
