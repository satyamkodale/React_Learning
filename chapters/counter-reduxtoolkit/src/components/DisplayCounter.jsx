import { useSelector } from "react-redux"

const DisplayCounter=()=>
  {

// agar counter mai change ho to hi muze batana 
// useSelector internally manages the subscription things and all we dont have to take care 
// it providing us the slice which is needed to us 
//agar store pura rakh liya and kuch bhi change hua to repaint ye bhi hoga so better to keep needed
//its managing whole subsription 
    const counterSlice  =useSelector(state=>state.counter);
    const counterValue =counterSlice.counterVal; 
    return (
      <p className="lead mb-4">Counter Current Value = {counterValue}</p>
    )
  }

  export default DisplayCounter