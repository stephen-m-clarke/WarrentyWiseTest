import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductListingImage } from './ProductListingImage';

const meta = {
  title: 'Store/ProductListingImage',
  component: ProductListingImage,
} satisfies Meta<typeof ProductListingImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    alt: 'Product image',
  },
};
