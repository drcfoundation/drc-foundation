import * as React from "react";
import styles from "./button.styles";

interface ButtonProps {
  to?: string;
  title?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ to, target, children, ...props }) => {
  return to ? (
    <a
      href={to}
      css={styles.root}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ) : (
    <button css={styles.root} {...props}>
      {children}
    </button>
  );
};

export default Button;
