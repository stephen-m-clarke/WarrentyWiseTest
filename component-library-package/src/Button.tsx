import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      style={{ padding: "8px 12px", borderRadius: 4 }}
    >
      {props.children}
    </button>
  );
};

export default Button;
