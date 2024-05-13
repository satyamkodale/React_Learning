import { useState } from 'react'



function App() {

  let dynamicomp=["dal","chawal","roti","juice","milk"];
  let idofitem=[1,2,3,4,5];
  let price=[100,200,300,400];


  let cond=["one","two"];
  // if(cond.length==0)
  // {
  //   return <h1>Empty</h1>
  // }
  return (
    // it create new div in main dom
    // <div>
    //   <h1>Hello from app</h1>
    //   <p>what are you doing , i am learning react fragments</p>
    // </div>

    // hard coded components to make it dynamic we uses array
    // <>
    //   <ul>
    //     <li>apple</li>
    //     <li>bananna</li>
    //     <li>mango</li>
    //   </ul>
    // </>

    //modern react says that each pro have unqiue key so it can be easily updated 
    // <>
    //   <ul>
    //     {dynamicomp.map(item=><li>{item}</li>)}
    //   </ul>
    // </>

    // with key if we uses key we can different identify that 
    <>
       <h1></h1>
       {/* {cond.length==0 ? <h1>Empty</h1>:null} */}
       {cond.length===0 && <>i am hungry</> }
      <ul className='usethis'>
          {cond.map(item=><li key={item}>{item}</li>)}

      </ul>
    </>
  )
}

export default App
