import React from "react";
import { Box as MantineBox } from "@mantine/core";

export interface BoxProps {
  children?: React.ReactNode;
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  h?: string | number;
  w?: string | number;
  maw?: string | number;
  mah?: string | number;
  ff?: string;
  bg?: string;
  c?: string;
  style?: React.CSSProperties;
}

export const Box: React.FC<BoxProps> = (props) => {
  return <MantineBox {...props} />;
};

export default Box;
