import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router";
import { Box, Flex, Image, Text, Link } from "@local/components";
import { StarRating } from "../components/StarRating/StarRating";
import { Product } from "../interfaces/Product";
import { getProductById } from "../api/api";
import { COLORS } from "../variables";

// TODO: Add e2e tests for the product detail page
// TODO: Implement an icon library to use instead of a unicode back arrow symbol
const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id!);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    void fetchProduct();
  }, [id]);

  if (loading) return <Text>Loading product...</Text>;
  if (error) return <Text c="red">{error}</Text>;
  if (!product) return null;

  return (
    <Box>
      <Text span size="sm">
        <Link to="/products" component={RouterLink} c="inherit">
          ← Back to Products
        </Link>
      </Text>

      <Flex gap={32} mt={16} direction="column">
        <Flex align="center" justify="center" h={300} w={300}>
          <Image
            src={product.image}
            alt={product.title}
            fit="contain"
            h="100%"
            w="100%"
          />
        </Flex>

        <Flex direction="column">
          <Text size="xl" fw={700} mb={12}>
            {product.title}
          </Text>
          <Text size="lg" fw={700} mb={12}>
            ${product.price}
          </Text>
          <Flex align="center" gap={8} mb={16}>
            <StarRating rate={product.rating.rate} />
            <Text span size="sm" c={COLORS.textMuted}>
              ({product.rating.count} reviews)
            </Text>
          </Flex>
          <Text size="sm" c={COLORS.textSecondary}>
            {product.description}
          </Text>
          <Text size="xs" c={COLORS.textTertiary} mt={12} tt="capitalize">
            {product.category}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductDetailPage;
