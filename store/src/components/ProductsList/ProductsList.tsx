import React from "react";
import { Link as RouterLink } from "react-router";
import { SimpleGrid, Link } from "@local/components";
import { ProductListing } from "../ProductListing/ProductListing";
import { Product } from "../../interfaces/Product";

export interface ProductsListProps {
  products: Product[];
}

export const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          component={RouterLink}
          underline="never"
          c="inherit"
        >
          <ProductListing product={product} />
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default ProductsList;
