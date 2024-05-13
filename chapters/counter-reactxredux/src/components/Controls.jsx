import { useDispatch } from "react-redux"
import counterStore from "../store";
import { useRef } from "react";

const Controls=()=>
  {
    const number = useRef();
   const dispatch = useDispatch();
   //it returns method to dispatch events 

   const handleIncrement=()=>
    {
      dispatch({type:"INCREMENT"});
    }
    
   const handleDecrement=()=>
    {
      dispatch({type:"DECREMENT"});
    }
     
   const handlePrivacyToggle=()=>
    {
      dispatch({type:"PRIVACY"});
    }

    const handleAdd=()=>
    {
      dispatch(
        {
          type:"ADD",
          payload:
          {
            number:number.current.value
          }
        })
        number.current.value="";
    }
    const handleSubstract=()=>
      {
        dispatch(
          {
            type:"SUBSTRACT",
            payload:
            {
              number:number.current.value
            }
          })
          number.current.value="";
      }
    return (
      <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" fdprocessedid="fycff" onClick={handleIncrement}>+1</button>

        <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="591hvr" onClick={handleDecrement}>-1</button>

        <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="591hvr" onClick={handlePrivacyToggle}>Privacy Toggle</button>
        

      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center gap">

        <input type="text " placeholder="Enter your name " ref={number} />

        <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="591hvr" onClick={handleAdd} >ADD</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="591hvr" onClick={handleSubstract}>SUBSTRACT</button>

      </div>
      </>
    )

  }
  export default Controls