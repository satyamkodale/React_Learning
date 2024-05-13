import { useEffect, useState } from "react";

let CurrentTime=()=>
{
  // let time = new Date();
  // direct objects are not allowed 
  // return (<h1>Shows CurrentTime {time.toLocaleDateString()} - {" " }-{time.toLocaleTimeString()}</h1>)

    const [time,setTime] =useState(new Date());

    useEffect(()=>{
      const intervalId =setInterval(()=>{
        setTime(new Date());
      },1000);

      return(()=>
      {
        clearInterval(intervalId);
        console.log("interval cleared ");
      })
    },[]);

   
  
    return(
      <h1>Shows CurrentTime {time.toLocaleDateString()} - {" " }-{time.toLocaleTimeString()}</h1>
    )
};
export default CurrentTime