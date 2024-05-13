import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Ex1,Ex2 } from './component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
  <App />
  <Ex1/>
  <Ex2/>
  </>
    
    
    
  </React.StrictMode>,
)
