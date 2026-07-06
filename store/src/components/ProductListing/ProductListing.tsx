import React from "react";
import { Flex, Text } from "@local/components";
import { StarRating } from "../StarRating/StarRating";
import { ProductListingImage } from "../ProductListingImage/ProductListingImage";
import { Product } from "../../interfaces/Product";

export interface ProductListingProps {
  product: Product;
}

export const ProductListing: React.FC<ProductListingProps> = ({ product }) => {
  return (
    <div>
      <ProductListingImage src={product.image} alt={product.title} />
      <div>
        <Text size="sm" fw={600} lineClamp={2} mb={8}>
          {product.title}
        </Text>
        <Flex align="center" gap={10} mt={8}>
          <Text size="md" fw={700}>
            ${product.price}
          </Text>
          <StarRating rate={product.rating.rate} />
        </Flex>
      </div>
    </div>
  );
};

export default ProductListing;
