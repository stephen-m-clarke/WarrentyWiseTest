import type { ProductCategory } from "./ProductCategory";
import type { ProductRating } from "./ProductRating";

export interface ProductApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: ProductRating;
}
