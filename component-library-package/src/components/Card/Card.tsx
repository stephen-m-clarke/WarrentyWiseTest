import React from "react";
import { Card as MantineCard } from "@mantine/core";

export interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <MantineCard shadow="sm" padding="md" radius="md">{children}</MantineCard>;
};

export default Card;
