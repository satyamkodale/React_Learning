import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
    <div className='div' style={{backgroundColor:color,width:200, height:200}}>Hello</div>


    <button onClick={()=>{setColor("black")}}>Black</button>
    <button onClick={()=>{setColor("pink")}}>Pink</button>
    </>
  )
}

export default App
