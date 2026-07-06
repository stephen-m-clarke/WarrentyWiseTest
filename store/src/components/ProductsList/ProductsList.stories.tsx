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
    image: '/Test-Logo.svg.webp',
    rating: { rate: 3.5, count: 120 },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
    description: 'Slim-fitting style.',
    category: "men's clothing",
    image: '/Test-Logo.svg.webp',
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
