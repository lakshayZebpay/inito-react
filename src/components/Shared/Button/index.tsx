import { ButtonProps, ButtonType, Size } from "./typings";
import styles from "./index.module.css";

const getStyle = (buttonType: ButtonType, size: Size) => {
  return `${styles[buttonType]} ${styles[size]}`;
  //   switch (buttonType) {
  //     case "primary":
  //       return `${styles.primary} ${styles[size]}`;
  //     case "secondary":
  //       return styles.secondary;
  //     case "tertiary":
  //       return styles.tertiary;
  //   }
};
const Button: React.FC<ButtonProps> = ({
  type = "button",
  buttonType = "primary",
  onClick,
  children,
  size = "medium",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={getStyle(buttonType, size)}
    >
      {children}
    </button>
  );
};

export default Button;
