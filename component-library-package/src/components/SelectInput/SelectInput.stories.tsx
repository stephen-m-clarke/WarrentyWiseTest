import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SelectInput } from './SelectInput';

const meta = {
  title: 'Components/SelectInput',
  component: SelectInput,
  args: { onChange: fn() },
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Choose option',
    placeholder: 'Pick one',
    data: ['React', 'Vue', 'Angular', 'Svelte'],
  },
};
