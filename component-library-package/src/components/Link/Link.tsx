import React, { FunctionComponent } from "react";
import { Anchor } from "@mantine/core";

export interface LinkProps {
  children?: React.ReactNode;
  to: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: FunctionComponent<any>;
  underline?: "hover" | "always" | "never";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fw?: number | "normal" | "bold" | "bolder" | "lighter";
  c?: string;
  span?: boolean;
  lineClamp?: number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  style?: React.CSSProperties;
}

export const Link: React.FC<LinkProps> = ({
  to,
  component,
  children,
  ...others
}) => {
  if (component) {
    return (
      <Anchor component={component} to={to} {...others}>
        {children}
      </Anchor>
    );
  }

  return (
    <Anchor href={to} {...others}>
      {children}
    </Anchor>
  );
};

export default Link;
