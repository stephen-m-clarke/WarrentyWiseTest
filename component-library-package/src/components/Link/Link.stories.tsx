import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta = {
  title: 'Components/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { to: '/', children: 'Home' },
};

export const External: Story = {
  args: { to: 'https://example.com', children: 'External Site' },
};

export const Large: Story = {
  args: { to: '/products', children: 'View Products', size: 'lg', fw: 700 },
};
