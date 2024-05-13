import { useContext,useRef } from "react";
import { PostList } from "../store/post-list-store";
import { redirect, useNavigate } from "react-router-dom";
import {Form }from "react-router-dom";

const CreatePost=()=>
{
  // const{addPost}=useContext(PostList);
  // const navigate =useNavigate();

  // const userIdElement=useRef();
  // const postTitleElement =useRef();
  // const postBodyElement=useRef();
  // const reactionsElement=useRef();
  // const tagsElement = useRef();

  const handleSubmit=(event)=>
  {
    // event.preventDefault();
    // const userId=userIdElement.current.value;
    // const postTitle=postTitleElement.current.value;
    // const postBody=postBodyElement.current.value;
    // const reactions=reactionsElement.current.value;
    // const tags= tagsElement.current.value.split(' ');

    
    // fetch('https://dummyjson.com/posts/add', {
    //   method: 'POST',
    //  headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //        title:postTitle,
    //        body:postBody,
    //        reaction:reactions,
    //        userId:userId,
    //        tags:tags
    //         })
    //      })
    //    .then(res => res.json())
    //    .then(
    //      (post)=>{
    //        addPost(post)
    //      navigate("/")}
    //      );
        


    // addPost(userId,postTitle,postBody,reactions,tags);
    

    // userIdElement.current.value='';
    // postTitleElement.current.value='';
    // postBodyElement.current.value='';
    // reactionsElement.current.value='';
    // tagsElement.current.value='';



  }

  return(
  // <form className="create-post" onSubmit={handleSubmit}>
  <Form className="create-post" method="POST">
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Enter Your Title</label>
      <input type="text" 
      //  ref={postTitleElement} 
      name="title"
       className="form-control" id="title" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label htmlFor="userId" className="form-label">Enter your userId here </label>
      <input type="text"
      //  ref={userIdElement} 
      name="userId"
       className="form-control" id="userId" aria-describedby="emailHelp"/>
    </div>
   
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Body</label>
      <textarea type="text" 
      // ref={postBodyElement}
      name="body"
       className="form-control" id="body" rows ={5} aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Number of reactions </label>
      <input type="text" 
      // ref={reactionsElement} 
      name="reaction"
      className="form-control" id="reactions" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Number of tags </label>
      <input type="text"
      //  ref={tagsElement}
      name="tags"
        className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Please enter your tags with space"/>
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </Form>
  )

}


export async function createPostAction(data)
  {
    // const {addPost}=useContext(PostList);

    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags =postData.tags.split(" ");
    console.log(postData)
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
     headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData )
         })
       .then(res => res.json())
       .then(
         (post)=>{
          // addPost(post);-> cont be called from function 
          console.log(post);
           }
         );

    return redirect("/");

  }

export default CreatePost