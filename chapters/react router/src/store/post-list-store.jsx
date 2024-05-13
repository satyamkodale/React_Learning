import { createContext, useCallback, useMemo,useState, useReducer ,useEffect} from "react";
// import PostList from "../components/PostList";

const DEFAULT_CONTEXT={
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
  // fetching:false
  
}

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer=(currPostList,action)=>
{
  let newPostList=currPostList;
  if(action.type==='DELETE_POST')
  {
    // console.log("not coming");
     newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
  }
  else if(action.type==='ADD_POST')
  {
    newPostList=[action.payload,...currPostList]
  }
  else if(action.type==='ADD_INITIAL_POSTS')
  {
       newPostList=action.payload.posts;
  }
  return newPostList;
}

const PostListProvider =({children})=>
{
  
  const[postList,dispatcherPostList]=useReducer(postListReducer,[]);
  // const[fetching,setFetching] = useState(false);

  // const addPost=(userId,postTitle,postBody,reactions,tags)=>
  // {

  //   dispatcherPostList(
  //     {
  //       type:"ADD_POST",
  //       payload:
  //       {
  //         id:Date.now(),
  //         title:postTitle,
  //         body:postBody,
  //         reaction:reactions,
  //         userId:userId,
  //         tags:tags
  //       }
  //     })
  // }

  //doing using fetch function 
  const addPost=(post)=>
  {

    dispatcherPostList(
      {
        type:"ADD_POST",
        payload:post
      })
  }

  // const addInitialPosts=(posts)=>
  // {

  //   dispatcherPostList(
  //     {
  //       type:"ADD_INITIAL_POSTS",
  //       payload:
  //       {
  //        posts:posts
  //       }
  //     })
  // }
 

  
  const deletePost=useCallback((postId)=>
  {
    console.log("delete post redeclard ..bcoz changed something based on depandacies else bcoz of useCallback its never gonna redalcare this ");
    
  //  console.log(postId);
   dispatcherPostList(
    {
      type:"DELETE_POST",
      payload:
      {
        postId:postId
      }
    })
  },[dispatcherPostList]);

  const arr = [7,9,2,5,1,6];
  // const sortedArr= arr.sort(); not good 

  const sorted =useMemo(()=>{arr.sort},[arr]);


  // it loads data only one time at starting not when we switch between components
  // when we are learnt the loader we are shifted logic  

    useEffect(()=>{
    // setFetching(true);
    const controller = new AbortController();
    const signal =controller.signal;
  //  console.log("fetching start");
 

return(()=>
{
  console.log("fetch aborted");
   controller.abort();
});

// console.log("fetch ended");
  },[]);
  


  //  const[postList,dispatcherPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

  
   return(
    
   <PostList.Provider value={{
    // postList:postList,
    // addPost:addPost,
    // deletePost:deletePost
    postList,
    addPost,
    deletePost
    // fetching,
    }
   }>
    
    {children}
   </PostList.Provider>
   )
}


// const DEFAULT_POST_LIST=
// [
//   {
//     id:'1',
//     title:'Going to mumbai',
//     body:'hii i went to mumbai',
//     reaction:10,
//     userId:'user-9',
//     tags:['vacations','mumbai','enjoying']

//   },
//   {
//     id:'2',
//     title:'Going to varanasi',
//     body:'hii i went to kasi',
//     reaction:12,
//     userId:'user-10',
//     tags:['vacations','mumbai','enjoying','hello']

//   },
//   {
//     id:'3',
//     title:'Going to prayagraj',
//     body:'hii i went to prayag',
//     reaction:14,
//     userId:'user-11',
//     tags:['vacations','mumbai','enjoying','hello','explored']
//   }
// ];

export  default PostListProvider;