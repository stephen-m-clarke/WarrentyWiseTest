import React from "react";
import { Flex as MantineFlex } from "@mantine/core";

export interface FlexProps {
  children?: React.ReactNode;
  gap?: string | number;
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
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
  style?: React.CSSProperties;
}

export const Flex: React.FC<FlexProps> = (props) => {
  return <MantineFlex {...props} />;
};

export default Flex;
