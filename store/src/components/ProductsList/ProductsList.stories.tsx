import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductsList } from './ProductsList';
import type { Product } from '../../interfaces/Product';

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack',
    price: 109.95,
    description: 'Your perfect pack for everyday use.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.5, count: 120 },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
    description: 'Slim-fitting style.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: { rate: 4.1, count: 259 },
  },
];

const meta = {
  title: 'Store/ProductsList',
  component: ProductsList,
} satisfies Meta<typeof ProductsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { products: mockProducts },
};
