import { getProducts, getProductById } from './api';
import type { Product } from '../interfaces/Product';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 10.99,
  description: 'A test product',
  category: "men's clothing",
  image: 'https://example.com/image.jpg',
  rating: { rate: 4.5, count: 100 },
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getProducts', () => {
  it('returns products on success', async () => {
    (globalThis as any).fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([mockProduct]),
    });

    const products = await getProducts();
    expect(products).toEqual([mockProduct]);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });

  it('throws on API error', async () => {
    (globalThis as any).fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(getProducts()).rejects.toThrow('Request failed with status 500');
  });
});

describe('getProductById', () => {
  it('returns a product on success', async () => {
    (globalThis as any).fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockProduct),
    });

    const product = await getProductById(1);
    expect(product).toEqual(mockProduct);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1');
  });

  it('accepts string id', async () => {
    (globalThis as any).fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockProduct),
    });

    const product = await getProductById('1');
    expect(product).toEqual(mockProduct);
    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1');
  });

  it('throws on API error', async () => {
    (globalThis as any).fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(getProductById(999)).rejects.toThrow('Request failed with status 404');
  });
});
