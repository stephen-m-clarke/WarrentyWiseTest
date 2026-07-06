import React from "react";
import { Group } from "@mantine/core";

export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Group
      component="header"
      px="md"
      py="sm"
      bg="var(--mantine-color-orange-4)"
    >
      {children}
    </Group>
  );
};

export default Header;
