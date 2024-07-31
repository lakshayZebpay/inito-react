export type ButtonType = "primary" | "secondary" | "tertiary";
export type Size = "small" | "medium" | "large";

export interface ButtonProps {
  buttonType?: ButtonType;
  size?: Size;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
  children?: JSX.Element | string;
}
