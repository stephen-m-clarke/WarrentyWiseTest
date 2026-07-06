import React, { useEffect, useState } from "react";
import { Box, Text } from "@local/components";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { Product } from "./interfaces/Product";
import { getProducts } from "./api/api";

const App = () => {
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
    <Box p="lg" maw={1200} mx="auto" ff="sans-serif">
      <h1>Store App</h1>

      {loading && <Text>Loading products...</Text>}
      {error && <Text c="red">{error}</Text>}

      {!loading && !error && <ProductsList products={products} />}
    </Box>
  );
};

export default App;
