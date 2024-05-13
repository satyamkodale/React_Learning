import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'
import { postLoader } from './components/PostList.jsx'


const router =createBrowserRouter([

  {
    path:"/" ,   // app compulsary dikhna chahiye but uske age agar /-> postlist , agar /craete-post aya to CreatePost dikhna chahiye 
   element:<App/>,
     children:[
    {path:"/" , element:<PostList/> , loader:postLoader},
  {path:"/create-post" , element:<CreatePost/>,action:createPostAction}
]},
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
