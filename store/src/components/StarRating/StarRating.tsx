import React from "react";
import { Flex, Text } from "@local/components";

export interface StarRatingProps {
  rate: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rate }) => {
  const full = Math.floor(rate);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Text
        key={i}
        span
        c={i <= full ? "#f59f00" : "#dee2e6"}
        size="sm"
      >
        ★
      </Text>,
    );
  }
  return (
    <Flex align="center" gap={2}>
      <Text span c="#868e96" size="xs">{rate}</Text>
      <span>{stars}</span>
    </Flex>
  );
};

export default StarRating;
