import type { Product } from "../interfaces/Product";

const API_BASE_URL = "https://fakestoreapi.com";

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const getProducts = (): Promise<Product[]> =>
  request<Product[]>("/products");

export const getProductById = (id: number | string): Promise<Product> =>
  request<Product>(`/products/${id}`);
