import React, { useEffect, useState } from "react";
import { Button } from "@local/components";
import { Product } from "./interfaces/Product";
import { getProductById, getProducts } from "./api/api";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null,
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        if (data.length > 0) {
          setSelectedProductId(data[0].id);
        }
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

  useEffect(() => {
    if (selectedProductId == null) {
      setSelectedProduct(null);
      return;
    }

    const fetchProduct = async () => {
      try {
        const product = await getProductById(selectedProductId);
        setSelectedProduct(product);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load product details",
        );
      }
    };

    void fetchProduct();
  }, [selectedProductId]);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Store App</h1>
      <p>Products loaded from the Fake Store API.</p>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}

      {!loading && !error && (
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          <div style={{ flex: 1, maxWidth: 320 }}>
            <h2>Products</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {products.map((product) => (
                <Button
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                >
                  {product.title}
                </Button>
              ))}
            </div>
          </div>

          <div style={{ flex: 2 }}>
            {selectedProduct ? (
              <>
                <h2>{selectedProduct.title}</h2>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  style={{ width: 220, height: 220, objectFit: "contain" }}
                />
                <p>
                  <strong>Price:</strong> ${selectedProduct.price}
                </p>
                <p>
                  <strong>Category:</strong> {selectedProduct.category}
                </p>
                <p>
                  <strong>Description:</strong> {selectedProduct.description}
                </p>
                <p>
                  <strong>Rating:</strong> {selectedProduct.rating.rate} / 5 (
                  {selectedProduct.rating.count} reviews)
                </p>
              </>
            ) : (
              <p>Select a product to view details.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
