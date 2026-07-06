import React from "react";
import { Text as MantineText } from "@mantine/core";

export interface TextProps {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fw?: number | "normal" | "bold" | "bolder" | "lighter";
  c?: string;
  span?: boolean;
  lineClamp?: number;
  tt?: string;
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pb?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
}

export const Text: React.FC<TextProps> = (props) => {
  return <MantineText {...props} />;
};

export default Text;
