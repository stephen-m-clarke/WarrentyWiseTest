import type { Meta, StoryObj } from '@storybook/react-vite';
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
    tabs: [
      { value: 'tab1', label: 'Tab One', content: 'Panel One Content' },
      { value: 'tab2', label: 'Tab Two', content: 'Panel Two Content' },
    ],
  },
};
