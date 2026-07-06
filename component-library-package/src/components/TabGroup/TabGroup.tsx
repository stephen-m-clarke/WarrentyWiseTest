import React from "react";
import { Tabs } from "@mantine/core";

export interface TabGroupProps {
  defaultValue?: string;
  children?: React.ReactNode;
  onChange?: (value: string | null) => void;
}

export const TabGroup: React.FC<TabGroupProps> = ({ defaultValue, onChange, children }) => {
  return <Tabs defaultValue={defaultValue} onChange={onChange}>{children}</Tabs>;
};

export default TabGroup;
