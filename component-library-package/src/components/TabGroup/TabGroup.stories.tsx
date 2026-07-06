import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '@mantine/core';
import { fn } from 'storybook/test';
import { TabGroup } from './TabGroup';

const meta = {
  title: 'Components/TabGroup',
  component: TabGroup,
  args: { onChange: fn() },
} satisfies Meta<typeof TabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'tab1',
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab One</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab Two</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel One Content</Tabs.Panel>
        <Tabs.Panel value="tab2">Panel Two Content</Tabs.Panel>
      </>
    ),
  },
};
