import React, { useEffect, useState } from "react";
import { Box, Text } from "@local/components";
import { ProductsList } from "../components/ProductsList/ProductsList";
import { Product } from "../interfaces/Product";
import { getProducts } from "../api/api";

// TODO: Add e2e tests for the products page
const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load products",
        );
      } finally {
        setLoading(false);
      }
    };

    void fetchProducts();
  }, []);

  return (
    <>
      {loading && <Text>Loading products...</Text>}
      {error && <Text c="red">{error}</Text>}
      {!loading && !error && <ProductsList products={products} />}
    </>
  );
};

export default ProductsPage;
