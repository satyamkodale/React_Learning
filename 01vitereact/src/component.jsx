function Ex1()
{
  let myname = "Dynamic"
  let n1 =10;
  let n2=20;
  function fullname()
  {
    return "satyam Kodale"
  }
  return <>
  <button>Ex1{myname}{n1+n2}</button>
  <button>{fullname()}</button>

  </>
}
function Ex2()
{
  return <button>Ex2</button>
}
export  { Ex1,Ex2}