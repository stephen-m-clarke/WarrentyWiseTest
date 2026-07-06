import React from "react";
import { Flex, Image } from "@local/components";

export interface ProductListingImageProps {
  src: string;
  alt: string;
}

export const ProductListingImage: React.FC<ProductListingImageProps> = ({ src, alt }) => {
  return (
    <Flex align="center" justify="center" h={200} p={16}>
      <Image src={src} alt={alt} fit="contain" h="100%" w="100%" />
    </Flex>
  );
};

export default ProductListingImage;
