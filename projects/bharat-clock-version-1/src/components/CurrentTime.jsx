let CurrentTime=()=>
{
  let time = new Date();
  // direct objects are not allowed 
  return <h1>Shows CurrentTime {time.toLocaleDateString()}</h1>
};
export default CurrentTime