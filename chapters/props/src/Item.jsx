import styles from "./Item.module.css"


const Item=(props)=>
{
  console.log(styles)
  // let {food}=props; array destructing 
  return (
    // <li  className="    list-group-item global-item">
    //  {props.foodItem}</li>
    <li className={`${styles['item-own']} global-item `} >
      <span className={styles['item-own-span']}>{props.foodItem}</span></li>
  
    
  );
}
export default Item