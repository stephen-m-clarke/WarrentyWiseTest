import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './Image';

const meta = {
  title: 'Components/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    alt: 'Product image',
    fit: 'contain',
    h: 200,
  },
};
