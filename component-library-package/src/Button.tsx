import React from "react";
import { Button as MantineButton } from "@mantine/core";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <MantineButton onClick={props.onClick}>{props.children}</MantineButton>
  );
};

export default Button;
