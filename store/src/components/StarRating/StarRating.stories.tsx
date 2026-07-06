import type { Meta, StoryObj } from '@storybook/react-vite';
import { StarRating } from './StarRating';

const meta = {
  title: 'Store/StarRating',
  component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: { rate: 5 },
};

export const Half: Story = {
  args: { rate: 3.5 },
};

export const Empty: Story = {
  args: { rate: 0 },
};
