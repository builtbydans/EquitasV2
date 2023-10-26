import styles from "./button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.base} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
