import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Slider } from './Slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  args: { onChange: fn() },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 40,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const WithMarks: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 25,
    marks: [
      { value: 0, label: '0' },
      { value: 25, label: '25' },
      { value: 50, label: '50' },
      { value: 75, label: '75' },
      { value: 100, label: '100' },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    label: "Price Range",
    defaultValue: 60,
    min: 0,
    max: 100,
  },
};

export const WithPrefix: Story = {
  args: {
    label: "Price",
    valuePrefix: "$",
    defaultValue: 42,
    min: 0,
    max: 100,
  },
};

export const WithSuffix: Story = {
  args: {
    label: "Volume",
    valueSuffix: "%",
    defaultValue: 75,
    min: 0,
    max: 100,
  },
};
