import Line from "./styled.jsx"
import styles from "./Lines.module.css";
const Lines = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 115 }, (_, i) => (
        <Line key={i}/>
      ))}
    </div>
  );
};

export default Lines;
