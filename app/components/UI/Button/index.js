import styles from "./button.module.css";

const Button = ({ context, btnStyle, onClick }) => {
  const defaultStyle = {};

  return (
    <button className={styles.base} style={btnStyle} onClick={onClick}>
      {context}
    </button>
  );
};

export default Button;
