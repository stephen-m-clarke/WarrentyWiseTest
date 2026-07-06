import React from "react";
import { SimpleGrid } from "@local/components";
import { ProductListing } from "../ProductListing/ProductListing";
import { Product } from "../../interfaces/Product";

export interface ProductsListProps {
  products: Product[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
      {products.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsList;
