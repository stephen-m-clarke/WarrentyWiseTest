import React from "react";
import { Tabs } from "@mantine/core";

export interface Tab {
  value: string;
  label: string;
  content?: React.ReactNode;
}

export interface TabGroupProps {
  defaultValue?: string;
  tabs: Tab[];
  onChange?: (value: string | null) => void;
}

export const TabGroup: React.FC<TabGroupProps> = ({ defaultValue, tabs, onChange }) => {
  return (
    <Tabs defaultValue={defaultValue} onChange={onChange}>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value}>{tab.label}</Tabs.Tab>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} pt={16}>{tab.content}</Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default TabGroup;
