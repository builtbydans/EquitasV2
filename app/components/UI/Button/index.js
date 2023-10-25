import styles from "./button.module.css";

const Button = ({ label, btnStyle, onClick }) => {
  const defaultStyle = {};

  return (
    <button className={styles.base} style={btnStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
