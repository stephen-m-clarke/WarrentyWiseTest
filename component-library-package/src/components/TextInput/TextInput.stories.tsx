import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Your name',
    placeholder: 'Enter your name',
  },
};
