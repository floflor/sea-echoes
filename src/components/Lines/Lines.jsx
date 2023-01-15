import styles from "./Lines.module.css";
const Lines = ({animation}) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 115 }, (_, i) => (
        <div key={i} class={ animation ? styles.parallelogram : styles.parallelogramFadeIn}></div>
      ))}
    </div>
  );
};

export default Lines;
