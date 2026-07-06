import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductListing } from './ProductListing';
import type { Product } from '../../interfaces/Product';

const mockProduct: Product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack',
  price: 109.95,
  description: 'Your perfect pack for everyday use.',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: { rate: 3.5, count: 120 },
};

const meta = {
  title: 'Store/ProductListing',
  component: ProductListing,
} satisfies Meta<typeof ProductListing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { product: mockProduct },
};
