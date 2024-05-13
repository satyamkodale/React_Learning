const Welcome=({onGetPostsClick})=>{
  return(
    <>
    <center>
    <h1>Welcome Add your posts</h1>
    <button onClick={onGetPostsClick}>Fetch Posts</button>
    </center>
    </>
  )
}
export default Welcome