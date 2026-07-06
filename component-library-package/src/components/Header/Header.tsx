import React from "react";
import { Group, MantineSpacing } from "@mantine/core";

export interface HeaderProps {
  children?: React.ReactNode;
  px?: MantineSpacing;
}

export const Header: React.FC<HeaderProps> = ({ children, px = 0 }) => {
  return (
    <Group
      component="header"
      px={px}
      py="sm"
      bg="var(--mantine-color-orange-8)"
    >
      {children}
    </Group>
  );
};

export default Header;
