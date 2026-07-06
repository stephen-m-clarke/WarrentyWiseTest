import React from "react";
import { SimpleGrid as MantineSimpleGrid } from "@mantine/core";

export interface SimpleGridProps {
  children?: React.ReactNode;
  cols?: number | Record<string, number>;
  spacing?: string | number;
  verticalSpacing?: string | number;
}

export const SimpleGrid: React.FC<SimpleGridProps> = (props) => {
  return <MantineSimpleGrid {...props} />;
};

export default SimpleGrid;
