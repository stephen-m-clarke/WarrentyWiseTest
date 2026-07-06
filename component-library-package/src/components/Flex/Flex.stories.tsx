import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from './Flex';

const meta = {
  title: 'Components/Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    gap: 'md',
    children: <><div>Item 1</div><div>Item 2</div><div>Item 3</div></>,
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: 'sm',
    children: <><div>Item 1</div><div>Item 2</div><div>Item 3</div></>,
  },
};
