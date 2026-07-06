import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';

const meta = {
  title: 'Components/Box',
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Box content', p: 'md', bg: 'var(--mantine-color-blue-0)' },
};
