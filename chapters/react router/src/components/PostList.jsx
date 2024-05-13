import { useContext, useEffect, useState } from "react"
import Post from "./Post"

import { PostList as PostListData } from "../store/post-list-store";
import Welcome from './Welcome'
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList=()=>
{

  // const {postList} = useContext(PostListData);
  const postList= useLoaderData(); 

 

  // commented to test fetch post 
  // moved to context -> problem with this is when ever we are trying to switch between create post and posts 
  // because of use effect its calling api repeadly and its adding fectched data only but its not adding what we have added because when we add its adding in postList but when we click on posts bcoz of postlist repaint its fetching via server 

  // const[fetching,setFetching] = useState(false);
//   useEffect(()=>{
//     setFetching(true);
//     const controller = new AbortController();
//     const signal =controller.signal;
//   //  console.log("fetching start");
//   fetch('https://dummyjson.com/posts',{signal})
//   .then(res => res.json())
//   .then(data=>{console.log(data);
//   addInitialPosts(data.posts)
//   // console.log("fetch returned ");
//   setFetching(false);
// });

// return(()=>
// {
//   console.log("fetch aborted");
//    controller.abort();
// });

// // console.log("fetch ended");
//   },[])


// commented to test fetch post  till here 
// ==============================================

  // const handlePostClick=()=>
  // {
  // //  console.log("get post click");
  // fetch('https://dummyjson.com/posts')
  // .then(res => res.json())
  // .then(data=>{
  // console.log(data);
  // addInitialPosts(data.posts)});
  // }
  
  return(
   <>
    {/* {postList.length===0 && <Welcome onGetPostsClick={handlePostClick}/>} */}
    {/* {fetching&&<LoadingSpinner/>} */}
    {postList.length===0 && <Welcome/>}
    {postList.map((post)=><Post key={post.id} post={post}/>)}
   </>
)
 

}


export const postLoader=()=>
  {
    
    return (fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{
      return data.posts
    })
    )
    
  }




export default PostList