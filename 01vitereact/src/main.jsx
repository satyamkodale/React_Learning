import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'; // Assuming App.js is in the same directory

import {Ex1,Ex2} from './component';
ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App />
    // <Chai />  -> we cant do like this 
    <>
         <App />
         <Ex1 />
         <Ex2 />
    </>
   
  
)
