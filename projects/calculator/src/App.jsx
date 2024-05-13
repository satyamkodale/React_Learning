import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';


function App() {
  const [calVal, setCalVal]=useState("");

  const OnButtonClick=(buttonText)=>
  {
           if(buttonText==='C')
           {
            setCalVal('');
           }
           else if (buttonText==='=')
           {
              const result= eval(calVal);
              setCalVal(result)
           }
           else
           {
            const newDisplayValue=calVal+buttonText;
              setCalVal(newDisplayValue);
           }
  }
  return (
    <div className={styles.calculator}>

     <Display displayValue={calVal}/>
     <ButtonContainer OnButtonClick={OnButtonClick}/>

    </div>
  )
}

export default App
