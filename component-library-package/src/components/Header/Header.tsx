import React from "react";
import { Group, MantineSpacing } from "@mantine/core";

export interface HeaderProps {
  children?: React.ReactNode;
  px?: MantineSpacing;
  bg?: React.CSSProperties["backgroundColor"];
}

export const Header: React.FC<HeaderProps> = ({
  children,
  px = 0,
  bg = "var(--mantine-color-orange-8)",
}) => {
  return (
    <Group component="header" px={px} py="sm" bg={bg}>
      {children}
    </Group>
  );
};

export default Header;
