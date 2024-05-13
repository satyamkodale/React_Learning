import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const [counter,setCounter]=useState(15);
  
  // let counter=15

  // const addValue=()=>
  // {
  //   // counter = counter+1
  //   setCounter(counter+1);

  // }

  
  const addValue=()=>
  {
    // it only update value one time 
    // setCounter(counter+1);
    // setCounter(counter+1);

    //but if we want to update multiple times then setcounter takes one function callback function which used to update value 
    setCounter((temp)=>temp+1)
    setCounter((temp)=>temp+1)
  }

  const substractValue=()=>
  {
    // counter = counter-1
    setCounter(counter-1);
  }

  return (
  
    <>
     <h1>Hello React</h1>
     <h2>Counter Value {counter}</h2>


     <button onClick={addValue}>
      Add Value : {counter}
     </button>
     <br />
     <button onClick={substractValue}>
      Substract Value : {counter}
     </button>
     <p>Footer : {counter}</p>


     </>

  )
}

export default App
