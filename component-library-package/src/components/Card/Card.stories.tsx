import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@mantine/core';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>This is a card with some content.</Text>,
  },
};
