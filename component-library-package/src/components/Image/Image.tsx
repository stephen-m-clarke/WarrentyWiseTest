import React from "react";
import { Image as MantineImage } from "@mantine/core";

export interface ImageProps {
  src: string;
  alt: string;
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  h?: string | number;
  w?: string | number;
}

export const Image: React.FC<ImageProps> = (props) => {
  return <MantineImage {...props} />;
};

export default Image;
