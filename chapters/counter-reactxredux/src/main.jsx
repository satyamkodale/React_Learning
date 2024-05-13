import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider, useSelector} from 'react-redux';
import counterStore from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   {/* we are going to provide our store to app  */}
  <Provider store={counterStore}>
    <App />
  </Provider>
  </React.StrictMode>,
)
