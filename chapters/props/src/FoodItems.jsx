import Item from "./Item";



{/* 
return(
<>

<ul className="list-group">
 {foodItems.map(item=> 
    <li key={item} className="list-group-item">
     {item}</li> )}

     </>
 );

    */}

     {/* passing item as argument  like attribute of tag like <input tittle="satyam"> 
       apne kitne bhi arument pass kiya to vo udar props name ke enity me save hote hai
       or hum easily array destructing ki help se ya props.foodItem -> isa use kar sakte hai 
    */}
 
const FoodItems=(props)=>
{
  // const foodItems=["aalu","battata","tamata","mirchi","safrachand"]; no need 
  
  return(
    <>
    <ul className="list-group">
     {props.items.map(item=>
     
     
       
      <Item key={item} foodItem ={item}/>

     )}
     </ul>
  </>
);

}
export default FoodItems;