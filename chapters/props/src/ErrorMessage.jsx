const ErrorMessage=(props)=>
{
  // const foodItems=["aalu","battata","tamata","mirchi","safrachand"];

  return
  (
    <>
    {props.items.length==0 ? <h1>I am hungry I need more food </h1>:null}
    </>
  );
}

export default ErrorMessage