import React, { useEffect, useMemo, useState } from "react";
import { TabGroup, Text, TextInput, Flex, Slider } from "@local/components";
import type { Tab } from "@local/components";
import { ProductsList } from "../components/ProductsList/ProductsList";
import { Product } from "../interfaces/Product";
import { getProducts } from "../api/api";

const CATEGORY_LABELS: Record<string, string> = {
  "men's clothing": "Men's Clothing",
  "women's clothing": "Women's Clothing",
  jewelery: "Jewelery",
  electronics: "Electronics",
};

// TODO: Add e2e tests for the products page
// TODO: Remember the selected tab when navigating back from ProductDetailPage (e.g. URL search params or session storage)
// TODO: Review and improve the tab labels for mobile resolutions
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

  const maxProductPrice = useMemo(
    () => Math.max(...products.map((p) => p.price), 0),
    [products],
  );

  const [maxPrice, setMaxPrice] = useState(maxProductPrice);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMaxPrice(maxProductPrice);
  }, [maxProductPrice]);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (p) =>
          p.price <= maxPrice &&
          p.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [products, maxPrice, searchQuery],
  );

  const tabs: Tab[] = useMemo(() => {
    const available = new Set(filteredProducts.map((p) => p.category));
    const categoryTabs = (
      ["men's clothing", "women's clothing", "jewelery", "electronics"] as const
    )
      .filter((c) => available.has(c))
      .map((category) => ({
        value: category,
        label: CATEGORY_LABELS[category],
        content: (
          <ProductsList
            products={filteredProducts.filter((p) => p.category === category)}
          />
        ),
      }));

    return [
      {
        value: "all",
        label: "All products",
        content: <ProductsList products={filteredProducts} />,
      },
      ...categoryTabs,
    ];
  }, [filteredProducts]);

  return (
    <>
      {loading && <Text>Loading products...</Text>}
      {error && <Text c="red">{error}</Text>}
      {!loading && !error && (
        <>
          <Flex gap="md" align="flex-start" mb="md" wrap="wrap">
            <TextInput
              label="Search"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
            />
            <Slider
              label="Max price"
              valuePrefix="$"
              value={maxPrice}
              onChange={setMaxPrice}
              min={0}
              max={maxProductPrice}
              step={1}
            />
          </Flex>
          <TabGroup defaultValue="all" tabs={tabs} />
        </>
      )}
    </>
  );
};

export default ProductsPage;
