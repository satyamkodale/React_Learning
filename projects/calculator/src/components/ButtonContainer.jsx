import styles from './ButtonContainer.module.css'

const ButtonContainer=({OnButtonClick})=>
{
  const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return(
    
    
    <div className={styles.buttonsContainer}>
     {buttonNames.map((buttonName) => (
          <button className={styles.button} onClick={() => OnButtonClick(buttonName)} key={buttonName}>
            {buttonName}
          </button>
        ))}
    </div>
    
  );
}

export default ButtonContainer;