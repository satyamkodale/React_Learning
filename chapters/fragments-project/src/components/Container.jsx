import styles from "./Container.module.css";

const Container=({childern})=>
{
  return <div className={styles.container}>{children}</div>;
}
export default Container;